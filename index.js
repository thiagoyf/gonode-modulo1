const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.send(`Bem-Vindo`);
});

app.listen(3000);
