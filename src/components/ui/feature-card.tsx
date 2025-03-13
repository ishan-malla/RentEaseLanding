import type { ReactNode } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
  buttonText: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
  features,
  buttonText,
}: FeatureCardProps) {
  return (
    <div className="relative group overflow-hidden rounded-xl border bg-background p-6 shadow-md transition-all hover:shadow-xl">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative space-y-4">
        {icon}
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Star className="mr-2 h-4 w-4 text-primary" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <Button className="w-full">{buttonText}</Button>
      </div>
    </div>
  );
}
