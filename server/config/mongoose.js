let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tasks');
mongoose.Promise = global.Promise;
let fs = require('fs');
let path = require('path');

let models_path = path.join(__dirname,'../models');
fs.readdirSync(models_path).forEach(function(file) {
    if(file.indexOf('.js') >= 0) {
      // require the file (this runs the model file which registers the schema)
      require(models_path + '/' + file);
    }
  });