import { ComponentType } from "react"

import {
  BarChart3,
  FileText,
  LayoutDashboard,
  Settings,
  Shield,
  Trophy,
  Users,
} from "lucide-react"

interface SubItem {
  title: string
  href?: string
  icon?: ComponentType<{ className?: string }>
}

interface MenuItem {
  title: string
  href?: string
  icon?: ComponentType<{ className?: string }>
  submenu?: SubItem[]
}

interface FolderMenu {
  title: string
  items: MenuItem[]
}

const navigation:FolderMenu[] = [
    {title: "Dashboard",items:[
      { title: "Dashboard", href: "/admin", icon: LayoutDashboard },
      { title: "Analysis", href: "/admin/analysis", icon: BarChart3 },
    { title: "Teams", href: "/admin/teams", icon: Shield },
    { title: "Tournaments", href: "/admin/tournaments", icon: Trophy },
    { title: "Users", href: "/admin/users", icon: Users },
    { title: "Reports", href: "/admin/reports", icon: FileText },
    { title: "Settings", href: "/admin/settings", icon: Settings },
    ]},
  ]

  export default navigation