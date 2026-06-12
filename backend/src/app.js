const express = require("express");
const cors = require("cors");
require("dotenv").config();

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

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`QALab API running on port ${PORT}`);
});