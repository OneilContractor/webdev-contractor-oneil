module.exports = function(app){
  var websiteModel = require("../model/website/website.model.server");

  app.get("/api/user/:userId/website", findWebsitesByUser);
  app.get("/api/website/:webId", findWebsiteById);
  app.put("/api/website/:webId", updateWebsite);
  app.post('/api/user/:userId/website', createWebsite);
  app.delete('/api/website/:webId', deleteWebsite);

  function createWebsite(req, res) {
    var website = req.body;
    var userId = req.params['userId'];
    websiteModel.createWebsiteForUser(userId, website)
      .then(function (website) {
        res.json(website);
      });
  }

  function findWebsitesByUser(req,res)
  {
    var userId = req.params['userId'];
    websiteModel.findAllWebsitesForUser(userId)
      .then(function (websites) {
        res.json(websites);
      });
  }

  function findWebsiteById(req,res)
  {
    var wId = req.params["webId"];
    websiteModel.findWebsiteById(wId)
      .then(function (website) {
        res.json(website);
      });
  }

  function updateWebsite(req,res)
  {
    var wId = req.params["webId"];
    var userId = req.params['userId'];
    var website = req.body;
    websiteModel.updateWebsite(wId, website)
      .then(function (status) {
        res.json(status);
      });
  }

  function deleteWebsite(req, res) {
    var websiteId = req.params['webId'];
    websiteModel.deleteWebsite(websiteId)
      .then(function (status) {
        res.json(status);
      });
  }
}



