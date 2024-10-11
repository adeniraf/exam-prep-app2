import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Search, UserCircle } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="absolute flex justify-center items-center px-2 h-20 top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link className="mr-6 flex items-center space-x-2" href="/">
            <span className="hidden font-bold sm:inline-block">StudyClix</span>
          </Link>

          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              className="transition-colors hover:text-foreground/80 text-foreground"
              href="/about"
            >
              About
            </Link>
            <Link
              className="transition-colors hover:text-foreground/80 text-foreground"
              href="/subjects"
            >
              Subjects
            </Link>
            <Link
              className="transition-colors hover:text-foreground/80 text-foreground"
              href="/contact"
            >
              Contact
            </Link>
          </nav>
        </div>

        {/* dropdown nav links */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription>Navigate through our site</SheetDescription>
            </SheetHeader>
            <nav className="flex flex-col space-y-4 mt-4">
              <Link
                className="transition-colors hover:text-foreground/80 text-foreground"
                href="/about"
              >
                About
              </Link>
              <Link
                className="transition-colors hover:text-foreground/80 text-foreground"
                href="/subjects"
              >
                Subjects
              </Link>
              <Link
                className="transition-colors hover:text-foreground/80 text-foreground"
                href="/contact"
              >
                Contact
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <form>
              <div className="relative w-full">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search..."
                  className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                />
              </div>
            </form>
          </div>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Search className="h-5 w-5 hidden md:flex" />
            <span className="sr-only">Search</span>
          </Button>
          <Button variant="ghost" size="icon">
            <UserCircle className="h-5 w-5" />
            <span className="sr-only">Sign In</span>
          </Button>
          <Button variant="ghost" className="">
            Join Us
          </Button>
          <Button className="">Sign In</Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
