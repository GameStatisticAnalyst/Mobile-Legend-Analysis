// This would typically come from your database
export const getTournamentData = (id: string) => {
  return {
    id,
    name: "MPL Indonesia Season 12",
    logo: "/placeholder.svg?height=200&width=200",
    location: "Jakarta, Indonesia",
    startDate: "2023-08-18",
    endDate: "2023-10-15",
    prizePool: "$300,000",
    status: "completed", // upcoming, ongoing, completed
    description:
      "Mobile Legends Professional League Indonesia Season 12 is the premier Mobile Legends: Bang Bang tournament in Indonesia, featuring the top 8 teams competing for the championship title and a spot in the M5 World Championship.",
    organizer: "Moonton",
    teams: [
      {
        id: "t1",
        name: "ONIC Esports",
        logo: "/logo/ONIC.jpg",
      },
      { id: "t2", name: "RRQ", logo: "/logo/RRQ.jpg" },
      { id: "t3", name: "EVOS", logo: "/logo/EVOS.jpg" },
      {
        id: "t4",
        name: "Alter Ego",
        logo: "/logo/ALTER.jpg",
      },
      {
        id: "t5",
        name: "Bigetron Alpha",
        logo: "/logo/BIGETRON.jpg",
      },
      {
        id: "t6",
        name: "Geek Fam",
        logo: "/logo/GEEK.jpg",
      },
      {
        id: "t7",
        name: "Aura Fire",
        logo: "/logo/AURA.jpg",
      },
      {
        id: "t8",
        name: "ONIC Prodigy",
        logo: "/logo/ONIC.jpg",
      },
    ],
    matches: [
      {
        id: "m1",
        team1: "ONIC Esports",
        team2: "RRQ",
        score: "3-1",
        round: "Grand Finals",
        date: "2023-10-15",
      },
      {
        id: "m2",
        team1: "ONIC Esports",
        team2: "EVOS",
        score: "3-0",
        round: "Upper Bracket Finals",
        date: "2023-10-08",
      },
      {
        id: "m3",
        team1: "RRQ",
        team2: "Alter Ego",
        score: "3-2",
        round: "Lower Bracket Finals",
        date: "2023-10-08",
      },
    ],
    standings: [
      { position: 1, team: "ONIC Esports", points: 100 },
      { position: 2, team: "RRQ", points: 80 },
      { position: 3, team: "EVOS", points: 60 },
      { position: 4, team: "Alter Ego", points: 40 },
    ],
    winner: "ONIC Esports",
    relatedContent: [
      {
        id: "rc1",
        type: "analysis",
        title:
          "ONIC vs RRQ: The Battle of Legends - MPL ID S12 Grand Finals Analysis",
        image: "/placeholder.svg?height=300&width=500",
      },
      {
        id: "rc2",
        type: "highlight",
        title: "Top 10 Plays from MPL ID S12",
        image: "/placeholder.svg?height=300&width=500",
      },
      {
        id: "rc3",
        type: "interview",
        title: "Interview with Kairi: The Road to Championship",
        image: "/placeholder.svg?height=300&width=500",
      },
    ],
  };
};
