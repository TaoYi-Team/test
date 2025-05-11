import http from 'http';
import qs from 'querystring';

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Expose-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    console.log('OPTIONS');
    res.statusCode = 200;
    res.end();
    return;
  }

  if (req.method === 'GET') {
    res.statusCode = 200;
    res.end(JSON.stringify({
      a: 1,
      b: 3
    }))
  }
});

server.listen(1212);