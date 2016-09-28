//server.js

var express 		= require('express');
var bodyParser 		= require('body-parser');
var connect     	= require('connect')
var methodOverride 	= require('method-override')
var exphbs  		= require('express-handlebars');
var app 			= express(); 

// override with the X-HTTP-Method-Override header in the request 
app.use(methodOverride('X-HTTP-Method-Override'))

//Express
var app = express();
//Serve static content for the app from the "public" directory 
app.use(express.static(__dirname + '/public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

//handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home');
});
 
app.listen(3000);

//--------
//root get route
app.get('/', function(req,res) {

  connection.query('SELECT * FROM burgers;', function(err, data) {
    if (err) throw err;

    //console.log(data);

    //test it
    //res.send(data);

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

//--------

app.use('/*', function(req,res){
   res.send("<h1>Not hungry?</h1>");
});

var PORT = process.env.PORT || 3000;
app.listen(PORT);