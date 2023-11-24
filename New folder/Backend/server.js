const express = require('express')
const Connect_DB = require('./ConnectDB/database')
const dotenv = require("dotenv").config()
const port = process.env.port || 5001
const app = express()
app.use(express.json())
const cors = require("cors")
app.use(cors())

Connect_DB()

app.use('/api/book', require("./Router/Book_Router"))
app.use('/api/signup', require("./Router/User_Route"))
app.use('/api/user/login', require("./Router/Login_Route"))



app.listen(port, () => console.log(`Example app listening on port ${port}!`))