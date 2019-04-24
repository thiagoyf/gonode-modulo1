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

app.get("/", (req, res) => {
  // primeiro parametro seria o nome do template sem a extensão
  return res.render("list", { name: "Thiago" });
});

app.listen(3000);
