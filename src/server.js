const express = require('express')
const routes = require('./router')
const db = require("./models")
const port = process.env.port || 3000

const server = express()

server.use(express.json())
server.use(routes)

db.sequelize.sync().then(() => {
    server.listen(port, () => console.log("App listening on port 3000!"));
}).catch((error)=>{console.log("ERROR estart app "+ error)})
