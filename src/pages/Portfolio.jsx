import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const categories = ['All', 'Villas', 'Interiors', 'Commercial'];

const projects = [
  { id: 1, title: 'Azure Villa', category: 'Villas', location: 'Jubilee Hills, Hyderabad', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80', description: 'A sprawling 5-BHK luxury villa blending contemporary architecture with Vastu-compliant design. Every corner reflects our commitment to detail, from the Italian marble floors to the custom-lit ceiling coffers.' },
  { id: 2, title: 'Lumina Workspace', category: 'Commercial', location: 'HITEC City, Hyderabad', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80', description: 'A 12,000 sq ft corporate office designed to inspire innovation. Biophilic design meets smart-home integration in this award-winning commercial project.' },
  { id: 3, title: 'Zenith Penthouse', category: 'Interiors', location: 'Banjara Hills, Hyderabad', image: 'https://images.unsplash.com/photo-1593696140826-c58b021acf8b?auto=format&fit=crop&w=800&q=80', description: 'A sky-high penthouse transformed into a sanctuary of calm luxury. Neutral palettes, leather accents, and dramatic lighting create an atmosphere of effortless sophistication.' },
  { id: 4, title: 'The Olive Residence', category: 'Villas', location: 'Gachibowli, Hyderabad', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80', description: 'An 8,000 sq ft villa characterized by clean lines and warm materials. Expansive glazing brings the outdoors in, creating a seamless connection with the manicured landscape.' },
  { id: 5, title: 'Heritage Retreat', category: 'Interiors', location: 'Road No. 12, Hyderabad', image: 'https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?auto=format&fit=crop&w=800&q=80', description: 'A sensitive restoration blending heritage architectural elements with contemporary comfort systems — proving that old and new can coexist in perfect harmony.' },
  { id: 6, title: 'The Crystal Lobby', category: 'Commercial', location: 'Madhapur, Hyderabad', image: 'https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&w=800&q=80', description: 'A hospitality lobby that commands attention from the first step in. Crystal chandeliers, onyx feature walls, and bespoke art installations define this landmark commercial interior.' },
];

const Portfolio = () => {
  const [active, setActive] = useState('All');
  const [selected, setSelected] = useState(null);

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active);

  return (
    <div className="bg-white dark:bg-primaryBackground text-gray-900 dark:text-white transition-colors duration-300 pt-24">
      {/* Hero */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-accentGold" />
              <span className="text-accentGold uppercase tracking-widest text-sm font-semibold">Our Work</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-gray-900 dark:text-white">
              Selected <span className="font-light text-gray-400 dark:text-gray-500">Projects</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-xl font-medium">Every project is a unique story of collaboration, craft, and creativity.</p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="pb-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap gap-3 mb-14">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-8 py-3 rounded-full text-xs uppercase tracking-widest font-bold transition-all duration-300 ${active === cat ? 'bg-accentGold text-white shadow-lg' : 'border border-gray-200 dark:border-white/10 hover:border-accentGold hover:text-accentGold text-gray-600 dark:text-gray-400'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filtered.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-[4/3] shadow-lg hover:shadow-2xl transition-all duration-500"
                  onClick={() => setSelected(project)}
                >
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                    <span className="text-accentGold text-[10px] tracking-[0.3em] uppercase font-bold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{project.category} · {project.location}</span>
                    <h3 className="text-white text-2xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{project.title}</h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="bg-white dark:bg-secondaryBackground rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
              initial={{ scale: 0.9, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 40 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img src={selected.image} alt={selected.title} className="w-full h-80 md:h-[450px] object-cover" />
                <button onClick={() => setSelected(null)} className="absolute top-6 right-6 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-full p-3 transition-all border border-white/20">
                  <X size={24} />
                </button>
                <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-accentGold" />
              </div>
              <div className="p-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-px bg-accentGold" />
                  <span className="text-accentGold text-xs tracking-[0.3em] uppercase font-bold">{selected.category}</span>
                </div>
                <h2 className="text-4xl font-bold mt-2 mb-4 text-gray-900 dark:text-white">{selected.title}</h2>
                <p className="text-sm text-gray-400 dark:text-gray-500 mb-8 uppercase tracking-widest font-semibold">{selected.location}</p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg font-medium">{selected.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;
