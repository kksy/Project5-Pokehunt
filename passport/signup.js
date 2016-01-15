var LocalStrategy   = require('passport-local').Strategy;
var User = require('../server/models/index').user;
var bCrypt = require('bcrypt-nodejs');

module.exports = function(passport){

	passport.use('signup', new LocalStrategy({
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, username, password, done) {

      findOrCreateUser = function(){
        // find a user in Postgres with provided username
        User.findOne({ 
          where: {
            username: username 
          }
        }).then(function(user) {
          // already exists
          if (user) {
            console.log('User already exists with username: '+username);
            return done(null, false, req.flash('message','User Already Exists'));
          } else {
            // if there is no user with that email
            // create the user
            var newUser = User.build({
              username: req.body.username,
              password: createHash(req.body.password),
            });

            // save the user
            newUser.save().then(function(user) {
              console.log('User Registration succesful');    
              return done(null, user.dataValues);
            }).catch(function(err) {
              if (err){
                console.log('Error in Saving user: '+err);  
                return done(null, false, req.flash('message', 'Error saving user'));
              }
            });
          }
        });
      };
      // Delay the execution of findOrCreateUser and execute the method
      // in the next tick of the event loop
      process.nextTick(findOrCreateUser);
    })
  );

  // Generates hash using bCrypt
  var createHash = function(password){
      return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
  }

}