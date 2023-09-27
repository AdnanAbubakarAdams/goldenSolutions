const express = require("express");
const requests = express.Router();

// IMPORTS OF REQUEST QUERIES
const {
  getAllRequests,
  createRequest,
  editRequest,
  deleteRequest,
  getARequest
} = require("../queries/requests.js");

// ALL REQUEST / INDEX ROUTE
requests.get("/", async (req, res) => {
  const allRequests = await getAllRequests();
  if (allRequests[0]) {
    res.status(200).json(allRequests);
  } else {
    res.status(500).json({ error: "server error!" });
  }
});

// GET A SINGLE REQUEST
requests.get("/:id", async (req, res) => {
  const { id } = req.params;
  const aRequest = await getARequest(id);
  if (aRequest) {
    res.json(aRequest);
  } else {
    res.status(404).json({ error: "request not found!"})
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
    res
      .status(400)
      .json({ error: "this request was not updated, please try again!" });
  }
});

// DELETE A REQUEST
requests.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedRequest = await deleteRequest(id);
  if (deletedRequest.id) {
    res.status(200).json(deletedRequest);
  } else {
    res.status(404).json("The request you trying to delete is not here!");
  }
});

module.exports = requests;
