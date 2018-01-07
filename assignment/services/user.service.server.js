module.exports = function(app){

  var userModel = require("../model/user/user.model.server");

  app.post("/api/user", createUser);
  app.get("/api/user", findUserByCredentials);
  app.get("/api/user/:userId", findUserById);
  app.put("/api/user/:userId", updateUser);
  app.delete("/api/user/:userId", deleteUser);

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
      console.log('inside user service find user by cred');
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
