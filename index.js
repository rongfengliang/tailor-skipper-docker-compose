'use strict';
const http = require('http');
const Tailor = require('node-tailor');
const fetchTemplate = require('node-tailor/lib/fetch-template');

const path = require("path")
const baseTemplateFn = () => 'base-template';
const tailor = new Tailor({
   // templatesPath: './templates',
    fetchTemplate: fetchTemplate(
        path.join(__dirname, 'templates'),
        baseTemplateFn
    )
});

// Root Server
http
    .createServer((req, res) => {
        req.headers['x-request-uri'] = req.url
        req.url = '/index'
        tailor.requestHandler(req, res);
    })
    .listen(8080, function() {
        console.log('Tailor server listening on port 8080');
    });
