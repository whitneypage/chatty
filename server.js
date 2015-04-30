	var messages = [];
	var now = new Date();
	var month = now.getMonth();
	var day = now.getDate()
	var hours = now.getHours();
	var minutes = now.getMinutes();

	var timeStamp = day + '/' + month + "   " +  hours + ':' + minutes;

	

	var onRequest = function(req, res) {
		if(req.method === 'GET') {
			res.writeHead(200, {
				'Connection': 'close',
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*'
			});

			res.end(JSON.stringify(messages));
		}

		if(req.method === 'POST') {
			res.writeHead(200, {
				'Connection': 'close',
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*'
			});
			var postData = '';
			req.on('data', function(chunk) {
				postData += chunk.toString();
			});
			req.on('end', function() {
				messages.push(JSON.parse(postData).text + "  " + timeStamp);
				res.end(JSON.stringify(messages));
			});

		}
		else if(req.method === 'OPTIONS') {
			res.writeHead(200, {
  				'Connection': 'close',
  				'Content-Type': 'application/json',
  				'Access-Control-Allow-Origin': '*',
  				'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
  				'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
			});
			res.end();
		}		

	} //ends onRequest


	var http = require('http');


	http.createServer(onRequest).listen(9000);