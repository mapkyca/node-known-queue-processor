"use strict";

var mysql = require('mysql');

module.exports = class Known {

    constructor() {

    }

    getConfig() {

	var con = mysql.createConnection({
	    host: "localhost",
	    user: "yourusername",
	    password: "yourpassword"
	});

    }

}