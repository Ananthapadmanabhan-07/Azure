const db= require('../Database/databaseConnection');


// get all users
exports.getAllUsers = (req, res) => {
    const Query = 'SELECT * FROM `user_register`';
    db.query(Query, (err, results) => {
        if (err) {
            console.error('Error fetching users:', err);
            res.status(500).json({ error: 'Failed to fetch users' });
        } else {
            res.json(results);
        }
    });
}

// adduser

exports.adduser =  (req, res) => {
  const { user_id,username,email,password} = req.body;
  console.log("inside the add user function");
  
  const query =  'INSERT INTO `user_register` ( user_id,username,email,password) VALUES (?, ?, ?, ?)';
  db.query(query, [ user_id,username,email,password], (err) => {
    if (err) {
      console.error('Error adding user:', err);
      res.status(500).send('Error adding user');
    } else {
      res.status(201).send('User added successfully');
    }
  });
}

