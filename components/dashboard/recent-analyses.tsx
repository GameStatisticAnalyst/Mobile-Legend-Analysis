import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import Button from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { MoreHorizontal } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import type { AdminAnalysis } from "@/types/admin"

interface RecentAnalysesProps {
  analyses: AdminAnalysis[]
}

export default function RecentAnalyses({ analyses }: RecentAnalysesProps): JSX.Element {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Recent Analyses</CardTitle>
            <CardDescription>Latest match analyses created by users</CardDescription>
          </div>
          <Button variant="outline" size="sm" asChild>
            <Link href="/admin/analysis">View All</Link>
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {analyses.map((analysis) => {
            const teamA =
              typeof analysis.teamA === "string" ? { name: analysis.teamA, logo: "/placeholder.svg" } : analysis.teamA

            const teamB =
              typeof analysis.teamB === "string" ? { name: analysis.teamB, logo: "/placeholder.svg" } : analysis.teamB

            const createdBy = typeof analysis.createdBy === "string" ? { name: analysis.createdBy } : analysis.createdBy

            return (
              <div
                key={analysis.id}
                className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
              >
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Image
                      src={teamA.logo || "/placeholder.svg"}
                      alt={teamA.name}
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                    <span className="text-xs">vs</span>
                    <Image
                      src={teamB.logo || "/placeholder.svg"}
                      alt={teamB.name}
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium">
                      {teamA.name} vs {teamB.name}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <p className="text-xs text-muted-foreground">{new Date(analysis.date).toLocaleDateString()}</p>
                      <p className="text-xs text-muted-foreground">by {createdBy.name}</p>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {analysis.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {analysis.tags.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{analysis.tags.length - 2}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">Actions</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>View Details</DropdownMenuItem>
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            )
          })}
        </div>
      </CardContent>
      <CardFooter className="border-t pt-4">
        <Button variant="outline" className="w-full" asChild>
          <Link href="/admin/analysis/create">Create New Analysis</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

