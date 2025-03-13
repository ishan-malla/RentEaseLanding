"use client";
import { Button } from "@/components/ui/button";
import RoomCard from "../ui/room-card";
import { motion } from "framer-motion";

export default function RoomShowcaseSection() {
  const rooms = [
    {
      id: 1,
      title: "Modern Studio Apartment",
      location: "Kathmandu",
      beds: 1,
      baths: 1,
      price: 1200,
      image:
        "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/331250584.jpg?k=98bdbf189f62813a0d10613257bb4205c9e112c50c5805a70d6caf30a6c2a35f&o=",
    },
    {
      id: 2,
      title: "Spacious Loft with View",
      location: "Pokhara",
      beds: 2,
      baths: 2,
      price: 2500,
      image:
        "https://img.freepik.com/premium-psd/spacious-loft-living-room-with-large-windows-view-city_666026-19932.jpg",
    },
    {
      id: 3,
      title: "Cozy Room in Shared House",
      location: "Jhamsikhel",
      beds: 1,
      baths: 0.5,
      price: 800,
      image:
        "https://images.trvl-media.com/lodging/84000000/83390000/83382400/83382345/b31b9125.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
    },
  ];

  return (
    <section className="w-full py-32 bg-muted">
      <div className="container px-4 md:px-6">
        {/* Animated Text Section */}
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
              Discover Amazing Spaces
            </h2>
            <motion.p
              className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              From cozy apartments to luxury homes, find the perfect space for
              your needs.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Animated Room Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
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
          {rooms.map((room) => (
            <motion.div
              key={room.id}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              <RoomCard
                title={room.title}
                location={room.location}
                beds={room.beds}
                baths={room.baths}
                price={room.price}
                image={room.image}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Animated Button */}
        <motion.div
          className="flex justify-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Button variant="outline" size="lg">
            View All Listings
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
