"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { PlayIcon, AppWindowIcon, Music2Icon, YoutubeIcon } from 'lucide-react';

export function AppSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const phoneAnimation = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const floatAnimation = {
    float: {
      y: [0, -20, 0],
      rotate: [0, -3, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <motion.div 
        className="absolute top-20 -left-20 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-30"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      />
      
      <motion.div 
        className="absolute bottom-20 -right-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={container}
        className="container mx-auto relative z-10"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            {/* <motion.div variants={item} className="mb-4">
              <span className="inline-block px-4 py-1.5 bg-red-100 text-red-500 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow">
                🚀 NOW AVAILABLE
              </span>
            </motion.div> */}
            
            <motion.h2 
              variants={item} 
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
            >
              Experience the Future with
              <span className="block text-red-500 mt-2">Blockchain Buzz App</span>
            </motion.h2>
            
            <motion.p 
              variants={item} 
              className="text-lg text-gray-600 mb-8 max-w-xl"
            >
              Dive into the world of blockchain with our feature-packed mobile app. 
              Get exclusive content, personalized recommendations, and seamless listening.
            </motion.p>

            <motion.div 
              variants={item} 
              className="flex items-center gap-6"
            >
              <span className="text-sm text-gray-600">Also available on:</span>
              <div className="flex gap-4">
                <motion.a 
                  href="#"
                  whileHover={{ y: -2 }}
                  className="p-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <Music2Icon className="w-6 h-6 text-green-500" />
                </motion.a>
                <motion.a 
                  href="#"
                  whileHover={{ y: -2 }}
                  className="p-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <YoutubeIcon className="w-6 h-6 text-red-500" />
                </motion.a>
                <motion.a 
                  href="#"
                  whileHover={{ y: -2 }}
                  className="p-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <AppWindowIcon className="w-6 h-6 text-blue-500" />
                </motion.a>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={phoneAnimation}
            className="md:w-1/2 mt-8 md:mt-0 relative"
          >
            <div className="relative max-w-md mx-auto">
              {/* Main Phone Image */}
              <motion.div
                whileHover={{ 
                  rotate: 5,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWMlMjBhcHB8ZW58MHx8MHx8fDA%3D"
                  alt="Blockchain Buzz App Preview"
                  width={500}
                  height={600}
                  className="w-full relative z-10"
                  priority
                />
              </motion.div>
              
              {/* Floating Elements */}
              <motion.div
                className="absolute -top-8 -right-8 z-0"
                variants={floatAnimation}
                animate="float"
              >
                <div className="bg-white p-4 rounded-2xl shadow-xl w-48">
                  <div className="flex items-center gap-2 mb-2">
                    <PlayIcon className="w-4 h-4 text-red-500" />
                    <span className="text-sm font-medium">Now Playing</span>
                  </div>
                  <div className="h-24 bg-gray-100 rounded-lg" />
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-8 -left-8 z-0"
                variants={floatAnimation}
                animate="float"
                initial={{ rotate: 5 }}
              >
                <div className="bg-white p-4 rounded-2xl shadow-xl w-48">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-medium">Trending</span>
                  </div>
                  <div className="h-24 bg-gradient-to-r from-red-100 to-yellow-100 rounded-lg" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}