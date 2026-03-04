import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from 'lucide-react';
import { footerLinks, companyInfo } from '../data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto max-w-6xl px-4 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-ocean-600 rounded-lg flex items-center justify-center font-bold">
                M
              </div>
              <span className="font-bold text-xl">MyMaxion</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">{companyInfo.tagline}</p>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm">
                <Mail size={16} className="text-ocean-400" />
                <a href={`mailto:${companyInfo.email}`} className="hover:text-ocean-400 transition">
                  {companyInfo.email}
                </a>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Phone size={16} className="text-ocean-400" />
                <span>{companyInfo.phone}</span>
              </div>
              <div className="flex items-start space-x-2 text-sm">
                <MapPin size={16} className="text-ocean-400 mt-1" />
                <span className="flex-1">{companyInfo.address}</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-primary-400 transition text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-primary-400 transition text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-primary-400 transition text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-gray-700 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              <a
                href="#"
                className="text-gray-400 hover:text-ocean-400 transition"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-ocean-400 transition"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-ocean-400 transition"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
            <p className="text-gray-400 text-sm text-center md:text-right">
              © {currentYear} MyMaxion. All rights reserved. | Designed with <span className="text-ocean-400"></span> by MyMaxion Team
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
