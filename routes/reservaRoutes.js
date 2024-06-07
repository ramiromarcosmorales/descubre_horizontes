const express = require("express");
const router = express.Router();
const {
  crearReserva,
  obtenerReserva,
  actualizarReserva,
} = require("../controllers/reservaController");

router.post("/", crearReserva);
router.get("/:numero_reserva", obtenerReserva);
router.put("/:numero_reserva", actualizarReserva);

module.exports = router;
