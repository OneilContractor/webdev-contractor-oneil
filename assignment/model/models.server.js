var mongoose = require('mongoose');
var connectionString = 'mongodb://localhost/cs5610'; // for local
if(process.env.MLAB_USERNAME_WEBDEV) { // check if running remotely
  var username = process.env.MLAB_USERNAME_WEBDEV; // get from environment
  var password = process.env.MLAB_PASSWORD_WEBDEV;
  connectionString = 'mongodb://' + username + ':' + password;
  connectionString += '@ds121674.mlab.com:21674/heroku_flvh3vzz'; // use yours
}

var db = mongoose.connect(connectionString, {useMongoClient: true });

module.exports = db;
