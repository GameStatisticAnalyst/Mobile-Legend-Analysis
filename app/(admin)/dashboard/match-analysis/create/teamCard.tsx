import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Button from "@/components/ui/button";
import Checkbox from "@/components/ui/checkbox";
import cn from "@/utils/cn";
import type { Team, Player, GameEvent, Hero } from "@/types/match-analysis";
import Input from "@/components/ui/input";

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
import HeroSelect from "./heroSelect";
import RoleSelect from "./roleSelect";

interface TeamCardProps {
  team: Team;
  darkMode: boolean;
  isEditMode: boolean;
  selectedPlayer: Player | null;
  targetPlayer: Player | null;
  selectedEventType: string | null;
  eventTypes: { id: string; name: string }[];
  handlePlayerSelect: (player: Player) => void;
  handleEventTypeSelect: (eventTypeId: string) => void;
  handleTargetPlayerSelect: (player: Player) => void;
  updatePlayerHero: (player: Player, hero: Hero) => void;
  updateRole: (player: Player, role: string) => void;
  editingPlayer: Player | null;
  editingName: string;
  setEditingName: (name: string) => void;
  savePlayerEdit: () => void;
}

export default function TeamCard({
  team,
  darkMode,
  isEditMode,
  selectedPlayer,
  targetPlayer,
  selectedEventType,
  eventTypes,
  handlePlayerSelect,
  handleEventTypeSelect,
  handleTargetPlayerSelect,
  updatePlayerHero,
  updateRole,
  editingPlayer,
  editingName,
  setEditingName,
  savePlayerEdit,
}: TeamCardProps) {
  return (
    <Card
      className={cn(
        "lg:col-span-2 overflow-hidden",
        darkMode
          ? `border-${team.id === "team-a" ? "blue" : "red"}-900 bg-gray-900`
          : `border-${
              team.id === "team-a" ? "blue" : "red"
            }-200 bg-white dark:border-${
              team.id === "team-a" ? "blue" : "red"
            }-900 dark:bg-gray-900`
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
              }-600 dark:from-${
                team.id === "team-a" ? "blue" : "red"
              }-700 dark:to-${team.id === "team-a" ? "blue" : "red"}-800`
        )}
      >
        <CardTitle className="flex items-center gap-2 px-4">
          <Avatar className="h-8 w-8 border-2 border-white">
            <AvatarImage
              src={team.logo || "/placeholder.svg"}
              alt={team.name}
            />
            <AvatarFallback>{team.name.substring(0, 2)}</AvatarFallback>
          </Avatar>
          <span>{team.name}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {!isEditMode && (
          <div className="p-2 border-b dark:border-gray-800 flex flex-wrap gap-1 justify-center">
            {/* Event Tools */}
            {eventTypes.map((eventType) => (
              <Button
                key={eventType.id}
                variant={
                  selectedEventType === eventType.id ? "default" : "outline"
                }
                size="sm"
                className={cn(
                  "h-8 text-xs rounded-md dark:hover:bg-gray-800",
                  selectedEventType === eventType.id
                    ? darkMode
                      ? `bg-${team.id === "teamA" ? "blue" : "red"}-700`
                      : `bg-${team.id === "teamA" ? "blue" : "red"}-600`
                    : ""
                )}
                onClick={() => handleEventTypeSelect(eventType.id)}
                disabled={!selectedPlayer || selectedPlayer.teamId !== team.id}
              >
                {eventType.name}
              </Button>
            ))}
          </div>
        )}

        <div className="p-2 space-y-2">
          {/* Player Tools */}
          {team.players.map((player) => (
            <div
              key={player.id}
              className={cn(
                "flex items-center gap-3 p-2 rounded-lg transition-all",
                isEditMode ? "cursor-default" : "cursor-pointer",
                selectedPlayer?.id === player.id
                  ? darkMode
                    ? `bg-${
                        team.id === "teamA" ? "blue" : "red"
                      }-900/50 ring-2 ring-${
                        team.id === "teamA" ? "blue" : "red"
                      }-700`
                    : `bg-${
                        team.id === "teamA" ? "blue" : "red"
                      }-100 ring-2 ring-${
                        team.id === "teamA" ? "blue" : "red"
                      }-500`
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
                  selectedPlayer && selectedPlayer.teamId !== player.teamId
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
                {selectedPlayer?.id === player.id && !isEditMode && (
                  <div
                    className={`absolute inset-0 bg-${
                      team.id === "teamA" ? "blue" : "red"
                    }-500/30 flex items-center justify-center`}
                  >
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
                      onChange={(e) => setEditingName(e.target.value)}
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
  );
}
