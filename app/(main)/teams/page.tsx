import { ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Filter, Trophy, Users, BarChart3, MapPin } from "lucide-react";

import Input from "@/components/ui/input"
import Button from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { allTeams, featuredTeams, countries, regions } from "./placeholderData";

export default function TeamsPage():ReactElement {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 -z-10"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-300/20 rounded-full filter blur-3xl -z-10 transform translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-300/20 rounded-full filter blur-3xl -z-10 transform -translate-x-1/4 translate-y-1/4"></div>

        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
              Professional Teams
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Explore top Mobile Legends professional teams from around the
              world
            </p>
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
              <Input
                placeholder="Search for teams by name, country, or region..."
                className="pl-10 py-6 rounded-full border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 shadow-md"
              />
              <Button className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600">
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="w-full lg:w-1/4 space-y-6">
              {/* Filters */}
              <Card className="border-gray-200 dark:border-gray-700 shadow-sm bg-white/90 dark:bg-gray-800/90">
                <CardContent className="">
                  <div className="flex items-center justify-between mb-4 mt-4">
                    <h3 className="text-lg font-semibold">Filters</h3>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-blue-600 dark:text-blue-400 h-auto p-0"
                    >
                      Reset
                    </Button>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium mb-2">Regions</h4>
                      <div className="space-y-2">
                        {regions.map((region) => (
                          <div
                            key={region.id}
                            className="flex items-center justify-between"
                          >
                            <label className="text-sm text-gray-600 dark:text-gray-300 flex items-center gap-2 cursor-pointer">
                              <input
                                type="checkbox"
                                className="rounded border-gray-300"
                              />
                              {region.name}
                            </label>
                            <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded-full">
                              {region.count}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium mb-2">Countries</h4>
                      <div className="space-y-2 max-h-48 overflow-y-auto pr-2">
                        {countries.map((country) => (
                          <div
                            key={country.id}
                            className="flex items-center justify-between"
                          >
                            <label className="text-sm text-gray-600 dark:text-gray-300 flex items-center gap-2 cursor-pointer">
                              <input
                                type="checkbox"
                                className="rounded border-gray-300"
                              />
                              {country.name}
                            </label>
                            <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded-full">
                              {country.count}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium mb-2">Win Rate</h4>
                      <div className="grid grid-cols-2 gap-2">
                        <Input
                          type="number"
                          placeholder="Min %"
                          className="text-sm"
                        />
                        <Input
                          type="number"
                          placeholder="Max %"
                          className="text-sm"
                        />
                      </div>
                    </div>

                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600">
                      <Filter className="h-4 w-4 mr-2" />
                      Apply Filters
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Top Teams Stats */}
              <Card className="border-gray-200 dark:border-gray-700 shadow-sm bg-white/90 dark:bg-gray-800/90">
                <CardContent className="">
                  <h3 className="text-lg font-semibold mb-4 mt-4">
                    Top Teams by Win Rate
                  </h3>
                  <div className="space-y-3">
                    {allTeams
                      .sort((a, b) => b.winRate - a.winRate)
                      .slice(0, 5)
                      .map((team, index) => (
                        <div key={team.id} className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-xs font-medium">
                            {index + 1}
                          </div>
                          <div className="w-8 h-8 rounded-full overflow-hidden">
                            <Image
                              src={team.logo || "/placeholder.svg"}
                              alt={team.name}
                              width={32}
                              height={32}
                            />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">
                                {team.name}
                              </span>
                              <span className="text-sm font-bold text-green-600 dark:text-green-400">
                                {team.winRate}%
                              </span>
                            </div>
                            <div className="w-full h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full mt-1">
                              <div
                                className="h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full"
                                style={{ width: `${team.winRate}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="w-full lg:w-3/4">
              <Tabs defaultValue="all" className="w-full">
                <div className="flex items-center justify-between mb-6">
                  <TabsList className="bg-white/90 dark:bg-gray-800/90 pt-2 px-1 rounded-lg">
                    <TabsTrigger value="all" className="rounded-md">
                      All Teams
                    </TabsTrigger>
                    <TabsTrigger value="featured" className="rounded-md">
                      Featured
                    </TabsTrigger>
                    <TabsTrigger value="sea" className="rounded-md">
                      SEA
                    </TabsTrigger>
                    <TabsTrigger value="international" className="rounded-md">
                      International
                    </TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="all">
                  <div className="grid md:grid-cols-2 2xl:grid-cols-3 gap-6">
                    {allTeams.map((team) => (
                      <Link href={`/teams/${team.id}`} key={team.id}>
                        <Card className="border-white/80 pt-5 dark:border-gray-700 bg-white/90 dark:bg-gray-800/90 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 cursor-pointer h-full">
                          <CardContent className="">
                            <div className="flex flex-col items-center text-center mb-4">
                              <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-gray-100 dark:border-gray-800">
                                <Image
                                className="object-contain"
                                  src={team.logo || "/placeholder.svg"}
                                  alt={team.name}
                                  width={96}
                                  height={96}
                                />
                              </div>
                              <h3 className="text-xl font-bold">{team.name}</h3>
                              <div className="flex items-center mt-1 text-gray-500 dark:text-gray-400">
                                <MapPin className="h-4 w-4 mr-1" />
                                <span className="text-sm">{team.country}</span>
                              </div>
                            </div>

                            <div className="grid grid-cols-3 gap-2 mb-4">
                              <div className="bg-blue-50 dark:bg-blue-900/20 p-2 rounded-lg text-center">
                                <div className="text-blue-600 dark:text-blue-400 flex justify-center mb-1">
                                  <Trophy className="h-4 w-4" />
                                </div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">
                                  Achievements
                                </div>
                                <div className="font-bold">
                                  {team.achievements.length}
                                </div>
                              </div>
                              <div className="bg-purple-50 dark:bg-purple-900/20 p-2 rounded-lg text-center">
                                <div className="text-purple-600 dark:text-purple-400 flex justify-center mb-1">
                                  <Users className="h-4 w-4" />
                                </div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">
                                  Players
                                </div>
                                <div className="font-bold">{team.players}</div>
                              </div>
                              <div className="bg-green-50 dark:bg-green-900/20 p-2 rounded-lg text-center">
                                <div className="text-green-600 dark:text-green-400 flex justify-center mb-1">
                                  <BarChart3 className="h-4 w-4" />
                                </div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">
                                  Win Rate
                                </div>
                                <div className="font-bold">{team.winRate}%</div>
                              </div>
                            </div>

                            <div>
                              <h4 className="text-sm font-medium mb-2">
                                Top Achievements
                              </h4>
                              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                                {team.achievements
                                  .slice(0, 2)
                                  .map((achievement, index) => (
                                    <li
                                      key={index}
                                      className="flex items-center"
                                    >
                                      <span className="h-1.5 w-1.5 rounded-full bg-yellow-500 mr-2"></span>
                                      {achievement}
                                    </li>
                                  ))}
                                {team.achievements.length > 2 && (
                                  <li className="text-blue-600 dark:text-blue-400 text-xs">
                                    +{team.achievements.length - 2} more
                                    achievements
                                  </li>
                                )}
                              </ul>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="featured">
                  <div className="grid md:grid-cols-2 2xl:grid-cols-3 gap-6">
                    {featuredTeams.map((team) => (
                      <Link href={`/teams/${team.id}`} key={team.id}>
                        <Card className="border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 cursor-pointer h-full">
                          <CardContent className="">
                            <div className="flex flex-col items-center text-center mb-4">
                              <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-gray-100 dark:border-gray-800">
                                <Image
                                  src={team.logo || "/placeholder.svg"}
                                  alt={team.name}
                                  width={96}
                                  height={96}
                                />
                              </div>
                              <h3 className="text-xl font-bold">{team.name}</h3>
                              <div className="flex items-center mt-1 text-gray-500 dark:text-gray-400">
                                <MapPin className="h-4 w-4 mr-1" />
                                <span className="text-sm">{team.country}</span>
                              </div>
                            </div>

                            <div className="grid grid-cols-3 gap-2 mb-4">
                              <div className="bg-blue-50 dark:bg-blue-900/20 p-2 rounded-lg text-center">
                                <div className="text-blue-600 dark:text-blue-400 flex justify-center mb-1">
                                  <Trophy className="h-4 w-4" />
                                </div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">
                                  Achievements
                                </div>
                                <div className="font-bold">
                                  {team.achievements.length}
                                </div>
                              </div>
                              <div className="bg-purple-50 dark:bg-purple-900/20 p-2 rounded-lg text-center">
                                <div className="text-purple-600 dark:text-purple-400 flex justify-center mb-1">
                                  <Users className="h-4 w-4" />
                                </div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">
                                  Players
                                </div>
                                <div className="font-bold">{team.players}</div>
                              </div>
                              <div className="bg-green-50 dark:bg-green-900/20 p-2 rounded-lg text-center">
                                <div className="text-green-600 dark:text-green-400 flex justify-center mb-1">
                                  <BarChart3 className="h-4 w-4" />
                                </div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">
                                  Win Rate
                                </div>
                                <div className="font-bold">{team.winRate}%</div>
                              </div>
                            </div>

                            <div>
                              <h4 className="text-sm font-medium mb-2">
                                Top Achievements
                              </h4>
                              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                                {team.achievements
                                  .slice(0, 2)
                                  .map((achievement, index) => (
                                    <li
                                      key={index}
                                      className="flex items-center"
                                    >
                                      <span className="h-1.5 w-1.5 rounded-full bg-yellow-500 mr-2"></span>
                                      {achievement}
                                    </li>
                                  ))}
                                {team.achievements.length > 2 && (
                                  <li className="text-blue-600 dark:text-blue-400 text-xs">
                                    +{team.achievements.length - 2} more
                                    achievements
                                  </li>
                                )}
                              </ul>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="sea">
                  <div className="grid md:grid-cols-2 2xl:grid-cols-3 gap-6">
                    {allTeams
                      .filter((team) => team.region === "SEA")
                      .map((team) => (
                        <Link href={`/teams/${team.id}`} key={team.id}>
                          <Card className="border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 cursor-pointer h-full">
                            <CardContent className="">
                              <div className="flex flex-col items-center text-center mb-4">
                                <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-gray-100 dark:border-gray-800">
                                  <Image
                                    src={team.logo || "/placeholder.svg"}
                                    alt={team.name}
                                    width={96}
                                    height={96}
                                  />
                                </div>
                                <h3 className="text-xl font-bold">
                                  {team.name}
                                </h3>
                                <div className="flex items-center mt-1 text-gray-500 dark:text-gray-400">
                                  <MapPin className="h-4 w-4 mr-1" />
                                  <span className="text-sm">
                                    {team.country}
                                  </span>
                                </div>
                              </div>

                              <div className="grid grid-cols-3 gap-2 mb-4">
                                <div className="bg-blue-50 dark:bg-blue-900/20 p-2 rounded-lg text-center">
                                  <div className="text-blue-600 dark:text-blue-400 flex justify-center mb-1">
                                    <Trophy className="h-4 w-4" />
                                  </div>
                                  <div className="text-xs text-gray-500 dark:text-gray-400">
                                    Achievements
                                  </div>
                                  <div className="font-bold">
                                    {team.achievements.length}
                                  </div>
                                </div>
                                <div className="bg-purple-50 dark:bg-purple-900/20 p-2 rounded-lg text-center">
                                  <div className="text-purple-600 dark:text-purple-400 flex justify-center mb-1">
                                    <Users className="h-4 w-4" />
                                  </div>
                                  <div className="text-xs text-gray-500 dark:text-gray-400">
                                    Players
                                  </div>
                                  <div className="font-bold">
                                    {team.players}
                                  </div>
                                </div>
                                <div className="bg-green-50 dark:bg-green-900/20 p-2 rounded-lg text-center">
                                  <div className="text-green-600 dark:text-green-400 flex justify-center mb-1">
                                    <BarChart3 className="h-4 w-4" />
                                  </div>
                                  <div className="text-xs text-gray-500 dark:text-gray-400">
                                    Win Rate
                                  </div>
                                  <div className="font-bold">
                                    {team.winRate}%
                                  </div>
                                </div>
                              </div>

                              <div>
                                <h4 className="text-sm font-medium mb-2">
                                  Top Achievements
                                </h4>
                                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                                  {team.achievements
                                    .slice(0, 2)
                                    .map((achievement, index) => (
                                      <li
                                        key={index}
                                        className="flex items-center"
                                      >
                                        <span className="h-1.5 w-1.5 rounded-full bg-yellow-500 mr-2"></span>
                                        {achievement}
                                      </li>
                                    ))}
                                  {team.achievements.length > 2 && (
                                    <li className="text-blue-600 dark:text-blue-400 text-xs">
                                      +{team.achievements.length - 2} more
                                      achievements
                                    </li>
                                  )}
                                </ul>
                              </div>
                            </CardContent>
                          </Card>
                        </Link>
                      ))}
                  </div>
                </TabsContent>

                <TabsContent value="international">
                  <div className="grid md:grid-cols-2 2xl:grid-cols-3 gap-6">
                    <div className="col-span-full text-center py-12">
                      <p className="text-gray-500 dark:text-gray-400">
                        No international teams available in the current dataset.
                      </p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>

              {/* Pagination */}
              <div className="flex justify-center mt-12">
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="icon" disabled>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </Button>
                  <Button
                    variant="outline"
                    className="bg-blue-50 text-blue-600 border-blue-200"
                  >
                    1
                  </Button>
                  <Button variant="outline">2</Button>
                  <Button variant="outline">3</Button>
                  <Button variant="outline" size="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
