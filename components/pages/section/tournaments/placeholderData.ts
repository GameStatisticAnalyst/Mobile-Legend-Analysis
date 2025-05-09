export interface UpcomingTournament {
  id: string;
  name: string;
  logo: string;
  startDate: string;
  endDate: string;
  location: string;
  region: string; 
  teams: number;
  prizePool: string;
  status: "upcoming";
  description: string;
  organizer: string;
  type: string;
}

export interface OngoingTournament {
  id: string;
  name: string;
  logo: string;
  startDate: string;
  endDate: string;
  location: string;
  region: string; 
  teams: number;
  prizePool: string;
  status: "ongoing";
  description: string;
  organizer: string;
  type: string;
}

export interface PastTournament {
  id: string;
  name: string;
  logo: string;
  startDate: string;
  endDate: string;
  location: string;
  region: string; 
  teams: number;
  prizePool: string;
  status: "completed";
  description: string;
  organizer: string;
  type: string;
  winner: string;
}

export const upcomingTournaments: UpcomingTournament[] = [
  {
    id: "1",
    name: "MPL ID Season 13",
    logo: "/placeholder.svg?height=120&width=120",
    startDate: "2024-04-15",
    endDate: "2024-06-10",
    location: "Jakarta, Indonesia",
    region: "Southeast Asia", 
    teams: 10,
    prizePool: "$300,000",
    status: "upcoming",
    description:
      "The premier Mobile Legends tournament in Indonesia featuring the top 10 teams competing for the championship title and a spot in the M5 World Championship.",
    organizer: "Moonton",
    type: "Regular Season",
  },
  {
    id: "2",
    name: "MPL PH Season 13",
    logo: "/placeholder.svg?height=120&width=120",
    startDate: "2024-04-20",
    endDate: "2024-06-15",
    location: "Manila, Philippines",
    region: "Southeast Asia", 
    teams: 8,
    prizePool: "$250,000",
    status: "upcoming",
    description:
      "The Philippines' top Mobile Legends tournament where 8 teams battle for the championship and a slot in the M5 World Championship.",
    organizer: "Moonton",
    type: "Regular Season",
  },
  {
    id: "3",
    name: "M5 World Championship",
    logo: "/placeholder.svg?height=120&width=120",
    startDate: "2024-12-01",
    endDate: "2024-12-15",
    location: "Singapore",
    region: "Southeast Asia", 
    teams: 16,
    prizePool: "$800,000",
    status: "upcoming",
    description:
      "The fifth Mobile Legends World Championship featuring the best teams from around the world competing for the ultimate title.",
    organizer: "Moonton",
    type: "World Championship",
  },
  {
    id: "4",
    name: "MSC 2024",
    logo: "/placeholder.svg?height=120&width=120",
    startDate: "2024-07-10",
    endDate: "2024-07-20",
    location: "Kuala Lumpur, Malaysia",
    region: "Southeast Asia", 
    teams: 12,
    prizePool: "$300,000",
    status: "upcoming",
    description:
      "The Mobile Legends Southeast Asia Cup brings together the best teams from the SEA region.",
    organizer: "Moonton",
    type: "Regional Championship",
  },
];

export const ongoingTournaments: OngoingTournament[] = [
  {
    id: "5",
    name: "MDL Season 7",
    logo: "/placeholder.svg?height=120&width=120",
    startDate: "2024-03-15",
    endDate: "2024-04-10",
    location: "Jakarta, Indonesia",
    region: "Southeast Asia", 
    teams: 16,
    prizePool: "$100,000",
    status: "ongoing",
    description:
      "The Mobile Legends Development League for aspiring professional teams in Indonesia.",
    organizer: "Moonton",
    type: "Development League",
  },
];

export const pastTournaments: PastTournament[] = [
  {
    id: "6",
    name: "MPL ID Season 12",
    logo: "/placeholder.svg?height=120&width=120",
    startDate: "2023-08-18",
    endDate: "2023-10-22",
    location: "Jakarta, Indonesia",
    region: "Southeast Asia", 
    teams: 10,
    prizePool: "$300,000",
    status: "completed",
    description:
      "The 12th season of Indonesia's premier Mobile Legends tournament.",
    organizer: "Moonton",
    type: "Regular Season",
    winner: "ONIC Esports",
  },
  {
    id: "7",
    name: "M4 World Championship",
    logo: "/placeholder.svg?height=120&width=120",
    startDate: "2023-01-01",
    endDate: "2023-01-15",
    location: "Jakarta, Indonesia",
    region: "Southeast Asia", 
    teams: 16,
    prizePool: "$800,000",
    status: "completed",
    description: "The fourth Mobile Legends World Championship.",
    organizer: "Moonton",
    type: "World Championship",
    winner: "ECHO",
  },
  {
    id: "8",
    name: "MPL PH Season 12",
    logo: "/placeholder.svg?height=120&width=120",
    startDate: "2023-08-20",
    endDate: "2023-10-29",
    location: "Manila, Philippines",
    region: "Southeast Asia", 
    teams: 8,
    prizePool: "$250,000",
    status: "completed",
    description:
      "The 12th season of the Philippines' premier Mobile Legends tournament.",
    organizer: "Moonton",
    type: "Regular Season",
    winner: "AP Bren",
  },
  {
    id: "9",
    name: "MSC 2023",
    logo: "/placeholder.svg?height=120&width=120",
    startDate: "2023-06-08",
    endDate: "2023-06-18",
    location: "Phnom Penh, Cambodia",
    region: "Southeast Asia", 
    teams: 12,
    prizePool: "$300,000",
    status: "completed",
    description: "The 2023 Mobile Legends Southeast Asia Cup.",
    organizer: "Moonton",
    type: "Regional Championship",
    winner: "Blacklist International",
  },
];
