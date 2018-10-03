"use strict";

var mysql = require('mysql');
var pjson = require('./package.json');

module.exports = class Known {

    constructor() {

    }

    getConfig(callback) {

	var con = mysql.createConnection({
	    host: pjson.db_host,
	    user: pjson.db_user,
	    password: pjson.db_pass,
	    database: pjson.db,
	});

	con.connect(function (err) {
	    if (err)
		throw err;
	    return con.query("SELECT * FROM config order by created desc limit 1", function (err, result, fields) {
		if (err)
		    throw err;
		
		var obj = JSON.parse(result[0].contents);
		
		callback(obj);
//		return JSON.parse(result[0].contents);
	    });
	});
	
    }

}