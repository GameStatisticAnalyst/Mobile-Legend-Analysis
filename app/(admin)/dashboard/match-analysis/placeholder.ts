// Sample data for demonstration
export const sampleAnalyses = [
  {
    id: "1",
    matchId: "MPL-ID-S13-F1",
    teamA: {
      id: "team-a",
      name: "ONIC Esports",
      logo: "/placeholder.svg?height=40&width=40",
    },
    teamB: {
      id: "team-b",
      name: "RRQ Hoshi",
      logo: "/placeholder.svg?height=40&width=40",
    },
    createdAt: "2024-03-28T14:30:00Z",
    updatedAt: "2024-03-28T16:45:00Z",
    status: "published",
  },
  {
    id: "2",
    matchId: "MPL-ID-S13-SF2",
    teamA: {
      id: "team-c",
      name: "EVOS Legends",
      logo: "/placeholder.svg?height=40&width=40",
    },
    teamB: {
      id: "team-d",
      name: "Alter Ego",
      logo: "/placeholder.svg?height=40&width=40",
    },
    createdAt: "2024-03-25T13:15:00Z",
    updatedAt: "2024-03-25T15:30:00Z",
    status: "draft",
  },
  {
    id: "3",
    matchId: "MPL-ID-S13-W8-M3",
    teamA: {
      id: "team-e",
      name: "Aura Fire",
      logo: "/placeholder.svg?height=40&width=40",
    },
    teamB: {
      id: "team-f",
      name: "Geek Fam ID",
      logo: "/placeholder.svg?height=40&width=40",
    },
    createdAt: "2024-03-22T10:00:00Z",
    updatedAt: "2024-03-22T12:15:00Z",
    status: "published",
  },
];

export const Analyses = [
  {
    id: "1",
    teamA: "ONIC Esports",
    teamB: "RRQ Hoshi",
    date: "2023-11-15",
    tags: ["MPL", "Season 12", "Playoffs"],
    createdBy: "John Doe",
    status: "published",
  },
  {
    id: "2",
    teamA: "Evos Legends",
    teamB: "Bigetron Alpha",
    date: "2023-11-10",
    tags: ["MPL", "Season 12", "Regular Season"],
    createdBy: "Jane Smith",
    status: "draft",
  },
  {
    id: "3",
    teamA: "Alter Ego",
    teamB: "Aura Fire",
    date: "2023-11-05",
    tags: ["MPL", "Season 12", "Regular Season"],
    createdBy: "Mike Johnson",
    status: "published",
  },
  {
    id: "4",
    teamA: "Geek Fam",
    teamB: "Rebellion Zion",
    date: "2023-10-28",
    tags: ["MPL", "Season 12", "Regular Season"],
    createdBy: "Sarah Williams",
    status: "draft",
  },
  {
    id: "5",
    teamA: "Team Secret",
    teamB: "Blacklist International",
    date: "2023-10-22",
    tags: ["M5", "Group Stage"],
    createdBy: "David Brown",
    status: "published",
  },
];

export const eventTypes = [
  { id: "kill", name: "Kill" },
  { id: "assist", name: "Assist" },
  { id: "death", name: "Death" },
  { id: "buff_minion", name: "Buff Minion" },
  { id: "buff_blue", name: "Buff Blue" },
  { id: "lord", name: "Lord" },
  { id: "turtle", name: "Turtle" },
];

export const roles = [
  { id: "exp", name: "EXP Lane" },
  { id: "gold", name: "Gold Lane" },
  { id: "mid", name: "Mid Lane" },
  { id: "jungle", name: "Jungle" },
  { id: "roam", name: "Roam" },
];

export const sampleHeroes = [
  {
    id: "h1",
    name: "Chou",
    role: "EXP Lane",
    image: "/placeholder.svg?height=50&width=50",
  },
  {
    id: "h2",
    name: "Beatrix",
    role: "Gold Lane",
    image: "/placeholder.svg?height=50&width=50",
  },
  {
    id: "h3",
    name: "Pharsa",
    role: "Mid Lane",
    image: "/placeholder.svg?height=50&width=50",
  },
  {
    id: "h4",
    name: "Lancelot",
    role: "Jungle",
    image: "/placeholder.svg?height=50&width=50",
  },
  {
    id: "h5",
    name: "Franco",
    role: "Roam",
    image: "/placeholder.svg?height=50&width=50",
  },
  {
    id: "h6",
    name: "Paquito",
    role: "EXP Lane",
    image: "/placeholder.svg?height=50&width=50",
  },
  {
    id: "h7",
    name: "Claude",
    role: "Gold Lane",
    image: "/placeholder.svg?height=50&width=50",
  },
  {
    id: "h8",
    name: "Yve",
    role: "Mid Lane",
    image: "/placeholder.svg?height=50&width=50",
  },
  {
    id: "h9",
    name: "Ling",
    role: "Jungle",
    image: "/placeholder.svg?height=50&width=50",
  },
  {
    id: "h10",
    name: "Atlas",
    role: "Roam",
    image: "/placeholder.svg?height=50&width=50",
  },
];

export const initialTeamA = {
  id: "team-a",
  name: "ONIC Esports",
  logo: "/placeholder.svg?height=40&width=40",
  color: "#FF0000",
  players: [
    {
      id: "p1",
      name: "Player 1",
      teamId: "team-a",
      color: "#84cc16",
      hero: sampleHeroes[0],
    },
    {
      id: "p2",
      name: "Player 2",
      teamId: "team-a",
      color: "#facc15",
      hero: sampleHeroes[1],
    },
    {
      id: "p3",
      name: "Player 3",
      teamId: "team-a",
      color: "#f97316",
      hero: sampleHeroes[2],
    },
    {
      id: "p4",
      name: "Player 4",
      teamId: "team-a",
      color: "#f43f5e",
      hero: sampleHeroes[3],
    },
    {
      id: "p5",
      name: "Player 5",
      teamId: "team-a",
      color: "#a3e635",
      hero: sampleHeroes[4],
    },
  ],
};

export const initialTeamB = {
  id: "team-b",
  name: "RRQ Hoshi",
  logo: "/placeholder.svg?height=40&width=40",
  color: "#FF0000",
  players: [
    {
      id: "p6",
      name: "Player 1",
      teamId: "team-b",
      color: "#06b6d4",
      hero: sampleHeroes[5],
    },
    {
      id: "p7",
      name: "Player 2",
      teamId: "team-b",
      color: "#3b82f6",
      hero: sampleHeroes[6],
    },
    {
      id: "p8",
      name: "Player 3",
      teamId: "team-b",
      color: "#8b5cf6",
      hero: sampleHeroes[7],
    },
    {
      id: "p9",
      name: "Player 4",
      teamId: "team-b",
      color: "#ec4899",
      hero: sampleHeroes[8],
    },
    {
      id: "p10",
      name: "Player 5",
      teamId: "team-b",
      color: "#22d3ee",
      hero: sampleHeroes[9],
    },
  ],
};
