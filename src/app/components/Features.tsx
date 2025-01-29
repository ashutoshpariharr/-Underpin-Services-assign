"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import { LightBulbIcon, QuestionMarkCircleIcon } from "@heroicons/react/24/outline";

export function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  const quoteVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, delay: 0.2 },
    },
  };

  return (
    <section className="container mx-auto px-4 py-16 bg-gray-50">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16"
        >
          Your Questions Answered and Ideas Illuminated
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <motion.div
            variants={itemVariants}
            className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <motion.div
              className="mb-6 flex justify-center"
              whileHover={{ scale: 1.1 }}
            >
              <QuestionMarkCircleIcon className="h-16 w-16 text-red-500" />
            </motion.div>
            <p className="text-base md:text-lg leading-relaxed">
              Confused about crypto? Dive into the Blockchain Buzz Podcast, where we decode 
              the complexities and make sense of the digital revolution.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <motion.div
              className="mb-6 flex justify-center"
              whileHover={{ scale: 1.1, rotate: 10 }}
            >
              <LightBulbIcon className="h-16 w-16 text-yellow-500" />
            </motion.div>
            <p className="text-base md:text-lg leading-relaxed">
              Brighten and expand your crypto knowledge with the Blockchain Buzz Podcast. 
              We illuminate the path to understanding blockchain, one idea at a time.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={quoteVariants}
          className="mt-16 p-8 bg-red-50 rounded-lg shadow-inner hover:shadow-md transition-shadow"
        >
          <motion.blockquote 
            className="text-xl md:text-2xl font-medium text-center"
            whileHover={{ scale: 1.02 }}
          >
            "The pulse of decentralized finance. Your gateway to all things crypto."
          </motion.blockquote>
          
          <motion.div 
            className="mt-6 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <motion.div whileHover={{ rotate: 360 }}>
              <Image
                src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=1868&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Alan Mendes"
                width={48}
                height={48}
                className="rounded-full border-2 border-white shadow-md"
              />
            </motion.div>
            <div className="ml-3">
              <p className="font-medium">Alan Mendes</p>
              <p className="text-sm text-gray-600">Social Community Manager</p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}