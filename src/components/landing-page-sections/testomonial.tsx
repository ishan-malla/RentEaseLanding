"use client";
import TestimonialCard from "../ui/testomonial.card";
import { motion } from "framer-motion";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Durgesh T.",
      role: "Landlord",
      avatar: "https://www.lensnepal.com/files/profiles/durgesh-thapa.jpg",
      content:
        "RentEase made it so simple to list my spare bedroom. I was able to find a reliable tenant within a week, and the payment system gives me peace of mind.",
    },
    {
      name: "Jamal.",
      role: "Tenant",
      avatar:
        "https://wctour-images.worldchess.com/media/user_avatars/K/X/N/0a0a0efd-3b87-4471-ac4b-d39609e72e3e.jpg",
      content:
        "As someone who relocates frequently for work, RentEase has been a game-changer. I can quickly find verified places with flexible terms that suit my lifestyle.",
    },
  ];

  return (
    <section id="testimonials" className="w-full py-32 bg-muted">
      <div className="container px-6">
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
            <h2 className="font-bold tracking-tighter text-5xl">
              What Our Users Say
            </h2>
            <motion.p
              className="max-w-[900px] text-muted-foreground text-xl/relaxed"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Hear from landlords and tenants who have found success with
              RentEase.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Animated Testimonial Cards */}
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
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              <TestimonialCard
                name={testimonial.name}
                role={testimonial.role}
                avatar={testimonial.avatar}
                content={testimonial.content}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
