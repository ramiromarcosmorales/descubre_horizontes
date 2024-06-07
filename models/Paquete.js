const mongoose = require("mongoose");

const PaqueteSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String, required: true },
  precio: { type: Number, required: true },
  imagen_url: { type: String, required: true },
});

module.exports =
  mongoose.models.Paquete || mongoose.model("Paquete", PaqueteSchema);
