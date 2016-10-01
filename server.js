//server.js

//Express
var express 		 		= require('express');
var app             = express(); 
app.use(express.static(process.cwd() + '/public'));

//handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

//bodyparser
var bodyParser 			= require('body-parser');
app.use(bodyParser.urlencoded({
  extended: false
}));

//I think I need this...
var path            = require('path');

//MethodOverride
var methodOverride  = require('method-override')
app.use(methodOverride('_method'));
app.use(methodOverride('X-HTTP-Method-Override'));

//controllerjs
var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

var PORT = process.env.PORT || 3003;
app.listen(PORT);

//Does this take me straight to the home page?
app.get('/', function (req, res) {
    app.render('index');
});


