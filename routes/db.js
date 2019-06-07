// PG
const mysql = require('mysql');
const con = mysql.createConnection({
    user: 'ppcamp',
    host: 'localhost',
    database: 'gorush',
    password: 'ppcamp',
    // port: 5432, Default
});
module.exports = con;