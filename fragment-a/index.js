const http = require('http');
http
    .createServer((req, res) => {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.end(`<div>Fragment 1</div>`);
    })
    .listen(8081, function() {
        console.log('Fragment Server listening on port 8081');
    });
