"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from "next/image";

export function Testimonials() {
  const testimonials = [
    {
      text: "I was new to blockchain, but this podcast has been a game-changer. The way they break down information is incredible!",
      author: "Alex P.",
      image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=400&h=400&auto=format&fit=crop"
    },
    {
      text: "I love how they address all of the burning questions and spark new ideas. It's like having a personal crypto mentor!",
      author: "Casey L.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&auto=format&fit=crop"
    },
    {
      text: "The most insightful crypto content I've ever encountered. Every episode leaves me smarter than before!",
      author: "Sam R.",
      image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&h=400&auto=format&fit=crop"
    },
    {
      text: "Essential listening for anyone serious about understanding blockchain technology and its potential.",
      author: "Jordan M.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&auto=format&fit=crop"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth >= 1024) setSlidesPerView(3);
      else if (window.innerWidth >= 768) setSlidesPerView(2);
      else setSlidesPerView(1);
    };

    updateSlidesPerView();
    window.addEventListener('resize', updateSlidesPerView);
    return () => window.removeEventListener('resize', updateSlidesPerView);
  }, []);

  const maxIndex = Math.max(testimonials.length - slidesPerView, 0);

  const handleDragStart = () => setDragging(true);
  const handleDragEnd = () => setDragging(false);

  const navigate = (direction: 'prev' | 'next') => {
    if (dragging) return;
    setCurrentIndex(prev => {
      if (direction === 'next') return Math.min(prev + 1, maxIndex);
      return Math.max(prev - 1, 0);
    });
  };

  const sliderVariants = {
    hidden: (direction: number) => ({ x: `${direction * 100}%` }),
    visible: { x: "0%" },
    exit: (direction: number) => ({ x: `${-direction * 100}%` }),
  };

  return (
    <section className="container mx-auto px-4 py-16 bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          What Our Listeners Say
        </h2>
        <p className="text-gray-600 md:text-lg">
          Their experience throughout every platform
        </p>
      </motion.div>

      <div className="relative overflow-hidden">
        <motion.div
          className="flex gap-6"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          style={{ 
            width: `${(testimonials.length * 100) / slidesPerView}%`,
            x: `-${currentIndex * (100 / slidesPerView)}%`
          }}
          transition={{ type: "tween", duration: 0.3 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 relative bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              style={{ width: `${100 / slidesPerView}%` }}
              whileHover={{ y: -5 }}
            >
              <blockquote className="text-lg mb-4 font-medium leading-relaxed">
                "{testimonial.text}"
              </blockquote>
              <div className="flex items-center">
                <motion.div whileHover={{ rotate: 360 }} className="shrink-0">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    width={48}
                    height={48}
                    className="rounded-full border-2 border-white shadow-md"
                  />
                </motion.div>
                <span className="ml-3 font-medium">{testimonial.author}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Navigation Arrows */}
        <button
          onClick={() => navigate('prev')}
          className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-md hover:shadow-lg disabled:opacity-50"
          disabled={currentIndex === 0}
        >
          ←
        </button>
        <button
          onClick={() => navigate('next')}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-md hover:shadow-lg disabled:opacity-50"
          disabled={currentIndex === maxIndex}
        >
          →
        </button>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-black' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}