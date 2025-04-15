import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Button from "@/components/ui/button";
import { Download } from "lucide-react";
import cn from "@/utils/cn";
import type { Team, Player, GameEvent, Hero } from "@/types/match-analysis";

interface TeamStatusCardProps {
  team: Team;
  darkMode: boolean;
  getTeamEvents: (teamId: string) => GameEvent[];
  exportToCSV: (teamId: string) => void;
  eventTypes: { id: string; name: string }[];
  players: Player[];
}

export default function TeamStatusCard({
  team,
  darkMode,
  getTeamEvents,
  exportToCSV,
  eventTypes,
  players,
}: TeamStatusCardProps) {
  const teamEvents = getTeamEvents(team.id);
  console.log("teamEvents", team.id);
  return (
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
            ? `from-${team.id === "team-a" ? "blue" : "red"}-700 to-${
                team.id === "team-a" ? "blue" : "red"
              }-800`
            : `from-${team.id === "team-a" ? "blue" : "red"}-500 to-${
                team.id === "team-a" ? "blue" : "red"
              }-600`
        )}
      >
        <CardTitle className="text-center text-sm">
          Status {team.name}
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
            {teamEvents.map((event) => {
              const sourcePlayer = players.find(
                (p) => p.id === event.sourcePlayerId
              );
              const targetPlayer = event.targetPlayerId
                ? players.find((p) => p.id === event.targetPlayerId)
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
            {teamEvents.length === 0 && (
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
          onClick={() => exportToCSV(team.id)}
          className="w-full rounded-full dark:hover:bg-gray-800"
        >
          <Download className="h-4 w-4 mr-2" />
          Export Data
        </Button>
      </div>
    </Card>
  );
}

function formatTime(seconds: number) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins.toString().padStart(2, "0")}:${secs
    .toString()
    .padStart(2, "0")}`;
}
