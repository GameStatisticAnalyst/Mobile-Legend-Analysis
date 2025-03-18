import Link from "next/link"
import Button from "@/components/ui/button"
import { Menu, Search } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Input from "@/components/ui/input"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            {/* <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold">ML</span>
            </div> */}
            <span className="hidden font-bold text-xl sm:inline-block">MLAnalysis</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <p  className="transition-colors hover:text-foreground/80">
              Analysis
            </p>
            <p  className="transition-colors hover:text-foreground/80">
              Teams
            </p>
            <p  className="transition-colors hover:text-foreground/80">
              Tournaments
            </p>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex relative w-60">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search analysis..." className="pl-8" />
          </div>
          <Button variant="default" asChild className="hidden md:inline-flex">
            <Link href="/login">Sign In</Link>
          </Button>
          <Button variant="outline" asChild className="hidden md:inline-flex">
            <Link href="/register">Register</Link>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] pr-0 bg-white">
            <nav className="flex flex-col space-y-4 mt-4">
              <Link href="/analysis" className="block px-2 py-1 text-lg hover:text-primary">
                Analysis
              </Link>
              <Link href="/teams" className="block px-2 py-1 text-lg hover:text-primary">
                Teams
              </Link>
              <Link href="/tournaments" className="block px-2 py-1 text-lg hover:text-primary">
                Tournaments
              </Link>
              <div className="border-t my-4"></div>
              <Link href="/login" className="block px-2 py-1 text-lg hover:text-primary">
                Sign In
              </Link>
              <Link href="/register" className="block px-2 py-1 text-lg hover:text-primary">
                Register
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

