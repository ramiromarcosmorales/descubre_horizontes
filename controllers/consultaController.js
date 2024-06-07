const Consulta = require("../models/Consulta");
const nodemailer = require("nodemailer");

exports.crearConsulta = async (req, res) => {
  const { nombre, email, whatsapp, mensaje } = req.body;
  try {
    const nuevaConsulta = new Consulta({ nombre, email, whatsapp, mensaje });
    await nuevaConsulta.save();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: "Nueva Consulta",
      text: `Nombre: ${nombre}\nEmail: ${email}\nWhatsapp: ${whatsapp}\nMensaje: ${mensaje}`,
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error(err);
        return res.status(500).send("Error sending email");
      }
      res.status(200).json({ msg: "Email sent successfully" });
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};
