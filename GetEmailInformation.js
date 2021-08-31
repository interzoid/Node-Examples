// Get API key at www.interzoid.com/register
// npm install request --save (if necessary to install request module)

const request = require('request');

const options = {
  method: 'GET',
  url: 'https://api.interzoid.com/getemailinfo',
  qs: {email: 'winston.smith@maths.ox.ac.uk'},
  headers: {
    'content-type': 'application/json',
    'x-api-key': 'YOURAPIKEY',
    useQueryString: true
  }
};

request(options, function (error, response, body) {
	if (error) throw new Error(error);

	console.log(body);
});
