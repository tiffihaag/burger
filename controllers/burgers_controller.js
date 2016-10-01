var express = require('express');
var router = express.Router();
var burger = require('../models/burgers.js');

//Routes
router.get('/', function (req, res) {
	res.redirect('/burgers');
});

router.get('/burgers', function(req, res) {
	burger.all(function(data) {
		res.render('index', { burgers : data });
	});
});

router.post('/burgers/create', function (req, res) {
	burger.create(['burger_name', 'devoured'], [req.body.burger_name, req.body.devoured], function () {
		res.redirect('/burgers');
	});
});

router.put('/burgers/update/:id', function (req, res) {
	var condition = 'id = ' + req.params.id;

	console.log('condition', condition);

	burger.update({ devoured: req.body.devoured }, condition, function () {
		res.redirect('/burgers');
	});
});

router.delete('/burgers/delete/:id', function (req, res) {
	var condition = 'burger_id = ' + req.params.id;

	burgers.delete(condition, function () {
		res.redirect('/');
	});
});

module.exports = router;


//get query
// app.get('/index', function(req,res) {

//   connection.query('SELECT * FROM burgers;', function(err, data) {
//     if (err) throw err;

//     //test it
//     console.log(data);
//     res.send(data);

//     res.render('index', {burgers : data});
//   });
// });

// //post route -> back to home
// app.post('/create', function(req, res) {

//   //test it
//   console.log('You sent, ' + req.body.event);

//   connection.query('INSERT INTO burgers (burger) VALUES (?)', [req.body.event], function(err, result) {
//     if (err) throw err;

//     //res.redirect('/');
//   });
// });

//for if the user doesn't hit the right place
// app.use('/*', function(req,res){
//    res.send("<h1>Not hungry?</h1>");
// });


