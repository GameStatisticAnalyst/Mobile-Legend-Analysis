"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, User } from "lucide-react";

interface Team {
  id: string;
  name: string;
  logo: string;
}

interface CreatedBy {
  id: string;
  name: string;
}

interface Analysis {
  id: string;
  teamA: Team;
  teamB: Team;
  description: string;
  date: string;
  createdBy: CreatedBy;
  tags: string[];
}

interface AnalysisCardProps {
  analysis: Analysis;
  onClick: (analysis: Analysis) => void;
}

export default function AnalysisCard({ analysis, onClick }: AnalysisCardProps) {
  return (
    <Card
      className="overflow-hidden cursor-pointer hover:shadow-lg transition-all hover:-translate-y-1 border-gray-200 dark:border-gray-700 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm"
      onClick={() => onClick(analysis)}
    >
      <CardContent className="">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6 w-full">
            <div className="text-center">
              <Image
                src={analysis.teamA.logo || "/placeholder.svg"}
                alt={analysis.teamA.name}
                width={50}
                height={50}
                className="rounded-full border-2 border-blue-200 object-cover w-14 h-14 dark:border-blue-700"
              />
              <span className="text-sm font-medium mt-1 block text-gray-900 dark:text-gray-100 text-clip">
                {analysis.teamA.name}
              </span>
            </div>
            <span className="text-2xl font-bold text-gray-500 dark:text-gray-400">
              VS
            </span>
            <div className="text-center">
              <Image
                src={analysis.teamB.logo || "/placeholder.svg"}
                alt={analysis.teamB.name}
                width={50}
                height={50}
                className="rounded-full w-14 h-14 object-cover border-2 border-blue-200 dark:border-blue-700"
              />
              <span className="text-sm font-medium mt-1 block text-gray-900 dark:text-gray-100 text-clip">
                {analysis.teamB.name}
              </span>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
            {analysis.description}
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4 text-blue-500 dark:text-blue-400" />
              {new Date(analysis.date).toLocaleDateString()}
            </div>
            <div className="flex items-center gap-1">
              <User className="h-4 w-4 text-purple-500 dark:text-purple-400" />
              {analysis.createdBy.name}
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {analysis.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
