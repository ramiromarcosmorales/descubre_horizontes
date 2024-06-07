const cron = require("node-cron");
const Reserva = require("../models/Reserva");

cron.schedule("0 * * * *", async () => {
  try {
    const now = new Date();
    const reservas = await Reserva.find({ estado: "pendiente" });

    reservas.forEach(async (reserva) => {
      const tiempoTranscurrido = (now - new Date(reserva.fecha_reserva)) / 36e5;
      if (tiempoTranscurrido > 24) {
        reserva.estado = "cancelada";
        await reserva.save();
        console.log(
          `Reserva ${reserva.numero_reserva} cancelada por falta de pago`
        );
      }
    });
  } catch (err) {
    console.error("Error with cron job: ", err);
  }
});
