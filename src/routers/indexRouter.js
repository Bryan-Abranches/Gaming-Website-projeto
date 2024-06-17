const express = require("express");
const IndexController = require("../controllers/IndexController");

const router = express.Router(); // Variavel que importa todos os metodos do express para trabalhar cpm rotas.

router.get(IndexController.showIndex);

module.exports = router;
