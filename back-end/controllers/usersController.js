// CONFINGURATIONS
const express = require("express");
const users = express.Router();

// IMPORTS OF ALL USER QUERIES
const {
  getAllUsers,
  getUser,
  createANewUser,
  updateAUser,
  deleteAUser
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

// CREATE NEW USER
users.post("/", async (req, res) => {
  console.log("creating a new user");
  try {
    const aNewUser = await createANewUser(req.body);
    console.log(aNewUser);
    res.status(200).json({ payload: aNewUser, success: true });
  } catch (error) {
    res.status(400).json({ error: "error", success: false });
  }
});

// UPDATING OR EDITING A USER --- ID WILL BE CONVERTED TO UUID AFTER FIREBASE
users.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updatedUser = await updateAUser(id, req.body);
    if(updatedUser.id) {
      res.status(200).send(updatedUser);
    } else {
      res.status(404).json({ error: "user not found, not updated"})
    }
  } catch (error) {
    return error;
  }
});

// DELETING A USER
users.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedUser = await deleteAUser(id);
  if(deletedUser.id) {
    res.status(200).json(deletedUser);
  } else {
    res.status(400).json("User cannot be deleted, user is not found");
  }
});


module.exports = users;
