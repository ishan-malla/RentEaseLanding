"use client";
import { Key, Home } from "lucide-react";
import FeatureCard from "../ui/feature-card";
import { motion } from "framer-motion";

export default function FeaturesSection() {
  const landlordFeatures = [
    "Set your own rental prices",
    "Screen potential tenants",
    "Manage bookings with ease",
  ];

  const tenantFeatures = [
    "Browse verified listings",
    "Flexible booking options",
    "Secure payment system",
  ];

  return (
    <section id="features" className="w-full py-32 bg-background">
      <div className="container px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              One Platform, Two Ways to Use
            </h2>
            <motion.p
              className="max-w-[900px] text-muted-foreground text-xl/relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Whether you&apos;re looking to rent out your space or find a place
              to stay, RentEase has you covered.
            </motion.p>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.3,
              },
            },
          }}
        >
          {/* Left Card */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { type: "spring", stiffness: 120 },
              },
            }}
          >
            <FeatureCard
              icon={<Key className="h-10 w-10 text-primary" />}
              title="Become a Landlord"
              description="List your property, set your terms, and earn income by renting out your space on your schedule."
              features={landlordFeatures}
              buttonText="List Your Property"
            />
          </motion.div>

          {/* Right Card */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 100 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { type: "spring", stiffness: 120 },
              },
            }}
          >
            <FeatureCard
              icon={<Home className="h-10 w-10 text-primary" />}
              title="Find a Place to Stay"
              description="Discover comfortable and affordable accommodations that fit your lifestyle and budget."
              features={tenantFeatures}
              buttonText="Find Rentals"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
