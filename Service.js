"use strict";


var Known = require("./Known.js");

module.exports = class Service {
        
    constructor() {
	this.known = new Known();
    }
        
    generateToken(endpoint) {
	
	endpoint = endpoint.replace('https://', '');
	endpoint = endpoint.replace('http://', '');
	
	var config = this.known.getConfig();
	
    }
    
};