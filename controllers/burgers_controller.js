var express = require('express');
var router = express.Router();
var burger = require('../models/burger');

//Routes
// router.get('/', function(req, res) {
// 	burger.allBurgers(function(data) {
// 		res.render('index', { burgers : data });
// 	});
// });

router.get('/', function (req, res) {
	res.redirect('/burgers');
});

router.get('/burgers', function (req, res) {
	var cols = ['burger_name', 'devoured'];
	var vals = [req.body.burger, req.body.devoured];

	burger.saveBurger(cols, vals, function(result) {
		res.redirect('/');
	});
});

router.post('/burgers/create', function (req, res) {
	cat.create(['name', 'eaten'], [req.body.name, req.body.eaten], function () {
		res.redirect('/burgers');
	});
});

router.put('/burgers/update/:id', function (req, res) {
	var condition = 'burger_id = ' + req.params.id;

	console.log('condition', condition);

	var objColVals = { devoured : req.body.devoured };

	burger.devourBurger(objColVals, condition, function() {
		res.redirect('/');
	});
});

// 	burgers.update({ eaten: req.body.eaten }, condition, function () {
// 		res.redirect('/burgers');
// 	});
// });

router.delete('/burgers/delete/:id', function (req, res) {
	var condition = 'burger_id = ' + req.params.id;

	burgers.delete(condition, function () {
		res.redirect('/');
	});
});

module.exports = router;