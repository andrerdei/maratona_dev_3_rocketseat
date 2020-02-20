// Configurando o Servidor

const express = require("express");
const server = express();


// Configurando Template Engine

const nunjucks = require("nunjucks");
nunjucks.configure("./", {
    express: server
});


// Configurando Arquivos Extras Para Template engine

server.use(express.static("public"));


// Configurando Apresentação da Página

server.get("/", (req, res) => {
    return res.render("index.html");
});


//Iniciando Servidor

server.listen(3000, () => {
    console.log("iniciando servidor");
});