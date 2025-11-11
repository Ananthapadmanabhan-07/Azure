const express = require('express');
const router = express.Router();
const ActionController = require('./controller/actionController');


router.get('/getuser', ActionController.getAllUsers);

// add user
router.post('/adduser', ActionController.adduser);


module.exports = router;
