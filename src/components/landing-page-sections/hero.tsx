"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="mt-14 w-full bg-gradient-to-b from-background to-muted">
      <div className="px-6">
        <div className="flex flex-col items-start gap-8">
          {/* Text Content - Left Aligned */}
          <motion.div
            className="max-w-2xl space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              className="text-5xl font-bold leading-[1.15] tracking-tighter"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Live Anywhere, Rent with Ease.
            </motion.h1>

            <motion.p
              className="text-lg text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Be a landlord of your own space or a tenant in someone
              else&apos;s—flexibility in living arrangements at your fingertips.
            </motion.p>

            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Button size="lg" className="px-8">
                Find a Place
              </Button>
              <Button size="lg" variant="outline" className="px-8">
                List Your Space
              </Button>
            </motion.div>
          </motion.div>

          {/* Image Container - Left Aligned */}
          <motion.div
            className="relative w-[70%] h-[520px] rounded-xl overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Image
              src="https://cdn.trendir.com/wp-content/uploads/old/interiors/cozy-apartment-scandinavian-style-balcony-night-3.jpg"
              alt="Rental Space"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
