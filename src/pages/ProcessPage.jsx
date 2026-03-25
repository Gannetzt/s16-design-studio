import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Lightbulb, PenTool, HardHat, Trophy, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const steps = [
  {
    number: '01',
    title: 'Initial Consultation',
    icon: <MessageCircle size={32} />,
    description: 'We begin with an in-depth consultation to understand your vision, lifestyle preferences, budget, and site constraints. Every great project starts with listening.',
    details: ['Site visit & analysis', 'Requirement gathering', 'Budget discussion', 'Timeline planning'],
  },
  {
    number: '02',
    title: 'Concept Design',
    icon: <Lightbulb size={32} />,
    description: 'Our creative team develops mood boards, conceptual sketches, and 3D renders to bring your vision to life — before a single brick is laid.',
    details: ['Mood boards & themes', 'Conceptual layouts', 'Material palettes', '3D visualizations'],
  },
  {
    number: '03',
    title: 'Detailed Planning',
    icon: <PenTool size={32} />,
    description: 'Precision engineering meets artistic vision. We finalize working drawings, BOQs, and procurement lists ensuring seamless execution.',
    details: ['Working drawings', 'BOQ finalization', 'Vendor selection', 'Permit approvals'],
  },
  {
    number: '04',
    title: 'Execution',
    icon: <HardHat size={32} />,
    description: 'Our skilled craftsmen and project managers bring designs to life with meticulous attention to detail, quality checks, and transparent communication.',
    details: ['Structured work schedule', 'On-site supervision', 'Quality control', 'Regular client updates'],
  },
  {
    number: '05',
    title: 'Delivery & Handover',
    icon: <Trophy size={32} />,
    description: 'Your dream space is ready. We conduct a thorough walk-through, address any punch list items, and hand over a space that exceeds expectations.',
    details: ['Final inspection', 'Snag resolution', 'Documentation handover', 'Post-handover support'],
  },
];

const ProcessPage = () => {
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
              <span className="text-accentGold uppercase tracking-widest text-sm font-semibold">Our Methodology</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-gray-900 dark:text-white">
              From Vision to <span className="text-accentGold">Reality</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-xl leading-relaxed font-medium">
              A streamlined, transparent, and collaborative process ensures your project is delivered on time, on budget, and beyond expectations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="pb-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gray-100 dark:bg-white/10 hidden md:block -translate-x-1/2" />

            <div className="space-y-16">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-10 md:gap-20 items-start md:items-center`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                >
                  {/* Step Number Circle */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-14 h-14 bg-white dark:bg-secondaryBackground border-2 border-accentGold rounded-full items-center justify-center text-accentGold font-bold text-lg shadow-xl z-10 flex-shrink-0">
                    {step.number}
                  </div>

                  {/* Content Card */}
                  <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-4' : 'md:text-left md:pl-4'}`}>
                    <div className="bg-gray-50 dark:bg-secondaryBackground/50 p-10 rounded-2xl border border-gray-100 dark:border-white/5 hover:border-accentGold/40 transition-all duration-500 shadow-sm hover:shadow-xl group">
                      <div className={`flex items-center gap-4 mb-6 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                        <div className="text-accentGold transform group-hover:scale-110 transition-transform duration-300">{step.icon}</div>
                        <span className="text-accentGold font-bold text-4xl opacity-10 dark:opacity-20">{step.number}</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{step.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 font-medium">{step.description}</p>
                      <ul className={`space-y-3 ${index % 2 === 0 ? 'md:items-end' : ''} flex flex-col`}>
                        {step.details.map((d) => (
                          <li key={d} className={`flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 font-semibold ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                            <span className="w-1.5 h-1.5 bg-accentGold rounded-full flex-shrink-0" />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block md:w-5/12" />
                </motion.div>
              ))}
            </div>
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
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Start Your Journey Today</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-10 max-w-xl mx-auto font-medium">
              Let's schedule your first consultation and take the first step toward your dream space.
            </p>
            <Link to="/contact" className="inline-flex items-center px-10 py-4 bg-accentGold hover:bg-hoverAccent text-white font-bold tracking-widest text-sm uppercase rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
              Get Started <ArrowRight size={18} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProcessPage;
