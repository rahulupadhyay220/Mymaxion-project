/* eslint-disable no-undef */
import request from 'supertest';
import app from '../src/app.js';

describe('Products API', () => {
  it('should return JSON list', async () => {
    const res = await request(app).get('/api/products');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
