// Configurando o Servidor

const express = require("express");
const server = express();


// Configurando Arquivos Extras Para Template engine

server.use(express.static("public"));


// Habilitar Corpo do Formulário

server.use(express.urlencoded({extended: true}));


// Configurando Template Engine

const nunjucks = require("nunjucks");

nunjucks.configure("./", {
    express: server,
    noCache: true
});


// Lista de Doadores

const doadores = [];


// Configurando Apresentação da Página

server.get("/", (req, res) => {
    return res.render("index.html", {doadores});
});

server.post("/", (req, res) => {
    const nome = req.body.nome;
    const email = req.body.email;
    const sangue = req.body.sangue;

    doadores.push({
        nome: nome,
        email: email,
        sangue: sangue
    });

    return res.redirect("./");
});


//Iniciando Servidor

server.listen(3000, () => {
    console.log("iniciando servidor");
});