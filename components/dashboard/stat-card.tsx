import type { ReactNode } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface StatCardProps {
  title: string
  value: string
  icon: ReactNode
  description?: string
  trend?: "up" | "down"
  trendValue?: string
}

export default function StatCard({ title, value, icon, description, trend, trendValue }: StatCardProps): JSX.Element {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {description && <p className="text-xs text-muted-foreground">{description}</p>}
        {trend && (
          <div className={`flex items-center text-xs mt-1 ${trend === "up" ? "text-green-500" : "text-red-500"}`}>
            {trend === "up" ? "↑" : "↓"} {trendValue}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

