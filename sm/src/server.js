const express = require('express');
const multer = require('multer'); // For file uploads
const cors = require('cors'); // For cross-origin requests

const app = express();
const port = 5000; // Default port

app.use(cors()); // Enable CORS for cross-origin requests
