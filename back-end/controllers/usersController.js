// CONFINGURATIONS
const express = require("express");
const users = express.Router();

// IMPORTS OF ALL USER QUERIES
const {
  getAllUsers,
  getUser
} = require("../queries/users.js");

//***ROUTES***//
// ALL USERS // THE INDEX ROUTE //
users.get("/", async (req, res) => {
  const allUsers = await getAllUsers();
  if (allUsers[0]) {
    res.status(200).json(allUsers);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

// SINGLE USER
users.get("/:id", async (req, res) => {
  const { id } = req.params;
  const aUser = await getUser(id);
  if (aUser) {
    res.json({ payload: aUser, success: true });
  } else {
    res.status(404).json({ error: "user not Found!"})
  }
});

module.exports = users;
