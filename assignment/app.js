module.exports = function(app) {
  var db = require("./model/models.server");
  require("./services/user.service.server")(app);
  require("./services/website.service.server.js")(app);
  require("./services/page.service.server.js")(app);
  require("./services/widget.service.server.js")(app);
};
