require("dotenv").config();
const config  = require("./config/index");
const express = require("express");
const app = express();
const cors = require("cors"); 
const route  = require("./routes");
const PORT = config.port || 3000;

//Global Midlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }) )

route(app);



app.listen(PORT, () => console.log("La api esta lista", PORT));