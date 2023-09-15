// CONFINGURATIONS
const express = require("express");
const users = express.Router();

// IMPORTS OF ALL USER QUERIES

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

module.exports = users;
