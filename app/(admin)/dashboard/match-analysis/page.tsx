"use client";

import { useState } from "react";
import Button from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Input from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import Avatar from "@/components/ui/avatar";
import { Search, Plus, Edit, Trash2, Eye } from "lucide-react";
import Link from "next/link";
import { sampleAnalyses } from "./placeholder";

export default function MatchAnalysisListPage() {
  const [searchQuery, setSearchQuery] = useState("");

  // Format date to readable format
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  // Filter analyses based on search query
  const filteredAnalyses = sampleAnalyses.filter(
    (analysis) =>
      analysis.matchId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      analysis.teamA.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      analysis.teamB.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Match Analyses
        </h1>
        <Link href="/dashboard/match-analysis/new">
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600">
            <Plus className="h-4 w-4 mr-2" />
            New Analysis
          </Button>
        </Link>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
              <Input
                placeholder="Search by match ID or team name..."
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Match ID</TableHead>
                  <TableHead>Teams</TableHead>
                  <TableHead>Created</TableHead>
                  <TableHead>Updated</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredAnalyses.length > 0 ? (
                  filteredAnalyses.map((analysis) => (
                    <TableRow key={analysis.id}>
                      <TableCell className="font-medium">
                        {analysis.matchId}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Avatar
                            className="h-6 w-6"
                            src={analysis.teamA.logo}
                            alt={analysis.teamA.name}
                            fallback={analysis.teamA.name.substring(0, 2)}
                          />
                          <span>{analysis.teamA.name}</span>
                          <span className="text-gray-500">vs</span>
                          <Avatar
                            className="h-6 w-6"
                            src={analysis.teamB.logo}
                            alt={analysis.teamB.name}
                            fallback={analysis.teamB.name.substring(0, 2)}
                          />
                          <span>{analysis.teamB.name}</span>
                        </div>
                      </TableCell>
                      <TableCell>{formatDate(analysis.createdAt)}</TableCell>
                      <TableCell>{formatDate(analysis.updatedAt)}</TableCell>
                      <TableCell>
                        <Badge
                          className={
                            analysis.status === "published"
                              ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                              : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                          }
                        >
                          {analysis.status === "published"
                            ? "Published"
                            : "Draft"}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="outline" size="icon" asChild>
                            <Link
                              href={`/dashboard/match-analysis/${analysis.id}`}
                            >
                              <Eye className="h-4 w-4" />
                              <span className="sr-only">View</span>
                            </Link>
                          </Button>
                          <Button variant="outline" size="icon" asChild>
                            <Link
                              href={`/dashboard/match-analysis/${analysis.id}/edit`}
                            >
                              <Edit className="h-4 w-4" />
                              <span className="sr-only">Edit</span>
                            </Link>
                          </Button>
                          <Button
                            variant="outline"
                            size="icon"
                            className="text-red-500"
                          >
                            <Trash2 className="h-4 w-4" />
                            <span className="sr-only">Delete</span>
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={6}
                      className="text-center py-6 text-gray-500"
                    >
                      No match analyses found
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
