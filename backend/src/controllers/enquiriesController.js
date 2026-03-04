/* eslint-disable no-undef */
import Enquiry from '../models/enquiry.js';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const submitEnquiry = async (req, res, next) => {
  try {
    const q = new Enquiry(req.body);
    const saved = await q.save();

    // send email to admin
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: `New enquiry: ${q.subject || 'No subject'}`,
      text: JSON.stringify(q, null, 2),
    };

    transporter.sendMail(mailOptions, (error) => {
      if (error) {
        console.error('Email error', error);
      }
    });

    res.status(201).json({ message: 'Enquiry received', enquiry: saved });
  } catch (err) {
    next(err);
  }
};

export const getEnquiries = async (req, res, next) => {
  try {
    const list = await Enquiry.find({});
    res.json(list);
  } catch (err) {
    next(err);
  }
};
