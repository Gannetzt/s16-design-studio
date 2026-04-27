import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import Logo from './Logo';

// Custom SVG Social Icons
const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);
const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);
const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
);
const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-black text-gray-900 dark:text-white py-16 border-t border-gray-100 dark:border-white/5 transition-colors duration-300">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center">
              <Logo className="h-10 md:h-12 w-auto" white={window.document.documentElement.classList.contains('dark')} />
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-sm">
              Hyderabad's premier luxury architecture and interior design firm. We operate at the intersection of precision engineering and artistic sensibility.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 border border-gray-200 dark:border-white/10 rounded-full hover:border-accentGold hover:text-accentGold text-gray-600 dark:text-gray-400 transition-colors"><InstagramIcon /></a>
              <a href="#" className="p-2 border border-gray-200 dark:border-white/10 rounded-full hover:border-accentGold hover:text-accentGold text-gray-600 dark:text-gray-400 transition-colors"><FacebookIcon /></a>
              <a href="#" className="p-2 border border-gray-200 dark:border-white/10 rounded-full hover:border-accentGold hover:text-accentGold text-gray-600 dark:text-gray-400 transition-colors"><LinkedinIcon /></a>
              <a href="#" className="p-2 border border-gray-200 dark:border-white/10 rounded-full hover:border-accentGold hover:text-accentGold text-gray-600 dark:text-gray-400 transition-colors"><TwitterIcon /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold tracking-wide mb-6 uppercase">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: 'About Us', path: '/about' },
                { name: 'Portfolio', path: '/portfolio' },
                { name: 'Our Process', path: '/process' },
                { name: '3D View Experience', path: '/3d-view' },
                { name: 'Contact Us', path: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-600 dark:text-gray-400 hover:text-accentGold transition-colors text-sm uppercase tracking-wider">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold tracking-wide mb-6 uppercase">Our Services</h4>
            <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
              <li>Architecture Design</li>
              <li>Interior Design</li>
              <li>Turnkey Projects</li>
              <li>Smart Home Integration</li>
              <li>Vastu Planning</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold tracking-wide mb-6 uppercase text-gray-900 dark:text-white">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
              <li className="flex items-start">
                <MapPin size={18} className="text-accentGold mr-3 mt-1 flex-shrink-0" />
                <a href="https://maps.google.com/?q=Balaji+Arcade,+Ground+Floor,+TNGO+Colony+phase-2,+Goldcrest+School+Road,+Gachibowli+500046,+Telangana,+Hyderabad" target="_blank" rel="noopener noreferrer" className="hover:text-accentGold transition-colors">
                  Balaji Arcade, Ground Floor, TNGO Colony phase-2, Goldcrest School Road, Gachibowli 500046, Telangana, Hyderabad
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-accentGold mr-3 flex-shrink-0" />
                <div className="flex gap-2">
                  <a href="tel:+918790872287" className="hover:text-accentGold transition-colors">+91 87908 72287</a>
                  <span>/</span>
                  <a href="tel:+918123244152" className="hover:text-accentGold transition-colors">+91 81232 44152</a>
                </div>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-accentGold mr-3 flex-shrink-0" />
                <a href="mailto:space16designstudio@gmail.com" className="hover:text-accentGold transition-colors">space16designstudio@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-100 dark:border-white/5 text-center text-sm text-gray-500 dark:text-gray-500 flex flex-col md:flex-row justify-between items-center">
          <p>© 2026 S16 Design Studio Pvt Ltd. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <a href="#" className="hover:text-accentGold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accentGold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
