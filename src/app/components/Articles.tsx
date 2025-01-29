"use client"

import Image from 'next/image';
import { motion } from 'framer-motion';

const articles = [
  {
    category: 'BASICS',
    title: '5 Common Crypto Myths Debunked',
    description: 'Separating Fact from Fiction in the Digital Economy',
    tags: ['crypto', 'myths'],
    date: 'Sep 14',
    image: 'https://images.unsplash.com/photo-1460194436988-671f763436b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    category: 'ART & NFTs',
    title: 'Why NFTs Matter',
    description: 'Exploring the impact of digital ownership on art and beyond, and the transformation of traditional art markets through NFTs.',
    tags: ['art', 'nft', 'digital ownership'],
    date: 'Sep 12',
    image: 'https://images.unsplash.com/photo-1554907984-15263bfd63bd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
];

export function Articles() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
  };

  return (
    <section className="py-16 px-4">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={container}
        className="container mx-auto"
      >
        <motion.h2 variants={item} className="text-4xl font-bold text-center mb-2">
          Articles & News
        </motion.h2>
        <motion.p variants={item} className="text-center text-gray-600 mb-12">
          Yes, we have a blog too
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8">
          {articles.map((article) => (
            <motion.div
              key={article.title}
              variants={item}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-64">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-red-500 mb-2">{article.category}</div>
                <h3 className="text-2xl font-bold mb-2">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.description}</p>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-4 text-sm text-gray-500">{article.date}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <motion.button
            variants={item}
            className="px-8 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
          >
            SEE MORE
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}