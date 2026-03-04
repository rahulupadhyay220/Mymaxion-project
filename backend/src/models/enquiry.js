import mongoose from 'mongoose';

const enquirySchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    phone: String,
    company: String,
    subject: String,
    message: String,
    source: String, // which form variant
  },
  { timestamps: true }
);

export default mongoose.model('Enquiry', enquirySchema);
