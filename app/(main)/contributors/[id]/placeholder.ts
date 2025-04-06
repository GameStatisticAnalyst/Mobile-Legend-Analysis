// This would typically come from your database based on the ID
export const getContributorById = (id: string) => {
  // Mock data - in a real app, you would fetch this from your database
  return {
    id,
    name: "Alex Johnson",
    role: "Lead Analyst",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Professional Mobile Legends coach with over 5 years of experience in the competitive scene. Former coach for top-tier teams in SEA region. Specializes in draft analysis, meta trends, and team strategy development.",
    email: "alex.johnson@example.com",
    joinDate: "January 15, 2023",
    contributions: 48,
    specialties: [
      "Draft Analysis",
      "Meta Trends",
      "Team Strategy",
      "Hero Matchups",
      "Objective Control",
    ],
    achievements: [
      "Top Contributor 2023",
      "Featured Analyst - M5 World Championship",
      "Community Choice Award",
    ],
    social: {
      twitter: "https://twitter.com",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      website: "https://example.com",
    },
    recentAnalyses: [
      {
        id: "a1",
        title: "ONIC vs. Blacklist: Draft Analysis",
        date: "March 28, 2024",
        excerpt:
          "Breaking down the strategic draft choices in the recent ONIC vs. Blacklist International match.",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        id: "a2",
        title: "Meta Shift: The Rise of Tank Junglers",
        date: "March 15, 2024",
        excerpt:
          "Analyzing the recent trend of tank heroes being used in the jungle role and its impact on the competitive scene.",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        id: "a3",
        title: "Team Echo's Evolution: Season 11 Review",
        date: "February 28, 2024",
        excerpt:
          "A comprehensive review of Team Echo's strategic evolution throughout Season 11.",
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
    featuredContent: {
      title: "The Art of Draft: A Comprehensive Guide",
      excerpt:
        "This in-depth guide covers everything from ban priorities to counter-picking strategies in the current meta.",
      image: "/placeholder.svg?height=300&width=600",
    },
    stats: {
      analysisCount: 48,
      commentsCount: 156,
      likesReceived: 2340,
      viewCount: 58700,
    },
  };
};
