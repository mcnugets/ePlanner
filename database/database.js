const { Console } = require('console');
const mysql = require('mysql');
require('dotenv').config();


const pool  = mysql.createPool({
     
    user: process.env.user,
    password: process.env.password,
    database: process.env.db_name,
    host: process.env.host,
    port: process.env.port,
    multiplestatements: true,
        
})

pool.getConnection((err) =>
 {
    
    if (err) throw error;


    console.log("connected to databse");

})
module.exports = pool;