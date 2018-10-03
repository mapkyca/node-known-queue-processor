"use strict";


var Known = require("./Known.js");

const crypto = require('crypto');


module.exports = class Service {
        
    constructor() {
	this.known = new Known();
    }
        
    call(endpoint, callback) {
	
	var url = endpoint.url.replace('https://', '');
	url = url.replace('http://', '');
	
	this.known.getConfig(function(config) {
	    var hmac = crypto.createHmac('sha256', config.site_secret);
	    hmac.update(url);
	    	    
	    callback(endpoint, hmac.digest('hex'));
	});
    }
    
};