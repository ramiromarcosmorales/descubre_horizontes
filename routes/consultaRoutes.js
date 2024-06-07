const express = require("express");
const router = express.Router();
const { crearConsulta } = require("../controllers/consultaController");

router.post("/", crearConsulta);

module.exports = router;
