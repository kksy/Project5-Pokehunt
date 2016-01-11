# Login with Passport (Local Strategy)

## Setup

Install the following dependencies and save to `package.json`:

```
$ npm install passport --save
$ npm install passport-local --save
$ npm install express-session --save
```

Require the above, and configure the middlewares in `app.js`:

```javascript
// Configuring Passport
var passport = require('passport');
var expressSession = require('express-session');
var localStrategy = require('passport-local').Strategy;
app.use(expressSession({secret: 'mySecretKey'}));
app.use(passport.initialize());
app.use(passport.session());
```

## Configure Startegies

## References

This tutorial is heavily referenced from the following sources:
+ http://code.tutsplus.com/tutorials/authenticating-nodejs-applications-with-passport--cms-21619
+ http://danialk.github.io/blog/2013/02/23/authentication-using-passportjs/
+ https://github.com/passport/express-4.x-local-example