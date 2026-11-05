const http = require('http');
const patients = [
  { id: 1, name: 'Test Patient A', condition: 'Hypertension' },
  { id: 2, name: 'Test Patient B', condition: 'Diabetes' }
];
http.createServer((req, res) => {
  if (req.url === '/health') { res.end('OK'); return; }
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(patients));
}).listen(3000);
