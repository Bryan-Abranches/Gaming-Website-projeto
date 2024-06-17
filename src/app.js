/* Importações */
const express = require("express");
const path = require("path");
const methodOverride = require("method-override");

/* Importação de Rotas */

const indexRouter = require("./routers/indexRouter");

/* Variaveis */
const app = express(); // Variavel que contem todos os metodos dos express
const port = 6764;

/* Configuração do servidor */

app.set("view engine", "ejs"); //Configurar o servidor para trabalhar com o template engine ejs

app.set("views", path.resolve("src", "views")); //Informar ao servidor aonde está a nossa pasta de views

app.use(express.static(path.resolve("src", "public"))); //Informar ao servidor a pasta de arquivos estáticos (public)

app.use(express.urlencoded({ extended: false })); // middleware utilizado para tratamento do req.body

app.use(methodOverride("_method")); // Serve para sobrescrever o method padrao das requisições do navegador (GET)

app.use(express.json()); //Configurar o servidor para que todas as reqisições seja em JSON

// ROTAS ---->

app.use(indexRouter);

/* Servidor*/

app.listen(port, () => {
  console.log(`http//localhost:${port}`);
});
