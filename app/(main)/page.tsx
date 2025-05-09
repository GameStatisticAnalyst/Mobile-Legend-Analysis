"use client";

import anime from "animejs";
import { useState, ReactElement, useEffect } from "react";

import { analysisData } from "./placeholderData";

import AnalysisDialog from "@/components/analysis-dialog";
import HeroSection from "@/components/pages/HeroSection";
import FeaturesSection from "@/components/pages/FeaturesSection";
import CommunitySection from "@/components/pages/CommunitySection";

interface Analysis {
  id: string;
  tags: string[];
  date: string;
  [key: string]: any; 
}

export default function Home(): ReactElement {
  const [selectedAnalysis, setSelectedAnalysis] = useState<Analysis | null>(
    null
  );
  const [dialogOpen, setDialogOpen] = useState(false);
  const [sortBy, setSortBy] = useState("latest");
  const [filterTag, setFilterTag] = useState("all");

  useEffect(() => {
    anime({
      targets: ".hero-title .char",
      opacity: [0, 1],
      translateY: [50, 0],
      translateZ: 0,
      easing: "easeOutExpo",
      duration: 1200,
      delay: (el, i) => 300 + 30 * i,
    });

    // Split text into characters for animation
    const heroTitle = document.querySelector(".hero-title");
    if (heroTitle) {
      const text = heroTitle.textContent;
      heroTitle.innerHTML = "";
      text?.split("").forEach((char) => {
        const charSpan = document.createElement("span");
        charSpan.classList.add("char");
        charSpan.textContent = char === " " ? "\u00A0" : char;
        heroTitle.appendChild(charSpan);
      });
    }
  }, []);

  const handleAnalysisClick = (analysis: Analysis): void => {
    setSelectedAnalysis(analysis);
    setDialogOpen(true);
  };

  // Get unique tags from all analysis
  const allTags = [
    "all",
    ...Array.from(new Set(analysisData.flatMap((analysis) => analysis.tags))),
  ];

  // Sort and filter analysis data
  const sortedAndFilteredAnalysis = [...analysisData]
    .filter(
      (analysis) => filterTag === "all" || analysis.tags.includes(filterTag)
    )
    .sort((a, b) => {
      if (sortBy === "latest") {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      } else if (sortBy === "oldest") {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      }
      return 0;
    });

  return (
    <div className="space-y-12">
      <HeroSection />
      <FeaturesSection />
      <CommunitySection />
      <AnalysisDialog
        analysis={selectedAnalysis}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </div>
  );
}
