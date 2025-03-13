import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 py-2">
        <div className="flex items-center gap-2">
          <Home className="h-7 w-7 text-primary" />
          <span className="text-2xl font-bold">RentEase</span>
        </div>

        <nav className="flex space-x-6">
          <Link
            href="#features"
            className="text-sm font-medium px-2 py-1 hover-underline"
          >
            Features
          </Link>
          <Link
            href="#how-it-works"
            className="text-sm font-medium px-2 py-1 hover-underline"
          >
            How It Works
          </Link>
          <Link
            href="#testimonials"
            className="text-sm font-medium px-2 py-1 hover-underline"
          >
            Testimonials
          </Link>
          <Link
            href="#faq"
            className="text-sm font-medium px-2 py-1 hover-underline"
          >
            FAQ
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="text-sm font-medium px-2 py-1 hover-underline"
          >
            Log in
          </Link>
          <Button className="px-4">Sign Up</Button>
        </div>
      </div>
    </header>
  );
}
