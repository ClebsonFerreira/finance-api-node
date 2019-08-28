const express = require('express')
const routes = require('./router')
const port = process.env.port || 3000

const server = express()

server.use(express.json())
server.use(routes)

server.listen(port)
console.log("API Port :"+port)