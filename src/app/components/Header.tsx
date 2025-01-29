"use client"

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { XMarkIcon } from "@heroicons/react/16/solid";
import { MenuIcon, PodcastIcon } from "lucide-react";
import LOGO from "@/app/LOGO-landing.png";

const navItems = [
  { name: "Episodes", href: "#" },
  { name: "About", href: "#" },
  { name: "More", href: "#" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm"
    >
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <motion.div whileHover={{ scale: 1.05 }} className="flex items-center">
        <div className="flex items-center mb-6">
                <PodcastIcon className="h-8 w-8 text-red-500 mr-2" />
                <span className="text-xl font-bold">Blockchain Buzz</span>
              </div>
        </motion.div>

        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              whileHover={{ scale: 1.05 }}
              className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              {item.name}
            </motion.a>
          ))}
        </div>

        <div className="hidden md:flex space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-4 py-2 text-sm hover:bg-gray-100 rounded-md transition-colors"
          >
            Recent Episodes
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
          >
            Subscribe
          </motion.button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-md text-gray-800 hover:bg-gray-100"
        >
          {isOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute w-full bg-white border-t"
        >
          <div className="px-4 py-2 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 space-y-2">
              <button className="w-full px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 rounded-md">
                Recent Episodes
              </button>
              <button className="w-full px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
} 