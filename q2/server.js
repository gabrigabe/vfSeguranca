const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('localhost-key.pem'),
  cert: fs.readFileSync('localhost.pem')
};

https.createServer(options, function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var file = fs.createReadStream('index.html');
    file.pipe(res);
}).listen(3000);

console.log('server rodando')