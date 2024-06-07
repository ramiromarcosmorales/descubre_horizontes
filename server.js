const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/consultas", require("./routes/consultaRoutes"));
app.use("/api/reservas", require("./routes/reservaRoutes"));
app.use("/api/paquetes", require("./routes/paqueteRoutes"));

require("./cron/cancelReservaCron.js");

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
