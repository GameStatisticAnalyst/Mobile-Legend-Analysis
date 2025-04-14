// "use client";

import AdminLayout from "@/layout/admin-layout";
import StatCard from "@/components/dashboard/stat-card";
import RecentActivity from "@/components/dashboard/recent-activities";
import RecentAnalyses from "@/components/dashboard/recent-analyses";
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
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Button from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";

import { useSession } from "next-auth/react";

// import {
//   quickActions,
//   recentActivities,
//   recentAnalyses,
//   stats,
//   upcomingTournaments,
// } from "./placeholder";

const stats: Stat[] = [
  {
    title: "Total Analyses",
    value: "2,345",
    icon: <BarChart3 className="h-4 w-4 text-blue-600" />,
    description: "Total analyses created",
    trend: "up",
    trendValue: "12% from last month",
  },
  {
    title: "Total Users",
    value: "1,234",
    icon: <Users className="h-4 w-4 text-emerald-600" />,
    description: "Active users on platform",
    trend: "up",
    trendValue: "8% from last month",
  },
  {
    title: "Teams",
    value: "56",
    icon: <Shield className="h-4 w-4 text-purple-600" />,
    description: "Teams registered",
    trend: "up",
    trendValue: "3% from last month",
  },
  {
    title: "Reports",
    value: "12",
    icon: <FileText className="h-4 w-4 text-amber-600" />,
    description: "Pending reports",
    trend: "down",
    trendValue: "5% from last month",
  },
];

const recentActivities: ActivityType[] = [
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

const recentAnalyses: AdminAnalysis[] = [
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

const upcomingTournaments = [
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

const quickActions = [
  {
    title: "Create Analysis",
    description: "Start a new match analysis",
    icon: <Plus className="h-5 w-5" />,
    href: "/dashboard/analysis/create",
    color: "bg-gradient-to-br from-blue-500 to-blue-600",
  },
  {
    title: "Recent Drafts",
    description: "Continue your work",
    icon: <Clock className="h-5 w-5" />,
    href: "/dashboard/analysis?filter=draft",
    color: "bg-gradient-to-br from-purple-500 to-purple-600",
  },
  {
    title: "Quick Reports",
    description: "Generate insights",
    icon: <Zap className="h-5 w-5" />,
    href: "/dashboard/reports/generate",
    color: "bg-gradient-to-br from-emerald-500 to-emerald-600",
  },
  {
    title: "Manage Teams",
    description: "Update team data",
    icon: <Shield className="h-5 w-5" />,
    href: "/dashboard/teams",
    color: "bg-gradient-to-br from-amber-500 to-amber-600",
  },
];

// Helper function to get greeting based on time of day
function getGreeting(): string {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
}

export default async function AdminDashboard() {
  // const { data: session, status } = useSession();
  const greeting = getGreeting();
  return (
    <AdminLayout>
      <div className="p-6 max-w-7xl mx-auto">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/3 blur-3xl"></div>

            <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <h1 className="text-3xl font-bold mb-2">{greeting}, Admin!</h1>
                <p className="text-white/80">
                  Welcome back to your ML Analysis dashboard
                </p>
              </div>

              <div className="flex items-center gap-4 bg-white/20 p-4 rounded-lg backdrop-blur-sm">
                <div className="hidden md:block">
                  <Activity className="h-10 w-10" />
                </div>
                <div>
                  <p className="text-sm font-medium">Platform Activity</p>
                  <div className="flex items-center gap-2">
                    <p className="text-2xl font-bold">87%</p>
                    <span className="text-xs bg-green-500/20 text-green-300 px-2 py-0.5 rounded-full">
                      +12%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Access Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Quick Access</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((action, index) => (
              <Link href={action.href} key={index}>
                <Card className="h-full hover:shadow-md transition-shadow border-0 shadow">
                  <CardContent className="p-6">
                    <div
                      className={`${action.color} text-white p-3 rounded-lg inline-flex mb-4 mt-4`}
                    >
                      {/* <action.icon className="h-4 w-4 text-blue-600"/> */}
                      {action.icon}
                    </div>
                    <h3 className="font-medium">{action.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {action.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Stats Overview */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Stats Overview</h2>
            <Button variant="outline" size="sm">
              View Reports
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                title={stat.title}
                value={stat.value}
                icon={stat.icon}
                description={stat.description}
                trend={stat.trend}
                trendValue={stat.trendValue}
              />
            ))}
          </div>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analyses">Analyses</TabsTrigger>
              <TabsTrigger value="tournaments">Tournaments</TabsTrigger>
            </TabsList>
            <Button variant="outline" size="sm">
              View All
            </Button>
          </div>

          <TabsContent value="overview" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Analytics Card */}
              <Card className="col-span-1 lg:col-span-2 overflow-hidden border-0 shadow">
                <CardHeader className="bg-gradient-to-r from-blue-600/90 to-purple-600/90 text-white mb-8">
                  <CardTitle>Weekly Analytics</CardTitle>
                  <CardDescription className="text-white/80">
                    Your platform performance this week
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium">
                          User Engagement
                        </div>
                        <div className="text-sm text-muted-foreground">78%</div>
                      </div>
                      <Progress value={78} className="h-2" />
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium">
                          Content Creation
                        </div>
                        <div className="text-sm text-muted-foreground">62%</div>
                      </div>
                      <Progress value={62} className="h-2" />
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium">
                          Platform Growth
                        </div>
                        <div className="text-sm text-muted-foreground">45%</div>
                      </div>
                      <Progress value={45} className="h-2" />
                    </div>

                    <div className="h-48 w-full bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center">
                      <p className="text-muted-foreground">
                        Analytics Chart Placeholder
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <RecentActivity activities={recentActivities} />
            </div>
          </TabsContent>

          <TabsContent value="analyses" className="mt-0">
            <RecentAnalyses analyses={recentAnalyses} />
          </TabsContent>

          <TabsContent value="tournaments" className="mt-0">
            <Card className="overflow-hidden border-0 shadow">
              <CardHeader className="bg-gradient-to-r from-amber-600/90 to-red-600/90 text-white">
                <CardTitle>Upcoming Tournaments</CardTitle>
                <CardDescription className="text-white/80">
                  Next 30 days
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {upcomingTournaments.map((tournament) => {
                    const daysUntil = Math.ceil(
                      (tournament.startDate.getTime() - Date.now()) /
                        (1000 * 60 * 60 * 24)
                    );

                    return (
                      <div
                        key={tournament.id}
                        className={`flex items-center gap-4 p-4 bg-${tournament.color}-50 dark:bg-${tournament.color}-950/30 rounded-lg`}
                      >
                        <div
                          className={`bg-${tournament.color}-100 dark:bg-${tournament.color}-900 h-12 w-12 rounded-full flex items-center justify-center text-${tournament.color}-600 dark:text-${tournament.color}-400 font-bold`}
                        >
                          {tournament.shortName}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <p className="font-medium">{tournament.name}</p>
                            <span
                              className={`text-xs bg-${tournament.color}-100 dark:bg-${tournament.color}-900/50 text-${tournament.color}-600 dark:text-${tournament.color}-400 px-2 py-0.5 rounded-full`}
                            >
                              {daysUntil} days
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Starts on{" "}
                            {tournament.startDate.toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
              <CardFooter className="bg-slate-50 dark:bg-slate-900/50 border-t px-6 py-4">
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/admin/tournaments">
                    View All Tournaments
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Recent Matches */}
          <Card className="border-0 shadow">
            <CardHeader className="pb-3">
              <CardTitle>Recent Matches</CardTitle>
              <CardDescription>Latest professional matches</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-900/50 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <Image
                        src="/images/profile.jpg"
                        className="h-10 w-10"
                        width={50}
                        height={50}
                        alt="Profile"
                      />
                      <div className="text-sm">
                        <p className="font-medium">Team {i}A</p>
                        <p className="text-muted-foreground">Winner</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold">3</span>
                      <span className="text-xs text-muted-foreground">vs</span>
                      <span className="text-sm font-bold">1</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="text-sm text-right">
                        <p className="font-medium">Team {i}B</p>
                        <p className="text-muted-foreground">Runner-up</p>
                      </div>
                      <Image
                        src="/images/profile.jpg"
                        className="h-10 w-10"
                        width={50}
                        height={50}
                        alt="Profile"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="pt-3">
              <Button variant="ghost" size="sm" className="w-full" asChild>
                <Link href="/admin/matches">View All Matches</Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Calendar */}
          <Card className="border-0 shadow">
            <CardHeader className="pb-3">
              <CardTitle>Upcoming Events</CardTitle>
              <CardDescription>
                Your schedule for the next 7 days
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-3 bg-slate-50 dark:bg-slate-900/50 rounded-lg"
                  >
                    <div className="bg-slate-200 dark:bg-slate-800 h-12 w-12 rounded-lg flex flex-col items-center justify-center text-center">
                      <span className="text-xs text-muted-foreground">May</span>
                      <span className="text-lg font-bold">{i + 10}</span>
                    </div>
                    <div>
                      <p className="font-medium">Event {i} Title</p>
                      <p className="text-sm text-muted-foreground">
                        10:00 AM - 11:30 AM
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <Calendar className="h-3 w-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">
                          Online Meeting
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="pt-3">
              <Button variant="ghost" size="sm" className="w-full" asChild>
                <Link href="/admin/calendar">View Calendar</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
}
