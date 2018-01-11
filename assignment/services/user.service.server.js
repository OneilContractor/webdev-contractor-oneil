module.exports = function(app){

  var userModel = require("../model/user/user.model.server");

  var passport = require('passport');
  var LocalStrategy = require('passport-local').Strategy;
  var FacebookStrategy = require('passport-facebook').Strategy;
  var bcrypt = require("bcrypt-nodejs");

  var facebookConfig = {
    clientID     : "343916582287743",
    clientSecret : "66d52973cc68fcbd679f45480160263d",
    callbackURL  : "https://webdev-contractor-oneil.herokuapp.com/auth/facebook/callback"
  };

  passport.serializeUser(serializeUser);
  passport.deserializeUser(deserializeUser);
  passport.use(new FacebookStrategy(facebookConfig, facebookStrategy));

  app.post("/api/user", createUser);
  app.get("/api/user", findUserByCredentials);
  app.get("/api/user/:userId", findUserById);
  app.put("/api/user/:userId", updateUser);
  app.delete("/api/user/:userId", deleteUser);
  app.post("/api/register", register);
  app.post('/api/login', passport.authenticate('local'), login);
  app.post('/api/logout', logout);
  app.post('/api/loggedin', loggedin);
  app.get('/auth/facebook', passport.authenticate('facebook', { scope : 'email' }));

  app.get('/auth/facebook/callback',
    passport.authenticate('facebook', {
      successRedirect: 'https://webdev-contractor-oneil.herokuapp.com/user',
      failureRedirect: 'https://webdev-contractor-oneil.herokuapp.com/login'
    }));

  function facebookStrategy(token, refreshToken, profile, done) {
    userModel
      .findUserByFacebookId(profile.id)
      .then(function (user) {
        if (user) {
          return done(null, user);
        } else {
          const user = {
            firstName: profile.name['givenName'],
            lastName: profile.name['familyName'],
            username: profile.username,
            facebook: {
              id: profile.id,
              token: token
            }
          }
          userModel.createUser(user)
            .then(function (user) {
              return done(null, user);
            })
        }
      })
  }

  function loggedin(req, res) {
    res.send(req.isAuthenticated() ? req.user : '0');
  }

  passport.use(new LocalStrategy(localStrategy));

  function logout(req, res) {
    req.logOut();
    res.send(200);
  }

  function login(req, res) {
    var user = req.user;
    res.json(user);
  }

  function register (req, res) {
    var user = req.body;
    user.password = bcrypt.hashSync(user.password);
    userModel
      .createUser(user)
      .then(
        function(newUser){
          if(newUser){
            req.login(newUser, function(err) {
              if(err) {
                res.status(400).send(err);
              } else {
                res.json(newUser);
              }
            });
          }
        }
      );
  }

  function localStrategy(username, password, done) {
    userModel
      .findUserbyUsername(username)
      .then(
        function(user) {
          if(user.username === username && bcrypt.compareSync(password, user.password)) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        },
        function(err) {
          if (err) { return done(err); }
        }
      );
  }

  function serializeUser(user, done) {
    done(null, user);
  }

  function deserializeUser(user, done) {
    userModel
      .findUserById(user._id)
      .then(
        function(user){
          done(null, user);
        },
        function(err){
          done(err, null);
        }
      );
  }

  function createUser(req, res) {
    userModel.createUser(req.body)
      .then(function(user) {
        res.json(user);
      });
  }

  function findUserById(req,res)
  {
    var userId = req.params["userId"];
    userModel.findUserById(userId)
      .then(function(user){
        res.json(user);
      });
  }

  function findUserByCredentials(req,res)
  {
    var username = req.query["username"];
    var password = req.query["password"];
    if(username && password)
    {
      var promise = userModel.findUserByCredentials(username, password);
      promise.then(function(user){
        res.json(user);
      });
    }
    else if(username)
    {
      userModel.findUserbyUsername(username)
        .then(function(user){
          res.json(user);
        });
      return;
    }
    return;
  }

  function updateUser(req,res)
  {
    var userId = req.params["userId"];
    userModel.updateUser(userId, req.body)
      .then(function (status) {
        return userModel.findUserById(userId);
      })
      .then(function (user){
        res.json(user);
      });
  }

  function deleteUser(req,res)
  {
    var userId = req.params["userId"];
    userModel.deleteUser(userId)
      .then(function (status) {
        res.json(status);
      })
  }
};
