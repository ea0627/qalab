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

router.get("/", authenticateUser, getAllOOSCases);

router.post(
  "/",
  authenticateUser,
  authorizeRoles("ADMIN", "ANALYST", "QA"),
  createOOS
);

router.get("/:id", authenticateUser, getOOSCase);

router.patch(
  "/:id",
  authenticateUser,
  authorizeRoles("ADMIN"),
  updateOOS
);

module.exports = router;