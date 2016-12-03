// External dependencies
var request = require('request');

function loadDoc(p_url, callback) {
	var options = {
		url: p_url,
		port: 80,
		method: 'GET'
	};
	
	console.log("Using this url: " + p_url);
	request(options, function(error, response, body) {
		if (response && response.statusCode === 200) {
			console.log("Success requesting " + p_url);
			callback(body);
		}
		else {
			console.log("Error requesting " + p_url + " : " + error);
			console.log("Status code: " + response.statusCode);
		}
	});
}

module.exports = {
	loadDoc: loadDoc,
};
