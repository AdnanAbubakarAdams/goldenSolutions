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





// EXPORTING ALL REQUEST QUERIES
module.exports = {
    getAllRequests
};