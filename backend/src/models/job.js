import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    department: String,
    location: String,
    type: String,
    level: String,
    salary: String,
    description: String,
    requirements: [String],
    applyLink: String,
  },
  { timestamps: true }
);

export default mongoose.model('Job', jobSchema);
