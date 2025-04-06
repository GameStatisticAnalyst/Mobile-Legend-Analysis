export interface Hero {
  id: string
  name: string
  image: string
  role: Role
}

export type Role = "mid-lane" | "gold-lane" | "exp-lane" | "roamer-lane" | "jungler-lane"

export interface Player {
  id: string
  name: string
  hero: Hero
  color: string
  teamId: string
}

export interface Team {
  id: string
  name: string
  logo: string
  color: string
  players: Player[]
}

export interface EventType {
  id: string
  name: string
  icon?: string
}

export interface GameEvent {
  id: string
  type: string
  sourcePlayerId: string
  targetPlayerId?: string
  timestamp: number
  coordinates: {
    x: number
    y: number
  }
}

export interface MatchAnalysis {
  id: string
  matchId: string
  teamA: Team
  teamB: Team
  events: GameEvent[]
  videoUrl?: string
  mapImage: string
  createdAt: string
  updatedAt: string
}

