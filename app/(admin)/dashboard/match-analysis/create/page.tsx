"use client";

import type React from "react";
import { useState, useRef, useEffect  , useReducer } from "react";
import Button from "@/components/ui/button";
import TeamCard from "./teamCard";
import TeamStatusCard from "./tableCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialogFooter,
  AlertDialogAction,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";
import Input from "@/components/ui/input";
import Label from "@/components/ui/label";
import {
  Settings,
  Play,
  SkipBack,
  SkipForward,
  Pause,
  Download,
  ArrowLeft,
  Edit,
  Save,
  ChevronDown,
  Check,
} from "lucide-react";
import Link from "next/link";
import {
  eventTypes,
  initialTeamA,
  initialTeamB,
  sampleHeroes,
  roles,
} from "../placeholder";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Slider from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import cn from "@/utils/cn";
import type { Team, Player, GameEvent, Hero } from "@/types/match-analysis";

const initialMatchInfo = {
  competitionId: "",
  title: "",
  tournament: "",
  round: "",
  dateId: new Date().toLocaleDateString(),
  stage: "",
  tags: "",
  matchId: "",
};

function matchInfoReducer(
  state: typeof initialMatchInfo,
  action: { type: string; payload?: any }
) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      };
    case "RESET":
      return initialMatchInfo;
    default:
      return state;
  }
}

export default function MatchAnalysisPage() {
  const [matchInfo, dispatchMatchInfo] = useReducer(
    matchInfoReducer,
    initialMatchInfo
  );

  const [teamA, setTeamA] = useState<Team>(initialTeamA);
  const [teamB, setTeamB] = useState<Team>(initialTeamB);
  const [events, setEvents] = useState<GameEvent[]>([]);
  const [videoUrl, setVideoUrl] = useState<string>("");
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  const [selectedEventType, setSelectedEventType] = useState<string | null>(
    null
  );
  const [targetPlayer, setTargetPlayer] = useState<Player | null>(null);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [editingPlayer, setEditingPlayer] = useState<Player | null>(null);
  const [editingName, setEditingName] = useState<string>("");
  const [videoProgress, setVideoProgress] = useState<number>(0);
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>("analysis");

  const mapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLIFrameElement>(null);

  const handlePlayerSelect = (player: Player) => {
    if (isEditMode) {
      setEditingPlayer(player);
      setEditingName(player.name);
      return;
    }

    if (selectedPlayer && selectedPlayer.teamId !== player.teamId) {
      setTargetPlayer(player);
      return;
    }

    if (selectedPlayer?.id === player.id) {
      setSelectedPlayer(null);
      setTargetPlayer(null);
    } else {
      setSelectedPlayer(player);
      setTargetPlayer(null);
    }
  };

  const handleEventTypeSelect = (eventTypeId: string) => {
    setSelectedEventType(
      eventTypeId === selectedEventType ? null : eventTypeId
    );
  };

  const handleTargetPlayerSelect = (player: Player) => {
    // Cegah pemain dari tim yang sama untuk saling menargetkan
    if (
      player.teamId === selectedPlayer?.teamId &&
      (selectedEventType === "kill" || selectedEventType === "assist")
    ) {
      return;
    }

    // Set target player
    setTargetPlayer(player);
  };

  const handleMapClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (
      !selectedPlayer ||
      !selectedEventType ||
      (["kill", "assist"].includes(selectedEventType || "") && !targetPlayer)
    ) {
      return;
    }

    const rect = mapRef.current?.getBoundingClientRect();
    if (!rect) return;

    // Hitung koordinat klik
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    // Buat event baru
    const newEvent: GameEvent = {
      id: `event-${Date.now()}`,
      type: selectedEventType,
      sourcePlayerId: selectedPlayer.id,
      targetPlayerId: targetPlayer?.id,
      timestamp: currentTime,
      coordinates: { x, y },
    };

    // Tambahkan event ke state
    setEvents([...events, newEvent]);

    // Reset state
    setSelectedPlayer(null);
    setSelectedEventType(null);
    setTargetPlayer(null);
  };

  const updatePlayerHero = (player: Player, hero: Hero) => {
    if (player.teamId === teamA.id) {
      setTeamA({
        ...teamA,
        players: teamA.players.map((p) =>
          p.id === player.id ? { ...p, hero } : p
        ),
      });
    } else {
      setTeamB({
        ...teamB,
        players: teamB.players.map((p) =>
          p.id === player.id ? { ...p, hero } : p
        ),
      });
    }
  };

  const updatePlayerName = (player: Player, name: string) => {
    if (player.teamId === teamA.id) {
      setTeamA({
        ...teamA,
        players: teamA.players.map((p) =>
          p.id === player.id ? { ...p, name } : p
        ),
      });
    } else {
      setTeamB({
        ...teamB,
        players: teamB.players.map((p) =>
          p.id === player.id ? { ...p, name } : p
        ),
      });
    }
  };

  const handleVideoUpdate = (url: string) => {
    setVideoUrl(url);
  };

  const getYouTubeEmbedUrl = (url: string) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11
      ? `https://www.youtube.com/embed/${match[2]}`
      : "";
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const getTeamEvents = (teamId: string) => {
    return events.filter((event) => {
      const player = [...teamA.players, ...teamB.players].find(
        (p) => p.id === event.sourcePlayerId
      );
      return player?.teamId === teamId;
    });
  };

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
    if (isEditMode) {
      setEditingPlayer(null);
    }
  };

  const savePlayerEdit = () => {
    if (editingPlayer && editingName.trim()) {
      updatePlayerName(editingPlayer, editingName);
      setEditingPlayer(null);
    }
  };

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentTime((prev) => prev + 1);
        setVideoProgress((prev) => Math.min(prev + 0.5, 100));
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const exportToCSV = (teamId: string) => {
    const teamEvents = getTeamEvents(teamId);
    if (teamEvents.length === 0) return;

    const team = teamId === teamA.id ? teamA : teamB;

    // 17 header
    const headers = [
      "Competition_id",
      "Title",
      "Tournament",
      "Round",
      "Date_id",
      "Stage",
      "Tags",
      "Match_id",
      "Coordinates x",
      "Coordinates y",
      "Event",
      "Event-Game",
      "Event-player",
      "Id_played",
      "Hero",
      "Team",
      "Time",
    ];

    const rows = teamEvents.map((event) => {
      const sourcePlayer = [...teamA.players, ...teamB.players].find(
        (p) => p.id === event.sourcePlayerId
      );
      const eventType = eventTypes.find((t) => t.id === event.type)?.name || "";

      //
      return [
        matchInfo.competitionId || "",
        matchInfo.title || "",
        matchInfo.tournament || "",
        matchInfo.round || "",
        matchInfo.dateId || "",
        matchInfo.stage || "",
        matchInfo.tags || "",
        matchInfo.matchId || `match_${Date.now()} `,
        `${event.coordinates.x.toFixed(2)}% `,
        `${event.coordinates.y.toFixed(2)}%`,
        `${eventType} ${sourcePlayer?.hero.role || ""}`,
        eventType,
        sourcePlayer?.hero.role || "",
        sourcePlayer?.name || "",
        sourcePlayer?.hero.name || "",
        team.name || "",
        formatTime(event.timestamp) || "",
      ];
    });

    const csvContent = [
      headers.join(","),
      ...rows.map((row) => row.join(",")),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `${team.name}_events.csv`);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleMatchSettings = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    dispatchMatchInfo({
      type: "UPDATE_FIELD",
      payload: { field: id, value },
    });
  };

  return (
    <div
      className={cn(
        "min-h-screen transition-colors duration-300",
        darkMode ? "bg-gray-950 text-gray-100" : "bg-gray-50 text-gray-900"
      )}
    >
      <div className="container mx-auto py-6 space-y-6">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="rounded-full"
              >
                <Link href="/match-analysis">
                  <ArrowLeft className="h-5 w-5 dark:text-white" />
                </Link>
              </Button>
              <h1
                className={cn(
                  "text-3xl font-bold whitespace-nowrap",
                  darkMode
                    ? "bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
                    : "bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
                )}
              >
                Match Analysis
              </h1>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <span className="text-sm font-normal whitespace-nowrap">
                  Dark Mode
                </span>
                <Switch checked={darkMode} onCheckedChange={setDarkMode} />
              </div>
              {isEditMode ? (
                <Button
                  onClick={toggleEditMode}
                  className={cn(
                    "rounded-full",
                    darkMode
                      ? "bg-green-500 hover:bg-green-600"
                      : "bg-green-600 hover:bg-green-700"
                  )}
                >
                  <Save className="h-4 w-4 mr-2" />
                  Done Editing
                </Button>
              ) : (
                <Button
                  onClick={toggleEditMode}
                  variant="outline"
                  className="rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Teams
                </Button>
              )}
              <Button
                variant="outline"
                className="rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                Save Draft
              </Button>
              <Button
                className={cn(
                  "rounded-full",
                  darkMode
                    ? "bg-gradient-to-r from-blue-500 to-purple-500"
                    : "bg-gradient-to-r from-blue-600 to-purple-600"
                )}
              >
                Publish Analysis
              </Button>
            </div>
          </div>
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="analysis">Analysis</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
            <TabsContent value="analysis" className="mt-6 space-y-6 ">
              <div className="grid grid-cols-1 lg:grid-cols-7 gap-6">
                <TeamCard
                  team={teamA}
                  darkMode={darkMode}
                  isEditMode={isEditMode}
                  selectedPlayer={selectedPlayer}
                  targetPlayer={targetPlayer}
                  selectedEventType={selectedEventType}
                  eventTypes={eventTypes}
                  handlePlayerSelect={handlePlayerSelect}
                  handleEventTypeSelect={handleEventTypeSelect}
                  handleTargetPlayerSelect={handleTargetPlayerSelect}
                  updatePlayerHero={updatePlayerHero}
                  updateRole={(player, role) => {
                    const updatedHero = { ...player.hero, role };
                    updatePlayerHero(player, updatedHero);
                  }}
                  editingPlayer={editingPlayer}
                  editingName={editingName}
                  setEditingName={setEditingName}
                  savePlayerEdit={savePlayerEdit}
                />
                {/* Video */}
                <Card
                  className={cn(
                    "lg:col-span-3",
                    darkMode ? "bg-gray-900 border-gray-800" : "bg-white"
                  )}
                >
                  <CardContent className="p-4 flex flex-col items-center">
                    <div className="w-full aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden mb-4">
                      {videoUrl ? (
                        <iframe
                          ref={videoRef}
                          src={getYouTubeEmbedUrl(videoUrl)}
                          className="w-full h-full"
                          allowFullScreen
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        ></iframe>
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <Button
                                variant="outline"
                                className="gap-2 rounded-full"
                              >
                                <Settings className="h-4 w-4" />
                                Add Video Source
                              </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent
                              className={
                                darkMode ? "bg-gray-900 border-gray-800" : ""
                              }
                            >
                              <AlertDialogHeader>
                                <AlertDialogTitle>
                                  Video Settings
                                </AlertDialogTitle>
                              </AlertDialogHeader>
                              <div className="space-y-4 py-4">
                                <div className="space-y-2">
                                  <Label htmlFor="video-url">
                                    YouTube Video URL
                                  </Label>
                                  <Input
                                    id="video-url"
                                    placeholder="https://www.youtube.com/watch?v=..."
                                    value={videoUrl}
                                    onChange={(e) =>
                                      setVideoUrl(e.target.value)
                                    }
                                    className={
                                      darkMode
                                        ? "bg-gray-800 border-gray-700"
                                        : ""
                                    }
                                  />
                                </div>
                                <AlertDialogFooter>
                                  <AlertDialogCancel
                                    className={
                                      darkMode
                                        ? "bg-gray-800 hover:bg-gray-700"
                                        : ""
                                    }
                                  >
                                    Cancel
                                  </AlertDialogCancel>
                                  <AlertDialogAction
                                    className={cn(
                                      "rounded-full",
                                      darkMode
                                        ? "bg-gradient-to-r from-blue-500 to-purple-500"
                                        : "bg-gradient-to-r from-blue-600 to-purple-600"
                                    )}
                                    onClick={() => handleVideoUpdate(videoUrl)}
                                  >
                                    Apply Settings
                                  </AlertDialogAction>
                                </AlertDialogFooter>
                              </div>
                            </AlertDialogContent>
                          </AlertDialog>
                        </div>
                      )}
                    </div>

                    <div className="w-full mb-2">
                      <Slider
                        value={[videoProgress]}
                        max={100}
                        step={0.1}
                        className={darkMode ? "bg-gray-800" : ""}
                        onValueChange={(value) => {
                          setVideoProgress(value[0]);
                          setCurrentTime((value[0] / 100) * 300);
                        }}
                      />
                    </div>

                    <div className="w-full flex flex-col items-center gap-2">
                      <div className="text-2xl font-mono">
                        {formatTime(currentTime)}
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="rounded-full"
                        >
                          <SkipBack className="h-4 w-4" />
                        </Button>
                        <Button
                          className={cn(
                            "rounded-full",
                            darkMode
                              ? "bg-gradient-to-r from-blue-500 to-purple-500"
                              : "bg-gradient-to-r from-blue-600 to-purple-600"
                          )}
                          size="icon"
                          onClick={() => setIsPlaying(!isPlaying)}
                        >
                          {isPlaying ? (
                            <Pause className="h-4 w-4" />
                          ) : (
                            <Play className="h-4 w-4" />
                          )}
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          className="rounded-full"
                        >
                          <SkipForward className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                {/* Red Team */}
                <TeamCard
                  team={teamB}
                  darkMode={darkMode}
                  isEditMode={isEditMode}
                  selectedPlayer={selectedPlayer}
                  targetPlayer={targetPlayer}
                  selectedEventType={selectedEventType}
                  eventTypes={eventTypes}
                  handlePlayerSelect={handlePlayerSelect}
                  handleEventTypeSelect={handleEventTypeSelect}
                  handleTargetPlayerSelect={handleTargetPlayerSelect}
                  updatePlayerHero={updatePlayerHero}
                  updateRole={(player, role) => {
                    const updatedHero = { ...player.hero, role };
                    updatePlayerHero(player, updatedHero);
                  }}
                  editingPlayer={editingPlayer}
                  editingName={editingName}
                  setEditingName={setEditingName}
                  savePlayerEdit={savePlayerEdit}
                />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-7 gap-6">
                <TeamStatusCard
                  team={teamA}
                  darkMode={darkMode}
                  getTeamEvents={getTeamEvents}
                  exportToCSV={exportToCSV}
                  eventTypes={eventTypes}
                  players={[...teamA.players, ...teamB.players]}
                />

                <Card
                  className={cn(
                    "lg:col-span-3",
                    darkMode ? "bg-gray-900 border-gray-800" : "bg-white"
                  )}
                >
                  <CardContent className="p-4">
                    <div
                      ref={mapRef}
                      className="relative w-full aspect-square bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden cursor-crosshair"
                      onClick={handleMapClick}
                      style={{
                        backgroundImage: "url('/images/map_ml.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      {events.map((event) => {
                        const player = [
                          ...teamA.players,
                          ...teamB.players,
                        ].find((p) => p.id === event.sourcePlayerId);
                        return (
                          <div
                            key={event.id}
                            className="absolute h-3 w-3 rounded-full transform -translate-x-1/2 -translate-y-1/2"
                            style={{
                              left: `${event.coordinates.x}%`,
                              top: `${event.coordinates.y}%`,
                              backgroundColor: player?.color || "#000",
                            }}
                            title={`${player?.name} - ${
                              eventTypes.find((t) => t.id === event.type)?.name
                            } - ${formatTime(event.timestamp)}`}
                          ></div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>

                <TeamStatusCard
                  team={teamB}
                  darkMode={darkMode}
                  getTeamEvents={getTeamEvents}
                  exportToCSV={exportToCSV}
                  eventTypes={eventTypes}
                  players={[...teamA.players, ...teamB.players]}
                />
              </div>

              <Card
                className={cn(
                  "border-blue-200 dark:border-blue-800",
                  darkMode ? "bg-blue-950/20" : "bg-blue-50"
                )}
              >
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">
                    How to use the analysis tool:
                  </h3>
                  <ol className="list-decimal list-inside space-y-1 text-sm">
                    <li>
                      Select a player from either team (they will be
                      highlighted)
                    </li>
                    <li>Choose an event type from the tools above the team</li>
                    <li>
                      For kill or assist events, select a target player from the
                      opposing team
                    </li>
                    <li>Click on the map where the event occurred</li>
                    <li>
                      The event will be recorded in the team's status table
                    </li>
                  </ol>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="settings" className="mt-6 space-y-6">
              <Card
                className={
                  darkMode ? "bg-gray-900 border-gray-800" : "bg-white"
                }
              >
                <CardHeader>
                  <CardTitle>Match Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 p-4">
                  <div className="space-y-2">
                    <Label htmlFor="match-title">Match Title</Label>
                    <Input
                      id="title"
                      value={matchInfo.title || ""}
                      onChange={(e) => handleMatchSettings(e)}
                      placeholder="Enter match title"
                      className={darkMode ? "bg-gray-800 border-gray-700" : ""}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="match-date">Match Date</Label>
                    <Input
                      id="matchDate"
                      value={matchInfo.matchDate || ""}
                      onChange={(e) => handleMatchSettings(e)}
                      className={darkMode ? "bg-gray-800 border-gray-700" : ""}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="tournament">Tournament</Label>
                    <Input
                      id="tournament"
                      value={matchInfo.tournament || ""}
                      onChange={(e) => handleMatchSettings(e)}
                      placeholder="Enter tournament name"
                      className={darkMode ? "bg-gray-800 border-gray-700" : ""}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="tags">Tags</Label>
                    <Input
                      id="tags"
                      value={matchInfo["tags"] || ""}
                      onChange={(e) => handleMatchSettings(e)}
                      placeholder="Enter tags separated by commas"
                      className={darkMode ? "bg-gray-800 border-gray-700" : ""}
                    />
                  </div>
                  <Button
                    variant="outline"
                    onClick={() => dispatchMatchInfo({ type: "RESET" })}
                    className="rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
                  >
                    Reset Match Info
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
