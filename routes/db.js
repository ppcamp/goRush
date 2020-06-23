// PG
const mysql = require('mysql');
const con = mysql.createConnection({
    host: '127.0.0.1',
    database: 'gorush',
    user: 'ppcamp',
    password: 'ppcamp',
    port: 5432
});
module.exports = con;