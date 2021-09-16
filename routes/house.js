const express = require("express");
const router = express.Router();
const houseController = require("../controller/house");

router.get("/", houseController.get);

module.exports = router;
