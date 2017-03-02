UserViewer
==============

A mini-project to practice Passport/Node.js

##Objectives
Create a simple app that shows Auth0 Profile information.

You can use the [passport-auth0](https://github.com/auth0/passport-auth0) GitHub repo for a guide.

##Step 1: Set up passport, passport-auth0, express
Set up a server.js file and include these npm dependencies:
* express
* express-session
* passport
* passport-auth0

Go over to the [Auth0 Dashboard](https://manage.auth0.com/#/) and Add a New App (aka Client). Call it whatever you'd like.

Now let's put in the code necessary to get our authentication working:
* Create your express app, have it listen to a port that works for you
* Require passport and the passport Auth0Strategy
* Include the session middleware

`app.use(session({secret: 'some-random-string'}))`

* Include the passport.initialize middleware

`app.use(passport.initialize())`

* Include the passport.session middleware

`app.use(passport.session())`

* Define the FacebookStrategy

```javascript
passport.use(new Auth0Strategy({
  domain: '<your_auth0_domain>',
  clientID: '<your_client_id>',
  clientSecret: '<your_client_secret>',
  callbackURL: 'http://localhost:3000/auth/callback'
}, function(accessToken, refreshToken, extraParams, profile, done) {
  return done(null, profile);
}));
```

##Step 2: Define your auth endpoints
Create two routes that will handle your Auth0 auth.

####GET /auth
This route simply implements the passport.authenticate method, passing 'auth0' as the parameter.

####GET /auth/callback
This route needs to pass the passport.authenticate method again, except we also need to pass in an object that passes the successRedirect and failureRedirect paths.

##Step 3: Create the deserialize/serializer methods on passport.
Since you won't be doing anything further than just passing objects to/from passport and the session, we just need bare bones methods here:

```
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});
```

###Step 4: Create viewer endpoint
Now we're going to create an endpoint that returns the current logged in user's auth profile data.

####GET /me
Create this route in your server.js that returns the user's auth profile data. The data is stored in `req.user` if you've set everything up correctly. Return a JSON representation of this data at the `/me` endpoint.

Use the browser to verify that you can in fact get the JSON data from the `/me` endpoint.



## Copyright

© DevMountain LLC, 2016. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.
