// Configurando o Servidor

const express = require("express");
const server = express();


// Configurando Arquivos Extras Para Template engine

server.use(express.static("public"));


// Habilitar Corpo do Formulário

server.use(express.urlencoded({extended: true}));


// Configurando Conexão Com o Banco de Dados

const Pool = require("pg").Pool
const db = new Pool({
    user: "postgres",
    password: "0000",
    host: "localhost",
    port: 5432,
    database: "doe"
})


// Configurando Template Engine

const nunjucks = require("nunjucks");

nunjucks.configure("./", {
    express: server,
    noCache: true
});


// Configurando Apresentação da Página

server.get("/", (req, res) => {
    const buscaQuery = `
                        SELECT *
                        FROM doadores
                       `

    db.query(buscaQuery, (err, result) => {
        const doadores = result.rows;

        err ? res.send("Erro no banco de dados") : res.render("index.html", {doadores});
    });
});

server.post("/", (req, res) => {
    const nome = req.body.nome;
    const email = req.body.email;
    const sangue = req.body.sangue;

    if(nome == "" || email == "" || sangue == "") {
        return res.send("Todos os campos devem ser preenchidos");
    }

    const enviaQuery = `
                        INSERT INTO doadores ("nome", "email", "sangue")
                        VALUES ($1, $2, $3)
                       `;

    const values = [nome, email, sangue];

    db.query(enviaQuery, values, (err) => {
        err ? res.send("Erro no banco de dados") : res.redirect("./");
    });
});


//Iniciando Servidor

server.listen(3000, () => {
    console.log("iniciando servidor");
});