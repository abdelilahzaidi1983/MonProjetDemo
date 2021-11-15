const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'studentdb'
  });

module.exports = {
    connection
};
    