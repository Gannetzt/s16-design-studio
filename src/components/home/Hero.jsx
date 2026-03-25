import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = ({ onGetQuote }) => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        <img 
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Luxury Interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-white/20 via-transparent to-black/20" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <motion.h1 
          className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Designing Spaces <br className="hidden md:block" />
          <span className="text-accentGold">Beyond Imagination</span>
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          We operate at the intersection of precision engineering and artistic sensibility, delivering luxury spaces that transcend the ordinary.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link 
            to="/portfolio" 
            className="px-8 py-4 bg-transparent border border-white hover:bg-white hover:text-black transition-all duration-300 rounded-full font-medium tracking-wide uppercase text-sm w-full sm:w-auto"
          >
            View Portfolio
          </Link>
          <button
            onClick={onGetQuote}
            className="px-8 py-4 bg-accentGold hover:bg-hoverAccent text-primaryBackground border border-accentGold hover:border-hoverAccent transition-all duration-300 rounded-full font-medium tracking-wide uppercase text-sm shadow-[0_0_20px_rgba(200,169,106,0.5)] hover:shadow-[0_0_30px_rgba(43,182,115,0.7)] w-full sm:w-auto"
          >
            Get Quote
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
