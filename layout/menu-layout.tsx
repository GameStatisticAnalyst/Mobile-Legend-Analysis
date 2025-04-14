"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import cn from "@/utils/cn";
import {
  ChevronRight,
  ExternalLink,
  Menu,
  X,
  Search,
  Github,
  Sun,
  Moon,
} from "lucide-react";
import Button from "@/components/ui/button";
import ScrollArea from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Input from "@/components/ui/input";
import { useTheme } from "next-themes";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import TableOfContents from "@/components/toc";

export interface NavItem {
  title: string;
  href?: string;
  icon?: React.ReactNode;
  label?: string;
  description?: string;
  disabled?: boolean;
  external?: boolean;
  items?: NavItem[];
}

export interface DocLayoutProps {
  children: React.ReactNode;
  navigation: NavItem[];
  breadcrumbs?: { title: string; href: string }[];
  title?: string;
  editUrl?: string;
  toc?: {
    title: string;
    url: string;
    items?: { title: string; url: string }[];
  }[];
}

export default function DocLayout({
  children,
  navigation,
  breadcrumbs,
  title,
  editUrl,
  toc,
}: DocLayoutProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >({});
  const [searchQuery, setSearchQuery] = useState("");
  const { setTheme, theme } = useTheme();
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const newExpandedSections: Record<string, boolean> = {};

    const expandActiveSection = (items: NavItem[], parentTitle?: string) => {
      for (const item of items) {
        const itemKey = parentTitle
          ? `${parentTitle}-${item.title}`
          : item.title;

        if (item.href && pathname === item.href) {
          // Expand the current section and its parent
          if (parentTitle) {
            newExpandedSections[parentTitle] = true;
          }
          newExpandedSections[itemKey] = true;
          return true;
        }

        if (item.items && expandActiveSection(item.items, itemKey)) {
          newExpandedSections[itemKey] = true;
          return true;
        }
      }
      return false;
    };

    expandActiveSection(navigation);
    setExpandedSections(newExpandedSections);
  }, [pathname, navigation]);

  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.scrollTo(0, 0);
    }
  }, [pathname]);

  const toggleExpanded = (title: string, parentTitle?: string) => {
    const itemKey = parentTitle ? `${parentTitle}-${title}` : title;
    setExpandedSections((prev) => ({
      ...prev,
      [itemKey]: !prev[itemKey],
    }));
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/docs/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
      setIsMobileNavOpen(false);
    }
  };

  const renderNavItems = (
    items: NavItem[],
    level = 0,
    parentTitle?: string
  ) => {
    return items.map((item, index) => {
      const itemKey = parentTitle ? `${parentTitle}-${item.title}` : item.title;
      const isExpanded = expandedSections[itemKey];
      const isActive = item.href === pathname;
      const hasChildren = item.items && item.items.length > 0;

      return (
        <div key={index} className={cn("flex flex-col", level > 0 && "ml-3")}>
          <div
            className={cn(
              "flex items-center py-1 rounded-md",
              hasChildren &&
                "cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700"
            )}
            onClick={() => {
              if (hasChildren) {
                toggleExpanded(item.title, parentTitle);
              }
            }}
          >
            {hasChildren && (
              <div className="h-6 w-6 p-0 mr-1 flex items-center justify-center">
                {isExpanded ? (
                  <ChevDown className="h-3.5 w-3.5 text-gray-500 dark:text-gray-400" />
                ) : (
                  <ChevronRight className="h-3.5 w-3.5 text-gray-500 dark:text-gray-400" />
                )}
              </div>
            )}
            {!hasChildren && <div className="" />}

            {item.href ? (
              <Link
                href={item.href}
                className={cn(
                  "text-sm flex items-center py-2 px-3 rounded-md w-full transition-colors",
                  isActive
                    ? "font-medium text-blue-600 dark:text-blue-400"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700",
                  hasChildren && "font-medium"
                )}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMobileNavOpen(false);
                }}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
              >
                {item.icon && <span className="mr-2">{item.icon}</span>}
                <span>{item.title}</span>
                {item.label && (
                  <span className="ml-2 rounded-md bg-gray-200 dark:bg-gray-700 px-1.5 py-0.5 text-xs font-medium leading-none text-gray-800 dark:text-gray-200">
                    {item.label}
                  </span>
                )}
                {item.external && <ExternalLink className="ml-1 h-5 w-5" />}
              </Link>
            ) : (
              <span
                className={cn(
                  "text-sm flex items-center py-2 px-3 font-medium",
                  hasChildren
                    ? "text-gray-900 dark:text-gray-100"
                    : "text-gray-600 dark:text-gray-400"
                )}
              >
                {item.icon && <span className="mr-2">{item.icon}</span>}
                {item.title}
                {item.label && (
                  <span className="ml-2 rounded-md bg-gray-200 dark:bg-gray-700 px-1.5 py-0.5 text-xs font-medium leading-none text-gray-800 dark:text-gray-200">
                    {item.label}
                  </span>
                )}
              </span>
            )}
          </div>

          {hasChildren && isExpanded && (
            <div className="mt-1 ml-4 mb-2 border-l border-gray-200 dark:border-gray-700">
              {renderNavItems(item.items, level + 1, itemKey)}
            </div>
          )}
        </div>
      );
    });
  };

  return (
    <div className="flex min-h-screen flex-col">
      {/* <header className="sticky top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex md:hidden">
            <Sheet open={isMobileNavOpen} onOpenChange={setIsMobileNavOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="pr-0 sm:max-w-xs">
                <div className="flex items-center justify-between mb-4">
                  <Link
                    href="/"
                    className="flex items-center space-x-2"
                    onClick={() => setIsMobileNavOpen(false)}
                  >
                    <span className="font-bold">MLAnalysis</span>
                  </Link>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsMobileNavOpen(false)}
                  >
                    <X className="h-5 w-5" />
                    <span className="sr-only">Close</span>
                  </Button>
                </div>
                <form onSubmit={handleSearch} className="relative mb-4">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Cari dokumentasi..."
                    className="w-full pl-8"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </form>
                <ScrollArea className="h-[calc(100vh-8rem)]">
                  <div className="flex flex-col space-y-2">
                    {renderNavItems(navigation)}
                  </div>
                </ScrollArea>
              </SheetContent>
            </Sheet>
          </div>

          <div className="flex items-center space-x-4 md:space-x-6">
            <Link href="/" className="hidden md:flex items-center space-x-2">
              <span className="font-bold">MLAnalysis</span>
            </Link>
          </div>

          <div className="flex flex-1 items-center space-x-2 justify-end">
            {editUrl && (
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="hidden md:flex"
              >
                <Link href={editUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
            )}

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="hidden md:flex"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </div>
      </header> */}

      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] lg:grid-cols-[240px_minmax(0,1fr)] xl:grid-cols-[240px_minmax(0,1fr)_200px] md:gap-6 lg:gap-10">
        <aside className="fixed top-20 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block border-r border-gray-500/20 dark:border-gray-700/50">
          <ScrollArea className="h-full pr-4">
            <div className="flex flex-col space-y-2">
              {renderNavItems(navigation)}
            </div>
          </ScrollArea>
        </aside>

        <main
          ref={mainRef}
          className="relative lg:gap-10 xl:grid xl:grid-cols-[1fr_220px]"
        >
          <div className="mx-auto w-full min-w-0">
            {breadcrumbs && breadcrumbs.length > 0 && (
              <Breadcrumb className="hidden md:flex mb-5">
                <BreadcrumbList>
                  {breadcrumbs.map((crumb, index) => (
                    <React.Fragment key={index}>
                      {index > 0 && <BreadcrumbSeparator />}
                      <BreadcrumbItem>
                        <BreadcrumbLink
                          href={crumb.href}
                          className={cn(
                            "transition-colors hover:text-foreground",
                            index === breadcrumbs.length - 1
                              ? "text-foreground font-medium"
                              : "text-muted-foreground"
                          )}
                        >
                          {crumb.title}
                        </BreadcrumbLink>
                      </BreadcrumbItem>
                    </React.Fragment>
                  ))}
                </BreadcrumbList>
              </Breadcrumb>
            )}
            {title && (
              <div className="mb-4 md:mb-8">
                <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
                  {title}
                </h1>
              </div>
            )}
            <div className="space-y-8">{children}</div>

            {/* Page navigation */}
            <div className="flex items-center justify-between mt-12 pt-4 border-t">
              <Button variant="outline" size="sm" className="gap-1">
                <ChevronLeft className="h-4 w-4" />
                Sebelumnya
              </Button>
              <Button variant="outline" size="sm" className="gap-1 ml-auto">
                Selanjutnya
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {toc && (
            <div className="hidden text-sm xl:block">
              <div className="sticky top-20">
                <div className="pb-4">
                  <p className="text-sm font-medium">Pada halaman ini</p>
                </div>
                <TableOfContents toc={toc} />
              </div>
            </div>
          )}
        </main>
      </div>

      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} MLAnalysis. Hak cipta dilindungi.
          </p>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="lg">
              <Link
                href="https://github.com/mlanalysis"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ChevDown(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function ChevronLeft(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}
