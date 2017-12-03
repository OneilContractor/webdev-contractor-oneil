module.exports = function (app) {

  var multer = require('multer');
  var upload = multer({dest: __dirname + '/../../dist/assets/uploads'});

  app.post("/api/upload", upload.single('myFile'), uploadImage);
  app.get('/api/page/:pageId/widget', findAllWidgetsForPage);
  app.post('/api/page/:pageId/widget', createWidget);
  app.get('/api/widget/:widgetId', findWidgetById);
  app.delete('/api/widget/:widgetId', deleteWidget);
  app.put('/api/widget/:widgetId', updateWidget);
  app.put('/api/page/:pageId/widget', sortWidgets)


  function findAllWidgetsForPage(req, res) {
    var pageId = req.param('pageId');
    widgetModel
      .findAllWidgetsForPage(pageId)
      .then(function (widgets) {
        res.json(widgets);
      }, function (err) {
        res.status(500).send(err);
      });
  }

  function createWidget(req, res) {
    var pageId = req.param('pageId');
    var widget = req.body;
    widgetModel
      .createWidget(pageId, widget)
      .then(function (widget) {
        res.json(widget);
      }, function (err) {
        res.status(500).send(err);
      });
  }

  function deleteWidget(req, res) {
    var widgetId = req.param('widgetId');
    widgetModel
      .deleteWidget(widgetId)
      .then(function (resp) {
        res.sendStatus(200);
      }, function (err) {
        res.status(500).send(err);
      });
  }

  function updateWidget(req, res) {
    var widgetId = req.param('widgetId');
    var widget = req.body;
    widgetModel
      .updateWidget(widgetId, widget)
      .then(function (resp) {
        if (resp.ok === 1 && resp.n === 1) {
          res.json(resp);
        } else {
          res.sendStatus(404);
        }
      }, function (err) {
        res.status(500).send(err);
      });
  }

  function findWidgetById(req, res) {
    var widgetId = req.param('widgetId');
    widgetModel
      .findWidgetById(widgetId)
      .then(function (widget) {
        res.json(widget);
      }, function (err) {
        res.status(500).send(err);
      });
  }

  function sortWidgets(req, res) {
    var pageId = req.param('pageId');
    var startIndex = parseInt(req.query.initial);
    var endIndex = parseInt(req.query.final);
    widgetModel
      .reorderWidget(pageId, startIndex, endIndex)
      .then(function (resp) {
        res.json(resp);
      }, function (err) {
        res.status(500).send(err);
      });
  }

  function uploadImage(req, res) {
    var widgetId = req.body.widgetId;
    var width = req.body.width;
    var myFile = req.file;

    var userId = req.body.userId;
    var websiteId = req.body.websiteId;
    var pageId = req.body.pageId;

    var originalname = myFile.originalname; // file name on user's computer
    var filename = myFile.filename;     // new file name in upload folder
    var path = myFile.path;         // full path of uploaded file
    var destination = myFile.destination;  // folder where file is saved to
    var size = myFile.size;
    var mimetype = myFile.mimetype;

    widget = {
      'type': 'IMAGE',
      'width': width
    };
    widget.url = '/assets/uploads/' + filename;
    var callbackUrl = "/user/" + userId + "/website/" + websiteId + '/page/' + pageId + '/widget';

    if (widgetId === '') {
      widgetModel
        .createWidget(pageId, widget)
        .then(function (resp) {
          res.redirect(callbackUrl);
        }, function (err) {
          res.status(500).send(err);
        });

    } else {
      widgetModel
        .updateWidget(widgetId, widget)
        .then(function (resp) {
          if (resp.ok === 1 && resp.n === 1) {
            res.redirect(callbackUrl);
          } else {
            res.sendStatus(404);
          }
        }, function (err) {
          res.status(500).send(err);
        });
    }
  }
};
