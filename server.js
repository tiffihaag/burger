//server.js
var express 		 		= require('express');
var bodyParser 			= require('body-parser');
var methodOverride 	= require('method-override')
var app 						= express(); 

// override with the X-HTTP-Method-Override header in the request 
app.use(methodOverride('X-HTTP-Method-Override'))

//Express
var app = express();
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({
  extended: false
}));

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

//handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home');
});
 
app.listen(3000);

//--------
//root get route
//controllerjs
var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

var port = 3000;
app.listen(port);

//get query
app.get('/', function(req,res) {

  connection.query('SELECT * FROM burgers;', function(err, data) {
    if (err) throw err;

    //test it
    console.log(data);
    res.send(data);

    res.render('index', {burgers : data});
  });
});

//post route -> back to home
app.post('/create', function(req, res) {

  //test it
  console.log('You sent, ' + req.body.event);

  connection.query('INSERT INTO burgers (burger) VALUES (?)', [req.body.event], function(err, result) {
    if (err) throw err;

    res.redirect('/');
  });
});

//for if the user doesn't hit the right place
app.use('/*', function(req,res){
   res.send("<h1>Not hungry?</h1>");
});

var PORT = process.env.PORT || 3000;
app.listen(PORT);

//orm
//var orm = require('./config/orm.js');

// orm.selectWhere('//////', '//////', '///////', function (err, res) {
//   if (err) throw error;
//   var data = res;
//   console.log(data);
// });
