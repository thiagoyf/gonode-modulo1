const express = require("express");
const nunjucks = require("nunjucks");

// Nunjucks é uma template engine, ou seja é uma forma de renderizar HTML com
// conteúdo também em javascript
const app = express();

// https://github.com/mozilla/nunjucks
nunjucks.configure("views", {
  // para manipular o nome dos arquivos
  autoescape: true,
  // variavel que vai receber nosso servidor express
  express: app,
  // como fosse nodemon nunjucks
  watch: true
});

// Setar configurações globais
app.set("view engine", "njk");

const users = ["Diego Fernandes", "Robson Marques", "Cleison Souza"];

app.get("/", (req, res) => {
  // primeiro parametro seria o nome do template sem a extensão
  // o segundo seria o nome da variável que está passando para o template
  return res.render("list", { users });
});

app.get("/new", (req, res) => {
  return res.render("new");
});

app.listen(3000);
