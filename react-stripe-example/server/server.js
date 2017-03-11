const express =  require('express');
const session = require('express-session');
const passport =  require('passport');
const Auth0Strategy = require('passport-auth0');
const cors = require('cors');

const config = require('./config');

const app = express();

app.use(cors());
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
  return done(null, profile);
}));

app.get('/auth', passport.authenticate('auth0'));

app.get('/auth/callback', passport.authenticate('auth0', {
  successRedirect: 'http://localhost:8080/son',
  failureRedirect: '/auth/me'
}))

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

app.get('/auth/me', (req, res, next) => {
  if (!req.user) {
    return res.status(404).send('User not found')
  } else {
    return res.status(200).send(req.user)
  }
})
app.get('/isAuthed', (req,res) => {
  console.log('hitting endpoint');
  res.statusCode = 302;
  res.setHeader("Location", 'http://localhost:8080');
  res.end()
})



const port = 3333;
app.listen(port, () => {
  console.log('listening to: ', port);
})
