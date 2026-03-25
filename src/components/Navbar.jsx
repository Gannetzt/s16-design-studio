import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import Logo from './Logo';

const Navbar = ({ onGetQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Process', path: '/process' },
    { name: '3D View', path: '/3d-view' },
    { name: 'Contact', path: '/contact' },
  ];

  const isHomePage = location.pathname === '/';
  const isDark = theme === 'dark';
  
  // Use light variant (white text) if:
  // 1. We are in dark mode (always use white elements for visibility)
  // 2. OR we are at the top of the Home page (Hero section is dark)
  const useWhiteBranding = isDark || (isHomePage && !isScrolled);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 dark:bg-black/90 backdrop-blur-md shadow-lg py-4 border-b border-gray-100 dark:border-white/10'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Logo Section */}
        <Link to="/" className="flex items-center z-50">
          <Logo 
            className="h-10 md:h-12 w-auto transition-all duration-500" 
            white={useWhiteBranding} 
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm uppercase tracking-widest font-bold transition-all duration-500 hover:text-accentGold ${
                location.pathname === link.path 
                  ? 'text-accentGold' 
                  : useWhiteBranding ? 'text-white' : 'text-gray-700'
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-all duration-500 ${
              useWhiteBranding ? 'text-white hover:bg-white/10' : 'text-gray-700 hover:bg-gray-100'
            }`}
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* CTA Button */}
          <button
            onClick={onGetQuote}
            className="bg-accentGold hover:bg-hoverAccent text-white font-bold py-2.5 px-8 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(200,169,106,0.3)] hover:shadow-[0_0_20px_rgba(200,169,106,0.5)] uppercase text-xs tracking-widest"
          >
            Get Quote
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center gap-4 z-50">
          <button
            onClick={toggleTheme}
            className={`p-2 transition-colors duration-500 ${useWhiteBranding && !isMobileMenuOpen ? 'text-white' : 'text-gray-800 dark:text-white'}`}
          >
            {isDark ? <Sun size={22} /> : <Moon size={22} />}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`transition-colors duration-500 focus:outline-none ${useWhiteBranding && !isMobileMenuOpen ? 'text-white' : 'text-gray-800 dark:text-white'}`}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 min-h-screen z-40 bg-white dark:bg-primaryBackground flex flex-col items-center justify-center pt-20 pb-10 px-6 space-y-8"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-2xl uppercase tracking-widest font-bold ${
                  location.pathname === link.path ? 'text-accentGold' : 'text-gray-900 dark:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={() => { setIsMobileMenuOpen(false); onGetQuote && onGetQuote(); }}
              className="mt-8 bg-accentGold hover:bg-hoverAccent text-white font-bold py-4 px-10 rounded-full transition-all duration-300 text-lg uppercase tracking-widest"
            >
              Get Quote
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
