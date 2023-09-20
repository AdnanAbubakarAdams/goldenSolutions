const express = require("express");
const requests = express.Router();

// IMPORTS OF REQUEST QUERIES
const {
    getAllRequests,
    createRequest,
    editRequest
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

// CREATE A REQUEST
requests.post("/", async (req, res) => {
    try {
        console.log("creating a request");
        const createdRequest = createRequest(req.body);
        res.json(createdRequest);
    } catch (error) {
        return error;
    }
});

// EDIT A REQUEST
requests.put("/:id", async (req, res) => {
    const { id } = req.params;
    const editedRequest = await editRequest(req.body, id);
    if (editedRequest.id) {
        res.status(200).json(editedRequest);
    } else {
        res.status(400).json({ error: "this request was not updated, please try again!"})
    }
});



module.exports = requests;