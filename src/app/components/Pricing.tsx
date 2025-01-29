"use client"


// components/Pricing.tsx
import { motion } from 'framer-motion';
import { useState } from 'react';

const pricingPlans = [
  {
    name: 'Normie',
    price: '$3.99',
    period: '/month',
    description: 'Perfect for casual listeners, this tier offers early access to episodes, bonus content, community engagement, and discounts on merch.',
    features: [
      'Early Access to Episodes',
      'Exclusive Bonus Content',
      'Community Access',
      '5% Merch Discounts'
    ]
  },
  {
    name: 'Degen',
    price: '$7.99',
    period: '/month',
    description: 'Tailored to dedicated crypto enthusiasts, so called crypto degens. You know how you are.',
    popular: true,
    features: [
      'All Normie Benefits',
      'Members-Only Q&A',
      'Exclusive Reports',
      'Priority Event Registration',
      'Exclusive Live Webinars'
    ]
  },
  {
    name: 'Whale',
    price: '$99.99',
    period: '/month',
    description: "The ultimate experience for those who's seed phrase is stored on three different continents.",
    features: [
      'All Normie & Degen Benefits',
      'Exclusive Badge on Livestreaming',
      'Influence Podcast Topics',
      'Premium Networking Events',
      '30 min 1-on-1 Consultation'
    ]
  }
];

export function Pricing() {
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

  return (
    <section className="py-16 px-4 bg-gray-50">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={container}
        className="container mx-auto"
      >
        <div className="text-center mb-12">
          <motion.h2 variants={item} className="text-4xl font-bold mb-4">
            Become our sponsor
          </motion.h2>
          <motion.p variants={item} className="text-gray-600">
            Get exclusive episodes, merch and more
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={item}
              className={`bg-white rounded-lg p-8 shadow-sm ${
                plan.popular ? 'ring-2 ring-red-500' : ''
              }`}
            >
              {plan.popular && (
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm uppercase">
                  Most Popular
                </span>
              )}
              
              <h3 className="text-2xl font-bold mt-4">{plan.name}</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="ml-1 text-gray-500">{plan.period}</span>
              </div>
              <p className="mt-4 text-gray-600">{plan.description}</p>
              
              <button className="w-full mt-8 bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-colors">
                SUBSCRIBE
              </button>

              <ul className="mt-6 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}