const express = require("express");
const router = express.Router();
const { crearConsulta } = require("../controllers/consulta");

router.post("/", crearConsulta);

module.exports = router;
