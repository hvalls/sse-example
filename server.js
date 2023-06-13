const http = require('http');

const server = http.createServer((req, res) => {

  // CORS config, allow everything (development only)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.url === '/sse') {
    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    });

    setInterval(() => {
      const eventData = { message: 'This is an event from the server' };
      res.write(`data: ${JSON.stringify(eventData)}\n\n`);
    }, 1000);
  } 
});

server.listen(3000, () => {
  console.log('SSE server started...');
});

