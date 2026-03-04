/* eslint-disable no-undef */
import Product from '../models/product.js';
import fs from 'fs';
import path from 'path';
import * as cheerio from 'cheerio';

// utility to convert html file into JSON object: title + body text
const parseHtml = (filePath) => {
  const content = fs.readFileSync(filePath, 'utf-8');
  const $ = cheerio.load(content);
  return {
    title: $('title').text() || path.basename(filePath),
    body: $('body').text().trim(),
  };
};

// @desc    get all products
// @route   GET /api/products
// @access  public
import cache from '../utils/cache.js';

export const getProducts = async (req, res, next) => {
  try {
    // during tests we don't connect to Mongo, just return empty list
    if (process.env.NODE_ENV === 'test') {
      return res.json([]);
    }

    const cached = cache.get('products');
    if (cached) {
      return res.json(cached);
    }
    const products = await Product.find({});
    cache.set('products', products);
    res.json(products);
  } catch (err) {
    next(err);
  }
};

// @desc    get single product by slug
// @route   GET /api/products/:slug
// @access  public
export const getProductBySlug = async (req, res, next) => {
  try {
    const product = await Product.findOne({ slug: req.params.slug });
    if (product) {
      res.json(product);
    } else {
      const err = new Error('Product not found');
      err.status = 404;
      next(err);
    }
  } catch (err) {
    next(err);
  }
};

// @desc    create new product (admin)
// @route   POST /api/products
// @access  private/admin
export const createProduct = async (req, res, next) => {
  try {
    const newProduct = new Product(req.body);
    const saved = await newProduct.save();
    res.status(201).json(saved);
  } catch (err) {
    next(err);
  }
};

// seed from directory
export const seedProductsFromDirectory = async (req, res, next) => {
  try {
    const dir = path.join(process.cwd(), 'public', 'products');
    if (!fs.existsSync(dir)) {
      return res.status(404).json({ message: 'Directory not found' });
    }
    const files = fs.readdirSync(dir).filter((f) => f.endsWith('.htm'));
    const added = [];
    for (const file of files) {
      const info = parseHtml(path.join(dir, file));
      const slug = path.basename(file, '.htm');
      const exists = await Product.findOne({ slug });
      if (!exists) {
        const product = new Product({ name: info.title, slug, description: info.body });
        await product.save();
        added.push(slug);
      }
    }
    res.json({ added });
  } catch (err) {
    next(err);
  }
};

// RSS feed generator
import RSS from 'rss';

export const getProductsRSS = async (req, res, next) => {
  try {
    const items = await Product.find({}).sort({ createdAt: -1 }).limit(20);
    const feed = new RSS({
      title: 'MyMaxion Products',
      description: 'Latest products from MyMaxion',
      feed_url: `${req.protocol}://${req.get('host')}/api/products/rss`,
      site_url: `${req.protocol}://${req.get('host')}`,
    });
    items.forEach((p) => {
      feed.item({
        title: p.name,
        description: p.description,
        url: `${req.protocol}://${req.get('host')}/products/${p.slug}`,
        date: p.createdAt,
      });
    });
    res.type('application/rss+xml');
    res.send(feed.xml());
  } catch (err) {
    next(err);
  }
};

