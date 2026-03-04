/* eslint-disable no-undef */
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from '../models/user.js';

dotenv.config();
const seed = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URI);
    const admin = await User.findOne({ email: process.env.ADMIN_EMAIL });
    if (!admin) {
      const user = new User({
        name: 'Administrator',
        email: process.env.ADMIN_EMAIL,
        password: 'ChangeMe123!',
        role: 'admin',
      });
      await user.save();
      console.log('Admin user created', user.email);
    } else {
      console.log('Admin already exists');
    }
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seed();
