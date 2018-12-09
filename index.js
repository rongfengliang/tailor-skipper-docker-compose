'use strict';
const http = require('http');
const Tailor = require('node-tailor');
const tailor = new Tailor({
    templatesPath: './templates'
});

// Root Server
http
    .createServer((req, res) => {
        tailor.requestHandler(req, res);
    })
    .listen(8080, function() {
        console.log('Tailor server listening on port 8080');
    });
