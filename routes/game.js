var express = require('express');
var router = express.Router();

// include models
var models = require('../server/models/index');

// haven't managed to  output more than 1 image, so I used AJAX in js/game.js instead
// router.get('/', function(req, res) {
// 	models.user_pokemon.findAll({

// 		// find userId in the user_pokemon join table
// 		where: { userId: 1} 
// 	}).then(function(data) {
		
// 		data.forEach(function (data1) {
// 		var pokemonId = data1.dataValues.pokemonId;

// 	 	// find pokemon data
// 			models.pokemon.find({
// 				where: { id: pokemonId }

// 			}).then(function(data2) {
// 				var imagesArr = [];
// 				imagesArr.push(data2.dataValues.image);

// 			    res.render('game', {
// 			      title: 'PokéHunt',
// 			      images: imagesArr
// 			    });
				
// 			});
// 		});
// 	});

// });

router.get('/', function(req, res) {
    res.render('game', {
      title: 'PokéHunt',
    });
});

module.exports = router;