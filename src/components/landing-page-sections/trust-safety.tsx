/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import { Shield } from "lucide-react";
import { motion } from "framer-motion";

export default function TrustAndSafetySection() {
  const safetyFeatures = [
    "Verified user profiles and reviews",
    "Secure messaging and payment system",
    "24/7 customer support",
    "Rental agreement templates and tools",
  ];

  return (
    <section className="w-full py-24 bg-muted">
      <div className="container px-6">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_400px] gap-12">
          {/* Animated Text and List Section */}
          <motion.div
            className="flex flex-col justify-center space-y-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="font-bold tracking-tighter text-5xl">
                Your Safety is Our Priority
              </h2>
              <motion.p
                className="max-w-[600px] text-muted-foreground text-xl"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                We've built RentEase with security and trust at its core,
                providing peace of mind for both landlords and tenants.
              </motion.p>
            </motion.div>

            {/* Animated List */}
            <motion.ul
              className="grid gap-2 py-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
            >
              {safetyFeatures.map((feature, index) => (
                <motion.li
                  key={index}
                  className="flex items-center"
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ type: "spring", stiffness: 120 }}
                >
                  <Shield className="mr-2 h-5 w-5 text-primary" />
                  <span>{feature}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Animated Image Section */}
          <motion.div
            className="relative h-[500px] rounded-xl overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Image
              src="https://t4.ftcdn.net/jpg/12/26/66/95/360_F_1226669594_p0WrOEQqOwgyFpCrZOgtnAKG5vwgJroN.jpg"
              alt="Secure rental transaction"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
