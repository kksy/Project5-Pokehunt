var express = require('express');
var router = express.Router();

// include models
var models = require('../server/models/index');

// GET game page.
// router.get('/', function(req, res, next) {
//   res.render('game', { title: 'Express' });
// });

router.get('/', function(req, res) {
  models.pokemon.findAll({}).then(function(pokemons) {
    res.render('game', {
      title: 'Express',
      pokemons: pokemons
    });
  });
});

module.exports = router;