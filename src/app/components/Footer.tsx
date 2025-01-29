"use client"

import { motion } from "framer-motion";
import { PodcastIcon, ArrowRightIcon, YoutubeIcon, TwitterIcon, InstagramIcon, } from "lucide-react"; 

export function Footer() {
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
          delayChildren: 0.3
        }
      }
    };
  
    const itemVariants = {
      hidden: { y: 20, opacity: 0 },
      visible: { y: 0, opacity: 1 }
    };
  
    return (
      <footer className="bg-gray-900 text-gray-100 py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: "-100px" }}
          className="container mx-auto px-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            {/* Company Info */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center mb-6">
                <PodcastIcon className="h-8 w-8 text-red-500 mr-2" />
                <span className="text-xl font-bold">Blockchain Buzz</span>
              </div>
              <p className="text-gray-400 mb-6">
                Leading the conversation in blockchain technology and decentralized innovation.
              </p>
              <div className="flex space-x-4">
                {[TwitterIcon, InstagramIcon, YoutubeIcon].map((Icon, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    variants={itemVariants}
                    whileHover={{ y: -2 }}
                    className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
  
            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold mb-6">Explore</h3>
              <ul className="space-y-4">
                {['Episodes', 'About Us', 'Guests', 'Sponsors'].map((item, index) => (
                  <li key={index}>
                    <motion.a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      {item}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
  
            {/* Resources */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold mb-6">Resources</h3>
              <ul className="space-y-4">
                {['Documentation', 'Blog', 'Community', 'Help Center'].map((item, index) => (
                  <li key={index}>
                    <motion.a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      {item}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
  
            {/* Newsletter */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold mb-6">Stay Updated</h3>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-3 bg-gray-800 rounded-lg pr-16 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute right-2 top-2 bg-red-500 p-2 rounded-lg"
                >
                  <ArrowRightIcon className="h-5 w-5 text-white" />
                </motion.button>
              </div>
              <p className="text-sm text-gray-400 mt-4">
                Join 10,000+ subscribers for exclusive updates
              </p>
            </motion.div>
          </div>
  
          {/* Bottom Bar */}
          <motion.div
            variants={itemVariants}
            className="pt-8 border-t border-gray-800 text-center md:text-left"
          >
            <div className="md:flex md:justify-between items-center">
              <p className="text-gray-400 mb-4 md:mb-0">
                © {new Date().getFullYear()} Blockchain Buzz. All rights reserved.
              </p>
              <div className="flex justify-center space-x-6">
                {['Privacy Policy', 'Terms of Service', 'Cookie Settings'].map((item, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                    whileHover={{ y: -2 }}
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </footer>
    );
  }