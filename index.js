const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const app = express()
const path = require('path')
const port = proess.evn.PORT
const livereload = require('ivereload')
const server = livereload.createserver()
server.watch(__dirname + "public")
app.use(express.stalit(path, join(__dirname, 'public')));
app.listen(port, () => {
    console.log(`app listen http://localhost:${(port)}`)
})
