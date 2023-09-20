const db = require("../db/dbConfig.js");

// QUERYING ALL REQUEST
const getAllRequests = async () => {
  try {
    console.log("Logging all request");
    const requests = await db.any(
      "SELECT * FROM requests ORDER BY req_date ASC"
    );
    return requests;
  } catch (error) {
    return error;
  }
};

// QUERY TO CREATE A REQUEST
const createRequest = async (request) => {
  try {
    console.log("query to create or add a new request");
    const createdRequest = await db.one(
      "INSERT INTO requests (req_title, re_date, description, location, time, image, assigned, complete) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
      [
        request.req_title,
        request.req_date,
        request.description,
        request.location,
        request.time,
        request.image,
        request.assigned,
        request.complete,
      ]
    );
    return createdRequest;
  } catch (error) {
    return error;
  }
};

// QUERY TO EDIT A REQUEST --- id's will be replaced by uuids
const editRequest = async (request, id) => {
  try {
    console.log("editing request with the id of " + id);
    const editedRequest = await db.one(
      "UPDATE request SET req_title=$1, req_date=$2, description=$3, location=$4, time=$5, image=$6, WHERE id=$7 RETURNING *",
      [
        request.req_title,
        request.req_date,
        request.description,
        request.location,
        request.time,
        request.image,
        id,
      ]
    );
    return editedRequest;
  } catch (error) {
    return error;
  }
};

//  QUERY TO DELETE A REQUEST
const deleteRequest = async (id) => {
  try {
    console.log("Deleting the request with the id of " + id);
    const deletedRequest = await db.one(
      "DELETE FROM requests WHERE id=$1 RETURNING *",
      id
    );
    return deletedRequest;
  } catch (error) {
    return error;
  }
};

// EXPORTING ALL REQUEST QUERIES
module.exports = {
  getAllRequests,
  createRequest,
  editRequest,
  deleteRequest
};
