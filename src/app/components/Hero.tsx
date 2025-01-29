"use client";

import { motion } from "framer-motion";
import { PodcastIcon, ArrowRightIcon } from "lucide-react";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  const floatVariants = {
    float: {
      y: [0, -20, 0],
      rotate: [0, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-50 via-red-50 to-yellow-50 opacity-50"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.5 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 bg-red-100 rounded-full blur-xl"
        variants={floatVariants}
        animate="float"
      />
      <motion.div
        className="absolute bottom-20 right-20 w-48 h-48 bg-blue-100 rounded-full blur-xl"
        variants={floatVariants}
        animate="float"
        transition={{ delay: 0.5 }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center"
        >
          <motion.div variants={textVariants} className="mb-8">
            <PodcastIcon className="h-16 w-16 mx-auto text-red-500 animate-pulse" />
          </motion.div>

          <motion.h1
            variants={textVariants}
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-red-600"
          >
            Blockchain Buzz
            <motion.span
              variants={textVariants}
              className="block mt-4 text-4xl sm:text-5xl md:text-6xl"
            >
              Podcast
            </motion.span>
          </motion.h1>
          
          <motion.p
            variants={textVariants}
            className="text-xl md:text-2xl mb-12 text-gray-600 max-w-2xl mx-auto font-medium"
          >
            Unlocking the Future, One Block at a Time
          </motion.p>
          
          <motion.button
            variants={textVariants}
            whileHover={{ 
              scale: 1.05,
              background: "linear-gradient(45deg, #000000, #2d2d2d)"
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-black text-white rounded-xl hover:shadow-xl transition-all font-medium text-lg group"
          >
            SUBSCRIBE NOW
            <ArrowRightIcon className="h-5 w-5 inline-block ml-2 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
