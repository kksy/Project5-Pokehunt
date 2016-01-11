var express = require('express');
var router = express.Router();

// include models
var models = require('../server/models/index');

// module.exports = function(passport){

var isAuthenticated = function (req, res, next) {
	// if user is authenticated in the session, call the next() to call the next request handler 
	// Passport adds this method to request object. A middleware is allowed to add properties to
	// request and response objects
	if (req.isAuthenticated())
		return next();
	// if the user is not authenticated then redirect him to the login page
	res.redirect('/test');
}

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

// router.get('/', require('connect-ensure-login').ensureLoggedIn('/test'), function(req, res) {
router.get('/', isAuthenticated, function(req, res) {
    res.render('game', {
      title: 'PokéHunt',
      API_KEY: process.env.GOOGLE_API_KEY,
      user: req.user
    });
});
	
module.exports = router;
// return router;
// }