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
const WhatsappIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.458h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
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
              <a href="https://www.instagram.com/space16_designstudio?utm_source=qr&igsh=MXJzdXdzeTg2bXNv" target="_blank" rel="noopener noreferrer" className="p-2.5 border border-gray-200 dark:border-white/10 rounded-full hover:border-accentGold hover:text-accentGold text-gray-600 dark:text-gray-400 transition-colors flex items-center justify-center" aria-label="Instagram"><InstagramIcon /></a>
              <a href="https://wa.me/message/ZXHAJ7GBJXMSK1" target="_blank" rel="noopener noreferrer" className="p-2.5 border border-gray-200 dark:border-white/10 rounded-full hover:border-accentGold hover:text-accentGold text-gray-600 dark:text-gray-400 transition-colors flex items-center justify-center" aria-label="WhatsApp"><WhatsappIcon /></a>
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
                <a href="mailto:Info@s16designstudio.com" className="hover:text-accentGold transition-colors">Info@s16designstudio.com</a>
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
