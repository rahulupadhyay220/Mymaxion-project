import Testimonial from '../models/testimonial.js';

export const getTestimonials = async (req, res, next) => {
  try {
    const list = await Testimonial.find({});
    res.json(list);
  } catch (err) {
    next(err);
  }
};

export const createTestimonial = async (req, res, next) => {
  try {
    const t = new Testimonial(req.body);
    const saved = await t.save();
    res.status(201).json(saved);
  } catch (err) {
    next(err);
  }
};
