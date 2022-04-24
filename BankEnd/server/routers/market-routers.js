//extracting router method from express module
const express = require("express");
const router = express.Router();

//extracting market-model router functions
const marketController = require("../controllers/markets-controller");

//setting rest APIs
router.post("/", marketController.addMarket);
router.get("/user/:uid", marketController.getUserMarkets);
router.get("/:mid",marketController.getMarket);
router.delete("/:mid", marketController.deleteMarket);
router.post("/filter", marketController.getFilteredMarkets);
router.post("/search", marketController.getSearchedMarkets);

module.exports = router;
