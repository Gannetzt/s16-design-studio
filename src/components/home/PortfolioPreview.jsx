import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: 'The Azure Villa',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    colSpan: 'md:col-span-2 md:row-span-2'
  },
  {
    id: 2,
    title: 'Lumina Workspace',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    colSpan: 'col-span-1 row-span-1'
  },
  {
    id: 3,
    title: 'Heritage Restoration',
    category: 'Architecture',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    colSpan: 'col-span-1 row-span-1'
  },
  {
    id: 4,
    title: 'Zenith Penthouse',
    category: 'Interior Design',
    image: 'https://images.unsplash.com/photo-1593696140826-c58b021acf8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    colSpan: 'md:col-span-2 row-span-1'
  }
];

const PortfolioPreview = () => {
  return (
    <section className="py-24 bg-white dark:bg-primaryBackground transition-colors duration-300">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <motion.div 
            className="flex items-center justify-center gap-4 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-8 h-px bg-accentGold"></div>
            <span className="text-accentGold uppercase tracking-widest text-sm font-semibold">Portfolio</span>
            <div className="w-8 h-px bg-accentGold"></div>
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Selected <span className="font-light text-gray-500 dark:text-gray-400">Works</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[300px] gap-4 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer ${project.colSpan}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="text-accentGold text-sm tracking-widest uppercase font-semibold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{project.category}</span>
                <h3 className="text-white text-2xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link 
            to="/portfolio" 
            className="px-8 py-4 bg-transparent border border-gray-200 dark:border-white/10 hover:border-accentGold hover:bg-accentGold hover:text-white transition-all duration-300 rounded-full font-semibold tracking-widest uppercase text-sm inline-block text-gray-700 dark:text-gray-300"
          >
            Explore All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreview;
