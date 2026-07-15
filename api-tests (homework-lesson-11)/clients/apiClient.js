require('dotenv').config();
const axios = require('axios');

const api = axios.create({
    baseURL: process.env.BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    },
    validateStatus: () => true
});

module.exports = api;