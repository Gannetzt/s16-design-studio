import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="relative py-32 overflow-hidden bg-gray-900">
      {/* Background with slight parallax effect */}
      <div 
        className="absolute inset-0 bg-fixed bg-center bg-cover opacity-20" 
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80)' }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Let's Build Your <span className="text-accentGold">Dream Space</span>
          </h2>
          <p className="text-xl text-gray-300 mb-10 font-light">
            Ready to transform your vision into reality? Schedule a consultation with our expert architects and designers today.
          </p>
          <Link 
            to="/contact" 
            className="inline-block px-10 py-5 bg-accentGold hover:bg-hoverAccent text-gray-900 font-bold tracking-widest text-sm uppercase rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(200,169,106,0.5)] hover:shadow-[0_0_30px_rgba(200,169,106,0.7)] hover:-translate-y-1"
          >
            Get Your Quote
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
