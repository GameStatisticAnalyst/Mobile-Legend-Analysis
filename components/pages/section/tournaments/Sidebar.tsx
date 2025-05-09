"use client";

import React, { ReactElement, useState } from "react";
import { Filter } from "lucide-react";

import Button from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Input from "@/components/ui/input";

import {
  upcomingTournaments,
  ongoingTournaments,
  pastTournaments,
} from "./placeholderData";

interface regionsType {
  id: string;
  name: string;
  count: number;
}

interface typesType {
  id: string;
  name: string;
  count: number;
}

interface SidebarProps {
  selectedTypes: string[];
  setSelectedTypes: React.Dispatch<React.SetStateAction<string[]>>;
  selectedRegions: string[];
  setSelectedRegions: React.Dispatch<React.SetStateAction<string[]>>;
  startDate: string | null;
  setStartDate: React.Dispatch<React.SetStateAction<string | null>>;
  endDate: string | null;
  setEndDate: React.Dispatch<React.SetStateAction<string | null>>;
}

export default function Sidebar({
  selectedTypes,
  setSelectedTypes,
  selectedRegions,
  setSelectedRegions,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}: SidebarProps): ReactElement {
  const regions: regionsType[] = [
    {
      id: "1",
      name: "Southeast Asia",
      count:
        upcomingTournaments.filter((t) => t.region === "Southeast Asia")
          .length +
        ongoingTournaments.filter((t) => t.region === "Southeast Asia").length +
        pastTournaments.filter((t) => t.region === "Southeast Asia").length,
    },
    {
      id: "2",
      name: "East Asia",
      count:
        upcomingTournaments.filter((t) => t.region === "East Asia").length +
        ongoingTournaments.filter((t) => t.region === "East Asia").length +
        pastTournaments.filter((t) => t.region === "East Asia").length,
    },
    {
      id: "3",
      name: "North America",
      count:
        upcomingTournaments.filter((t) => t.region === "North America").length +
        ongoingTournaments.filter((t) => t.region === "North America").length +
        pastTournaments.filter((t) => t.region === "North America").length,
    },
    {
      id: "4",
      name: "Europe",
      count:
        upcomingTournaments.filter((t) => t.region === "Europe").length +
        ongoingTournaments.filter((t) => t.region === "Europe").length +
        pastTournaments.filter((t) => t.region === "Europe").length,
    },
    {
      id: "5",
      name: "MENA",
      count:
        upcomingTournaments.filter((t) => t.region === "MENA").length +
        ongoingTournaments.filter((t) => t.region === "MENA").length +
        pastTournaments.filter((t) => t.region === "MENA").length,
    },
  ];

  const types: typesType[] = [
    {
      id: "1",
      name: "World Championship",
      count:
        upcomingTournaments.filter((t) => t.type === "World Championship")
          .length +
        ongoingTournaments.filter((t) => t.type === "World Championship")
          .length +
        pastTournaments.filter((t) => t.type === "World Championship").length,
    },
    {
      id: "2",
      name: "Regular Season",
      count:
        upcomingTournaments.filter((t) => t.type === "Regular Season").length +
        ongoingTournaments.filter((t) => t.type === "Regular Season").length +
        pastTournaments.filter((t) => t.type === "Regular Season").length,
    },
    {
      id: "3",
      name: "Regional Championship",
      count:
        upcomingTournaments.filter((t) => t.type === "Regional Championship")
          .length +
        ongoingTournaments.filter((t) => t.type === "Regional Championship")
          .length +
        pastTournaments.filter((t) => t.type === "Regional Championship")
          .length,
    },
    {
      id: "4",
      name: "Development League",
      count:
        upcomingTournaments.filter((t) => t.type === "Development League")
          .length +
        ongoingTournaments.filter((t) => t.type === "Development League")
          .length +
        pastTournaments.filter((t) => t.type === "Development League").length,
    },
  ];

  const allTournaments = [
    ...upcomingTournaments.map((t) => ({ ...t, status: "upcoming" })),
    ...ongoingTournaments.map((t) => ({ ...t, status: "ongoing" })),
    ...pastTournaments.map((t) => ({ ...t, status: "past" })),
  ];

  const queue = { ongoing: 1, upcoming: 2, past: 3 };
  const sortedTournaments = allTournaments
    .sort((a, b) => {
      const statusOrder: { [key in "upcoming" | "ongoing" | "past"]: number } =
        queue;
      return (
        statusOrder[a.status as "upcoming" | "ongoing" | "past"] -
        statusOrder[b.status as "upcoming" | "ongoing" | "past"]
      );
    })
    .sort((a, b) => {
      if (
        a.status === b.status &&
        (a.status === "upcoming" || a.status === "ongoing")
      ) {
        return (
          new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
        );
      }
      return 0;
    });

  const toggleType = (type: string): void => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const toggleRegion = (region: string): void => {
    setSelectedRegions((prev) =>
      prev.includes(region)
        ? prev.filter((r) => r !== region)
        : [...prev, region]
    );
  };

  const handleStartDateChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEndDate(event.target.value);
  };

  return (
    <>
      <div className="w-full lg:w-1/4 space-y-6">
        <Card className="border-gray-200 dark:border-gray-700 shadow-sm bg-gray-200 dark:bg-gray-800">
          <CardContent>
            <div className="flex items-center justify-between my-4">
              <h3 className="text-lg font-semibold">Filters</h3>
              <Button
                variant="secondary"
                size="lg"
                className="h-auto"
                onClick={(): void => {
                  setSelectedTypes([]);
                  setSelectedRegions([]);
                  setStartDate(null);
                  setEndDate(null);
                }}
              >
                Reset
              </Button>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium mb-2">Tournament Type</h4>
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
                          checked={selectedTypes.includes(type.name)}
                          onChange={() => toggleType(type.name)}
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
                          checked={selectedRegions.includes(region.name)}
                          onChange={() => toggleRegion(region.name)}
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
                  <Input
                    type="date"
                    value={startDate || ""}
                    onChange={handleStartDateChange}
                    className="text-sm"
                  />
                  <Input
                    type="date"
                    value={endDate || ""}
                    onChange={handleEndDateChange}
                    className="text-sm"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        {/* Tournament Calendar */}
        <Card className="border-gray-200 dark:border-gray-700 shadow-sm bg-gray-200 dark:bg-gray-800">
          <CardHeader>
            <CardTitle>Tournament Calendar</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {sortedTournaments.map((tournament) => (
                <div
                  key={tournament.id}
                  className={`flex items-center gap-3 p-3 rounded-lg ${
                    tournament.status === "upcoming"
                      ? "bg-blue-50 dark:bg-blue-900/20"
                      : tournament.status === "ongoing"
                      ? "bg-green-50 dark:bg-green-900/20"
                      : "bg-gray-50 dark:bg-gray-800"
                  }`}
                >
                  <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-lg flex flex-col items-center justify-center">
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {new Date(tournament.startDate)
                        .toLocaleString("en-US", {
                          month: "short",
                        })
                        .toUpperCase()}
                    </span>
                    <span className="text-lg font-bold">
                      {new Date(tournament.startDate).getDate()}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium">{tournament.name}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {tournament.type} Start
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
