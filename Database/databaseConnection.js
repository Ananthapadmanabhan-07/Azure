const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection({
  host:process.env.Host_name,
  user:process.env.users,
  password:process.env.password,   
   database:process.env.database,
   ssl: {
    rejectUnauthorized: true
  }
});

db.connect((err) => {
  if (err) {
    console.error('SQL connection failed:', err.message);
  } else {
    console.log('SQL connection successful');
  }
});

module.exports = db;





