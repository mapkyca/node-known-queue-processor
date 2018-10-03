"use strict";

var mysql = require('mysql');

module.exports = class Known {

    constructor() {

    }

    getConfig() {

	var con = mysql.createConnection({
	    host: "withknown",
	    user: "known",
	    password: "12345",
	    database: 'known',
	});

	con.connect(function (err) {
	    if (err)
		throw err;
	    con.query("SELECT * FROM config order by created desc limit 1", function (err, result, fields) {
		if (err)
		    throw err;
		
		return JSON.parse(result[0].contents);
	    });
	});
    }

}