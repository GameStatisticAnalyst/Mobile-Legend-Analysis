import type {
  Team,
  Player,
  GameEvent,
  EventType,
  Role,
} from "@/types/match-analysis";
import generateRandomColor from "@/utils/colorGenerator";

// Sample data for demonstration
export const eventTypes: EventType[] = [
  { id: "kill", name: "Kill" },
  { id: "assist", name: "Assist" },
  { id: "death", name: "Death" },
  { id: "buff-merah", name: "Buff Merah" },
  { id: "buff-biru", name: "Buff Biru" },
  { id: "lord", name: "Lord" },
  { id: "turtle", name: "Turtle" },
];

export const roles: Role[] = [
  "mid-lane",
  "gold-lane",
  "exp-lane",
  "roamer-lane",
  "jungler-lane",
];

export const sampleHeroes = [
  {
    id: "1",
    name: "Cyclops",
    image: "/placeholder.svg?height=60&width=60",
    role: "mid-lane" as Role,
  },
  {
    id: "2",
    name: "Layla",
    image: "/placeholder.svg?height=60&width=60",
    role: "gold-lane" as Role,
  },
  {
    id: "3",
    name: "Thamuz",
    image: "/placeholder.svg?height=60&width=60",
    role: "exp-lane" as Role,
  },
  {
    id: "4",
    name: "Franco",
    image: "/placeholder.svg?height=60&width=60",
    role: "roamer-lane" as Role,
  },
  {
    id: "5",
    name: "Akai",
    image: "/placeholder.svg?height=60&width=60",
    role: "jungler-lane" as Role,
  },
  {
    id: "6",
    name: "Gusion",
    image: "/placeholder.svg?height=60&width=60",
    role: "mid-lane" as Role,
  },
  {
    id: "7",
    name: "Granger",
    image: "/placeholder.svg?height=60&width=60",
    role: "gold-lane" as Role,
  },
  {
    id: "8",
    name: "Esmeralda",
    image: "/placeholder.svg?height=60&width=60",
    role: "exp-lane" as Role,
  },
  {
    id: "9",
    name: "Atlas",
    image: "/placeholder.svg?height=60&width=60",
    role: "roamer-lane" as Role,
  },
  {
    id: "10",
    name: "Ling",
    image: "/placeholder.svg?height=60&width=60",
    role: "jungler-lane" as Role,
  },
];

export const initialTeamA: Team = {
  id: "team-a",
  name: "ONIC Esports",
  logo: "/placeholder.svg?height=50&width=50",
  color: "#6366f1",
  players: Array.from({ length: 5 }, (_, i) => ({
    id: `player-a-${i + 1}`,
    name: `Player ${i + 1}`,
    hero: sampleHeroes[i],
    color: generateRandomColor(),
    teamId: "team-a",
  })),
};

export const initialTeamB: Team = {
  id: "team-b",
  name: "RRQ Hoshi",
  logo: "/placeholder.svg?height=50&width=50",
  color: "#f43f5e",
  players: Array.from({ length: 5 }, (_, i) => ({
    id: `player-b-${i + 1}`,
    name: `Player ${i + 1}`,
    hero: sampleHeroes[i + 5],
    color: generateRandomColor(),
    teamId: "team-b",
  })),
};
