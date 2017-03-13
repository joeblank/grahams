const express = require('express')
    , session = require('express-session')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , config = require('./config')
    , passport = require('passport')
    , GitHubStrategy = require('passport-github2')
    , app = module.exports = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + './../public'));
app.use(session({
  secret: config.SECRET,
  saveUninitialized: false,
  resave: false
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new GitHubStrategy({
    clientID: config.GITHUB.CLIENT_ID,
    clientSecret: config.GITHUB.CLIENT_SECRET,
    callbackURL: config.GITHUB.CALLBACK_URL
  },
  (accessToken, refreshToken, profile, done) => {
    console.log('profile: ', profile);
    return done(null, profile);
  }
))

app.get('/login', passport.authenticate('github'));
app.get('/auth/callback', passport.authenticate('github', { failureRedirect: '/login'}),
  (req, res) => {
    res.redirect("/");
  }
)

passport.serializeUser((user, done) => {
  done(null, user);
})
passport.deserializeUser((user, done) => {
  done(err, user);
})








app.listen(config.PORT, () => {
  console.log('Listening on port: ', config.PORT);
})
