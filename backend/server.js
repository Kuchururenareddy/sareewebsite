const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); // Added Mongoose
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// --- DATABASE CONNECTION ---
// We use process.env.MONGO_URI to pull the link from your .env file
const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI)
    .then(() => {
        console.log("-----------------------------------------");
        console.log("✅ SRI DORASANI DATABASE CONNECTED!");
        console.log("-----------------------------------------");
    })
    .catch((err) => {
        console.log("-----------------------------------------");
        console.log("❌ DATABASE CONNECTION ERROR:");
        console.log(err.message);
        console.log("-----------------------------------------");
    });

// --- ROUTES ---
// Default route to check if server is up
app.get('/', (req, res) => {
    res.send("Sri Dorasani Backend is successfully running and connected!");
});

// Port Setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server is live on http://localhost:${PORT}`);
});