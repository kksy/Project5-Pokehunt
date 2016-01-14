var login = require('./login');
var signup = require('./signup');
var User = require('../server/models/index').user;

module.exports = function(passport){

	// Passport needs to be able to serialize and deserialize users to support persistent login sessions
  passport.serializeUser(function(user, done) {
    console.log('serializing user: ');console.log(user);
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    // User.findById(id, function(err, user) {
    //   console.log('deserializing user:',user);
    //   done(err, user);
    // });

    // The above was giving me errors, because Sequelize doesn't return a callback, but a promise instead, so the syntax should be:
    User.findById(id).then(function(user) {
      console.log('deserializing user:',user);
      done(null, user);
    }).catch(function(err) {
      // In case of any error, return using the done method
      if (err) {
        done(err);
      }
    });
  });

  // Setting up Passport Strategies for Login and SignUp/Registration
  login(passport);
  signup(passport);

}