/* eslint-disable no-undef */
import fs from 'fs';
import path from 'path';
import * as cheerio from 'cheerio';

// read .htm from public/root
const parseHtml = (content) => {
  const $ = cheerio.load(content);
  return {
    title: $('title').text(),
    body: $('body').html(),
  };
};

export const getPage = (req, res, next) => {
  const slug = req.params.slug || 'index';
  const filePath = path.join(process.cwd(), 'public', `${slug}.htm`);
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const page = parseHtml(content);
    return res.json(page);
  }
  const err = new Error('Page not found');
  err.status = 404;
  next(err);
};
