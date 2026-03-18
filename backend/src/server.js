/* eslint-disable no-undef */
import dotenv from 'dotenv';

dotenv.config();

const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  return res.json('backend is running');
});
const PORT = process.env.PORT || 3000;

app.listen(8080, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
