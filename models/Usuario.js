const mongoose = require("mongoose");

const UsuarioSchema = new mongoose.Schema({
  nombre: String,
  email: String,
  rol: { type: String, default: "cliente" },
});

module.exports = mongoose.model("Usuario", UsuarioSchema);
