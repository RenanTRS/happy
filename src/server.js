//Importar dependência
const express = require('express');
const path = require('path'); //Serve para identificar o sistema operacional e muda a posição da barra
const pages = require('./pages.js');

//Inicia o express
const server = express();

//Utilizando os arquivos estáticos
server.use(express.static('public'));

//Configura template engine
server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'hbs');

//Rotas da aplicação
server.get('/', pages.index);
server.get('/orphanages', pages.orphanages);
server.get('/orphanage', pages.orphanage);
server.get('/create-orphanage', pages.createOrphanage);

//Liga o servidor
server.listen(5500);