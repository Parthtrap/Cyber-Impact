//extracting router method from express module
const express = require("express");
const router = express.Router();

//extracting market-model router functions
const marketController = require("../controllers/markets-controller");

//setting rest APIs
router.post("/", marketController.addMarket);
// router.delete("/:pid", f);

module.exports = router;
