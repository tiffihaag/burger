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
	var columnNames = 'burger_name'; 
	var objColVals = req.body.newHamburger;
	burger.create(columnNames, objColVals, function() {
		res.redirect('/burgers');
		});  
	});

router.put('/burgers/devoured/:burger_name', function(req, res) {
	var condition = "burger_name = '" + req.params.burger_name + "' ";
	var objColVals = 'devoured = ' + req.body.devoured;

	burger.devoured(objColVals, condition, function() {
		res.redirect('/burgers');
	});
});

router.delete('/burgers/delete/:burger_name', function (req, res) {
	var condition = "burger_name = '" + req.params.burger_name + "' ";

	burger.delete(condition, function () {
		res.redirect('/burgers');
	});
});

module.exports = router;


//for if the user doesn't hit the right place
// app.use('/*', function(req,res){
//    res.send("<h1>Not hungry?</h1>");
// });


