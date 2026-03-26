import React from 'react';
import { motion } from 'framer-motion';
import { Award, Eye, Target, CheckCircle2 } from 'lucide-react';

const certifications = [
  { title: 'ISO 9001:2015', desc: 'Quality Management Certified', icon: <Award size={28} /> },
  { title: 'COA Registered', desc: 'Council of Architecture', icon: <CheckCircle2 size={28} /> },
  { title: 'RERA Approved', desc: 'Compliant Projects', icon: <CheckCircle2 size={28} /> },
];

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay },
});

const About = () => {
  return (
    <div className="bg-white dark:bg-primaryBackground text-gray-900 dark:text-white transition-colors duration-300 pt-24">
      {/* Page Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1618219740975-d40978bb7378?auto=format&fit=crop&w=1600&q=80)' }} />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div {...fadeIn()} className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-accentGold" />
              <span className="text-accentGold uppercase tracking-widest text-sm font-semibold">Our Story</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 leading-tight text-gray-900 dark:text-white">
              Architecture as <span className="text-accentGold">Art</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-xl leading-relaxed">
              At S16 Design Studio, we believe that great design is not just seen—it is experienced. Built on the philosophy of “From Structure to Soul,” S16 represents the idea of completeness, where every space is thoughtfully designed to balance functionality, aesthetics, and purpose.
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mt-6">
              We specialize in interior design, architectural planning, and civil construction, delivering end-to-end solutions that transform ideas into refined, livable spaces. Our approach combines modern design principles with practical execution, ensuring that every project reflects both creativity and structural integrity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Content Split */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div {...fadeIn()} className="lg:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=80"
                alt="Luxury interior"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </motion.div>
            <motion.div {...fadeIn(0.2)} className="lg:w-1/2 space-y-6">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Who We Are</h2>
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                  S16 Design Studio is a multidisciplinary design firm driven by the vision of creating complete and meaningful spaces. Founded with a passion for design and execution, we bring together expertise in interior design, architecture, and civil construction under one unified approach.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                  We are a team that values clarity, structure, and creativity, ensuring every project is handled with precision and purpose. Our work is guided by the philosophy of “From Structure to Soul,” where each space is not only built to function but also to inspire and connect.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg italic">
                  With practical experience across **Bangalore, Hyderabad, Vijayawada, and Vizag**, we understand the balance between design vision and real-world execution.
                </p>
              </div>
              <div className="pt-6 border-t border-gray-100 dark:border-white/5">
                <p className="text-gray-900 dark:text-white font-bold mb-4 uppercase tracking-wider text-sm">Experience across diverse projects:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    'Premium villas with customized luxury interiors',
                    'Functional and elegant 3BHK residences',
                    'Smart and space-optimized 2BHK homes',
                    'Well-planned commercial spaces'
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm font-medium">
                      <CheckCircle2 size={16} className="text-accentGold flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-6 pt-4">
                {[['150+', 'Projects Delivered'], ['6+', 'Years of Excellence'], ['50+', 'Design Experts'], ['100%', 'Client Satisfaction']].map(([num, label]) => (
                  <div key={label} className="border border-gray-100 dark:border-white/5 p-6 rounded-2xl bg-gray-50/50 dark:bg-secondaryBackground/50 hover:bg-white dark:hover:bg-secondaryBackground transition-colors">
                    <p className="text-3xl font-bold text-accentGold mb-1">{num}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider font-semibold">{label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-gray-50 dark:bg-[#0A0A0A]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div {...fadeIn()} className="bg-white dark:bg-secondaryBackground p-10 rounded-2xl border border-gray-100 dark:border-white/5 hover:border-accentGold/40 transition-colors group shadow-sm">
              <div className="text-accentGold mb-6"><Eye size={36} /></div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Our Vision</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                To be South India's most sought-after luxury design practice — known for creating spaces that evoke emotion, stand the test of time, and enrich the lives of those who inhabit them across Bangalore, Hyderabad, Vijayawada, and Vizag.
              </p>
            </motion.div>
            <motion.div {...fadeIn(0.2)} className="bg-white dark:bg-secondaryBackground p-10 rounded-2xl border border-gray-100 dark:border-white/5 hover:border-accentGold/40 transition-colors group shadow-sm">
              <div className="text-accentGold mb-6"><Target size={36} /></div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Our Mission</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                To deliver world-class architecture and interior design with an unwavering commitment to quality, innovation, and client satisfaction — transforming dreams into extraordinary realities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div {...fadeIn()} className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Certifications & Accreditations</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">Trusted, verified, and compliant — at every step.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.title}
                {...fadeIn(i * 0.15)}
                className="bg-gray-50 dark:bg-secondaryBackground p-10 rounded-2xl border border-gray-100 dark:border-white/5 hover:border-accentGold/50 transition-all duration-500 group text-center shadow-sm"
                whileHover={{ y: -8 }}
              >
                <div className="text-accentGold mb-5 flex justify-center group-hover:scale-110 transition-transform duration-300">{cert.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{cert.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm uppercase tracking-wider font-semibold">{cert.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
