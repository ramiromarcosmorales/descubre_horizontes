const Reserva = require("../models/Reserva");
const { v4: uuidv4 } = require("uuid");

const generarNumeroReserva = () => {
  return uuidv4().slice(0, 8).toUpperCase();
};

exports.crearReserva = async (req, res) => {
  const { titular, habitaciones, pasajeros } = req.body;
  const numero_reserva = generarNumeroReserva();

  try {
    const nuevaReserva = new Reserva({
      numero_reserva,
      titular,
      habitaciones,
      pasajeros,
    });
    await nuevaReserva.save();

    res
      .status(201)
      .json({ msg: "Reservation created successfully:", numero_reserva });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

exports.obtenerReserva = async (req, res) => {
  try {
    const reserva = await Reserva.findOne({
      numero_reserva: req.params.numero_reserva,
    });
    if (!reserva) {
      return res.satus(404).json({ msg: "Reservation not found" });
    }
    res.json(reserva);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

exports.actualizarReserva = async (req, res) => {
  try {
    const reserva = await Reserva.findOneAndUpdate(
      { numero_reserva: req.params.numero_reserva },
      req.body,
      { new: true }
    );
    if (!reserva) {
      return res.status(404).json({ msg: "Reservation not found" });
    }
    res.json(reserva);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};
