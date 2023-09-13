// DEPENDENCIES 
const cors = require('cors');
const express = require('express');

// CONFIGURATION 
const app = express();

// MIDDLEWARES
app.use(cors());
app.use(express.json());

// ROUTES 
app.get("/", (req, res) => {
    res.send("Welcome to Adnan's GoldenSolutions Database!")
});

// CATCH ALL ROUTE
app.get("*", (req, res) => {
    res.status(404).send('Error: this page cannot be Found!')
});

// EXPORT 
module.exports = app;