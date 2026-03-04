import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Users, Droplet } from 'lucide-react';
import { ProductCard } from '../Components/Cards';
import { ServiceCard } from '../Components/Cards';
import { products, services } from '../data';

export default function Home() {
  const featuredProducts = products.slice(0, 3);
  const featuredServices = services.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-ocean-500 via-beach-500 to-beach-300 text-gray-800 py-20 md:py-32 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-ocean-600 rounded-full opacity-10 -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-yellow-200 rounded-full opacity-10 -ml-36 -mb-36"></div>

        <div className="container mx-auto max-w-6xl px-4 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="animate-slideInDown">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Engineering Excellence in Water Treatment & Packaging
              </h1>
              <p className="text-lg text-beach-100 mb-8 max-w-lg">
                Leading provider of innovative solutions for water treatment plants, packaging machinery, and environmental services across multiple industries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-ocean-700 font-bold rounded-lg hover:bg-ocean-50 transition duration-300 group"
                >
                  Explore Products
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-ocean-700 transition duration-300"
                >
                  Get in Touch
                </Link>
              </div>
            </div>

            {/* Right Side - Stats */}
            <div className="grid grid-cols-2 gap-4 animate-slideUp">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-3xl font-bold text-ocean-200 mb-2">500+</div>
                <p className="text-white/80">Projects Completed</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-3xl font-bold text-ocean-200 mb-2">50+</div>
                <p className="text-white/80">Products & Services</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-3xl font-bold text-ocean-200 mb-2">25+</div>
                <p className="text-white/80">Years Experience</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-3xl font-bold text-ocean-200 mb-2">10+</div>
                <p className="text-white/80">Industry Sectors</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-amber-50">
        <div className="container mx-auto max-w-6xl px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose MyMaxion</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We deliver innovative, sustainable solutions backed by expertise and commitment to excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Zap size={32} className="text-ocean-600" />,
                title: 'Innovation',
                description: 'Cutting-edge technology and engineering solutions',
              },
              {
                icon: <Shield size={32} className="text-ocean-600" />,
                title: 'Quality',
                description: 'ISO certified processes and quality standards',
              },
              {
                icon: <Users size={32} className="text-ocean-600" />,
                title: 'Expertise',
                description: '25+ years of industry experience and knowledge',
              },
              {
                icon: <Droplet size={32} className="text-ocean-600" />,
                title: 'Sustainability',
                description: 'Eco-friendly and environmentally responsible',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition duration-300 animate-slideUp"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-24 bg-amber-50">
        <div className="container mx-auto max-w-6xl px-4 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Featured Products</h2>
              <p className="text-gray-600 mt-2">Innovative solutions for your needs</p>
            </div>
            <Link
              to="/products"
              className="hidden sm:inline-flex items-center text-ocean-600 font-semibold hover:text-ocean-700"
            >
              View All
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/products"
              className="inline-flex items-center px-8 py-3 border-2 border-ocean-600 text-ocean-600 font-bold rounded-lg hover:bg-ocean-50 transition duration-300 group"
            >
              Explore All Products
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 md:py-24 bg-amber-50">
        <div className="container mx-auto max-w-6xl px-4 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Services</h2>
              <p className="text-gray-600 mt-2">Comprehensive solutions tailored to your requirements</p>
            </div>
            <Link
              to="/services"
              className="hidden sm:inline-flex items-center text-ocean-600 font-semibold hover:text-ocean-700"
            >
              View All
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-3 border-2 border-ocean-600 text-ocean-600 font-bold rounded-lg hover:bg-ocean-50 transition duration-300 group"
            >
              Explore All Services
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-amber-50 text-black-100">
        <div className="container mx-auto max-w-6xl px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-lg text-black-100 mb-8 max-w-2xl mx-auto">
            Contact our expert team today to discuss your specific requirements and discover how MyMaxion can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-yellow-500 text-ocean-600 font-bold rounded-lg hover:bg-yellow-100 transition duration-300 group"
          >
            Get Your Free Consultation
            <ArrowRight size={20} className="ml-2 bg-color group-hover:translate-x-1 transition" />
          </Link>
        </div>
      </section>
    </div>
  );
}
