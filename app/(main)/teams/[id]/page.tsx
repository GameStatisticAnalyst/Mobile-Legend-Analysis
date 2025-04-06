import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Separator from "@/components/ui/separator"
import { Trophy, Users, Calendar, MapPin, BarChart2, Award, Clock, Shield, Target, Flag } from 'lucide-react'

import {getTeamById} from './placeholder'

export default async function TeamDetailPage({ params }: { params: { id: string } }) {
  const team = await getTeamById(params.id)
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-8">
        {/* Team Header */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 p-6 rounded-xl">
          <div className="relative w-32 h-32 md:w-40 md:h-40">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute inset-2 bg-white/90 dark:bg-gray-800/90 rounded-full"></div>
            <div className="absolute inset-3 overflow-hidden rounded-full">
              <Image
                src={team.logo || "/placeholder.svg"}
                alt={team.name}
                width={160}
                height={160}
                className="object-cover"
              />
            </div>
          </div>

          <div className="text-center md:text-left space-y-2 flex-1">
            <div className="flex flex-col md:flex-row md:items-center gap-2">
              <h1 className="text-3xl md:text-4xl font-bold">{team.name}</h1>
              <div className="flex justify-center md:justify-start">
                <Badge className="ml-0 md:ml-2 bg-gradient-to-r from-blue-500 to-purple-600">
                  <Flag className="w-3 h-3 mr-1" /> {team.country}
                </Badge>
              </div>
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>Founded: {team.founded}</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                <span>{team.players.length} Players</span>
              </div>
              <div className="flex items-center gap-1">
                <Trophy className="w-4 h-4" />
                <span>{team.achievements.length} Achievements</span>
              </div>
              <div className="flex items-center gap-1">
                <BarChart2 className="w-4 h-4" />
                <span>{team.stats.winRate}% Win Rate</span>
              </div>
            </div>

            <p className="text-muted-foreground max-w-3xl">
              {team.description}
            </p>
          </div>
        </div>

        {/* Team Content */}
        <Tabs defaultValue="overview" className="space-y-6 ">
          <TabsList className="grid grid-cols-4 md:w-[400px] bg-white/90 dark:bg-gray-800/90">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="players">Players</TabsTrigger>
            <TabsTrigger value="matches">Matches</TabsTrigger>
            <TabsTrigger value="stats">Stats</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* Achievements */}
            <Card className="bg-white/90 dark:bg-gray-800/90">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-amber-500" />
                  Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {team.achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-900 rounded-lg"
                    >
                      <div className="flex-shrink-0 w-8 h-8 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center">
                        <Award className="w-4 h-4 text-amber-500" />
                      </div>
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Key Players */}
            <Card className="bg-white/90 dark:bg-gray-800/90">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-500" />
                  Key Players
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {team.players.map((player) => (
                    <div
                      key={player.id}
                      className="flex flex-col items-center p-4 bg-slate-50 dark:bg-slate-900 rounded-lg text-center"
                    >
                      <div className="relative w-16 h-16 mb-3">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-20"></div>
                        <div className="absolute inset-1 bg-white dark:bg-gray-900 rounded-full"></div>
                        <div className="absolute inset-2 overflow-hidden rounded-full">
                          <Image
                            src={player.image || "/placeholder.svg"}
                            alt={player.name}
                            width={64}
                            height={64}
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <h3 className="font-bold">{player.name}</h3>
                      <Badge variant="outline" className="mt-1">
                        {player.role}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Performance */}
            <Card className="bg-white/90 dark:bg-gray-800/90">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-green-500" />
                  Recent Performance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {team.recentMatches.map((match) => (
                    <div
                      key={match.id}
                      className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-900 rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                            match.result === "Win"
                              ? "bg-green-100 dark:bg-green-900/30"
                              : "bg-red-100 dark:bg-red-900/30"
                          }`}
                        >
                          <span
                            className={`text-sm font-bold ${
                              match.result === "Win"
                                ? "text-green-600 dark:text-green-400"
                                : "text-red-600 dark:text-red-400"
                            }`}
                          >
                            {match.result === "Win" ? "W" : "L"}
                          </span>
                        </div>
                        <div>
                          <div className="font-medium">vs {match.opponent}</div>
                          <div className="text-xs text-muted-foreground">
                            {match.tournament}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">{match.score}</div>
                        <div className="text-xs text-muted-foreground">
                          {match.date}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Players Tab */}
          <TabsContent value="players" className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  {team.players.map((player) => (
                    <div
                      key={player.id}
                      className="flex flex-col md:flex-row gap-4 p-4 bg-slate-50 dark:bg-slate-900 rounded-lg"
                    >
                      <div className="flex-shrink-0 flex items-center justify-center md:justify-start">
                        <div className="relative w-20 h-20">
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-20"></div>
                          <div className="absolute inset-1 bg-white dark:bg-gray-900 rounded-full"></div>
                          <div className="absolute inset-2 overflow-hidden rounded-full">
                            <Image
                              src={player.image || "/placeholder.svg"}
                              alt={player.name}
                              width={80}
                              height={80}
                              className="object-cover"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="flex-1 space-y-2">
                        <div className="flex flex-col md:flex-row md:items-center gap-2">
                          <h3 className="text-xl font-bold">{player.name}</h3>
                          <Badge className="w-fit">{player.role}</Badge>
                          <Badge variant="outline" className="w-fit">
                            <Flag className="w-3 h-3 mr-1" /> {player.country}
                          </Badge>
                        </div>

                        <div className="text-sm text-muted-foreground">
                          Joined:{" "}
                          {new Date(player.joinDate).toLocaleDateString()}
                        </div>

                        <div className="pt-2">
                          <div className="text-sm font-medium mb-1">
                            Signature Heroes:
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {player.signature.map((hero, idx) => (
                              <Badge key={idx} variant="secondary">
                                {hero}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Matches Tab */}
          <TabsContent value="matches" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Matches</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {team.recentMatches.map((match) => (
                    <div
                      key={match.id}
                      className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-slate-50 dark:bg-slate-900 rounded-lg"
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                            match.result === "Win"
                              ? "bg-green-100 dark:bg-green-900/30"
                              : "bg-red-100 dark:bg-red-900/30"
                          }`}
                        >
                          <span
                            className={`text-lg font-bold ${
                              match.result === "Win"
                                ? "text-green-600 dark:text-green-400"
                                : "text-red-600 dark:text-red-400"
                            }`}
                          >
                            {match.result === "Win" ? "W" : "L"}
                          </span>
                        </div>
                        <div>
                          <div className="text-lg font-medium">
                            {team.name} vs {match.opponent}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {match.tournament}
                          </div>
                        </div>
                      </div>
                      <div className="mt-3 md:mt-0 flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
                        <div className="text-center md:text-right">
                          <div className="text-xl font-bold">{match.score}</div>
                          <div className="text-xs text-muted-foreground">
                            Final Score
                          </div>
                        </div>
                        <div className="text-center md:text-right">
                          <div className="font-medium">{match.date}</div>
                          <div className="text-xs text-muted-foreground">
                            Match Date
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Stats Tab */}
          <TabsContent value="stats" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart2 className="w-5 h-5 text-blue-500" />
                    Performance Stats
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Win Rate</span>
                      <div className="flex items-center">
                        <span className="font-bold text-lg">
                          {team.stats.winRate}%
                        </span>
                        <div className="w-32 h-2 ml-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                            style={{ width: `${team.stats.winRate}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <Separator />
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">
                        Total Matches
                      </span>
                      <span className="font-bold">
                        {team.stats.totalMatches}
                      </span>
                    </div>
                    <Separator />
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Wins</span>
                      <span className="font-bold text-green-600 dark:text-green-400">
                        {team.stats.totalWins}
                      </span>
                    </div>
                    <Separator />
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Losses</span>
                      <span className="font-bold text-red-600 dark:text-red-400">
                        {team.stats.totalLosses}
                      </span>
                    </div>
                    <Separator />
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">
                        Avg. Game Duration
                      </span>
                      <span className="font-bold">
                        {team.stats.avgGameDuration}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-purple-500" />
                    Most Played Heroes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {team.stats.mostPlayedHeroes.map((hero, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 p-2 bg-slate-50 dark:bg-slate-900 rounded-lg"
                      >
                        <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                          <Target className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                        </div>
                        <span className="font-medium">{hero}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
