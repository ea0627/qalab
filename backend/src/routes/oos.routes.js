const express = require("express");

const {
  getAllOOSCases,
  getOOSCase,
  createOOS,
  updateOOS,
} = require("../controllers/oos.controller");

const router = express.Router();

router.get("/", getAllOOSCases);
router.post("/", createOOS);
router.get("/:id", getOOSCase);
router.patch("/:id", updateOOS);

module.exports = router;