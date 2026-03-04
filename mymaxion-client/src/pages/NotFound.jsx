import { Link } from 'react-router-dom';
import { AlertCircle, Home, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-ocean-50 to-beach-100 text-gray-800 flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        {/* Icon */}
        <div className="mb-6 flex justify-center">
          <AlertCircle size={80} className="text-primary-200" />
        </div>

        {/* 404 Text */}
        <h1 className="text-6xl md:text-8xl font-bold mb-4 animate-slideInDown">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-slideUp">Page Not Found</h2>

        {/* Description */}
        <p className="text-lg text-primary-100 mb-8 max-w-lg mx-auto">
          Sorry, the page you're looking for doesn't exist. It might have been moved or deleted.
        </p>

        {/* Search Suggestion */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8 border border-white/20 animate-fadeIn">
          <div className="flex items-center justify-center space-x-2 text-primary-200 mb-4">
            <Search size={20} />
            <span>Let's help you find what you need</span>
          </div>
          <p className="text-primary-100 text-sm">
            Use the navigation menu above or go back to the homepage to explore more.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-700 font-bold rounded-lg hover:bg-primary-50 transition duration-300 group"
          >
            <Home size={20} className="mr-2" />
            Back to Home
          </Link>
          <Link
            to="/sitemap"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-primary-700 transition duration-300"
          >
            <Search size={20} className="mr-2" />
            Explore Sitemap
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <p className="text-primary-100 mb-4">Quick Links:</p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: 'Contact Us', path: '/contact' },
              { label: 'Products', path: '/products' },
              { label: 'Services', path: '/services' },
              { label: 'About Us', path: '/about' },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-primary-200 hover:text-white underline transition duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
