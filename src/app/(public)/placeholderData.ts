export const analysisData = [
  {
    id: "1",
    date: "2024-2-9",
    teamA: {
      id: "1",
      name: "ONIC",
      logo: "/logo/ONIC.jpg",
    },
    teamB: {
      id: "2",
      name: "RRQ",
      logo: "/logo/RRQ.jpg",
    },
    description:
      "Final match between ONIC and RRQ in MPL Season 11. An intense battle between two of the strongest teams in Indonesia.",
    tags: ["MPL", "Final", "Season 11"],
    logs: [
      {
        id: "1",
        timestamp: "00:02:15",
        playerId: "1",
        playerName: "CW",
        action: "First Blood",
        target: "Alberttt",
        description: "CW (Lancelot) killed Alberttt (Ling)",
      },
      {
        id: "2",
        timestamp: "00:05:30",
        playerId: "2",
        playerName: "Alberttt",
        action: "Tower Destroyed",
        description: "Alberttt (Ling) destroyed bottom tower",
      },
    ],
    createdBy: {
      id: "1",
      name: "MLAnalyst",
    },
  },
  {
    id: "2",
    date: "2024-2-8",
    teamA: {
      id: "3",
      name: "EVOS",
      logo: "/logo/EVOS.jpg",
    },
    teamB: {
      id: "4",
      name: "Alter Ego",
      logo: "/logo/ALTER.jpg",
    },
    description: "Semi-final match of MDL Season 5. EVOS showing dominant performance with new roster.",
    tags: ["MDL", "Semi-Final", "Season 5"],
    logs: [
      {
        id: "1",
        timestamp: "00:03:45",
        playerId: "3",
        playerName: "Dreams",
        action: "Triple Kill",
        description: "Dreams (Beatrix) secured triple kill",
      },
    ],
    createdBy: {
      id: "2",
      name: "ProAnalyst",
    },
  },
  {
    id: "3",
    date: "2024-2-7",
    teamA: {
      id: "5",
      name: "Aura",
      logo: "/logo/AURA.jpg",
    },
    teamB: {
      id: "6",
      name: "Geek Fam",
      logo: "/logo/GEEK.jpg",
    },
    description: "Regular season match with unexpected strategies from both teams.",
    tags: ["MPL", "Regular Season", "Meta Analysis"],
    logs: [
      {
        id: "1",
        timestamp: "00:08:20",
        playerId: "4",
        playerName: "Akai",
        action: "Lord Secure",
        description: "Akai (Atlas) secured the Lord",
      },
    ],
    createdBy: {
      id: "3",
      name: "MetaExpert",
    },
  },
]