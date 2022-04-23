//extracting express module
const express = require("express");
const app = express();
const port = 6000;

// for parsering json file
const bodyParser = require("body-parser");
app.use(bodyParser.json());

//allowing excess to public folder
app.use(express.static("public"));

//connecting to the databse server
const mongoose = require("mongoose");
const dbName = "cyberImpactDB";
mongoose.connect(`mongodb://localhost:27017/${dbName}`);

//setting the server port
app.listen(port, () => console.log(`Server listening on port ${port}`));
