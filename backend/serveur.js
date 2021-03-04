const http = require('http');

const server = http.createServer((req, res) => {
    res.end('le backend est  ready');
});

server.listen(process.env.PORT || 3000);