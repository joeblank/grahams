const express =  require('express');
const session = require('express-session');
const passport =  require('passport');
const Auth0Strategy = require('passport-auth0');
const config = require('./config');

const app = express();
app.use(express.static(__dirname + '/public'))
app.use(session({
  secret: config.secret
}));
app.use(passport.initialize());
app.use(passport.session());


passport.use(new Auth0Strategy({
  domain: config.auth0.domain,
  clientID: config.auth0.clientID,
  clientSecret: config.auth0.clientSecret,
  callbackURL: config.auth0.callbackURL
}, function(accessToken, refreshToken, extraParams, profile, done) {
  console.log('profile', profile);
  return done(null, profile);
}));

app.get('/auth', passport.authenticate('auth0'));

app.get('/auth/callback', passport.authenticate('auth0', {
  successRedirect: '/#!/private',
  failureRedirect: '/auth'
}))

passport.serializeUser(function(user, done) {
  console.log('serail', user);
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  console.log('obj', obj);
  done(null, obj);
});

app.get('/user/authed', (req, res, next) => {
  console.log(req.session);
  if (!req.user) {
    return res.status(404).send('User not found')
  } else {
    return res.status(200).send(req.user)
  }
})



const port = 3333;
app.listen(port, () => {
  console.log('listening to: ', port);
})
