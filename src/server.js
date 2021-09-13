//Importar dependência
const express = require('express');
const path = require('path'); //Serve para identificar o sistema operacional e muda a posição da barra

//Inicia o express
const server = express();

//Utilizando os arquivos estáticos
server.use(express.static('public'));

//Configura template engine
server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'hbs');

//Cria uma rota
server.get('/', (req, res)=>{

    return res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

//Liga o servidor
server.listen(5500);