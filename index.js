var express = require('express');
var fs = require('fs');
var https = require('https');
var app = express();

const puerto = 443;

https.createServer({
    cert: fs.readFileSync('mi_certificado.crt'),
    key: fs.readFileSync('mi_certificado.key')
}, app).listen(puerto, function () {
    console.log('Servidor http corriendo en el puerto ' + puerto);
});

app.get('/', function (req, res) {
    res.send('Hola, estas en la página de inicio');
    console.log('Se recibió una petición GET a la página de inicio');
});