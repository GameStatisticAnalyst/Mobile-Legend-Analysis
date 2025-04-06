"use client";

import type React from "react";

import { useState, useRef } from "react";
import Button from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
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
import Avatar from "@/components/ui/avatar";
import {
  Settings,
  Play,
  SkipBack,
  SkipForward,
  Pause,
  Download,
} from "lucide-react";
import type {
  Team,
  Player,
  GameEvent,
  EventType,
  Role,
} from "@/types/match-analysis";
import {
  eventTypes,
  roles,
  sampleHeroes,
  initialTeamA,
  initialTeamB,
} from "./placeholderData";

export default function MatchAnalysisPage({
  params,
}: {
  params: { id: string };
}) {
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
  const mapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLIFrameElement>(null);

  // Function to handle player selection
  const handlePlayerSelect = (player: Player) => {
    if (selectedPlayer?.id === player.id) {
      setSelectedPlayer(null);
    } else {
      setSelectedPlayer(player);
      setTargetPlayer(null);
    }
  };

  // Function to handle event type selection
  const handleEventTypeSelect = (eventTypeId: string) => {
    setSelectedEventType(
      eventTypeId === selectedEventType ? null : eventTypeId
    );
  };

  // Function to handle target player selection
  const handleTargetPlayerSelect = (player: Player) => {
    if (
      player.teamId === selectedPlayer?.teamId &&
      (selectedEventType === "kill" || selectedEventType === "assist")
    ) {
      return; // Can't kill or assist teammates
    }
    setTargetPlayer(player);
  };

  // Function to handle map click
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

    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    const newEvent: GameEvent = {
      id: `event-${Date.now()}`,
      type: selectedEventType,
      sourcePlayerId: selectedPlayer.id,
      targetPlayerId: targetPlayer?.id,
      timestamp: currentTime,
      coordinates: { x, y },
    };

    setEvents([...events, newEvent]);
    setSelectedPlayer(null);
    setSelectedEventType(null);
    setTargetPlayer(null);
  };

  // Function to handle video settings update
  const handleVideoUpdate = (url: string) => {
    setVideoUrl(url);
  };

  // Function to extract YouTube video ID
  const getYouTubeEmbedUrl = (url: string) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11
      ? `https://www.youtube.com/embed/${match[2]}`
      : "";
  };

  // Function to format time (seconds to MM:SS)
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  // Get events for a specific team
  const getTeamEvents = (teamId: string) => {
    return events.filter((event) => {
      const player = [...teamA.players, ...teamB.players].find(
        (p) => p.id === event.sourcePlayerId
      );
      return player?.teamId === teamId;
    });
  };

  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Match Analysis
        </h1>
        <div className="flex gap-2">
          <Button variant="outline">Save Draft</Button>
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600">
            Publish Analysis
          </Button>
        </div>
      </div>

      {/* Teams and Video Section */}
      <div className="grid grid-cols-1 lg:grid-cols-7 gap-6">
        {/* Team A */}
        <Card className="lg:col-span-2 border-blue-200 dark:border-blue-900">
          <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-t-lg">
            <CardTitle className="flex items-center gap-2">
              <Avatar
                className="h-8 w-8 border-2 border-white"
                src={teamA.logo}
                alt={teamA.name}
                fallback={teamA.name.substring(0, 2)}
              />
              <span>{teamA.name}</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <div className="space-y-3">
              {teamA.players.map((player) => (
                <div
                  key={player.id}
                  className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-all ${
                    selectedPlayer?.id === player.id
                      ? "bg-blue-100 dark:bg-blue-900/50 ring-2 ring-blue-500"
                      : "hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                  onClick={() => handlePlayerSelect(player)}
                >
                  <div
                    className="relative h-12 w-12 rounded-full overflow-hidden border-2"
                    style={{ borderColor: player.color }}
                  >
                    <Avatar
                      className="h-full w-full"
                      src={player.hero.image}
                      alt={player.hero.name}
                      fallback={player.hero.name.substring(0, 2)}
                    />
                    {selectedPlayer?.id === player.id && (
                      <div className="absolute inset-0 bg-blue-500/30 flex items-center justify-center">
                        <Checkbox checked className="h-5 w-5" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">{player.name}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
                      <span>{player.hero.name}</span>
                      <Badge variant="outline" className="text-xs">
                        {player.hero.role}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Video Player */}
        <Card className="lg:col-span-3">
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
                      <Button variant="outline" className="gap-2">
                        <Settings className="h-4 w-4" />
                        Add Video Source
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Video Settings</AlertDialogTitle>
                      </AlertDialogHeader>
                      <div className="space-y-4 py-4">
                        <div className="space-y-2">
                          <Label htmlFor="video-url">YouTube Video URL</Label>
                          <Input
                            id="video-url"
                            placeholder="https://www.youtube.com/watch?v=..."
                            value={videoUrl}
                            onChange={(e) => setVideoUrl(e.target.value)}
                          />
                        </div>
                        <Button
                          className="w-full bg-gradient-to-r from-blue-600 to-purple-600"
                          onClick={() => handleVideoUpdate(videoUrl)}
                        >
                          Apply Settings
                        </Button>
                      </div>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              )}
            </div>

            {/* Video Controls */}
            <div className="w-full flex flex-col items-center gap-2">
              <div className="text-2xl font-mono">
                {formatTime(currentTime)}
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon">
                  <SkipBack className="h-4 w-4" />
                </Button>
                <Button
                  className="bg-gradient-to-r from-blue-600 to-purple-600"
                  size="icon"
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  {isPlaying ? (
                    <Pause className="h-4 w-4" />
                  ) : (
                    <Play className="h-4 w-4" />
                  )}
                </Button>
                <Button variant="outline" size="icon">
                  <SkipForward className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Team B */}
        <Card className="lg:col-span-2 border-red-200 dark:border-red-900">
          <CardHeader className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-t-lg">
            <CardTitle className="flex items-center gap-2">
              <Avatar className="h-8 w-8 border-2 border-white" src={teamB.logo} alt={teamB.name} fallback={teamB.name.substring(0, 2)}/>
              <span>{teamB.name}</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <div className="space-y-3">
              {teamB.players.map((player) => (
                <div
                  key={player.id}
                  className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-all ${
                    selectedPlayer?.id === player.id
                      ? "bg-red-100 dark:bg-red-900/50 ring-2 ring-red-500"
                      : targetPlayer?.id === player.id
                      ? "bg-purple-100 dark:bg-purple-900/50 ring-2 ring-purple-500"
                      : "hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                  onClick={() =>
                    selectedPlayer && selectedPlayer.teamId !== player.teamId
                      ? handleTargetPlayerSelect(player)
                      : handlePlayerSelect(player)
                  }
                >
                  <div
                    className="relative h-12 w-12 rounded-full overflow-hidden border-2"
                    style={{ borderColor: player.color }}
                  >
                    <Avatar className="h-full w-full" src={player.hero.image}
                        alt={player.hero.name} fallback={player.hero.name.substring(0, 2)}/>
                    {selectedPlayer?.id === player.id && (
                      <div className="absolute inset-0 bg-red-500/30 flex items-center justify-center">
                        <Checkbox checked className="h-5 w-5" />
                      </div>
                    )}
                    {targetPlayer?.id === player.id && (
                      <div className="absolute inset-0 bg-purple-500/30 flex items-center justify-center">
                        <Checkbox checked className="h-5 w-5" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">{player.name}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
                      <span>{player.hero.name}</span>
                      <Badge variant="outline" className="text-xs">
                        {player.hero.role}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Map and Events Section */}
      <div className="grid grid-cols-1 lg:grid-cols-7 gap-6">
        {/* Team A Events */}
        <Card className="lg:col-span-2">
          <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-t-lg py-3">
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
                  const eventType = eventTypes.find((t) => t.id === event.type);

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
                            style={{ backgroundColor: sourcePlayer?.color }}
                          ></div>
                          {sourcePlayer?.name}
                        </div>
                      </TableCell>
                      <TableCell>
                        {targetPlayer && (
                          <div className="flex items-center gap-2">
                            <div
                              className="h-2 w-2 rounded-full"
                              style={{ backgroundColor: targetPlayer?.color }}
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
          <div className="p-3 border-t">
            <Button variant="outline" size="sm" className="w-full">
              <Download className="h-4 w-4 mr-2" />
              Export Data
            </Button>
          </div>
        </Card>

        {/* Map */}
        <Card className="lg:col-span-3">
          <CardContent className="p-4">
            <div
              ref={mapRef}
              className="relative w-full aspect-square bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden cursor-crosshair"
              onClick={handleMapClick}
              style={{
                backgroundImage: "url('/placeholder.svg?height=600&width=600')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Event markers */}
              {events.map((event) => {
                const player = [...teamA.players, ...teamB.players].find(
                  (p) => p.id === event.sourcePlayerId
                );
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

        {/* Team B Events */}
        <Card className="lg:col-span-2">
          <CardHeader className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-t-lg py-3">
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
                  const eventType = eventTypes.find((t) => t.id === event.type);

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
                            style={{ backgroundColor: sourcePlayer?.color }}
                          ></div>
                          {sourcePlayer?.name}
                        </div>
                      </TableCell>
                      <TableCell>
                        {targetPlayer && (
                          <div className="flex items-center gap-2">
                            <div
                              className="h-2 w-2 rounded-full"
                              style={{ backgroundColor: targetPlayer?.color }}
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
          <div className="p-3 border-t">
            <Button variant="outline" size="sm" className="w-full">
              <Download className="h-4 w-4 mr-2" />
              Export Data
            </Button>
          </div>
        </Card>
      </div>

      {/* Event Tools */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {eventTypes.map((eventType) => (
              <Button
                key={eventType.id}
                variant={
                  selectedEventType === eventType.id ? "default" : "outline"
                }
                className={
                  selectedEventType === eventType.id
                    ? "bg-gradient-to-r from-blue-600 to-purple-600"
                    : ""
                }
                onClick={() => handleEventTypeSelect(eventType.id)}
                disabled={!selectedPlayer}
              >
                {eventType.name}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Instructions */}
      <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
        <CardContent className="p-4">
          <h3 className="font-semibold mb-2">How to use the analysis tool:</h3>
          <ol className="list-decimal list-inside space-y-1 text-sm">
            <li>Select a player from either team (they will be highlighted)</li>
            <li>Choose an event type from the tools below</li>
            <li>
              For kill or assist events, select a target player from the
              opposing team
            </li>
            <li>Click on the map where the event occurred</li>
            <li>The event will be recorded in the team's status table</li>
          </ol>
        </CardContent>
      </Card>
    </div>
  );
}
