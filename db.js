const mysql = require('mysql2/promise');

const db = mysql.createPool({
    host: 'localhost',
    user: 'jimmy',
    password: 'password123',
    database: 'mydb'
});

module.exports = db;