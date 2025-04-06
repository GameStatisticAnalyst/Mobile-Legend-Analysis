"use client"

import "@/styles/globals.css"
import { useState, ReactElement, ReactNode, useEffect, useContext } from "react"
import { useRouter } from "next/navigation"
import { usePathname } from "next/navigation"
// import { jwtDecode } from "jwt-decode"
import type React from "react"
import Link from "next/link"

// import { NotificationContext } from "@/app/_components/notification/notificationContext"
// import authStore from "@/config/store/authStore"
import navigation from "./admin-menu"
import { ChevronLeft, Menu, Bell, Search, User, Settings, LogOut } from "lucide-react"
import Avatar from "@/components/ui/avatar"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function AdminLayout({ children }: { children: ReactNode }): ReactElement {
  const pathname: string = usePathname()
  const router = useRouter()

  // const context = useContext(NotificationContext)
  // const { setNotification } = context

  // const { data, reset, token, isLogin, loadingHydration } = authStore()
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [submenuOpen, setSubmenuOpen] = useState(false)

  const MenuLink = ({ item, isActive }: { item: any; isActive: boolean }) => {
    const linkContent = (
      <>
        <item.icon className={`${isCollapsed ? "h-5 w-5" : "mr-3 h-4 w-4"}`} />
        {!isCollapsed && <span>{item.title}</span>}
      </>
    )

    const linkClass = `flex items-center ${
      isCollapsed ? "justify-center" : null
    } rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
      isActive
        ? "bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white"
        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
    }`


    if (isCollapsed) {
      return (
        <Tooltip>
          <TooltipTrigger asChild>
            <Link href={item.href || ""} className={linkClass}>
              {linkContent}
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">{item.title}</TooltipContent>
        </Tooltip>
      )
    }

    return (
      <Link href={item.href || ""} className={linkClass}>
        {linkContent}
      </Link>
    )
  }

  return (
      <div className="flex min-h-screen w-full bg-gray-100">
            {/* Sidebar */}
            <TooltipProvider>
              <aside
                className={`${
                  isCollapsed ? "w-[80px]" : "w-[240px]"
                } fixed left-0 top-0 z-40 h-screen border-r border-gray-200 bg-white transition-all duration-300 dark:border-gray-700 dark:bg-gray-800`}
              >
                {/* Sidebar Header */}
                <div className="flex h-16 items-center justify-between border-b border-gray-200 px-4 dark:border-gray-700">
                  <div className={`flex items-center gap-2 ${isCollapsed ? "justify-center" : null}`}>
                    {!isCollapsed && <span className="text-xl font-semibold dark:text-white">ML Analys</span>}
                    <button
                      onClick={() => setIsCollapsed(!isCollapsed)}
                      className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      {isCollapsed ? (
                        <Menu className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                      ) : (
                        <ChevronLeft className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Sidebar Content */}
                <div className="flex h-[calc(100vh-4rem)] flex-col">
                  <div className="flex-1 overflow-y-auto py-4">
                    <nav className="space-y-1 px-3">
                      {navigation.map(
                        (section: { title: string; items?: { title: string; href?: string; submenu?: any[] }[] }): ReactElement => (
                          <div key={section.title} className="space-y-1">
                            {!isCollapsed && (
                              <h4 className="mb-1 mt-4 px-2 text-sm font-semibold text-gray-500 dark:text-gray-400">
                                {section.title}
                              </h4>
                            )}
                            {section.items?.map((item): ReactElement => {
                              const isActive: boolean = pathname === item.href
                              const hasSubMenu: boolean = item.submenu && item.submenu.length > 0
                              return (
                                <div key={item.title}>
                                  <MenuLink item={item} isActive={isActive} />
                                  {hasSubMenu && (
                                    <div className="ml-2">
                                      {submenuOpen && (
                                        <div>
                                          {item.submenu.map(
                                            (subItem): ReactElement => (
                                              <MenuLink key={subItem.title} item={subItem} isActive={pathname === subItem.href} />
                                            ),
                                          )}
                                        </div>
                                      )}
                                    </div>
                                  )}
                                </div>
                              )
                            })}
                          </div>
                        ),
                      )}
                    </nav>
                  </div>

                  {/* User Profile */}
                  <div className="border-t border-gray-200 p-4 dark:border-gray-700">
                    <DropdownMenu>
                      <DropdownMenuTrigger className="w-full focus:outline-none">
                        <div className={`flex items-center gap-3 ${isCollapsed ? "justify-center" : null}`}>
                          {isCollapsed ? (
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                                  <Avatar
                                  src="/placeholder.svg" alt="Admin User" className="object-cover" fallback="Admin User" 
                                    // src={data.images}
                                    // alt={data.fullname}
                                    // className="object-cover"
                                    // fallback={data.fullname}
                                  />
                                </div>
                              </TooltipTrigger>
                              <TooltipContent side="right">
                                <p className="font-medium">Nama</p>
                                <p className="text-muted-foreground text-xs">Role</p>
                              </TooltipContent>
                            </Tooltip>
                          ) : (
                            <>
                              <div className="relative h-10 w-10 overflow-hidden rounded-full">
                                <Avatar src="/placeholder.svg" alt="Admin User" className="object-cover" fallback="Admin User" />
                                {/* <Avatar src={data.images} alt={data.fullname} className="object-cover" fallback={data.fullname} /> */}
                              </div>
                              <div className="text-left">
                                <p className="text-md font-medium text-gray-900 dark:text-white">Nama</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Role</p>
                              </div>
                            </>
                          )}
                        </div>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        side={isCollapsed ? "right" : "top"}
                        className="w-56"
                        align={isCollapsed ? "start" : "end"}
                      >
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <User className="mr-2 h-4 w-4" />
                          <span>Profile</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Settings className="mr-2 h-4 w-4" />
                          <span>Settings</span>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600 focus:text-red-600" >
                          <LogOut className="mr-2 h-4 w-4" />
                          <span>Log out</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </aside>
            </TooltipProvider>

            {/* Main Content */}
            <main className={`flex-1 ${isCollapsed ? "ml-[80px]" : "ml-[240px]"} transition-all duration-300`}>
              {/* Top Navigation */}
              <div className="sticky top-0 z-30 border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
                <div className="flex h-16 items-center justify-between px-4">
                  <div className="flex flex-1 items-center">
                    <div className="relative w-full max-w-md">
                      <input
                        type="text"
                        placeholder="Search..."
                        className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2 pl-10 pr-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                      />
                      <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-500 dark:text-gray-400" />
                    </div>
                  </div>
                  <button className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <Bell className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  </button>
                </div>
              </div>

              {/* Page Content */}
              <div className="p-6">{children}</div>
            </main>
      </div>
  )
}
