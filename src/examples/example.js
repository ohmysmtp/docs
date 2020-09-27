var request = require('request');

var headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'OhMySMTP-Server-Token': '6b6dbe32-012d-4fd4-8bd1-2276f6e1de8c'
};

var dataString = `{
    "from": "SOMEONE@google.com",
    "to": "SOMEONE@SOMEWHERE.com",
    "subject": "Hello from OhMySMTP.com",
    "textbody": "HTML Body is auto-generated"
  }`;

var options = {
    url: 'https://app.ohmysmtp.com/api/v1/send',
    method: 'POST',
    headers: headers,
    body: dataString
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
}

request(options, callback);
