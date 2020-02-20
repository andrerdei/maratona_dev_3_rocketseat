// Configurando o Servidor

const express = require("express");
const server = express();


// Configurando Arquivos Extras Para Template engine

server.use(express.static("public"));


// Configurando Template Engine

const nunjucks = require("nunjucks");

nunjucks.configure("./", {
    express: server,
    noCache: true
});


// Lista de Doadores

const doadores = [
    {
        nome: "Diego Fernandes",
        sangue: "AB +"
    },
    {
        nome: "Cleiton souza",
        sangue: "B +"
    },
    {
        nome: "Robson Marques",
        sangue: "A -"
    },
    {
        nome: "André Erdei",
        sangue: "O +"
    }
];


// Configurando Apresentação da Página

server.get("/", (req, res) => {
    return res.render("index.html", {doadores});
});


//Iniciando Servidor

server.listen(3000, () => {
    console.log("iniciando servidor");
});