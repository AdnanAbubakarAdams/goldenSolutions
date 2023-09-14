// DEPENDENCIES 
const cors = require('cors');
const express = require('express');

// CONFIGURATION 
const app = express();

// MIDDLEWARES
app.use(cors());
app.use(express.json());

// ALL CONTROLLERS
// const usersController = require('./controllers/usersController');
// app.use('/users', usersController);

// ROUTES 
app.get("/", (req, res) => {
    res.send("Welcome to Adnan's GoldenSolutions Database!")
});

// CATCH ALL ROUTE // THE 404 PAGE
app.get("*", (req, res) => {
    res.status(404).send('Error: this page cannot be Found!')
});

// EXPORT 
module.exports = app;