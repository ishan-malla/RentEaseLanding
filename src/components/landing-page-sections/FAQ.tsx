"use client";
import FAQItem from "../ui/faq-item";
import { motion } from "framer-motion";

export default function FAQSection() {
  const faqs = [
    {
      question: "How do I list my property?",
      answer:
        'Simply create an account, click on "List Your Space," and follow the step-by-step guide to create your listing with photos, description, and rental terms.',
    },
    {
      question: "Is my payment secure?",
      answer:
        "Yes, all payments are processed through our secure payment system with encryption and fraud protection for both landlords and tenants.",
    },
    {
      question: "How are tenants verified?",
      answer:
        "We verify all users through ID verification, background checks, and review history to ensure a safe community for everyone.",
    },
    {
      question: "What if there's an issue with my rental?",
      answer:
        "Our customer support team is available 24/7 to help resolve any issues, and we offer a dispute resolution process to mediate any conflicts.",
    },
  ];

  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        {/* Animated Text Section */}
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Frequently Asked Questions
            </h2>
            <motion.p
              className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Find answers to common questions about using RentEase.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Animated FAQ Items */}
        <motion.div
          className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:gap-8 md:grid-cols-2 lg:gap-10 mt-12"
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
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              <FAQItem question={faq.question} answer={faq.answer} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
