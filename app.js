const http = require('http');
http.createServer((req, res) => {
  res.end('Hello from CI/CD pipeline! v2');
}).listen(3000);
