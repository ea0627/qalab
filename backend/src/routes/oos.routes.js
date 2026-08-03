const express = require("express");

const {
  getAllOOSCases,
  getOOSCase,
  createOOS,
  updateOOS,
} = require("../controllers/oos.controller");

const authenticateUser = require("../middlewares/authenticateUser");
const authorizeRoles = require("../middlewares/authorizeRoles");

const router = express.Router();

router.get("/", getAllOOSCases);

router.post(
  "/",
  authenticateUser,
  authorizeRoles("ADMIN", "ANALYST", "QA"),
  createOOS
);

router.get("/:id", getOOSCase);

router.patch(
  "/:id",
  authenticateUser,
  authorizeRoles("ADMIN", "QA", "REVIEWER"),
  updateOOS
);

module.exports = router;