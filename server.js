var express = require('express');
var app = express();
let path = require('path'); 


var bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
// app.use(express.static(path.join('../Angular/dist' )));
app.use(express.static(path.join('./client/dist' )));

 
require('./server/config/mongoose.js');

var routes_setter = require('./server/config/routes.js');
routes_setter(app);

app.listen(6789,function(){
    console.log('listening on port 6789');
})