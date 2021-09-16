const express = require("express");
const router = express.Router();
const reservationController = require("../controller/reservation");

router.get("/", reservationController.get);

module.exports = router;
