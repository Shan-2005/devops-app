const http = require('http');
http.createServer((req, res) => {
  res.end('Hello from CI/CD pipeline! v1');
}).listen(3000);
