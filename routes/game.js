var express = require('express');
var router = express.Router();

// include models
var models = require('../server/models/index');

// router.get('/', function(req, res) {
//   models.pokemon.findAll({ 
//   	include: [{
//   		model: models.user, 
//   		where: { userId: 1 }
//   	}] 
//   }).then(function(pokemons) {
//     res.render('game', {
//       title: 'Express',
//       pokemons: pokemons
//     });
//   });
// });

router.get('/', function(req, res) {
    res.render('game', {
      title: 'PokeHunt',
    });
});

module.exports = router;