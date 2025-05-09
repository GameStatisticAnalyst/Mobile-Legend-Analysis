import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import Image from "next/image";

import { getTournamentData } from "./placeholder";
import Header from "@/components/pages/section/tournaments/SectionPage/Header";

export default function TournamentDetail({
  params,
}: {
  params: { id: string };
}) {
  const tournament = getTournamentData(params.id);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-8">
        <Header tournament={tournament} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Tournament Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between">
                <span className="text-gray-500 dark:text-gray-400">
                  Organizer
                </span>
                <span className="font-medium">{tournament.organizer}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500 dark:text-gray-400">Status</span>
                <span className="font-medium capitalize">
                  {tournament.status}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500 dark:text-gray-400">Teams</span>
                <span className="font-medium">{tournament.teams.length}</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Schedule</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex justify-between">
                  <span className="text-gray-500 dark:text-gray-400">
                    Start Date
                  </span>
                  <span className="font-medium">{tournament.startDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 dark:text-gray-400">
                    End Date
                  </span>
                  <span className="font-medium">{tournament.endDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 dark:text-gray-400">
                    Duration
                  </span>
                  <span className="font-medium">8 Weeks</span>
                </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Prize Distribution</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex justify-between">
                  <span className="text-gray-500 dark:text-gray-400">
                    1st Place
                  </span>
                  <span className="font-medium">$150,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 dark:text-gray-400">
                    2nd Place
                  </span>
                  <span className="font-medium">$75,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 dark:text-gray-400">
                    3rd Place
                  </span>
                  <span className="font-medium">$40,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 dark:text-gray-400">
                    4th Place
                  </span>
                  <span className="font-medium">$20,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 dark:text-gray-400">
                    5th-8th Place
                  </span>
                  <span className="font-medium">$15,000</span>
                </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="teams" className="space-y-6">
          <TabsList className="grid grid-cols-4 md:w-[400px]">
            <TabsTrigger value="teams">Teams</TabsTrigger>
            <TabsTrigger value="matches">Matches</TabsTrigger>
            <TabsTrigger value="standings">Standings</TabsTrigger>
            <TabsTrigger value="stats">Stats</TabsTrigger>
          </TabsList>

          <TabsContent value="teams" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Participating Teams</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {tournament.teams.map((team) => (
                    <Link
                      href={`/teams/${team.id}`}
                      key={team.id}
                      className="flex flex-col items-center p-4 rounded-lg border hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                    >
                      <Avatar className="w-16 h-16 mb-3">
                        <AvatarImage
                          src={team.logo || "/placeholder.svg"}
                          alt={team.name}
                        />
                        <AvatarFallback>
                          {team.name.substring(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="font-medium text-center">{team.name}</div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="matches">
            <Card>
              <CardHeader>
                <CardTitle>Match Results</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {tournament.matches.map((match) => (
                    <Link
                      href={`/matches/${match.id}`}
                      key={match.id}
                      className="block p-4 rounded-lg border hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                          <div className="font-medium">{match.round}</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            {match.date}
                          </div>
                        </div>

                        <div className="flex items-center justify-center gap-2">
                          <div className="text-right font-medium">
                            {match.team1}
                          </div>
                          <div className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-md font-bold">
                            {match.score}
                          </div>
                          <div className="text-left font-medium">
                            {match.team2}
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="standings">
            <Card>
              <CardHeader>
                <CardTitle>Final Standings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4">Position</th>
                        <th className="text-left py-3 px-4">Team</th>
                        <th className="text-right py-3 px-4">Points</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tournament.standings.map((standing) => (
                        <tr
                          key={standing.position}
                          className="border-b hover:bg-gray-50 dark:hover:bg-gray-800"
                        >
                          <td className="py-3 px-4">
                            <Badge
                              variant={
                                standing.position === 1 ? "default" : "outline"
                              }
                            >
                              {standing.position}
                            </Badge>
                          </td>
                          <td className="py-3 px-4 font-medium">
                            {standing.team}
                          </td>
                          <td className="py-3 px-4 text-right">
                            {standing.points}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="stats">
            <Card>
              <CardHeader>
                <CardTitle>Tournament Statistics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-medium mb-4">General Stats</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-500 dark:text-gray-400">
                          Total Matches
                        </span>
                        <span className="font-medium">45</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500 dark:text-gray-400">
                          Total Games
                        </span>
                        <span className="font-medium">124</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500 dark:text-gray-400">
                          Average Game Time
                        </span>
                        <span className="font-medium">18:32</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500 dark:text-gray-400">
                          Most Picked Hero
                        </span>
                        <span className="font-medium">Mathilda (78%)</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500 dark:text-gray-400">
                          Most Banned Hero
                        </span>
                        <span className="font-medium">Lancelot (92%)</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-4">Team Stats</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-500 dark:text-gray-400">
                          Highest Win Rate
                        </span>
                        <span className="font-medium">ONIC Esports (78%)</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500 dark:text-gray-400">
                          Most First Bloods
                        </span>
                        <span className="font-medium">RRQ (65%)</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500 dark:text-gray-400">
                          Most Turtles Secured
                        </span>
                        <span className="font-medium">ONIC Esports (72%)</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500 dark:text-gray-400">
                          Most Lords Secured
                        </span>
                        <span className="font-medium">EVOS (58%)</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500 dark:text-gray-400">
                          Tournament MVP
                        </span>
                        <span className="font-medium">Kairi (ONIC)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Related Content */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Related Content</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {tournament.relatedContent.map((content) => (
              <Link href={`/${content.type}/${content.id}`} key={content.id}>
                <Card>
                  <div className="">
                    <Image
                      src={content.image || "/placeholder.svg"}
                      alt={content.title}
                      width={50}
                      height={50}
                      className="w-20 h-20 object-cover rounded-full"
                    />
                  </div>
                  <CardContent className="p-4">
                    <Badge className="mb-2">{content.type}</Badge>
                    <h3 className="font-medium line-clamp-2">
                      {content.title}
                    </h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
