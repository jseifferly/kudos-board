const express = require('express');
const cors = require('cors')
const helmet = require('helmet')
const Board = require('./board-model-prisma')

const server = express();
server.use(express.json())
server.use(cors())
server.use(helmet())

// [GET] /api/boards
server.get('/api/boards', async (req,res,next) => {
    const query = req.query;
    try{
        const boards = await Board.find(query)
        if(boards.length){
            res.json(boards);
        }else {
            next({ status: 404, message: 'No boards found match the search criteria' })
        }
    } catch (err) {
    next(err)
    }
})

// [GET] /api/boards/:id
server.get('/api/boards/:id', async (req, res, next) => {
    const id = Number(req.params.id);
    try {
        const board = await Board.findById(id);
        if(board) {
            res.json(board);
        }else {
            next({ status: 404, message: 'No board found match the id' })
        }
    }catch (err){
        next(err)
    }
})

server.use((req, res, next) => {
    console.log('Server Catch all')
})

module.exports = server