var express = require('express');
var router = express.Router();
var app = express();

// include database models
var models = require('../server/models/index');

// // GET all users
// router.get('/users', function(req, res) {
//   models.user.findAll({}).then(function(users) {
//     res.json(users);
//   });
// });

// // POST new user
// // To add a new user, run the server - gulp - and then run the following in a new terminal window:
// // $ curl --data "email=[email of user]&" http://localhost:3000/users
// router.post('/users', function(req, res) {
//   models.user.create({
//     email: req.body.email,
//     username: req.body.username,
//     pasword: req.body.password
//   }).then(function(user) {
//     res.json(user);
//   });
// });

// GET all pokemon
router.get('/pokemons', function(req, res) {
  models.pokemon.findAll({}).then(function(pokemons) {
    res.json(pokemons);
  });
});

// POST new pokemon
// To add a new pokemon, run the server - gulp - and then run the following in a new terminal window:
// $ curl --data "name=[name of pokemon]&..." http://localhost:3000/users
router.post('/pokemons', function(req, res) {
  models.pokemon.create({
    name: req.body.name,
    question: req.body.question,
    answer: req.body.answer,
    lat: req.body.lat,
    lng: req.body.lng,
    image: req.body.image
  }).then(function(pokemon) {
    res.json(pokemon);
  });
});

// GET all pokemon
router.get('/userPokemons', function(req, res) {
  models.user_pokemon.findAll({}).then(function(user_pokemons) {
    res.json(user_pokemons);
  });
});

// POST new catch to user_pokemons
router.post('/userPokemons', function(req, res) {
  models.user_pokemon.create({
    userId: req.body.userId,
    pokemonId: req.body.pokemonId
  }).then(function(user_pokemon) {
    res.json(user_pokemon);
  });
});


module.exports = router;