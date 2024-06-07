const express = require("express");
const router = express.Router();
const {
  crearPaquete,
  obtenerPaquetes,
  actualizarPaquete,
  eliminarPaquete,
} = require("../controllers/paqueteController");

router.post("/", crearPaquete);
router.get("/", obtenerPaquetes);
router.put("/:id", actualizarPaquete);
router.delete("/:id", eliminarPaquete);

module.exports = router;
