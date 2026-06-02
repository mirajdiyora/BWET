const {createPool} = require('mysql2/promise');

const conObj = {

    host:"localhost",
    user:"root",
    password:"",
    database:"movies",
    connectionLimit:10,
}
const db = createPool(conObj);



module.exports = db;
