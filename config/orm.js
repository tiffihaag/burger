// In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

// selectAll()
// insertOne()
// updateOne()
// Export the ORM object in module.exports.

var connection = require('../config/connection.js');

// function objToSql(ob) {
// 	// column1=value, column2=value2,...
// 	var arr = [];

// 	for (var key in ob) {
// 		if (ob.hasOwnProperty(key)) {
// 			arr.push(key + '=' + ob[key]);
// 		}
// 	}

// 	return arr.toString();
// }

var orm = {
	all: function (tableInput, cb) {
		var queryString = 'SELECT * FROM ' + tableInput + ';';
		connection.query(queryString, function (err, result) {
			if (err) throw err;
			cb(result);
		});
	},

	devoured: function (table, cols, vals, cb) {
		var queryString = "SELECT * FROM burgers WHERE devoured = '1';";
		connection.query(queryString, function (err, result) {
			if (err) throw err;
			cb(result);
		});
	},
		
	create: function (table, cols, vals, cb) {
		var queryString = 'INSERT INTO ' + table;

		queryString = queryString + "(";
		queryString = queryString + cols;
		queryString = queryString + ") VALUES ('";
		queryString = queryString + vals;
		queryString = queryString + "')";

		console.log(queryString);
		connection.query(queryString, function (err, result) {
			if (err) throw err;
			cb(result);
		});
	},
	
	update: function (table, objColVals, condition, cb) {
		var queryString = 'UPDATE ' + table;

		queryString = queryString + ' SET ';
		queryString = queryString + objColVals.toString();
		queryString = queryString + ' WHERE ';
		queryString = queryString + condition;

		console.log(queryString);
		connection.query(queryString, function (err, result) {
			if (err) throw err;
			cb(result);
		});
	},

	// create: function (table, cols, vals, cb) {
	// 	var queryString = 'INSERT INTO ' + table;

	// 	queryString = queryString + "(";
	// 	queryString = queryString + cols;
	// 	queryString = queryString + ") VALUES ('";
	// 	queryString = queryString + vals;
	// 	queryString = queryString + "')";

	// 	console.log(queryString);
	// 	connection.query(queryString, function (err, result) {
	// 		if (err) throw err;
	// 		cb(result);
	// 	});
	// },

	delete: function (table, condition, cb) {
		var queryString = 'DELETE FROM ' + table;
		queryString = queryString + ' WHERE ';
		queryString = queryString + condition;

		connection.query(queryString, function (err, result) {
			if (err) throw err;
			cb(result);
		});
	}
};

module.exports = orm;