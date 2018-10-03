"use strict"; // Use ES6

const request = require('request');


console.log("Node.js Event Queue Service");
console.log("Conecting to http://" + process.env.KNOWN_DOMAIN);

var Service = require("./Service.js");
var ServiceCaller = new Service();

// Main loop
setInterval(() => {
    
    var listquery = {
	url: 'http://' + process.env.KNOWN_DOMAIN + '/service/queue/list/',
	method: 'GET',
	json: true,
    };
    
    ServiceCaller.call(listquery, function(call, hash) {
	
	call.headers = {
	    'X-KNOWN-SERVICE-SIGNATURE': hash
	}
	
	request(call, (err, res, body) => {
	    if (err) { 
		return console.error(err); 
	    }
	    if (('' + res.statusCode).match(/^5\d\d$/)) {
		console.error("EXCEPTION: " + body.exception.message);
		return;
	    }
	    console.log(body);
	}); 
    });
    
}, 1000);