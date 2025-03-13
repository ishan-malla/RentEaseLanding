"use client";
import { Search, MessageSquare, CreditCard } from "lucide-react";
import StepCard from "../ui/step-card";
import { motion } from "framer-motion";

export default function HowItWorksSection() {
  const steps = [
    {
      icon: <Search className="h-8 w-8 text-primary" />,
      title: "1. Search or List",
      description:
        "Browse available properties or create a listing for your space with detailed information and photos.",
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-primary" />,
      title: "2. Connect",
      description:
        "Communicate directly with landlords or potential tenants through our secure messaging system.",
    },
    {
      icon: <CreditCard className="h-8 w-8 text-primary" />,
      title: "3. Secure Transaction",
      description:
        "Complete the rental agreement and payment securely through our platform with protection for both parties.",
    },
  ];

  return (
    <section id="how-it-works" className="w-full py-32 bg-background">
      <div className="container px-6">
        {/* Animated Text Section */}
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
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
              How RentEase Works
            </h2>
            <motion.p
              className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              Simple steps to start renting or listing your property.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Animated Step Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
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
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, x: -100 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              <StepCard
                icon={step.icon}
                title={step.title}
                description={step.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
