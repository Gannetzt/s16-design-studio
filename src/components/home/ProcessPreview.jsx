import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { number: '01', title: 'Consultation', description: 'Understanding your vision, lifestyle, and requirements.' },
  { number: '02', title: 'Planning', description: 'Detailed space planning and conceptual design.' },
  { number: '03', title: 'Design', description: 'Material selection, 3D visualization, and finalization.' },
  { number: '04', title: 'Execution', description: 'Precision construction and interior fit-outs.' },
  { number: '05', title: 'Handover', description: 'Final walk-through and delivery of your dream space.' },
];

const ProcessPreview = () => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-[#0A0A0A] text-gray-900 dark:text-white transition-colors duration-300 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <motion.div 
            className="flex items-center justify-center gap-4 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-8 h-px bg-accentGold"></div>
            <span className="text-accentGold uppercase tracking-widest text-sm font-semibold">Methodology</span>
            <div className="w-8 h-px bg-accentGold"></div>
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            How We <span className="font-light text-gray-400 dark:text-gray-500">Work</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gray-200 dark:bg-white/10 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-6 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="relative bg-white dark:bg-secondaryBackground p-8 rounded-2xl border border-gray-100 dark:border-white/5 hover:border-accentGold/50 transition-colors duration-500 group text-center lg:text-left shadow-sm hover:shadow-xl"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -10 }}
              >
                <div className="absolute -top-6 lg:left-8 left-1/2 transform -translate-x-1/2 lg:translate-x-0 w-12 h-12 bg-white dark:bg-secondaryBackground border border-accentGold rounded-full flex items-center justify-center text-accentGold font-bold text-lg group-hover:bg-accentGold group-hover:text-white transition-colors duration-500 shadow-[0_0_15px_rgba(200,169,106,0.3)]">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mt-6 mb-3 tracking-wide text-gray-900 dark:text-white">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessPreview;
