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

// EXPORTING ALL USER QUERIES
module.exports = {
  getAllUsers,
};
