import mongoose from 'mongoose';

const testimonialSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    role: String,
    company: String,
    content: String,
    rating: { type: Number, min: 1, max: 5 },
  },
  { timestamps: true }
);

export default mongoose.model('Testimonial', testimonialSchema);
