exports.render = function (req, res) {
	var request = require('request');

	var options = {
		url: 'https://api.github.com/users/pichaya/followers',
		headers: {
			'User-Agent': 'request'
		}
	};

	function callback(error, response, body) {
		if (!error && response.statusCode == 200) {
			var info = JSON.parse(body);
			
			var avatar = info[0].avatar_url;
			var login = info[0].login;
			var url = info[0].html_url;

			var avatar1 = info[1].avatar_url;
			var login1 = info[1].login;
			var url1 = info[1].html_url;

			var avatar2 = info[2].avatar_url;
			var login2 = info[2].login;
			var	url2 = info[2].html_url;


			res.render('index', {
				avatar: avatar,
				login: login,
				url: url,
				avatar1: avatar1,
				login1:login1,
				url1: url1,
				avatar2: avatar2,
				login2: login2,
				url2: url2
			})
		}
	}

	request(options, callback);


};