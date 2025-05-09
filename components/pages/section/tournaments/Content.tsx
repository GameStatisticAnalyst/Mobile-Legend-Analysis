"use client";

import { ReactElement } from "react";

import {
  upcomingTournaments,
  ongoingTournaments,
  pastTournaments,
  UpcomingTournament,
  OngoingTournament,
  PastTournament,
} from "./placeholderData";

import UpComing from "./Status/UpComing";
import OnGoing from "./Status/OnGoing";
import Past from "./Status/Past";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ContentProps {
  selectedTypes: string[];
  selectedRegions: string[];
  startDate: string | null;
  endDate: string | null;
}

export default function Content({
  selectedTypes,
  selectedRegions,
  startDate,
  endDate,
}: ContentProps): ReactElement {
  const filteredUpcoming: UpcomingTournament[] = upcomingTournaments.filter(
    (tournament: UpcomingTournament): boolean =>
      (selectedTypes.length === 0 || selectedTypes.includes(tournament.type)) &&
      (selectedRegions.length === 0 || selectedRegions.includes(tournament.region)) &&
      (!startDate || new Date(tournament.startDate) >= new Date(startDate)) &&
      (!endDate || new Date(tournament.endDate) <= new Date(endDate))
  );

  const filteredOngoing: OngoingTournament[] = ongoingTournaments.filter(
    (tournament: OngoingTournament): boolean =>
      (selectedTypes.length === 0 || selectedTypes.includes(tournament.type)) &&
      (selectedRegions.length === 0 || selectedRegions.includes(tournament.region)) &&
      (!startDate || new Date(tournament.startDate) >= new Date(startDate)) &&
      (!endDate || new Date(tournament.endDate) <= new Date(endDate))
  );

  const filteredPast: PastTournament[] = pastTournaments.filter(
    (tournament: PastTournament): boolean =>
      (selectedTypes.length === 0 || selectedTypes.includes(tournament.type)) &&
      (selectedRegions.length === 0 || selectedRegions.includes(tournament.region)) &&
      (!startDate || new Date(tournament.startDate) >= new Date(startDate)) &&
      (!endDate || new Date(tournament.endDate) <= new Date(endDate))
  );
  return (
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
            <OnGoing
              title="On Going Tournament"
              tournaments={filteredOngoing}
            />
            <UpComing
              title="Upcoming Tournaments"
              tournaments={filteredUpcoming}
            />
            <Past title="Past Tournaments" tournaments={filteredPast} />
          </div>
        </TabsContent>
        <TabsContent value="upcoming">
          <UpComing tournaments={filteredUpcoming} />
        </TabsContent>
        <TabsContent value="ongoing">
          <OnGoing tournaments={filteredOngoing} />
        </TabsContent>
        <TabsContent value="past">
          <Past tournaments={filteredPast} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
