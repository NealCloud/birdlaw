/**
 * Created by Mad Martigan on 6/20/2016.
 */
const http = require('http');

const hostname = '50.112.52.56';
const port = 80;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
res.setHeader('Content-Type', 'text/plain');
res.end('Hello World\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});