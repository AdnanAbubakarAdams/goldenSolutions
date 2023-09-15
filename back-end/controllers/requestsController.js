const express = require("express");
const requests = express.Router();

// IMPORTS OF REQUEST QUERIES
const {
    getAllRequests
} = require("../queries/requests.js");

// ALL REQUEST / INDEX ROUTE
requests.get("/", async (req, res) => {
    const allRequests = await getAllRequests();
    if (allRequests[0]) {
        res.status(200).json(allRequests);
    } else {
        res.status(500).json({ error: 'server error!' });
    }
});



module.exports = requests;