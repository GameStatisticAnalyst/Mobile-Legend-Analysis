"use client";

import { ReactElement, useState } from "react";

import Header from "@/components/pages/section/tournaments/Header";
import Featured from "@/components/pages/section/tournaments/Featured";
import Sidebar from "@/components/pages/section/tournaments/Sidebar";
import Content from "@/components/pages/section/tournaments/Content";

export default function TournamentsPage(): ReactElement {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedRegions, setSelectedRegions] = useState<string[]>([]);
  const [startDate, setStartDate] = useState<string | null>(null);
  const [endDate, setEndDate] = useState<string | null>(null);

  return (
    <>
      <Header />
      <Featured />
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            <Sidebar
              selectedTypes={selectedTypes}
              setSelectedTypes={setSelectedTypes}
              selectedRegions={selectedRegions}
              setSelectedRegions={setSelectedRegions}
              startDate={startDate}
              setStartDate={setStartDate}
              endDate={endDate}
              setEndDate={setEndDate}
            />
            <Content
              selectedTypes={selectedTypes}
              selectedRegions={selectedRegions}
              startDate={startDate}
              endDate={endDate}
            />
          </div>
        </div>
      </section>
    </>
  );
}
