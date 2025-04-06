import type React from "react"
import type { LucideIcon } from "lucide-react"

export interface NavigationItem {
  name: string
  href: string
  icon: LucideIcon
}

export interface User {
  id: string
  name: string
  email: string
  avatar?: string
}

export interface Stat {
  title: string
  value: string
  icon: React.ReactNode
  description: string
  trend: "up" | "down"
  trendValue: string
}

export interface Activity {
  id: string
  userName: string
  userAvatar: string
  action: string
  time: string
  timestamp: Date
}

export interface AdminAnalysis {
  id: string
  date: string
  teamA: Team | string
  teamB: Team | string
  description: string
  tags: string[]
  createdBy: CreatedBy | string
  status: "published" | "draft"
}

export interface Team {
  id: string
  name: string
  logo: string
}

export interface CreatedBy {
  id: string
  name: string
}

