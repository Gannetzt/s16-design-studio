import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const AboutPreview = () => {
  return (
    <section className="py-24 bg-white dark:bg-primaryBackground transition-colors duration-300 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-accentGold"></div>
              <span className="text-accentGold uppercase tracking-widest text-sm font-semibold">About Us</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-gray-900 dark:text-white">
              Crafting <span className="text-gray-400 font-light dark:text-gray-500">Enduring</span> <br />
              Signatures in Space
            </h2>
            
            <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg tracking-wide leading-relaxed">
              At S16 Design Studio, we believe that great design is not just seen—it is experienced. Built on the philosophy of “From Structure to Soul,” we create spaces that balance functionality, aesthetics, and purpose.
            </p>
            
            <p className="text-gray-600 dark:text-gray-400 mb-10 text-lg tracking-wide leading-relaxed">
              With a growing presence across **Bangalore, Hyderabad, Vijayawada, and Vizag**, we deliver end-to-end interior and architectural solutions that transform visions into enduring realities.
            </p>
            
            <Link 
              to="/about" 
              className="inline-flex items-center text-accentGold hover:text-hoverAccent transition-colors font-medium tracking-wider uppercase text-sm group"
            >
              Discover Our Story
              <ArrowRight size={18} className="ml-2 transform group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>

          {/* Image Content */}
          <motion.div 
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] md:aspect-auto md:h-[600px] shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Luxury living room design" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 border-2 border-accentGold/30 m-6 rounded-xl pointer-events-none"></div>
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-8 -left-8 bg-white dark:bg-secondaryBackground p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-white/10">
              <p className="text-4xl font-bold text-accentGold mb-1">6+</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider font-semibold">Years of <br/>Excellence</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
