const db = require("../db/dbConfig.js");

// QUERYING ALL USERS
const getAllUsers = async () => {
  try {
    console.log("Logging all users from the users table");
    const users = await db.any("SELECT * FROM users");
    return users;
  } catch (error) {
    return error;
  }
};

// QUERYING A SINGLE USER
const getUser = async (id) => {
  try {
    console.log("logging single user")
    const singleUser = await db.one("SELECT * FROM users WHERE id=$1", id);
    return singleUser;
  } catch (error) {
    return error;
  }
};

// EXPORTING ALL USER QUERIES TO USER CONTROLLER
module.exports = {
  getAllUsers,
  getUser
};
