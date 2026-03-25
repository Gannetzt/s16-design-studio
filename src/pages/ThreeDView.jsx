import React, { Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Float, ContactShadows } from '@react-three/drei';
import villaCutaway from '../assets/3d/luxury_villa_cutaway.png';
import kitchenRender from '../assets/3d/modern_kitchen_render.png';
import Logo from '../components/Logo';

const RotatingBox = () => {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh castShadow>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="#C8A96A" metalness={0.8} roughness={0.1} emissive="#C8A96A" emissiveIntensity={0.1} />
      </mesh>
    </Float>
  );
};

const ShowcaseItem = ({ title, image, hotspots }) => {
  const [activeHotspot, setActiveHotspot] = React.useState(null);

  return (
    <div className="relative group rounded-3xl overflow-hidden border border-gray-100 dark:border-white/5 shadow-2xl bg-white dark:bg-secondaryBackground">
      <div className="aspect-[16/10] overflow-hidden relative">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Hotspots */}
        {hotspots.map((spot, idx) => (
          <div 
            key={idx}
            className="absolute z-20"
            style={{ top: spot.y, left: spot.x }}
          >
            <button
              onMouseEnter={() => setActiveHotspot(idx)}
              onMouseLeave={() => setActiveHotspot(null)}
              className="w-6 h-6 bg-accentGold rounded-full flex items-center justify-center shadow-lg hover:scale-125 transition-transform"
            >
              <span className="w-2 h-2 bg-white rounded-full animate-ping absolute" />
              <span className="w-2 h-2 bg-white rounded-full relative" />
            </button>
            <AnimatePresence>
              {activeHotspot === idx && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.9 }}
                  className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-48 bg-white dark:bg-black p-4 rounded-xl shadow-2xl border border-gray-100 dark:border-white/10 text-center"
                >
                  <p className="text-xs font-bold text-accentGold uppercase tracking-widest mb-1">{spot.label}</p>
                  <p className="text-[10px] text-gray-500 dark:text-gray-400 leading-tight">{spot.desc}</p>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-white dark:border-t-black" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
      <div className="p-8 text-center">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
        <p className="text-gray-500 text-sm uppercase tracking-[0.3em] font-bold">Architectural Visualization</p>
      </div>
    </div>
  );
};

const ThreeDView = () => {
  return (
    <div className="bg-white dark:bg-primaryBackground text-gray-900 dark:text-white pt-24 min-h-screen transition-colors duration-300">
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
              <span className="text-accentGold uppercase tracking-widest text-sm font-semibold">Immersive Preview</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-gray-900 dark:text-white">
              Immersive <span className="text-accentGold">Visualization</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-xl leading-relaxed font-medium">
              We bring your dreams to life through hyper-realistic 3D experiences. Explore every corner of your future space with mathematical precision.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3D Canvas */}
      <section className="pb-24">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl overflow-hidden border border-gray-100 dark:border-white/10 shadow-2xl bg-gray-50 dark:bg-secondaryBackground"
            style={{ height: '60vh', minHeight: '400px' }}
          >
            <Canvas shadows camera={{ position: [5, 5, 5], fov: 45 }}>
              <Suspense fallback={null}>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
                <pointLight position={[-10, -10, -10]} intensity={0.5} />
                <RotatingBox />
                <ContactShadows resolution={1024} scale={20} blur={2} opacity={0.35} far={10} color="#C8A96A" />
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
                <Environment preset="city" />
              </Suspense>
            </Canvas>
            {/* Overlay hint */}
            <div className="absolute top-6 left-6 flex items-center gap-3">
              <div className="bg-accentGold p-3 rounded-xl shadow-lg">
                <Logo className="h-6 w-auto" white />
              </div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest hidden sm:block">Real-time Lab</p>
            </div>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/80 dark:bg-black/60 backdrop-blur-md text-gray-900 dark:text-white text-[10px] font-bold px-8 py-3 rounded-full border border-gray-100 dark:border-white/10 shadow-xl uppercase tracking-widest pointer-events-none">
              Auto-rotating 3D Model
            </div>
          </motion.div>
        </div>
      </section>

      {/* Isometric Showcase */}
      <section className="py-24 bg-gray-50 dark:bg-[#0A0A0A]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Isometric Cutaways</h2>
            <p className="text-gray-500 dark:text-gray-400 font-medium">Hover over the golden points to explore material specifications.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ShowcaseItem 
              title="Modern Minimalist Living"
              image={villaCutaway}
              hotspots={[
                { x: '45%', y: '65%', label: 'Velvet Soft Seating', desc: 'Premium Italian velvet with high-density foam support.' },
                { x: '35%', y: '35%', label: 'Bespoke Joinery', desc: 'Custom oak wood cabinetry with integrated lighting.' },
                { x: '65%', y: '75%', label: 'Silk Shag Rug', desc: 'Hand-tufted silk rug for ultimate luxury underfoot.' }
              ]}
            />
            <ShowcaseItem 
              title="Smart Gourmet Kitchen"
              image={kitchenRender}
              hotspots={[
                { x: '40%', y: '55%', label: 'Quartz Island', desc: 'Antibacterial, scratch-resistant white quartz surface.' },
                { x: '75%', y: '60%', label: 'Smart Integration', desc: 'Built-in smart refrigerator and IoT compatible ovens.' },
                { x: '25%', y: '25%', label: 'Accented Batten Wall', desc: 'Midnight blue fluted panels for modern texture.' }
              ]}
            />
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="pb-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { title: 'Real-Time Rendering', desc: 'See accurate material finishes and lighting with photorealistic quality in real time.' },
              { title: 'Full Walkthrough', desc: 'Navigate every room and corner of your design before the first brick is laid.' },
              { title: 'Customizable', desc: 'Swap materials, colors, and furniture instantly to explore design possibilities.' },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                className="bg-gray-50 dark:bg-secondaryBackground p-8 rounded-2xl border border-gray-100 dark:border-white/5 hover:border-accentGold/40 transition-all duration-500 shadow-sm hover:shadow-xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <h3 className="text-xl font-bold mb-3 text-accentGold uppercase tracking-widest">{card.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed font-medium">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ThreeDView;
