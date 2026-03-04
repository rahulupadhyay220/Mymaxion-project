import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 animate-fadeIn">
      {/* Image Placeholder */}
      <div className="w-full h-48 bg-gradient-to-br from-beach-100 to-ocean-50 flex items-center justify-center text-ocean-600 font-semibold">
        {product.name}
      </div>

      {/* Content */}
      <div className="p-6">
        <span className="text-xs font-semibold text-ocean-600 uppercase tracking-wider">
          {product.category}
        </span>
        <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>

        {/* Link to detail page */}
        <Link
          to={`/products/${product.slug}`}
          className="inline-flex items-center text-ocean-600 font-semibold hover:text-ocean-700 group"
        >
          Learn More
          <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition" />
        </Link>
      </div>
    </div>
  );
}

export function ServiceCard({ service }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 animate-fadeIn">
      {/* Image Placeholder */}
      <div className="w-full h-48 bg-gradient-to-br from-beach-100 to-ocean-50 flex items-center justify-center text-ocean-600 font-semibold text-center px-4">
        {service.name}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3">{service.name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{service.description}</p>

        {/* Link to detail page */}
        <Link
          to={`/services/${service.slug}`}
          className="inline-flex items-center text-ocean-600 font-semibold hover:text-ocean-700 group"
        >
          Explore
          <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition" />
        </Link>
      </div>
    </div>
  );
}

export default { ProductCard, ServiceCard };
