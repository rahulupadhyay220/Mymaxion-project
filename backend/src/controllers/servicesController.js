/* eslint-disable no-undef */
import Service from '../models/service.js';
import fs from 'fs';
import path from 'path';
import * as cheerio from 'cheerio';

const parseHtml = (filePath) => {
  const content = fs.readFileSync(filePath, 'utf-8');
  const $ = cheerio.load(content);
  return {
    title: $('title').text() || path.basename(filePath),
    body: $('body').text().trim(),
  };
};

import cache from '../utils/cache.js';

export const getServices = async (req, res, next) => {
  try {
    const cached = cache.get('services');
    if (cached) {
      return res.json(cached);
    }
    const services = await Service.find({});
    cache.set('services', services);
    res.json(services);
  } catch (err) {
    next(err);
  }
};

export const getServiceBySlug = async (req, res, next) => {
  try {
    const service = await Service.findOne({ slug: req.params.slug });
    if (service) {
      res.json(service);
    } else {
      const err = new Error('Service not found');
      err.status = 404;
      next(err);
    }
  } catch (err) {
    next(err);
  }
};

export const createService = async (req, res, next) => {
  try {
    const newService = new Service(req.body);
    const saved = await newService.save();
    res.status(201).json(saved);
  } catch (err) {
    next(err);
  }
};

export const seedServicesFromDirectory = async (req, res, next) => {
  try {
    const dir = path.join(process.cwd(), 'public', 'services');
    if (!fs.existsSync(dir)) {
      return res.status(404).json({ message: 'Directory not found' });
    }
    const files = fs.readdirSync(dir).filter((f) => f.endsWith('.htm'));
    const added = [];
    for (const file of files) {
      const info = parseHtml(path.join(dir, file));
      const slug = path.basename(file, '.htm');
      const exists = await Service.findOne({ slug });
      if (!exists) {
        const service = new Service({ title: info.title, slug, description: info.body });
        await service.save();
        added.push(slug);
      }
    }
    res.json({ added });
  } catch (err) {
    next(err);
  }
};
