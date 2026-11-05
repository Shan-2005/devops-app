const http = require('http');
const VERSION = 'v2';
const color = process.env.COLOR || 'grey';
const build = process.env.BUILD || '0';
http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.end(`<body style="background:${color};color:white;font-family:sans-serif;text-align:center;padding-top:100px"><h1>${color.toUpperCase()} environment</h1><h2>${VERSION} - build ${build}</h2></body>`);
}).listen(3000);
