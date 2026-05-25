const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    fs.readFile('index.html', (err, data) => {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end('404 Not Found\n');
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        }
    });
}).listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});