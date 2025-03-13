import Image from "next/image";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  avatar: string;
  content: string;
}

export default function TestimonialCard({
  name,
  role,
  avatar,
  content,
}: TestimonialCardProps) {
  return (
    <div className="rounded-xl border bg-background p-6 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="relative h-12 w-20 rounded-full overflow-hidden">
          <Image
            src={avatar || "/placeholder.svg"}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h3 className="font-semibold">{name}</h3>
          <p className="text-sm text-muted-foreground">{role}</p>
          <div className="flex mt-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-primary text-primary" />
            ))}
          </div>
          <p className="mt-3">&quot;{content}&quot;</p>
        </div>
      </div>
    </div>
  );
}
