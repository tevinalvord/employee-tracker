const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your MYSQL username,
        user: 'root',
        // Your MYSQL password
        password: 'coding',
        database: 'employee_tracker'
    },
    console.log('Connect to the Employee Tracker database.')
);

module.exports = db;