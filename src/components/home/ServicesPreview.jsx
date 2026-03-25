import React from 'react';
import { motion } from 'framer-motion';
import { Ruler, Sofa, Home, Network, Compass, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Architecture Design',
    description: 'Bespoke structural concepts blending functional engineering with luxury aesthetics.',
    icon: <Ruler size={36} />,
  },
  {
    title: 'Interior Design',
    description: 'Curated interior spaces that reflect your personality through premium materials and lighting.',
    icon: <Sofa size={36} />,
  },
  {
    title: 'Turnkey Projects',
    description: 'End-to-end execution from conceptualization to final handover with uncompromising quality.',
    icon: <Home size={36} />,
  },
  {
    title: 'Smart Home Integration',
    description: 'Seamless integration of cutting-edge technology for modern, intelligent living spaces.',
    icon: <Network size={36} />,
  },
  {
    title: 'Vastu Planning',
    description: 'Harmonizing spaces with traditional principles to ensure positive energy flow.',
    icon: <Compass size={36} />,
  },
];

const ServicesPreview = () => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-[#0A0A0A] transition-colors duration-300">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div 
            className="max-w-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-accentGold"></div>
              <span className="text-accentGold uppercase tracking-widest text-sm font-semibold">Expertise</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-gray-900 dark:text-white">
              Comprehensive <span className="font-light text-gray-400 dark:text-gray-500">Design Solutions</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Tailored services for residential and commercial excellence.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link 
              to="/services"
              className="px-6 py-3 border border-gray-300 dark:border-white/10 hover:border-accentGold hover:text-accentGold text-sm uppercase tracking-widest rounded-full transition-colors flex items-center group text-gray-700 dark:text-gray-300"
            >
              View All Services
              <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-white dark:bg-secondaryBackground p-10 rounded-2xl border border-gray-100 dark:border-white/5 hover:border-accentGold/50 transition-all duration-500 group relative overflow-hidden shadow-sm hover:shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accentGold/5 rounded-full blur-2xl -mr-16 -mt-16 group-hover:bg-accentGold/10 transition-colors duration-500"></div>

              <div className="text-accentGold mb-6 transform group-hover:scale-110 transition-transform duration-500 origin-left">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 tracking-wide text-gray-900 dark:text-white">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-8">
                {service.description}
              </p>

              <Link to="/services" className="inline-flex items-center text-sm font-medium tracking-widest uppercase text-gray-500 group-hover:text-accentGold transition-colors">
                Explore <ArrowRight size={16} className="ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
