const mongoose = require("mongoose");

const PasajeroSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  dni: { type: String, required: true },
  nacionalidad: { type: String, required: true },
  fechaNacimiento: { type: Date, required: true },
});

const ReservaSchema = new mongoose.Schema({
  numero_reserva: { type: String, unique: true, required: true },
  titular: {
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    email: { type: String, required: true },
  },
  habitaciones: { type: Number, required: true },
  pasajeros: [PasajeroSchema],
  estado: { type: String, default: "pendiente" },
  fecha_reserva: { type: Date, default: Date.now },
});

module.exports =
  mongoose.models.Reserva || mongoose.model("Reserva", ReservaSchema);
