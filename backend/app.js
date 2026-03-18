/* eslint-disable no-undef */
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';

import connectDB from './src/config/db.js';
import errorHandler from './src/middleware/errorHandler.js';

// routers
import productsRouter from './src/routes/products.js';
import servicesRouter from './src/routes/services.js';
import jobsRouter from './src/routes/jobs.js';
import testimonialsRouter from './src/routes/testimonials.js';
import enquiriesRouter from './src/routes/enquiries.js';
import authRouter from './src/routes/auth.js';
import sitemapRouter from './src/routes/sitemap.js';
import i18nRouter from './src/routes/i18n.js';

dotenv.config();

const app = express();

// connect database
connectDB();

// middleware
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: process.env.CORS_ORIGIN || '*' }));
app.use(morgan('dev'));

// rate limiter for form submissions and sensitive endpoints
const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 60, // limit each IP to 60 requests per windowMs
});
app.use('/api/enquiry', limiter);
app.use('/api/jobs', limiter);

// routes
app.use('/api/products', productsRouter);
app.use('/api/services', servicesRouter);
app.use('/api/jobs', jobsRouter);
app.use('/api/testimonials', testimonialsRouter);
app.use('/api/enquiries', enquiriesRouter);
app.use('/api/auth', authRouter);
app.use('/api/sitemap', sitemapRouter);
app.use('/api/i18n', i18nRouter);
app.use('/api/pages', (await import('./src/routes/pages.js')).default);
import analyticsRouter from './src/routes/analytics.js';
app.use('/api/analytics', analyticsRouter);
import filesRouter from './src/routes/files.js';
app.use('/api/files', filesRouter);

// static assets
app.use('/assets', express.static('public'));

// serve html error pages
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(errorHandler);

export default app;
