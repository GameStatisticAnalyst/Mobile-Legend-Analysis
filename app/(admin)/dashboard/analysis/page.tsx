import type { ReactElement } from "react";

import Button from "@/components/ui/button";
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Eye,
  MoreHorizontal,
  Pencil,
  Plus,
  Search,
  Trash2,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";
import { Analyses } from "./placeholderData";

export default function AnalysisPage(): ReactElement {
  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-4 mb-2">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/">
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </Button>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              Match Analyses
            </h1>
            <p className="text-muted-foreground">
              Manage all match analyses on the platform
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search analyses..." className="pl-8" />
          </div>
          <div className="flex gap-2">
            <Button variant="outline">Filter</Button>
            <Button asChild>
              <Link href="/match-analysis/create">
                <Plus className="mr-2 h-4 w-4" /> Create Analysis
              </Link>
            </Button>
          </div>
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Teams</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="hidden md:table-cell">Tags</TableHead>
                <TableHead className="hidden md:table-cell">
                  Created By
                </TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Analyses.map((analysis) => {
                const teamA =
                  typeof analysis.teamA === "string"
                    ? analysis.teamA
                    : analysis.teamA.name;
                const teamB =
                  typeof analysis.teamB === "string"
                    ? analysis.teamB
                    : analysis.teamB.name;
                const createdBy =
                  typeof analysis.createdBy === "string"
                    ? analysis.createdBy
                    : analysis.createdBy.name;

                return (
                  <TableRow key={analysis.id}>
                    <TableCell className="font-medium">
                      {teamA} vs {teamB}
                    </TableCell>
                    <TableCell>
                      {new Date(analysis.date).toLocaleDateString()}
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      <div className="flex flex-wrap gap-1">
                        {analysis.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      {createdBy}
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          analysis.status === "published"
                            ? "default"
                            : "outline"
                        }
                      >
                        {analysis.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Actions</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem asChild>
                            <Link href={`/match-analysis/${analysis.id}`}>
                              <Eye className="mr-2 h-4 w-4" /> View
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link href={`/match-analysis/${analysis.id}/edit`}>
                              <Pencil className="mr-2 h-4 w-4" /> Edit
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive">
                            <Trash2 className="mr-2 h-4 w-4" /> Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
