export interface Team {
  id: string
  name: string
  logo: string
}

export interface Player {
  id: string
  name: string
  hero: string
  teamId: string
}

export interface MatchLog {
  id: string
  timestamp: string
  playerId: string
  playerName: string
  action: string
  target?: string
  description: string
}

export interface Analysis {
  id: string
  date: string
  teamA: Team
  teamB: Team
  description: string
  tags: string[]
  logs: MatchLog[]
  createdBy: {
    id: string
    name: string
  }
}

