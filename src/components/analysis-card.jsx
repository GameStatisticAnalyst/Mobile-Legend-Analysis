import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, User } from "lucide-react"

export default function AnalysisCard({ analysis, onClick }) {
  return (
    <Card
      className="overflow-hidden cursor-pointer hover:shadow-lg transition-all hover:-translate-y-1"
      onClick={() => onClick(analysis)}
    >
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6 py-6 w-full">
            <div className="text-center">
              <Image
                src={analysis.teamA.logo || "/profile.jpg"}
                alt={analysis.teamA.name}
                width={50}
                height={50}
                className="rounded border-2 border-primary/20 w-14 h-14 object-cover"
              />
              <span className="text-sm font-medium mt-1 block">{analysis.teamA.name}</span>
            </div>
            <span className="text-2xl font-bold text-muted-foreground">VS</span>
            <div className="text-center">
              <Image
                src={analysis.teamB.logo || "/placeholder.svg"}
                alt={analysis.teamB.name}
                width={50}
                height={50}
                className="rounded border-2 border-primary/20 w-14 h-14 object-cover"
              />
              <span className="text-sm font-medium mt-1 block">{analysis.teamB.name}</span>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground line-clamp-2">{analysis.description}</p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {/* <span>{new Date(analysis.date).toLocaleDateString()}</span> */}
              <span>{analysis.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <User className="h-4 w-4" />
              {analysis.createdBy.name}
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {analysis.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="rounded-full">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

