"use client"

import { useState,ReactElement } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AnalysisCard from "@/components/analysis-card"
import AnalysisDialog from "@/components/analysis-dialog"
import Button from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const analysisData = [
  {
    id: "1",
    date: "2024-2-9",
    teamA: {
      id: "1",
      name: "ONIC",
      logo: "/logo/ONIC.jpg",
    },
    teamB: {
      id: "2",
      name: "RRQ",
      logo: "/logo/RRQ.jpg",
    },
    description:
      "Final match between ONIC and RRQ in MPL Season 11. An intense battle between two of the strongest teams in Indonesia.",
    tags: ["MPL", "Final", "Season 11"],
    logs: [
      {
        id: "1",
        timestamp: "00:02:15",
        playerId: "1",
        playerName: "CW",
        action: "First Blood",
        target: "Alberttt",
        description: "CW (Lancelot) killed Alberttt (Ling)",
      },
      {
        id: "2",
        timestamp: "00:05:30",
        playerId: "2",
        playerName: "Alberttt",
        action: "Tower Destroyed",
        description: "Alberttt (Ling) destroyed bottom tower",
      },
    ],
    createdBy: {
      id: "1",
      name: "MLAnalyst",
    },
  },
  {
    id: "2",
    date: "2024-2-8",
    teamA: {
      id: "3",
      name: "EVOS",
      logo: "/logo/EVOS.jpg",
    },
    teamB: {
      id: "4",
      name: "Alter Ego",
      logo: "/logo/ALTER.jpg",
    },
    description: "Semi-final match of MDL Season 5. EVOS showing dominant performance with new roster.",
    tags: ["MDL", "Semi-Final", "Season 5"],
    logs: [
      {
        id: "1",
        timestamp: "00:03:45",
        playerId: "3",
        playerName: "Dreams",
        action: "Triple Kill",
        description: "Dreams (Beatrix) secured triple kill",
      },
    ],
    createdBy: {
      id: "2",
      name: "ProAnalyst",
    },
  },
  {
    id: "3",
    date: "2024-2-7",
    teamA: {
      id: "5",
      name: "Aura",
      logo: "/logo/AURA.jpg",
    },
    teamB: {
      id: "6",
      name: "Geek Fam",
      logo: "/logo/GEEK.jpg",
    },
    description: "Regular season match with unexpected strategies from both teams.",
    tags: ["MPL", "Regular Season", "Meta Analysis"],
    logs: [
      {
        id: "1",
        timestamp: "00:08:20",
        playerId: "4",
        playerName: "Akai",
        action: "Lord Secure",
        description: "Akai (Atlas) secured the Lord",
      },
    ],
    createdBy: {
      id: "3",
      name: "MetaExpert",
    },
  },
]

export default function Home():ReactElement {
  const [selectedAnalysis, setSelectedAnalysis] = useState(null)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [sortBy, setSortBy] = useState("latest")
  const [filterTag, setFilterTag] = useState("all")

  const handleAnalysisClick = (analysis) => {
    setSelectedAnalysis(analysis)
    setDialogOpen(true)
  }

  // Get unique tags from all analysis
  const allTags = ["all", ...new Set(analysisData.flatMap((analysis) => analysis.tags))]

  const sortedAndFilteredAnalysis = [...analysisData]
    .filter((analysis) => filterTag === "all" || analysis.tags.includes(filterTag))
    .sort((a:any, b:any) => {
      if (sortBy === "latest") {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      } else if (sortBy === "oldest") {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      }
      return 0
    })

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container py-8">
        <div className="flex flex-col gap-8">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight">Latest Analysis</h1>
            <p className="text-xl text-muted-foreground">Browse through the latest Mobile Legends match analysis</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag) => (
                <Button
                  key={tag}
                  variant={filterTag === tag ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilterTag(tag)}
                  className="rounded-full"
                >
                  {tag}
                </Button>
              ))}
            </div>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="latest">Latest First</SelectItem>
                <SelectItem value="oldest">Oldest First</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sortedAndFilteredAnalysis.map((analysis) => (
              <AnalysisCard key={analysis.id} analysis={analysis} onClick={handleAnalysisClick} />
            ))}
          </div>
        </div>
      </main>
      <AnalysisDialog analysis={selectedAnalysis} open={dialogOpen} onOpenChange={setDialogOpen} />
      <Footer />
    </div>
  )
}

