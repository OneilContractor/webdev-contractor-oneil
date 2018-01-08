module.exports = function (app) {

  var multer = require('multer'); // npm install multer --save
  var upload = multer({ dest: __dirname+ '/../../src/assets/uploads' });

  var WidgetModel = require('../model/widget/widget.model.server');

  app.post ("/api/upload", upload.single('myFile'), uploadImage);
  app.get('/api/page/:pageId/widget', findWidgetsByPageId);
  app.post('/api/page/:pageId/widget', createWidget);
  app.get('/api/widget/:widgetId', findWidgetById);
  app.delete('/api/widget/:widgetId', deleteWidget);
  app.put('/api/widget/:widgetId', updateWidget);

  function uploadImage(req, res) {

    var widgetId      = req.body.widgetId;
    var width         = req.body.width;
    var myFile        = req.file;

    var userId = req.body.userId;
    var websiteId = req.body.websiteId;
    var pageId = req.body.pageId;

    var originalname  = myFile.originalname; // file name on user's computer
    var filename      = myFile.filename;     // new file name in upload folder
    var path          = myFile.path;         // full path of uploaded file
    var destination   = myFile.destination;  // folder where file is saved to
    var size          = myFile.size;
    var mimetype      = myFile.mimetype;

    var newWidget = {
      url: '/assets/uploads/'+filename,
      width: width
    }

    WidgetModel.updateWidget(widgetId, newWidget)
      .then(function (status) {
        res.json(status);
      });

    var callbackUrl   = "/assignment/#/user/"+userId+"/website/"+websiteId+ '/page' + pageId + '/widget';

    res.redirect(callbackUrl);
  }

  function createWidget(req,res)
  {
    var pageId = req.params['pageId'];
    var widget = req.body;
    WidgetModel.createWidget(pageId, widget)
      .then(function (widget) {
        res.json(widget);
      })
  }

  function findWidgetsByPageId(req,res)
  {
    var pageId = req.params['pageId'];
    WidgetModel.findWidgetsByPageId(pageId)
      .then(function (widgets) {
        res.json(widgets);
      })
  }

  function findWidgetById(req,res)
  {
    var widgetId = req.params['widgetId'];
    WidgetModel.findWidgetById(widgetId)
      .then(function (widget) {
        res.json(widget);
      })
  }

  function updateWidget(req,res)
  {
    var widgetId = req.params['widgetId'];
    var widget = req.body;
    WidgetModel.updateWidget(widgetId, widget)
      .then(function (status) {
        return WidgetModel.findWidgetsByPageId(widget.pageId);
      })
      .then(function (widgets){
          res.json(widgets);
          return;
        }
      );
  }
  function deleteWidget(req,res)
  {
    var widgetId = req.params['widgetId'];
    WidgetModel.deleteWidget(widgetId)
      .then(function (status) {
        res.json(status);
      })
  }
};
