//extracting router method from express module
const express = require("express");
const router = express.Router();

//extracting user-model router funtions
const userController = require("../controllers/users-controller");

//setting rest APIs 
router.post("/signup", userController.signup);
router.post("/login", userController.login);

module.exports = router;

