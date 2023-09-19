const db = require("../db/dbConfig.js");

// QUERYING ALL REQUEST
const getAllRequests = async () => {
    try {
        console.log('Logging all request');
        const requests = await db.any("SELECT * FROM requests ORDER BY req_date ASC");
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
            [request.req_title, request.req_date, request.description, request.location, request.time, request.image, request.assigned, request.complete]
        );
        return createdRequest;
    } catch (error) {
        return error;
    }
};



// EXPORTING ALL REQUEST QUERIES
module.exports = {
    getAllRequests, 
    createRequest
};