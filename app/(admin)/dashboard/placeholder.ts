import {
  BarChart3,
  FileText,
  Shield,
  Users,
  Plus,
  Clock,
  Zap,
  ChevronRight,
  Calendar,
  Activity,
} from "lucide-react";

import type {
  Activity as ActivityType,
  AdminAnalysis,
  Stat,
} from "@/types/admin";

export const stats: Stat[] = [
  {
    title: "Total Analyses",
    value: "2,345",
    color: "blue",
    icon: BarChart3,
    description: "Total analyses created",
    trend: "up",
    trendValue: "12% from last month",
  },
  {
    title: "Total Users",
    value: "1,234",
    color: "emerald",
    icon: Users,
    description: "Active users on platform",
    trend: "up",
    trendValue: "8% from last month",
  },
  {
    title: "Teams",
    value: "56",
    color: "purple",
    icon: Shield,
    description: "Teams registered",
    trend: "up",
    trendValue: "3% from last month",
  },
  {
    title: "Reports",
    value: "12",
    color: "amber",
    icon: FileText,
    description: "Pending reports",
    trend: "down",
    trendValue: "5% from last month",
  },
];

export const recentActivities: ActivityType[] = [
  {
    id: "1",
    userName: "John Doe",
    userAvatar: "/placeholder.svg",
    action: "Created a new analysis for ONIC vs RRQ",
    time: "2 hours ago",
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
  },
  {
    id: "2",
    userName: "Jane Smith",
    userAvatar: "/placeholder.svg",
    action: "Updated team information for EVOS",
    time: "5 hours ago",
    timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000),
  },
  {
    id: "3",
    userName: "Mike Johnson",
    userAvatar: "/placeholder.svg",
    action: "Added a new tournament: MPL Season 12",
    time: "Yesterday",
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000),
  },
  {
    id: "4",
    userName: "Sarah Williams",
    userAvatar: "/placeholder.svg",
    action: "Commented on ONIC vs Alter Ego analysis",
    time: "2 days ago",
    timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
  },
];

export const recentAnalyses: AdminAnalysis[] = [
  {
    id: "1",
    date: "2024-02-09",
    teamA: {
      id: "1",
      name: "ONIC",
      logo: "/placeholder.svg?height=32&width=32",
    },
    teamB: {
      id: "2",
      name: "RRQ",
      logo: "/placeholder.svg?height=32&width=32",
    },
    description: "Final match between ONIC and RRQ in MPL Season 11",
    tags: ["MPL", "Final", "Season 11"],
    createdBy: {
      id: "1",
      name: "MLAnalyst",
    },
    status: "published",
  },
  {
    id: "2",
    date: "2024-02-08",
    teamA: {
      id: "3",
      name: "EVOS",
      logo: "/placeholder.svg?height=32&width=32",
    },
    teamB: {
      id: "4",
      name: "Alter Ego",
      logo: "/placeholder.svg?height=32&width=32",
    },
    description: "Semi-final match of MDL Season 5",
    tags: ["MDL", "Semi-Final", "Season 5"],
    createdBy: {
      id: "2",
      name: "ProAnalyst",
    },
    status: "published",
  },
  {
    id: "3",
    date: "2024-02-07",
    teamA: {
      id: "5",
      name: "Aura",
      logo: "/placeholder.svg?height=32&width=32",
    },
    teamB: {
      id: "6",
      name: "Geek Fam",
      logo: "/placeholder.svg?height=32&width=32",
    },
    description: "Regular season match with unexpected strategies",
    tags: ["MPL", "Regular Season", "Meta Analysis"],
    createdBy: {
      id: "3",
      name: "MetaExpert",
    },
    status: "draft",
  },
];

export const upcomingTournaments = [
  {
    id: "1",
    name: "MPL Season 12",
    shortName: "MPL",
    startDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
    color: "amber",
  },
  {
    id: "2",
    name: "MDL Season 6",
    shortName: "MDL",
    startDate: new Date(Date.now() + 12 * 24 * 60 * 60 * 1000),
    color: "blue",
  },
  {
    id: "3",
    name: "MSC 2024",
    shortName: "MSC",
    startDate: new Date(Date.now() + 28 * 24 * 60 * 60 * 1000),
    color: "purple",
  },
];

export const quickActions = [
  {
    title: "Create Analysis",
    description: "Start a new match analysis",
    icon: Plus,
    href: "/dashboard/match-analysis/create",
    color: "bg-gradient-to-br from-blue-500 to-blue-600",
  },
  {
    title: "Recent Drafts",
    description: "Continue your work",
    icon: Clock,
    href: "/dashboard/analysis?filter=draft",
    color: "bg-gradient-to-br from-purple-500 to-purple-600",
  },
  {
    title: "Quick Reports",
    description: "Generate insights",
    icon: Zap,
    href: "/dashboard/reports/generate",
    color: "bg-gradient-to-br from-emerald-500 to-emerald-600",
  },
  {
    title: "Manage Teams",
    description: "Update team data",
    icon: Shield,
    href: "/dashboard/teams",
    color: "bg-gradient-to-br from-amber-500 to-amber-600",
  },
];