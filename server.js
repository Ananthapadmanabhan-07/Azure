const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./Database/databaseConnection');
const Router = require('./Router');

const app =express();
require('dotenv').config();

app.use(cors());
app.use(bodyParser.json());
app.use(Router);

const PORT = 4000;

app.listen(PORT,() =>{
    console.log(`Server is running on port ${PORT}`);
})

app.get('/',(req,res)=>{
    res.send(" health record  server running successfully");
})

app.get('/create-table', (req, res) => {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS user_register (
      user_id INT AUTO_INCREMENT PRIMARY KEY,
      username VARCHAR(100) NOT NULL,
      email VARCHAR(100) NOT NULL UNIQUE,
      password VARCHAR(255) NOT NULL
    );
  `;

  db.query(createTableQuery, (err, result) => {
    if (err) {
      console.error(' Error creating table:', err);
      res.status(500).send('Error creating table');
    } else {
      console.log('Table created successfully');
      res.send('Table created successfully!');
    }
  });
});
