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

// QUERY TO CREATE A NEW USER
const createANewUser = async (user) => {
  console.log("Adding a new user");
  try {
    const aNewUser = await db.one(
      "INSERT INTO users (firstname, lastname, dob, address, unit, city, state, zipcode, phonenumber, email, user_type, profilephoto, languages) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING *",
      [user.firstname, user.lastname, user.dob, user.address, user.unit, user.city, user.state, user.zipcode, user.phonenumber, user.email, user.user_type, user.profilephoto, user.languages]
    );
    return aNewUser;
  } catch (error) {
    return error;
  }
}

// EXPORTING ALL USER QUERIES TO USER CONTROLLER
module.exports = {
  getAllUsers,
  getUser, 
  createANewUser
};
