// This would typically come from your database
export const getAnalysisData = (id: string) => {
  return {
    id,
    title:
      "ONIC vs RRQ: The Battle of Legends - MPL ID S12 Grand Finals Analysis",
    author: {
      id: "a1",
      name: "Coach BTK",
      image: "/images/profile.jpg",
      role: "Professional Coach",
    },
    date: "2023-10-20",
    views: "15.2K",
    likes: 842,
    comments: 156,
    tags: ["MPL Indonesia", "ONIC", "RRQ", "Grand Finals", "S12"],
    image: "/images/map_ml.jpg",
    summary:
      "An in-depth analysis of the MPL Indonesia Season 12 Grand Finals between ONIC Esports and RRQ Hoshi. This analysis covers draft strategies, rotations, team fights, and the key moments that decided the championship.",
    content: [
      {
        title: "Draft Analysis",
        text: "The draft phase was crucial in this series. ONIC consistently prioritized securing Kairi's jungle picks, particularly his signature Hayabusa and Lancelot. RRQ, on the other hand, focused on comfort picks for R7 and Alberttt. The turning point in the draft was Game 4, where ONIC managed to secure both Mathilda and Lancelot, creating an unstoppable dive composition.",
      },
      {
        title: "Early Game Rotations",
        text: "ONIC's early game strategy revolved around securing the turtle and creating space for Kairi to farm efficiently. Their lane assignments were flexible, with CW often sacrificing his lane to help secure objectives. RRQ tried to counter this by having Clayyy roam aggressively, but ONIC's vision control was superior throughout the series.",
      },
      {
        title: "Team Fight Execution",
        text: "The team fights in this series were masterclasses from both teams. ONIC's coordination was slightly better, with Kairi and Sanz perfectly timing their engages. RRQ had moments of brilliance, particularly in Game 3 where Alberttt's positioning was impeccable, but they couldn't maintain that level consistently across the series.",
      },
    ],
    stats: {
      games: 5,
      totalKills: 127,
      avgGameTime: "18:45",
      mostPickedHero: "Mathilda (4 picks)",
      mostBannedHero: "Lancelot (5 bans)",
      mvp: "Kairi (ONIC)",
    },
    relatedAnalyses: [
      {
        id: "ra1",
        title: "Evolution of ONIC's Playstyle in MPL ID S12",
        image: "/placeholder.svg?height=300&width=500",
      },
      {
        id: "ra2",
        title: "RRQ's Journey to the Grand Finals",
        image: "/placeholder.svg?height=300&width=500",
      },
      {
        id: "ra3",
        title: "Top 5 Plays from MPL ID S12 Playoffs",
        image: "/placeholder.svg?height=300&width=500",
      },
    ],
  };
};
