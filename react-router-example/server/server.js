const express =  require('express');
const session = require('express-session');
const passport =  require('passport');
const Auth0Strategy = require('passport-auth0');
const config = require('./config');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(session({
  secret: config.SECRET,
  cookie: {
    secure: false,
    httpOnly: false
  }
}));

app.use(bodyParser.json())
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());
app.use((req,res,next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, X-AUTHENTICATION, X-IP, Content-Type, Accept')
  res.header('Access-Control-Allow-Credentials', true)
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  next()
})

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
  successRedirect: 'http://localhost:8080/private',
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
    return res.status(201).send('User not found')
  } else {
    return res.status(200).send(req.user)
  }
})



app.listen(config.PORT, () => {
  console.log('listening to: ', config.PORT);
})
