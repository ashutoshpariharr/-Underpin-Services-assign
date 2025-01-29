"use client"

import { CurrencyDollarIcon, GiftIcon, StarIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Image from "next/image";

export function Membership() {
  const benefits = [
    {
      icon: StarIcon,
      title: "Exclusive Content",
      description: "Access member-only episodes and bonus materials"
    },
    {
      icon: GiftIcon,
      title: "Early Access",
      description: "Get new episodes 48 hours before everyone else"
    },
    {
      icon: CurrencyDollarIcon,
      title: "Discounts",
      description: "Special deals on merchandise and event tickets"
    },
  ]

  const benefitVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { scale: 1, opacity: 1 }
  };

  return (
    <section className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Membership Benefits
        </h2>
        <p className="text-gray-600 md:text-lg">
          Become our sponsor and get all benefits
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={benefitVariants}
            transition={{ delay: index * 0.2 }}
            className="p-8 bg-gradient-to-b from-gray-50 to-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex flex-col items-center text-center">
              <motion.div
                className="p-4 bg-red-500 rounded-full mb-4"
                whileHover={{ scale: 1.1 }}
              >
                <benefit.icon className="h-8 w-8 text-white" />
              </motion.div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
        >
          Join Membership Now
        </motion.button>
      </motion.div>
    </section>
  )
}