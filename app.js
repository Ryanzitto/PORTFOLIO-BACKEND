require('dotenv').config()
const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

//DB connection

const conn = require("./src/db/conn")

conn()

//Routes 
const routes = require("./src/routes/router")

app.use("/api", routes)


module.exports = app;