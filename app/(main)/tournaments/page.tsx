import Button from "@/components/ui/button"
import Input from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Filter, Calendar, Trophy, Users, MapPin, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { upcomingTournaments, ongoingTournaments, pastTournaments } from "./placeholderData"

const allTournaments = [...upcomingTournaments, ...ongoingTournaments, ...pastTournaments]

const regions = [
  { id: "1", name: "Southeast Asia", count: 12 },
  { id: "2", name: "East Asia", count: 3 },
  { id: "3", name: "North America", count: 2 },
  { id: "4", name: "Europe", count: 2 },
  { id: "5", name: "MENA", count: 1 },
]

const types = [
  { id: "1", name: "World Championship", count: 2 },
  { id: "2", name: "Regular Season", count: 8 },
  { id: "3", name: "Regional Championship", count: 4 },
  { id: "4", name: "Development League", count: 3 },
  { id: "5", name: "Invitational", count: 3 },
]

export default function TournamentsPage() {
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
              Tournaments
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Explore past, ongoing, and upcoming Mobile Legends tournaments
              from around the world
            </p>
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
              <Input
                placeholder="Search tournaments by name, location, or type..."
                className="pl-10 py-6 rounded-full border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 shadow-md"
              />
              <Button className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600">
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tournament */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/50 to-purple-600/50 opacity-90"></div>
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=500&width=1200')] bg-cover bg-center mix-blend-overlay"></div>

            <div className="relative p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
              <div className="w-32 h-32 md:w-40 md:h-40 bg-white/20 backdrop-blur-sm rounded-2xl p-4 flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=120&width=120"
                  alt="M5 World Championship"
                  width={120}
                  height={120}
                  className="rounded-lg"
                />
              </div>

              <div className="flex-1 text-white text-center md:text-left">
                <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-3">
                  <Badge
                    variant="default"
                    className="bg-white/20 text-white hover:bg-white/30"
                  >
                    World Championship
                  </Badge>
                  <Badge
                    variant="default"
                    className="bg-white/20 text-white hover:bg-white/30"
                  >
                    16 Teams
                  </Badge>
                  <Badge
                    variant="default"
                    className="bg-white/20 text-white hover:bg-white/30"
                  >
                    $800,000 Prize Pool
                  </Badge>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">
                  M5 World Championship
                </h2>
                <p className="text-white/80 mb-4">
                  The fifth Mobile Legends World Championship featuring the best
                  teams from around the world competing for the ultimate title.
                </p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>Dec 1 - Dec 15, 2024</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>Singapore</span>
                  </div>
                </div>
                <div className="mt-6">
                  <Button variant="default" className=" hover:bg-white/90">
                    View Details
                  </Button>
                </div>
              </div>
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
              <Card className="border-gray-200 dark:border-gray-700 shadow-sm bg-gray-200 dark:bg-gray-800">
                <CardContent className="p-6">
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
                      <h4 className="text-sm font-medium mb-2">
                        Tournament Type
                      </h4>
                      <div className="space-y-2">
                        {types.map((type) => (
                          <div
                            key={type.id}
                            className="flex items-center justify-between"
                          >
                            <label className="text-sm text-gray-600 dark:text-gray-300 flex items-center gap-2 cursor-pointer">
                              <input
                                type="checkbox"
                                className="rounded border-gray-300"
                              />
                              {type.name}
                            </label>
                            <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded-full">
                              {type.count}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium mb-2">Region</h4>
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
                      <h4 className="text-sm font-medium mb-2">Date Range</h4>
                      <div className="grid grid-cols-2 gap-2">
                        <Input type="date" className="text-sm" />
                        <Input type="date" className="text-sm" />
                      </div>
                    </div>

                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600">
                      <Filter className="h-4 w-4 mr-2" />
                      Apply Filters
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Tournament Calendar */}
              <Card className="border-gray-200 dark:border-gray-700 shadow-sm bg-gray-200 dark:bg-gray-800">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 mt-4">
                    Tournament Calendar
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-lg flex flex-col items-center justify-center">
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          APR
                        </span>
                        <span className="text-lg font-bold">15</span>
                      </div>
                      <div>
                        <p className="font-medium">MPL ID Season 13</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          Regular Season Start
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                      <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-lg flex flex-col items-center justify-center">
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          APR
                        </span>
                        <span className="text-lg font-bold">20</span>
                      </div>
                      <div>
                        <p className="font-medium">MPL PH Season 13</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          Regular Season Start
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-pink-50 dark:bg-pink-900/20 rounded-lg">
                      <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-lg flex flex-col items-center justify-center">
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          JUL
                        </span>
                        <span className="text-lg font-bold">10</span>
                      </div>
                      <div>
                        <p className="font-medium">MSC 2024</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          Tournament Start
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-lg flex flex-col items-center justify-center">
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          DEC
                        </span>
                        <span className="text-lg font-bold">01</span>
                      </div>
                      <div>
                        <p className="font-medium">M5 World Championship</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          Tournament Start
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="w-full lg:w-3/4">
              <Tabs defaultValue="all" className="w-full">
                <div className="flex items-center justify-between mb-6">
                  <TabsList className="bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
                    <TabsTrigger value="all" className="rounded-md">
                      All Tournaments
                    </TabsTrigger>
                    <TabsTrigger value="upcoming" className="rounded-md">
                      Upcoming
                    </TabsTrigger>
                    <TabsTrigger value="ongoing" className="rounded-md">
                      Ongoing
                    </TabsTrigger>
                    <TabsTrigger value="past" className="rounded-md">
                      Past
                    </TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="all" className="mt-0">
                  <div className="space-y-8">
                    {/* Ongoing Tournaments */}
                    {ongoingTournaments.length > 0 && (
                      <div>
                        <h2 className="text-2xl font-bold mb-4 flex items-center">
                          <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                          Ongoing Tournaments
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                          {ongoingTournaments.map((tournament) => (
                            <Link
                              href={`/tournaments/${tournament.id}`}
                              key={tournament.id}
                            >
                              <Card className="border-green-200 bg-gray-200 dark:bg-gray-800 dark:border-green-800 border-2 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 cursor-pointer h-full">
                                <CardContent className="p-6">
                                  <div className="flex items-center gap-4 mb-4">
                                    <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 p-2">
                                      <Image
                                        src={
                                          tournament.logo || "/placeholder.svg"
                                        }
                                        alt={tournament.name}
                                        width={48}
                                        height={48}
                                        className="w-full h-full object-contain"
                                      />
                                    </div>
                                    <div>
                                      <h3 className="text-lg font-bold">
                                        {tournament.name}
                                      </h3>
                                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                        <MapPin className="h-3 w-3 mr-1" />
                                        {tournament.location}
                                      </div>
                                    </div>
                                    <Badge className="ml-auto bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                                      Live
                                    </Badge>
                                  </div>

                                  <div className="grid grid-cols-3 gap-2 mb-4">
                                    <div className="bg-gray-50 dark:bg-gray-800 p-2 rounded-lg text-center">
                                      <div className="text-gray-500 dark:text-gray-400 flex justify-center mb-1">
                                        <Calendar className="h-4 w-4" />
                                      </div>
                                      <div className="text-xs text-gray-500 dark:text-gray-400">
                                        Dates
                                      </div>
                                      <div className="text-sm font-medium">
                                        {new Date(
                                          tournament.startDate
                                        ).toLocaleDateString("en-US", {
                                          month: "short",
                                          day: "numeric",
                                        })}{" "}
                                        -{" "}
                                        {new Date(
                                          tournament.endDate
                                        ).toLocaleDateString("en-US", {
                                          month: "short",
                                          day: "numeric",
                                        })}
                                      </div>
                                    </div>
                                    <div className="bg-gray-50 dark:bg-gray-800 p-2 rounded-lg text-center">
                                      <div className="text-gray-500 dark:text-gray-400 flex justify-center mb-1">
                                        <Users className="h-4 w-4" />
                                      </div>
                                      <div className="text-xs text-gray-500 dark:text-gray-400">
                                        Teams
                                      </div>
                                      <div className="text-sm font-medium">
                                        {tournament.teams}
                                      </div>
                                    </div>
                                    <div className="bg-gray-50 dark:bg-gray-800 p-2 rounded-lg text-center">
                                      <div className="text-gray-500 dark:text-gray-400 flex justify-center mb-1">
                                        <Trophy className="h-4 w-4" />
                                      </div>
                                      <div className="text-xs text-gray-500 dark:text-gray-400">
                                        Prize Pool
                                      </div>
                                      <div className="text-sm font-medium">
                                        {tournament.prizePool}
                                      </div>
                                    </div>
                                  </div>

                                  <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 mb-4">
                                    {tournament.description}
                                  </p>

                                  <div className="flex items-center justify-between">
                                    <Badge
                                      variant="outline"
                                      className="text-xs"
                                    >
                                      {tournament.type}
                                    </Badge>
                                    <div className="flex items-center text-green-600 dark:text-green-400 text-sm">
                                      <Clock className="h-3 w-3 mr-1" />
                                      In Progress
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Upcoming Tournaments */}
                    <div>
                      <h2 className="text-2xl font-bold mb-4 flex items-center">
                        <div className="h-2 w-2 rounded-full bg-blue-500 mr-2"></div>
                        Upcoming Tournaments
                      </h2>
                      <div className="grid md:grid-cols-2 gap-6">
                        {upcomingTournaments.map((tournament) => (
                          <Link
                            href={`/tournaments/${tournament.id}`}
                            key={tournament.id}
                          >
                            <Card className="border-gray-200 bg-gray-200 dark:bg-gray-800 dark:border-gray-700 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 cursor-pointer h-full">
                              <CardContent className="p-6">
                                <div className="flex items-center gap-4 mb-4">
                                  <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 p-2">
                                    <Image
                                      src={
                                        tournament.logo || "/placeholder.svg"
                                      }
                                      alt={tournament.name}
                                      width={48}
                                      height={48}
                                      className="w-full h-full object-contain"
                                    />
                                  </div>
                                  <div>
                                    <h3 className="text-lg font-bold">
                                      {tournament.name}
                                    </h3>
                                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                      <MapPin className="h-3 w-3 mr-1" />
                                      {tournament.location}
                                    </div>
                                  </div>
                                  <Badge className="ml-auto bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                                    Upcoming
                                  </Badge>
                                </div>

                                <div className="grid grid-cols-3 gap-2 mb-4">
                                  <div className="bg-gray-50 dark:bg-gray-800 p-2 rounded-lg text-center">
                                    <div className="text-gray-500 dark:text-gray-400 flex justify-center mb-1">
                                      <Calendar className="h-4 w-4" />
                                    </div>
                                    <div className="text-xs text-gray-500 dark:text-gray-400">
                                      Dates
                                    </div>
                                    <div className="text-sm font-medium">
                                      {new Date(
                                        tournament.startDate
                                      ).toLocaleDateString("en-US", {
                                        month: "short",
                                        day: "numeric",
                                      })}{" "}
                                      -{" "}
                                      {new Date(
                                        tournament.endDate
                                      ).toLocaleDateString("en-US", {
                                        month: "short",
                                        day: "numeric",
                                      })}
                                    </div>
                                  </div>
                                  <div className="bg-gray-50 dark:bg-gray-800 p-2 rounded-lg text-center">
                                    <div className="text-gray-500 dark:text-gray-400 flex justify-center mb-1">
                                      <Users className="h-4 w-4" />
                                    </div>
                                    <div className="text-xs text-gray-500 dark:text-gray-400">
                                      Teams
                                    </div>
                                    <div className="text-sm font-medium">
                                      {tournament.teams}
                                    </div>
                                  </div>
                                  <div className="bg-gray-50 dark:bg-gray-800 p-2 rounded-lg text-center">
                                    <div className="text-gray-500 dark:text-gray-400 flex justify-center mb-1">
                                      <Trophy className="h-4 w-4" />
                                    </div>
                                    <div className="text-xs text-gray-500 dark:text-gray-400">
                                      Prize Pool
                                    </div>
                                    <div className="text-sm font-medium">
                                      {tournament.prizePool}
                                    </div>
                                  </div>
                                </div>

                                <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 mb-4">
                                  {tournament.description}
                                </p>

                                <div className="flex items-center justify-between">
                                  <Badge variant="outline" className="text-xs">
                                    {tournament.type}
                                  </Badge>
                                  <div className="flex items-center text-blue-600 dark:text-blue-400 text-sm">
                                    <Clock className="h-3 w-3 mr-1" />
                                    Starts in{" "}
                                    {Math.ceil(
                                      (new Date(
                                        tournament.startDate
                                      ).getTime() -
                                        new Date().getTime()) /
                                        (1000 * 60 * 60 * 24)
                                    )}{" "}
                                    days
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Past Tournaments */}
                    <div>
                      <h2 className="text-2xl font-bold mb-4 flex items-center">
                        <div className="h-2 w-2 rounded-full bg-gray-500 mr-2"></div>
                        Past Tournaments
                      </h2>
                      <div className="grid md:grid-cols-2 gap-6">
                        {pastTournaments.slice(0, 4).map((tournament) => (
                          <Link
                            href={`/tournaments/${tournament.id}`}
                            key={tournament.id}
                          >
                            <Card className="border-gray-200 dark:border-gray-700 bg-gray-200 dark:bg-gray-800 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 cursor-pointer h-full">
                              <CardContent className="p-6">
                                <div className="flex items-center gap-4 mb-4 mt-4">
                                  <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 p-2">
                                    <Image
                                      src={
                                        tournament.logo || "/placeholder.svg"
                                      }
                                      alt={tournament.name}
                                      width={48}
                                      height={48}
                                      className="w-full h-full object-contain"
                                    />
                                  </div>
                                  <div>
                                    <h3 className="text-lg font-bold">
                                      {tournament.name}
                                    </h3>
                                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                      <MapPin className="h-3 w-3 mr-1" />
                                      {tournament.location}
                                    </div>
                                  </div>
                                  <Badge className="ml-auto bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                                    Completed
                                  </Badge>
                                </div>

                                <div className="grid grid-cols-3 gap-2 mb-4">
                                  <div className="bg-gray-50 dark:bg-gray-800 p-2 rounded-lg text-center">
                                    <div className="text-gray-500 dark:text-gray-400 flex justify-center mb-1">
                                      <Calendar className="h-4 w-4" />
                                    </div>
                                    <div className="text-xs text-gray-500 dark:text-gray-400">
                                      Dates
                                    </div>
                                    <div className="text-sm font-medium">
                                      {new Date(
                                        tournament.startDate
                                      ).toLocaleDateString("en-US", {
                                        month: "short",
                                        day: "numeric",
                                      })}{" "}
                                      -{" "}
                                      {new Date(
                                        tournament.endDate
                                      ).toLocaleDateString("en-US", {
                                        month: "short",
                                        day: "numeric",
                                      })}
                                    </div>
                                  </div>
                                  <div className="bg-gray-50 dark:bg-gray-800 p-2 rounded-lg text-center">
                                    <div className="text-gray-500 dark:text-gray-400 flex justify-center mb-1">
                                      <Trophy className="h-4 w-4" />
                                    </div>
                                    <div className="text-xs text-gray-500 dark:text-gray-400">
                                      Winner
                                    </div>
                                    <div className="text-sm font-medium">
                                      {tournament.winner}
                                    </div>
                                  </div>
                                  <div className="bg-gray-50 dark:bg-gray-800 p-2 rounded-lg text-center">
                                    <div className="text-gray-500 dark:text-gray-400 flex justify-center mb-1">
                                      <Users className="h-4 w-4" />
                                    </div>
                                    <div className="text-xs text-gray-500 dark:text-gray-400">
                                      Teams
                                    </div>
                                    <div className="text-sm font-medium">
                                      {tournament.teams}
                                    </div>
                                  </div>
                                </div>

                                <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 mb-4">
                                  {tournament.description}
                                </p>

                                <div className="flex items-center justify-between">
                                  <Badge variant="outline" className="text-xs">
                                    {tournament.type}
                                  </Badge>
                                  <div className="text-sm text-gray-500 dark:text-gray-400">
                                    Prize Pool: {tournament.prizePool}
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="upcoming">
                  <div className="grid md:grid-cols-2 gap-6">
                    {upcomingTournaments.map((tournament) => (
                      <Link
                        href={`/tournaments/${tournament.id}`}
                        key={tournament.id}
                      >
                        <Card className="border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 cursor-pointer h-full">
                          <CardContent className="p-6">
                            <div className="flex items-center gap-4 mb-4 mt-4">
                              <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 p-2">
                                <Image
                                  src={tournament.logo || "/placeholder.svg"}
                                  alt={tournament.name}
                                  width={48}
                                  height={48}
                                  className="w-full h-full object-contain"
                                />
                              </div>
                              <div>
                                <h3 className="text-lg font-bold">
                                  {tournament.name}
                                </h3>
                                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                  <MapPin className="h-3 w-3 mr-1" />
                                  {tournament.location}
                                </div>
                              </div>
                              <Badge className="ml-auto bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                                Upcoming
                              </Badge>
                            </div>

                            <div className="grid grid-cols-3 gap-2 mb-4">
                              <div className="bg-gray-50 dark:bg-gray-800 p-2 rounded-lg text-center">
                                <div className="text-gray-500 dark:text-gray-400 flex justify-center mb-1">
                                  <Calendar className="h-4 w-4" />
                                </div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">
                                  Dates
                                </div>
                                <div className="text-sm font-medium">
                                  {new Date(
                                    tournament.startDate
                                  ).toLocaleDateString("en-US", {
                                    month: "short",
                                    day: "numeric",
                                  })}{" "}
                                  -{" "}
                                  {new Date(
                                    tournament.endDate
                                  ).toLocaleDateString("en-US", {
                                    month: "short",
                                    day: "numeric",
                                  })}
                                </div>
                              </div>
                              <div className="bg-gray-50 dark:bg-gray-800 p-2 rounded-lg text-center">
                                <div className="text-gray-500 dark:text-gray-400 flex justify-center mb-1">
                                  <Users className="h-4 w-4" />
                                </div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">
                                  Teams
                                </div>
                                <div className="text-sm font-medium">
                                  {tournament.teams}
                                </div>
                              </div>
                              <div className="bg-gray-50 dark:bg-gray-800 p-2 rounded-lg text-center">
                                <div className="text-gray-500 dark:text-gray-400 flex justify-center mb-1">
                                  <Trophy className="h-4 w-4" />
                                </div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">
                                  Prize Pool
                                </div>
                                <div className="text-sm font-medium">
                                  {tournament.prizePool}
                                </div>
                              </div>
                            </div>

                            <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 mb-4">
                              {tournament.description}
                            </p>

                            <div className="flex items-center justify-between">
                              <Badge variant="outline" className="text-xs">
                                {tournament.type}
                              </Badge>
                              <div className="flex items-center text-blue-600 dark:text-blue-400 text-sm">
                                <Clock className="h-3 w-3 mr-1" />
                                Starts in{" "}
                                {Math.ceil(
                                  (new Date(tournament.startDate).getTime() -
                                    new Date().getTime()) /
                                    (1000 * 60 * 60 * 24)
                                )}{" "}
                                days
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="ongoing">
                  {ongoingTournaments.length > 0 ? (
                    <div className="grid md:grid-cols-2 gap-6">
                      {ongoingTournaments.map((tournament) => (
                        <Link
                          href={`/tournaments/${tournament.id}`}
                          key={tournament.id}
                        >
                          <Card className="border-green-200 dark:border-green-800 border-2 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 cursor-pointer h-full">
                            <CardContent className="p-6">
                              <div className="flex items-center gap-4 mb-4 mt-4">
                                <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 p-2">
                                  <Image
                                    src={tournament.logo || "/placeholder.svg"}
                                    alt={tournament.name}
                                    width={48}
                                    height={48}
                                    className="w-full h-full object-contain"
                                  />
                                </div>
                                <div>
                                  <h3 className="text-lg font-bold">
                                    {tournament.name}
                                  </h3>
                                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                    <MapPin className="h-3 w-3 mr-1" />
                                    {tournament.location}
                                  </div>
                                </div>
                                <Badge className="ml-auto bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                                  Live
                                </Badge>
                              </div>

                              <div className="grid grid-cols-3 gap-2 mb-4">
                                <div className="bg-gray-50 dark:bg-gray-800 p-2 rounded-lg text-center">
                                  <div className="text-gray-500 dark:text-gray-400 flex justify-center mb-1">
                                    <Calendar className="h-4 w-4" />
                                  </div>
                                  <div className="text-xs text-gray-500 dark:text-gray-400">
                                    Dates
                                  </div>
                                  <div className="text-sm font-medium">
                                    {new Date(
                                      tournament.startDate
                                    ).toLocaleDateString("en-US", {
                                      month: "short",
                                      day: "numeric",
                                    })}{" "}
                                    -{" "}
                                    {new Date(
                                      tournament.endDate
                                    ).toLocaleDateString("en-US", {
                                      month: "short",
                                      day: "numeric",
                                    })}
                                  </div>
                                </div>
                                <div className="bg-gray-50 dark:bg-gray-800 p-2 rounded-lg text-center">
                                  <div className="text-gray-500 dark:text-gray-400 flex justify-center mb-1">
                                    <Users className="h-4 w-4" />
                                  </div>
                                  <div className="text-xs text-gray-500 dark:text-gray-400">
                                    Teams
                                  </div>
                                  <div className="text-sm font-medium">
                                    {tournament.teams}
                                  </div>
                                </div>
                                <div className="bg-gray-50 dark:bg-gray-800 p-2 rounded-lg text-center">
                                  <div className="text-gray-500 dark:text-gray-400 flex justify-center mb-1">
                                    <Trophy className="h-4 w-4" />
                                  </div>
                                  <div className="text-xs text-gray-500 dark:text-gray-400">
                                    Prize Pool
                                  </div>
                                  <div className="text-sm font-medium">
                                    {tournament.prizePool}
                                  </div>
                                </div>
                              </div>

                              <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 mb-4">
                                {tournament.description}
                              </p>

                              <div className="flex items-center justify-between">
                                <Badge variant="outline" className="text-xs">
                                  {tournament.type}
                                </Badge>
                                <div className="flex items-center text-green-600 dark:text-green-400 text-sm">
                                  <Clock className="h-3 w-3 mr-1" />
                                  In Progress
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <p className="text-gray-500 dark:text-gray-400">
                        No ongoing tournaments at the moment.
                      </p>
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="past">
                  <div className="grid md:grid-cols-2 gap-6">
                    {pastTournaments.map((tournament) => (
                      <Link
                        href={`/tournaments/${tournament.id}`}
                        key={tournament.id}
                      >
                        <Card className="border-gray-200 dark:border-gray-700 bg-gray-200 dark:bg-gray-800 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 cursor-pointer h-full">
                          <CardContent className="p-6">
                            <div className="flex items-center gap-4 mb-4 mt-4">
                              <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 p-2">
                                <Image
                                  src={tournament.logo || "/placeholder.svg"}
                                  alt={tournament.name}
                                  width={48}
                                  height={48}
                                  className="w-full h-full object-contain"
                                />
                              </div>
                              <div>
                                <h3 className="text-lg font-bold">
                                  {tournament.name}
                                </h3>
                                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                  <MapPin className="h-3 w-3 mr-1" />
                                  {tournament.location}
                                </div>
                              </div>
                              <Badge className="ml-auto bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                                Completed
                              </Badge>
                            </div>

                            <div className="grid grid-cols-3 gap-2 mb-4">
                              <div className="bg-gray-50 dark:bg-gray-800 p-2 rounded-lg text-center">
                                <div className="text-gray-500 dark:text-gray-400 flex justify-center mb-1">
                                  <Calendar className="h-4 w-4" />
                                </div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">
                                  Dates
                                </div>
                                <div className="text-sm font-medium">
                                  {new Date(
                                    tournament.startDate
                                  ).toLocaleDateString("en-US", {
                                    month: "short",
                                    day: "numeric",
                                  })}{" "}
                                  -{" "}
                                  {new Date(
                                    tournament.endDate
                                  ).toLocaleDateString("en-US", {
                                    month: "short",
                                    day: "numeric",
                                  })}
                                </div>
                              </div>
                              <div className="bg-gray-50 dark:bg-gray-800 p-2 rounded-lg text-center">
                                <div className="text-gray-500 dark:text-gray-400 flex justify-center mb-1">
                                  <Trophy className="h-4 w-4" />
                                </div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">
                                  Winner
                                </div>
                                <div className="text-sm font-medium">
                                  {tournament.winner}
                                </div>
                              </div>
                              <div className="bg-gray-50 dark:bg-gray-800 p-2 rounded-lg text-center">
                                <div className="text-gray-500 dark:text-gray-400 flex justify-center mb-1">
                                  <Users className="h-4 w-4" />
                                </div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">
                                  Teams
                                </div>
                                <div className="text-sm font-medium">
                                  {tournament.teams}
                                </div>
                              </div>
                            </div>

                            <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 mb-4">
                              {tournament.description}
                            </p>

                            <div className="flex items-center justify-between">
                              <Badge variant="outline" className="text-xs">
                                {tournament.type}
                              </Badge>
                              <div className="text-sm text-gray-500 dark:text-gray-400">
                                Prize Pool: {tournament.prizePool}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
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

