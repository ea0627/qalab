const express = require("express");
const cors = require("cors");
require("dotenv").config();

const oosRoutes = require("./routes/oos.routes");
const authRoutes = require("./routes/auth.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    service: "QALab API",
    version: "1.0.0",
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/oos", oosRoutes);

module.exports = app;