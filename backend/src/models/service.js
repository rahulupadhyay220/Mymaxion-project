import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String },
    industry: { type: String },
    image: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model('Service', serviceSchema);
