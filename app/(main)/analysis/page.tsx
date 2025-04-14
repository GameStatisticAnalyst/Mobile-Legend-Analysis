"use client";

import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AnalysisCard from "@/components/analysis-card";
import { Search, Filter, ArrowUpDown, X } from "lucide-react";

import {
  tournaments,
  teams,
  featuredAnalyses,
  recentAnalyses,
} from "./placeholderData";
import { ReactElement, useState, useEffect } from "react";
import Link from "next/link";

const allAnalyses = [...featuredAnalyses, ...recentAnalyses];

export default function AnalysisPage(): ReactElement {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<typeof allAnalyses>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    tournaments: [] as string[],
    teams: [] as string[],
    dateRange: { start: "", end: "" },
  });

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      setIsSearching(false);
      return;
    }

    setIsSearching(true);

    // Simple search implementation
    const query = searchQuery.toLowerCase();
    const results = allAnalyses.filter((analysis) => {
      return (
        analysis.teamA.name.toLowerCase().includes(query) ||
        analysis.teamB.name.toLowerCase().includes(query) ||
        analysis.description.toLowerCase().includes(query) ||
        analysis.tags.some((tag) => tag.toLowerCase().includes(query)) ||
        analysis.createdBy.name.toLowerCase().includes(query)
      );
    });

    setSearchResults(results);
  };

  const handleFilterChange = (
    type: "tournaments" | "teams",
    id: string,
    checked: boolean
  ) => {
    setSelectedFilters((prev) => {
      if (checked) {
        return {
          ...prev,
          [type]: [...prev[type], id],
        };
      } else {
        return {
          ...prev,
          [type]: prev[type].filter((item) => item !== id),
        };
      }
    });
  };

  const handleDateChange = (type: "start" | "end", value: string) => {
    setSelectedFilters((prev) => ({
      ...prev,
      dateRange: {
        ...prev.dateRange,
        [type]: value,
      },
    }));
  };

  const applyFilters = () => {
    let filtered = isSearching ? searchResults : allAnalyses;

    if (selectedFilters.tournaments.length > 0) {
      filtered = filtered.filter((analysis) =>
        analysis.tags.some((tag) =>
          selectedFilters.tournaments.some(
            (id) =>
              tournaments.find((t) => t.id === id)?.name.includes(tag) || false
          )
        )
      );
    }

    if (selectedFilters.teams.length > 0) {
      filtered = filtered.filter(
        (analysis) =>
          selectedFilters.teams.includes(analysis.teamA.id) ||
          selectedFilters.teams.includes(analysis.teamB.id)
      );
    }

    if (selectedFilters.dateRange.start) {
      filtered = filtered.filter(
        (analysis) =>
          new Date(analysis.date) >= new Date(selectedFilters.dateRange.start)
      );
    }

    if (selectedFilters.dateRange.end) {
      filtered = filtered.filter(
        (analysis) =>
          new Date(analysis.date) <= new Date(selectedFilters.dateRange.end)
      );
    }

    return filtered;
  };

  const resetFilters = () => {
    setSelectedFilters({
      tournaments: [],
      teams: [],
      dateRange: { start: "", end: "" },
    });
  };

  const clearSearch = () => {
    setSearchQuery("");
    setIsSearching(false);
  };

  const filteredResults = applyFilters();

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
              Match Analysis
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Jelajahi analisis pertandingan profesional dari turnamen Mobile
              Legends teratas di seluruh dunia
            </p>
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
              <Input
                placeholder="Search for teams, tournaments, or analysts..."
                className="pl-10 py-6 rounded-full border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 shadow-md"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute right-16 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                >
                  <X className="h-5 w-5" />
                </button>
              )}
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
                <CardContent className="p-6">
                  <div className="flex mt-4 items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">Filters</h3>
                    <Button
                      variant="default"
                      size="sm"
                      className="text-blue-600 h-auto py-1 px-4 rounded-full"
                    >
                      Reset
                    </Button>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium mb-2">Tournaments</h4>
                      <div className="space-y-2">
                        {tournaments.map((tournament) => (
                          <div
                            key={tournament.id}
                            className="flex items-center justify-between"
                          >
                            <label className="text-sm text-gray-600 dark:text-gray-300 flex items-center gap-2 cursor-pointer">
                              <input
                                type="checkbox"
                                className="rounded border-gray-300"
                              />
                              {tournament.name}
                            </label>
                            <span className="text-xs text-gray-500 dark:text-gray-400 bg-white/90 dark:bg-gray-800/90 px-2 py-0.5 rounded-full">
                              {tournament.count}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium mb-2">Teams</h4>
                      <div className="space-y-2">
                        {teams.map((team) => (
                          <div
                            key={team.id}
                            className="flex items-center justify-between"
                          >
                            <label className="text-sm text-gray-600 dark:text-gray-300 flex items-center gap-2 cursor-pointer">
                              <input
                                type="checkbox"
                                className="rounded border-gray-300"
                              />
                              {team.name}
                            </label>
                            <span className="text-xs text-gray-500 dark:text-gray-400 bg-white/90 dark:bg-gray-800/90 px-2 py-0.5 rounded-full">
                              {team.count}
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

              {/* Popular Tags */}
              <Card className="border-gray-200 dark:border-gray-700 shadow-sm bg-white/90 dark:bg-gray-800/90">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 mt-4">
                    Popular Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-800">
                      MPL
                    </Badge>
                    <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 hover:bg-purple-200 dark:hover:bg-purple-800">
                      M5
                    </Badge>
                    <Badge className="bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200 hover:bg-pink-200 dark:hover:bg-pink-800">
                      Grand Final
                    </Badge>
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 hover:bg-green-200 dark:hover:bg-green-800">
                      Meta Analysis
                    </Badge>
                    <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 hover:bg-yellow-200 dark:hover:bg-yellow-800">
                      Season 13
                    </Badge>
                    <Badge className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 hover:bg-red-200 dark:hover:bg-red-800">
                      Playoffs
                    </Badge>
                    <Badge className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 hover:bg-indigo-200 dark:hover:bg-indigo-800">
                      Indonesia
                    </Badge>
                    <Badge className="bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200 hover:bg-teal-200 dark:hover:bg-teal-800">
                      Philippines
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Data Content */}
            <div className="w-full lg:w-3/4">
              {isSearching ? (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold">
                      Search Results for "{searchQuery}"
                    </h2>
                    <Button variant="outline" size="sm" onClick={clearSearch}>
                      Clear Search
                    </Button>
                  </div>

                  {filteredResults.length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredResults.map((analysis) => (
                        <div key={analysis.id} className="group">
                          <AnalysisCard
                            analysis={analysis}
                            onClick={() => {}}
                          />
                          <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-blue-600 to-purple-600 mt-1 transition-all duration-300 rounded-full"></div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 mb-4">
                        <Search className="h-8 w-8 text-gray-400" />
                      </div>
                      <h3 className="text-xl font-medium mb-2">
                        No results found
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400 mb-6">
                        We couldn't find any analyses matching "{searchQuery}"
                      </p>
                      <Button onClick={clearSearch}>View All Analyses</Button>
                    </div>
                  )}
                </div>
              ) : (
                <Tabs defaultValue="all" className="w-full">
                  <div className="flex items-center justify-between mb-6">
                    <TabsList className="bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
                      <TabsTrigger value="all" className="rounded-md">
                        All Analyses
                      </TabsTrigger>
                      <TabsTrigger value="featured" className="rounded-md">
                        Featured
                      </TabsTrigger>
                      <TabsTrigger value="recent" className="rounded-md">
                        Recent
                      </TabsTrigger>
                      <TabsTrigger value="popular" className="rounded-md">
                        Popular
                      </TabsTrigger>
                    </TabsList>

                    {/* <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-1"
                    >
                      <ArrowUpDown className="h-3.5 w-3.5" />
                      Sort
                    </Button> */}
                  </div>

                  <TabsContent value="all" className="mt-0">
                    {/* Featured Section */}
                    <div className="mb-8">
                      <h2 className="text-2xl font-bold mb-4">
                        Featured Analyses
                      </h2>
                      <div className="grid md:grid-cols-2 gap-6">
                        {featuredAnalyses.map((analysis) => (
                          <div key={analysis.id} className="group">
                            <AnalysisCard
                              analysis={analysis}
                              onClick={() => {}}
                            />
                            <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-blue-600 to-purple-600 mt-1 transition-all duration-300 rounded-full"></div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Recent Analyses */}
                    <div>
                      <h2 className="text-2xl font-bold mb-4">
                        Recent Analyses
                      </h2>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {recentAnalyses.map((analysis) => (
                          <div key={analysis.id} className="group">
                            <AnalysisCard
                              analysis={analysis}
                              onClick={() => {}}
                            />
                            <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-blue-600 to-purple-600 mt-1 transition-all duration-300 rounded-full"></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="featured">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {featuredAnalyses.map((analysis) => (
                        <div key={analysis.id} className="group">
                          <AnalysisCard
                            analysis={analysis}
                            onClick={() => {}}
                          />
                          <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-blue-600 to-purple-600 mt-1 transition-all duration-300 rounded-full"></div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="recent">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {recentAnalyses.map((analysis) => (
                        <div key={analysis.id} className="group">
                          <AnalysisCard
                            analysis={analysis}
                            onClick={() => {}}
                          />
                          <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-blue-600 to-purple-600 mt-1 transition-all duration-300 rounded-full"></div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="popular">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {[...featuredAnalyses, ...recentAnalyses.slice(0, 4)].map(
                        (analysis) => (
                          <div key={analysis.id} className="group">
                            <AnalysisCard
                              analysis={analysis}
                              onClick={() => {}}
                            />
                            <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-blue-600 to-purple-600 mt-1 transition-all duration-300 rounded-full"></div>
                          </div>
                        )
                      )}
                    </div>
                  </TabsContent>
                </Tabs>
              )}

              {/* Pagination - Only show when not searching */}
              {!isSearching && (
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
                    <Button variant="outline">4</Button>
                    <Button variant="outline">5</Button>
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
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
