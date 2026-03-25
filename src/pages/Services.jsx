import React from 'react';
import { motion } from 'framer-motion';
import { Ruler, Sofa, Home, Network, Compass, Building2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Architecture Design',
    icon: <Ruler size={40} />,
    description: 'Bespoke structural concepts that blend functional precision with luxury aesthetics. From concept sketches to permit-ready drawings, we handle every detail.',
    features: ['Concept Development', 'Structural Planning', 'Permit Documentation', '3D Visualization'],
  },
  {
    title: 'Interior Design',
    icon: <Sofa size={40} />,
    description: 'Curated interior spaces that reflect your unique personality through premium materials, custom furniture, and bespoke lighting compositions.',
    features: ['Space Planning', 'Material & Finish Selection', 'Custom Furniture', 'Lighting Design'],
  },
  {
    title: 'Residential Villas',
    icon: <Home size={40} />,
    description: 'Luxury villa design tailored to your lifestyle — where grandeur meets comfort, and every corner tells a story of refined elegance.',
    features: ['Luxury Villas', 'Bungalows', 'Apartments', 'Penthouse Suites'],
  },
  {
    title: 'Commercial Spaces',
    icon: <Building2 size={40} />,
    description: 'Sophisticated commercial environments designed to impress clients, inspire teams, and reinforce your brand identity at every touchpoint.',
    features: ['Corporate Offices', 'Retail Stores', 'Hospitality Spaces', 'Showrooms'],
  },
  {
    title: 'Smart Home Integration',
    icon: <Network size={40} />,
    description: 'Seamless integration of cutting-edge automation for modern, intelligent living. Control your entire space from a single interface.',
    features: ['Home Automation', 'Smart Lighting', 'Security Systems', 'Climate Control'],
  },
  {
    title: 'Vastu Integration',
    icon: <Compass size={40} />,
    description: 'Harmonizing spaces with ancient Vastu Shastra principles to ensure positive energy flow, prosperity, and well-being for inhabitants.',
    features: ['Vastu Consultation', 'Floor Plan Analysis', 'Remedial Solutions', 'New Design Compliance'],
  },
];

const Services = () => {
  return (
    <div className="bg-white dark:bg-primaryBackground text-gray-900 dark:text-white transition-colors duration-300 pt-24">
      {/* Hero */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-accentGold" />
              <span className="text-accentGold uppercase tracking-widest text-sm font-semibold">What We Offer</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-gray-900 dark:text-white">
              Design <span className="font-light text-gray-400 dark:text-gray-500">Services</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-xl leading-relaxed">
              Comprehensive solutions for every aspect of luxury architecture and interior design.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                className="bg-white dark:bg-secondaryBackground p-10 rounded-2xl border border-gray-100 dark:border-white/5 hover:border-accentGold/50 transition-all duration-500 group relative overflow-hidden shadow-sm hover:shadow-xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -10 }}
              >
                {/* Glow */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-accentGold/5 rounded-full blur-3xl -mr-20 -mt-20 group-hover:bg-accentGold/10 transition-all duration-700" />

                <div className="text-accentGold mb-6 transform group-hover:scale-110 transition-transform duration-300 origin-left">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 tracking-wide text-gray-900 dark:text-white">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-8">{service.description}</p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center text-sm text-gray-500 dark:text-gray-400 font-medium">
                      <span className="w-1.5 h-1.5 bg-accentGold rounded-full mr-3 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link to="/contact" className="inline-flex items-center text-sm font-semibold tracking-widest uppercase text-accentGold group-hover:text-hoverAccent transition-colors">
                  Get Started <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gray-50 dark:bg-[#0A0A0A]">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Ready to Transform Your Space?</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-10 max-w-xl mx-auto font-medium">
              Schedule a free consultation and let our experts craft a bespoke design experience tailored to your vision.
            </p>
            <Link to="/contact" className="px-10 py-4 bg-accentGold hover:bg-hoverAccent text-white font-bold tracking-widest text-sm uppercase rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(200,169,106,0.3)] hover:shadow-[0_0_30px_rgba(200,169,106,0.5)] inline-block">
              Book a Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
