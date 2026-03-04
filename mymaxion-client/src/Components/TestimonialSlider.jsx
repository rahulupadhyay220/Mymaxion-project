import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export default function TestimonialSlider({ testimonials }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Testimonial Card */}
      <div className="bg-white rounded-lg shadow-lg p-8 animate-fadeIn">
        {/* Stars */}
        <div className="flex space-x-1 mb-4">
          {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
            <Star
              key={i}
              size={20}
              className="fill-yellow-400 text-yellow-400"
            />
          ))}
        </div>

        {/* Quote */}
        <p className="text-xl text-gray-700 mb-6 italic">"{currentTestimonial.content}"</p>

        {/* Author */}
        <div className="border-t pt-4">
          <p className="font-bold text-gray-900">{currentTestimonial.name}</p>
          <p className="text-sm text-gray-600">{currentTestimonial.role}</p>
          <p className="text-sm text-ocean-600 font-semibold">{currentTestimonial.company}</p>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-8">
        <button
          onClick={goToPrevious}
          className="p-2 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Indicator dots */}
        <div className="flex space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition ${
                index === currentIndex ? 'bg-ocean-600 w-8' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={goToNext}
          className="p-2 bg-ocean-600 text-white rounded-full hover:bg-ocean-700 transition"
          aria-label="Next testimonial"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}
