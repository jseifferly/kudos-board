const express = require('express');
const cors = require('cors')
const helmet = require('helmet')
const Board = require('./board-model-prisma')

const server = express();
server.use(express.json())
server.use(cors())
server.use(helmet())

// [GET] /api/boards
server.get('/api/boards', (req,res,next) => {

})

server.use((req, res, next) => {
    console.log('Server Catch all')
})

module.exports = server