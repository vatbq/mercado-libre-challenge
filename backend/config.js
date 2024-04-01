require('dotenv').config();

const config = {
  port: 8000,
  API_BASE: process.env.API_BASE,
};

module.exports = config;
