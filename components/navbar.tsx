import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "@/components/ui/button";
import { Menu, Search, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import ThemeToggle from "@/components/theme-provider";
import anime from "animejs";
import Input from "@/components/ui/input";

interface menuProps {
  name: string;
  href: string;
}

const MenuNav: menuProps[] = [
  {
    name: "Analysis",
    href: "/analysis",
  },
  {
    name: "Teams",
    href: "/teams",
  },
  {
    name: "Tournaments",
    href: "/tournaments",
  },
  {
    name: "Contributors",
    href: "/contributors",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      anime({
        targets: ".mobile-menu-item",
        opacity: [0, 1],
        translateY: [20, 0],
        delay: anime.stagger(100),
        easing: "easeOutExpo",
        duration: 800,
      });
    }
  }, [mobileMenuOpen]);

  const isActive = (path: string) => pathname === path;
  
  return (
    <header
      className={`sticky top-0 z-50 w-full mx-auto md:px-13 lg:px-50 transition-all duration-300 ${
        scrolled ? " backdrop-blur-md shadow-sm" : "bg-transparent rounded"
      }`}
    >
      <div className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            {/* <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold">ML</span>
            </div> */}
            <span className="hidden font-bold text-xl sm:inline-block">
              MLAnalysis
            </span>
          </Link>
          <nav className="hidden md:flex items-center space-x-1 text-sm font-medium">
            {MenuNav.map((items: menuProps) => (
              <Link
                href={items.href}
                key={items.name}
                className={`px-4 py-2 rounded-full transition-colors ${
                  isActive(items.href)
                    ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                    : "hover:bg-blue-100 dark:hover:bg-slate-800"
                }`}
              >
                {items.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4 hidden md:flex">
          <div className="hidden 2xl:flex text-gray-700 dark:text-gray-300 relative w-60">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="h-4 w-4 " />
            </div>
            <Input
              placeholder="Search analysis..."
              className="pl-10 bg-white/90 dark:bg-gray-900"
            />
          </div>
          <ThemeToggle />
          <Button
            variant="default"
            className="hidden md:inline-flex rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          >
            <Link href="/account" className="text-white">
              Masuk
            </Link>
          </Button>
        </div>

        <div className="flex items-center md:hidden">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger>
              <Button
                variant="ghost"
                className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-[350px] pr-5">
              <div className="flex items-center justify-between mb-6">
                <Link
                  href="/"
                  className="flex items-center space-x-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                    <span className="text-white font-bold">ML</span>
                  </div>
                  <span className="font-bold text-xl">MLAnalysis</span>
                </Link>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-full"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <div className="relative mb-6">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Search className="h-4 w-4 text-muted-foreground" />
                </div>
                <Input
                  placeholder="Search analysis..."
                  className="pl-10 rounded-full border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"
                />
              </div>
              <nav className="flex flex-col space-y-1">
                {MenuNav.map((items: menuProps) => (
                  <Link
                    href={items.href}
                    key={items.name}
                    className={`mobile-menu-item z-50 py-3 rounded-xl transition-colors ${
                      isActive(items.href)
                        ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                        : "hover:bg-slate-100 dark:hover:bg-slate-800"
                    }`}
                    onClick={(): void => setMobileMenuOpen(false)}
                  >
                    {items.name}
                  </Link>
                ))}
              </nav>
              <div className="border-t my-2"></div>
              <div className="space-y-3 mt-6">
                <Button
                  className="mobile-menu-item w-full rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Link href="/account">Masuk</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
