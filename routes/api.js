var express = require('express');
var router = express.Router();

// include database models
var models = require('../server/models/index');

// GET all users
router.get('/users', function(req, res) {
  models.user.findAll({}).then(function(users) {
    res.json(users);
  });
});

// POST new user
// To add a new user, run the server - gulp - and then run the following in a new terminal window:
// $ curl --data "email=[email of user]&" http://localhost:3000/users
router.post('/users', function(req, res) {
  models.user.create({
    email: req.body.email,
    username: req.body.username,
    pasword: req.body.password
  }).then(function(user) {
    res.json(user);
  });
});


module.exports = router;