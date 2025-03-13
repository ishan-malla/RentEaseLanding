import Link from "next/link";
import { Home } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background py-12">
      <div className="container px-6">
        <div className="grid grid-cols-2  md:grid-cols-4 gap-16">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Home className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">RentEase</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Live Anywhere, Rent with Ease. The flexible platform for modern
              living arrangements.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Press
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Safety Center
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Community Guidelines
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex  items-center justify-between gap-4 border-t pt-6 flex-row">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} RentEase. All rights reserved.
          </p>
          <div className="flex gap-4">
            <SocialIcon
              name="Facebook"
              path="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
            />
            <SocialIcon
              name="Twitter"
              path="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"
            />
            <SocialIcon
              name="Instagram"
              path={[
                "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",
                "M17.5 6.5h.01",
              ]}
              rect={{ x: 2, y: 2, width: 20, height: 20, rx: 5, ry: 5 }}
            />
            <SocialIcon
              name="LinkedIn"
              path={[
                "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
                "M4 4m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",
              ]}
              rect={{ x: 2, y: 9, width: 4, height: 12, rx: 5, ry: 5 }}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

interface SocialIconProps {
  name: string;
  path: string | string[];
  rect?: {
    x: number;
    y: number;
    width: number;
    height: number;
    rx: number;
    ry: number;
  };
}

function SocialIcon({ name, path, rect }: SocialIconProps) {
  return (
    <Link href="#" className="text-muted-foreground hover:text-foreground">
      <span className="sr-only">{name}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        {rect && (
          <rect
            x={rect.x}
            y={rect.y}
            width={rect.width}
            height={rect.height}
            rx={rect.rx}
            ry={rect.ry}
          />
        )}
        {Array.isArray(path) ? (
          path.map((p, i) => <path key={i} d={p} />)
        ) : (
          <path d={path} />
        )}
      </svg>
    </Link>
  );
}
