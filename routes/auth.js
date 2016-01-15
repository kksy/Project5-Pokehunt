var express = require('express');
var router = express.Router();

module.exports = function(passport){

	/* GET login and signup page. */
	router.get('/', function(req, res) {
    	// Display the Login page with any flash message, if any
		res.render('auth', { 
			message: req.flash('message'),
			title: 'test' 
		});
	});

	/* Handle Login POST */
	router.post('/', passport.authenticate('login', {
		successRedirect: '/game',
		failureRedirect: '/auth',
		failureFlash : true  
	}));

	/* GET Registration Page */
	// router.get('/signup', function(req, res){
	// 	res.render('register',{
	// 		message: req.flash('message'),
	// 		title: 'signup'
	// 	});
	// });

	/* Handle Registration POST */
	router.post('/signup', passport.authenticate('signup', {
		// successRedirect: '/game',
		successRedirect: '/game',
		failureRedirect: '/auth',
		failureFlash : true  
	}));

	/* Handle Logout */
	// router.get('/logout', function(req, res) {
	// 	req.logout();
	// 	res.redirect('/');
	// });

	return router;
}