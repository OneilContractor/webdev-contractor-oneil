module.exports = function(app) {

  var PageModel = require('../model/page/page.model.server');

  app.get("/api/website/:webId/page", findPagesByWebsiteId);
  app.get("/api/page/:pageId", findPageById);
  app.post("/api/website/:webId/page", createPage);
  app.put("/api/page/:pageId", updatePage);
  app.delete("/api/page/:pageId", deletePage);

  function createPage(req, res) {
    var page = req.body;
    PageModel.createPage(page.websiteId, page)
      .then(function (page) {
        res.json(page);
      })
  }
  function findPagesByWebsiteId(req,res)
  {
    var webId = req.params["webId"];
    PageModel.findPagesByWebsiteId(webId)
      .then(function (pages) {
        res.json(pages);
      })
  }

  function findPageById(req,res)
  {
    var pageId = req.params["pageId"];
    PageModel.findPageById(pageId)
      .then(function (page) {
        res.json(page);
      })

  }

  function updatePage(req,res)
  {
    var pageId = req.params['pageId'];
    PageModel.updatePage(pageId, req.body)
      .then(function (status) {
        res.json(status);
      });
  }

  function deletePage(req, res) {
    var pageId = req.params['pageId'];
    PageModel.deletePage(pageId)
      .then(function (status) {
        res.json(status);
      });
  }
}

