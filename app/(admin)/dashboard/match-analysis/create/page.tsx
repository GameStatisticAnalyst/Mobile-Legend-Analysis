"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import Button from "@/components/ui/button";
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
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Checkbox from "@/components/ui/checkbox";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Slider from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import cn from "@/utils/cn";
import type { Team, Player, GameEvent, Hero } from "@/types/match-analysis";

export default function MatchAnalysisPage() {
  const [matchInfo, setMatchInfo] = useState({
    competitionId: "MDL_mid2024",
    dateId: new Date().toLocaleDateString(),
    matchId: "",
    round: "1",
    stage: "Group Stage",
  });
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

    // Jika pemain dari tim yang berbeda dipilih, set sebagai target
    if (selectedPlayer && selectedPlayer.teamId !== player.teamId) {
      setTargetPlayer(player);
      return;
    }

    // Jika pemain yang sama dipilih, reset selection
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

    const headers = [
      "Competition_id",
      "Date_id",
      "Match_id",
      "Round",
      "Stage",
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

      return [
        matchInfo.competitionId,
        matchInfo.dateId,
        matchInfo.matchId || `match_${Date.now()}`,
        matchInfo.round,
        matchInfo.stage,
        `${event.coordinates.x.toFixed(2)}%`,
        `${event.coordinates.y.toFixed(2)}%`,
        `${eventType} ${sourcePlayer?.hero.role || ""}`,
        eventType,
        sourcePlayer?.hero.role || "",
        sourcePlayer?.name || "",
        sourcePlayer?.hero.name || "",
        team.name,
        formatTime(event.timestamp),
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
                {/* Blue Team */}
                <Card
                  className={cn(
                    "lg:col-span-2 overflow-hidden",
                    darkMode
                      ? "border-blue-900 bg-gray-900"
                      : "border-blue-200 bg-white"
                  )}
                >
                  <CardHeader
                    className={cn(
                      "bg-gradient-to-r text-white rounded-t-lg py-3",
                      darkMode
                        ? "from-blue-700 to-blue-800"
                        : "from-blue-500 to-blue-600"
                    )}
                  >
                    <CardTitle className="flex items-center gap-2">
                      <Avatar className="h-8 w-8 border-2 border-white">
                        <AvatarImage
                          src={teamA.logo || "/placeholder.svg"}
                          alt={teamA.name}
                        />
                        <AvatarFallback>
                          {teamA.name.substring(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                      <span>{teamA.name}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    {!isEditMode && (
                      <div className="p-2 border-b dark:border-gray-800 flex flex-wrap gap-1 justify-center">
                        {/* Event Tools */}
                        {eventTypes.map((eventType) => (
                          <Button
                            key={eventType.id}
                            variant={
                              selectedEventType === eventType.id
                                ? "default"
                                : "outline"
                            }
                            size="sm"
                            className={cn(
                              "h-8 text-xs rounded-md dark:hover:bg-gray-800",
                              selectedEventType === eventType.id
                                ? darkMode
                                  ? "bg-blue-700"
                                  : "bg-blue-600"
                                : ""
                            )}
                            onClick={() => handleEventTypeSelect(eventType.id)}
                            disabled={
                              !selectedPlayer ||
                              selectedPlayer.teamId !== teamA.id
                            }
                          >
                            {eventType.name}
                          </Button>
                        ))}
                      </div>
                    )}

                    <div className="p-2 space-y-2">
                      {/* Player Tools */}
                      {teamA.players.map((player) => (
                        <div
                          key={player.id}
                          className={cn(
                            "flex items-center gap-3 p-2 rounded-lg transition-all",
                            isEditMode ? "cursor-default" : "cursor-pointer",
                            selectedPlayer?.id === player.id
                              ? darkMode
                                ? "bg-blue-900/50 ring-2 ring-blue-700"
                                : "bg-blue-100 ring-2 ring-blue-500"
                              : targetPlayer?.id === player.id
                              ? darkMode
                                ? "bg-purple-900/50 ring-2 ring-purple-700"
                                : "bg-purple-100 ring-2 ring-purple-500"
                              : darkMode
                              ? "hover:bg-gray-800"
                              : "hover:bg-gray-100"
                          )}
                          onClick={() =>
                            !isEditMode && handlePlayerSelect(player)
                          }
                        >
                          <div
                            className="relative h-12 w-12 rounded-full overflow-hidden border-2"
                            style={{ borderColor: player.color }}
                          >
                            <Avatar className="h-full w-full">
                              <AvatarImage
                                src={player.hero.image || "/placeholder.svg"}
                                alt={player.hero.name}
                              />
                              <AvatarFallback>
                                {player.hero.name.substring(0, 2)}
                              </AvatarFallback>
                            </Avatar>
                            {selectedPlayer?.id === player.id &&
                              !isEditMode && (
                                <div className="absolute inset-0 bg-blue-500/30 flex items-center justify-center">
                                  <Checkbox checked />
                                </div>
                              )}
                          </div>

                          <div className="flex-1">
                            {isEditMode && editingPlayer?.id === player.id ? (
                              <div className="flex items-center gap-2">
                                <Input
                                  value={editingName}
                                  onChange={(e) =>
                                    setEditingName(e.target.value)
                                  }
                                  className="h-8 text-sm"
                                />
                                <Button
                                  size="icon"
                                  variant="ghost"
                                  className="h-8 w-8"
                                  onClick={savePlayerEdit}
                                >
                                  <Check className="h-4 w-4" />
                                </Button>
                              </div>
                            ) : (
                              <div className="font-medium flex items-center justify-between">
                                <span>{player.name}</span>
                                {isEditMode && (
                                  <Button
                                    size="icon"
                                    variant="ghost"
                                    className="h-6 w-6"
                                    onClick={() => handlePlayerSelect(player)}
                                  >
                                    <Edit className="h-3 w-3" />
                                  </Button>
                                )}
                              </div>
                            )}

                            <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
                              {isEditMode ? (
                                <div className="flex items-center gap-2 w-full">
                                  <HeroSelect
                                    player={player}
                                    updateHero={updatePlayerHero}
                                  />
                                  <RoleSelect
                                    player={player}
                                    updateRole={(role) => {
                                      const updatedHero = {
                                        ...player.hero,
                                        role,
                                      };
                                      updatePlayerHero(player, updatedHero);
                                    }}
                                  />
                                </div>
                              ) : (
                                <>
                                  <span>{player.hero.name}</span>
                                  <Badge variant="outline" className="text-xs">
                                    {player.hero.role}
                                  </Badge>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
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
                <Card
                  className={cn(
                    "lg:col-span-2 overflow-hidden",
                    darkMode
                      ? "border-red-900 bg-gray-900"
                      : "border-red-200 bg-white"
                  )}
                >
                  <CardHeader
                    className={cn(
                      "bg-gradient-to-r text-white rounded-t-lg py-3",
                      darkMode
                        ? "from-red-700 to-red-800"
                        : "from-red-500 to-red-600"
                    )}
                  >
                    <CardTitle className="flex items-center gap-2">
                      <Avatar className="h-8 w-8 border-2 border-white">
                        <AvatarImage
                          src={teamB.logo || "/placeholder.svg"}
                          alt={teamB.name}
                        />
                        <AvatarFallback>
                          {teamB.name.substring(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                      <span>{teamB.name}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    {!isEditMode && (
                      <div className="p-2 border-b dark:border-gray-800  flex flex-wrap gap-1 justify-center">
                        {/* Event Tools */}
                        {eventTypes.map((eventType) => (
                          <Button
                            key={eventType.id}
                            variant={
                              selectedEventType === eventType.id
                                ? "default"
                                : "outline"
                            }
                            size="sm"
                            className={cn(
                              "h-8 text-xs rounded-md dark:hover:bg-gray-800",
                              selectedEventType === eventType.id
                                ? darkMode
                                  ? "bg-red-700"
                                  : "bg-red-600"
                                : ""
                            )}
                            onClick={() => handleEventTypeSelect(eventType.id)}
                            disabled={
                              !selectedPlayer ||
                              selectedPlayer.teamId !== teamB.id
                            }
                          >
                            {eventType.name}
                          </Button>
                        ))}
                      </div>
                    )}

                    <div className="p-2 space-y-2">
                      {/* Player Tools */}
                      {teamB.players.map((player) => (
                        <div
                          key={player.id}
                          className={cn(
                            "flex items-center gap-3 p-2 rounded-lg transition-all",
                            isEditMode ? "cursor-default" : "cursor-pointer",
                            selectedPlayer?.id === player.id
                              ? darkMode
                                ? "bg-red-900/50 ring-2 ring-red-700"
                                : "bg-red-100 ring-2 ring-red-500"
                              : targetPlayer?.id === player.id
                              ? darkMode
                                ? "bg-purple-900/50 ring-2 ring-purple-700"
                                : "bg-purple-100 ring-2 ring-purple-500"
                              : darkMode
                              ? "hover:bg-gray-800"
                              : "hover:bg-gray-100"
                          )}
                          onClick={() => {
                            if (isEditMode) {
                              handlePlayerSelect(player);
                            } else {
                              selectedPlayer &&
                              selectedPlayer.teamId !== player.teamId
                                ? handleTargetPlayerSelect(player)
                                : handlePlayerSelect(player);
                            }
                          }}
                        >
                          <div
                            className="relative h-12 w-12 rounded-full overflow-hidden border-2"
                            style={{ borderColor: player.color }}
                          >
                            <Avatar className="h-full w-full">
                              <AvatarImage
                                src={player.hero.image || "/placeholder.svg"}
                                alt={player.hero.name}
                              />
                              <AvatarFallback>
                                {player.hero.name.substring(0, 2)}
                              </AvatarFallback>
                            </Avatar>
                            {selectedPlayer?.id === player.id &&
                              !isEditMode && (
                                <div className="absolute inset-0 bg-red-500/30 flex items-center justify-center">
                                  <Checkbox checked />
                                </div>
                              )}
                            {targetPlayer?.id === player.id && !isEditMode && (
                              <div className="absolute inset-0 bg-purple-500/30 flex items-center justify-center">
                                <Checkbox checked />
                              </div>
                            )}
                          </div>

                          <div className="flex-1">
                            {isEditMode && editingPlayer?.id === player.id ? (
                              <div className="flex items-center gap-2">
                                <Input
                                  value={editingName}
                                  onChange={(e) =>
                                    setEditingName(e.target.value)
                                  }
                                  className="h-8 text-sm"
                                />
                                <Button
                                  size="icon"
                                  variant="ghost"
                                  className="h-8 w-8"
                                  onClick={savePlayerEdit}
                                >
                                  <Check className="h-4 w-4" />
                                </Button>
                              </div>
                            ) : (
                              <div className="font-medium flex items-center justify-between">
                                <span>{player.name}</span>
                                {isEditMode && (
                                  <Button
                                    size="icon"
                                    variant="ghost"
                                    className="h-6 w-6"
                                    onClick={() => handlePlayerSelect(player)}
                                  >
                                    <Edit className="h-3 w-3" />
                                  </Button>
                                )}
                              </div>
                            )}

                            <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
                              {isEditMode ? (
                                <div className="flex items-center gap-2 w-full">
                                  <HeroSelect
                                    player={player}
                                    updateHero={updatePlayerHero}
                                  />
                                  <RoleSelect
                                    player={player}
                                    updateRole={(role) => {
                                      const updatedHero = {
                                        ...player.hero,
                                        role,
                                      };
                                      updatePlayerHero(player, updatedHero);
                                    }}
                                  />
                                </div>
                              ) : (
                                <>
                                  <span>{player.hero.name}</span>
                                  <Badge variant="outline" className="text-xs">
                                    {player.hero.role}
                                  </Badge>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-7 gap-6">
                <Card
                  className={cn(
                    "lg:col-span-2",
                    darkMode ? "bg-gray-900 border-gray-800" : "bg-white"
                  )}
                >
                  <CardHeader
                    className={cn(
                      "bg-gradient-to-r text-white rounded-t-lg py-3",
                      darkMode
                        ? "from-blue-700 to-blue-800"
                        : "from-blue-500 to-blue-600"
                    )}
                  >
                    <CardTitle className="text-center text-sm">
                      Status {teamA.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[100px]">Time</TableHead>
                          <TableHead>Event</TableHead>
                          <TableHead>Player</TableHead>
                          <TableHead>Target</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {getTeamEvents(teamA.id).map((event) => {
                          const sourcePlayer = [
                            ...teamA.players,
                            ...teamB.players,
                          ].find((p) => p.id === event.sourcePlayerId);
                          const targetPlayer = event.targetPlayerId
                            ? [...teamA.players, ...teamB.players].find(
                                (p) => p.id === event.targetPlayerId
                              )
                            : null;
                          const eventType = eventTypes.find(
                            (t) => t.id === event.type
                          );

                          return (
                            <TableRow key={event.id}>
                              <TableCell className="font-mono">
                                {formatTime(event.timestamp)}
                              </TableCell>
                              <TableCell>{eventType?.name}</TableCell>
                              <TableCell>
                                <div className="flex items-center gap-2">
                                  <div
                                    className="h-2 w-2 rounded-full"
                                    style={{
                                      backgroundColor: sourcePlayer?.color,
                                    }}
                                  ></div>
                                  {sourcePlayer?.name}
                                </div>
                              </TableCell>
                              <TableCell>
                                {targetPlayer && (
                                  <div className="flex items-center gap-2">
                                    <div
                                      className="h-2 w-2 rounded-full"
                                      style={{
                                        backgroundColor: targetPlayer?.color,
                                      }}
                                    ></div>
                                    {targetPlayer?.name}
                                  </div>
                                )}
                              </TableCell>
                            </TableRow>
                          );
                        })}
                        {getTeamEvents(teamA.id).length === 0 && (
                          <TableRow>
                            <TableCell
                              colSpan={4}
                              className="text-center py-4 text-gray-500"
                            >
                              No events recorded
                            </TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </CardContent>
                  <div className="p-3 border-t dark:border-gray-800">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full rounded-full dark:hover:bg-gray-800"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Export Data
                    </Button>
                  </div>
                </Card>

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

                <Card
                  className={cn(
                    "lg:col-span-2",
                    darkMode ? "bg-gray-900 border-gray-800" : "bg-white"
                  )}
                >
                  <CardHeader
                    className={cn(
                      "bg-gradient-to-r text-white rounded-t-lg py-3",
                      darkMode
                        ? "from-red-700 to-red-800"
                        : "from-red-500 to-red-600"
                    )}
                  >
                    <CardTitle className="text-center text-sm">
                      Status {teamB.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[100px]">Time</TableHead>
                          <TableHead>Event</TableHead>
                          <TableHead>Player</TableHead>
                          <TableHead>Target</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {getTeamEvents(teamB.id).map((event) => {
                          const sourcePlayer = [
                            ...teamA.players,
                            ...teamB.players,
                          ].find((p) => p.id === event.sourcePlayerId);
                          const targetPlayer = event.targetPlayerId
                            ? [...teamA.players, ...teamB.players].find(
                                (p) => p.id === event.targetPlayerId
                              )
                            : null;
                          const eventType = eventTypes.find(
                            (t) => t.id === event.type
                          );

                          return (
                            <TableRow key={event.id}>
                              <TableCell className="font-mono">
                                {formatTime(event.timestamp)}
                              </TableCell>
                              <TableCell>{eventType?.name}</TableCell>
                              <TableCell>
                                <div className="flex items-center gap-2">
                                  <div
                                    className="h-2 w-2 rounded-full"
                                    style={{
                                      backgroundColor: sourcePlayer?.color,
                                    }}
                                  ></div>
                                  {sourcePlayer?.name}
                                </div>
                              </TableCell>
                              <TableCell>
                                {targetPlayer && (
                                  <div className="flex items-center gap-2">
                                    <div
                                      className="h-2 w-2 rounded-full"
                                      style={{
                                        backgroundColor: targetPlayer?.color,
                                      }}
                                    ></div>
                                    {targetPlayer?.name}
                                  </div>
                                )}
                              </TableCell>
                            </TableRow>
                          );
                        })}
                        {getTeamEvents(teamB.id).length === 0 && (
                          <TableRow>
                            <TableCell
                              colSpan={4}
                              className="text-center py-4 text-gray-500"
                            >
                              No events recorded
                            </TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </CardContent>
                  <div className="p-3 border-t dark:border-gray-800">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full rounded-full dark:hover:bg-gray-800"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Export Data
                    </Button>
                  </div>
                </Card>
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
                      id="match-title"
                      placeholder="Enter match title"
                      className={darkMode ? "bg-gray-800 border-gray-700" : ""}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="match-date">Match Date</Label>
                    <Input
                      id="match-date"
                      type="date"
                      className={darkMode ? "bg-gray-800 border-gray-700" : ""}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="tournament">Tournament</Label>
                    <Input
                      id="tournament"
                      placeholder="Enter tournament name"
                      className={darkMode ? "bg-gray-800 border-gray-700" : ""}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="tags">Tags</Label>
                    <Input
                      id="tags"
                      placeholder="Enter tags separated by commas"
                      className={darkMode ? "bg-gray-800 border-gray-700" : ""}
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

// Hero Selection Component
function HeroSelect({
  player,
  updateHero,
}: {
  player: Player;
  updateHero: (player: Player, hero: Hero) => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between h-8 text-xs"
        >
          {player.hero.name}
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search hero..." />
          <CommandEmpty>No hero found.</CommandEmpty>
          <CommandGroup>
            <CommandList>
              {sampleHeroes.map((hero) => (
                <CommandItem
                  key={hero.id}
                  onSelect={() => {
                    updateHero(player, hero); // Pastikan fungsi ini dipanggil
                    setOpen(false); // Tutup popover setelah memilih
                  }}
                  className="text-sm"
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      player.hero.id === hero.id ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {hero.name}
                </CommandItem>
              ))}
            </CommandList>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

// Role Selection Component
function RoleSelect({
  player,
  updateRole,
}: {
  player: Player;
  updateRole: (role: string) => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between h-8 text-xs"
        >
          {player.hero.role}
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandList>
            {roles.map((role) => (
              <CommandItem
                key={role.id}
                onSelect={() => {
                  updateRole(role.name);
                  setOpen(false);
                }}
                className="text-sm"
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    player.hero.role === role.name ? "opacity-100" : "opacity-0"
                  )}
                />
                {role.name}
              </CommandItem>
            ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
