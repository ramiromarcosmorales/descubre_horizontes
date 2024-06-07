const Paquete = require("../models/Paquete");

exports.crearPaquete = async (req, res) => {
  const { nombre, descripcion, precio, imagen_url } = req.body;
  try {
    const nuevoPaquete = new Paquete({
      nombre,
      descripcion,
      precio,
      imagen_url,
    });
    await nuevoPaquete.save();
    res.status(201).json({ msg: "Package created successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

exports.obtenerPaquetes = async (req, res) => {
  try {
    const paquetes = await Paquete.find();
    res.json(paquetes);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

exports.actualizarPaquete = async (req, res) => {
  const { id } = req.params;
  const { nombre, descripcion, precio, imagen_url } = req.body;

  try {
    const paquete = await Paquete.findByIdAndUpdate(
      id,
      { nombre, descripcion, precio, imagen_url },
      { new: true }
    );
    if (!paquete) {
      return res.status(404).json({ msg: "Package not found" });
    }
    res.json({ msg: "Package updated successfully", paquete });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

exports.eliminarPaquete = async (req, res) => {
  const { id } = req.params;
  try {
    const paquete = await Paquete.findByIdAndDelete(id);
    if (!paquete) {
      return res.status(404).json({ msg: "Package not found" });
    }
    res.json({ msg: "Package deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};
