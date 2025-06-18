const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const Board = require('./board-model-prisma');

const server = express();
server.use(express.json());
server.use(cors());
server.use(helmet());

// -------------------BOARD ROUTING------------------- //

// [GET] /api/boards
server.get('/api/boards', async (req,res,next) => {
    const query = req.query;
    try{
        const boards = await Board.findBoard(query);
        if(boards.length){
            res.json(boards);
        }else {
            next({ status: 404, message: 'No boards found match the search criteria' });
        }
    } catch (err) {
    next(err);
    }
})

// [POST/VALIDATE-DATA]
const validatePostData = (title, author, type, img) => {
    if (!title || !type || !img){
        return {status: 400, message: 'All required fields not provided'};
    } else if (typeof title !== 'string' || typeof type !== 'string' || typeof img !== 'string') {
        return {status: 422, message: 'All required fields must be strings'};
    } else if (author && typeof author !== 'string'){
        return {status: 422, message: 'Provided Author must be a string'};
    }
    return null;
}

// [POST] /api/boards
server.post('/api/boards', async (req, res, next) => {
    const newBoard = req.body;
    try{
        const valadationErr = validatePostData(newBoard.title, newBoard.author, newBoard.type, newBoard.img);
        if(valadationErr){
            next(valadationErr);
        }
        const created = await Board.createBoard(newBoard);
        res.status(201).json(created);
    } catch (err) {
        next(err);
    }
})

// [DELETE] /api/boards
server.delete('/api/boards/:id', async (req, res, next) => {
    const id = Number(req.params.id);
    try{
        const board = await Board.findBoardById(id);
        if(board) {
            const deleted = await Board.deleteBoard(id);
            res.json(deleted);
        } else {
            next({status: 404, message: 'Board not found'});
        }
    } catch (err) {
        next(err);
    }
})

// --------------------CARD ROUTING------------------- //

// [GET] /api/boards/:id/cards
server.get('/api/boards/:id/cards', async (req, res, next) => {
    const id = Number(req.params.id);
    try {
        const board = await Board.findBoardById(id);
        if (board) {
            const cards = await Board.findCardsOnBoard(id);
            res.json(cards);
        }else {
            next({status: 404, message: 'Board not found'});
        }
    } catch (err) {
        next(err);
    }
})

// [PUT] /api/boards/:boardID/cards/:cardID
server.put('/api/boards/:boardID/cards/:cardID', async (req, res, next) => {
    const [boardID, cardID] = [Number(req.params.boardID), Number(req.params.cardID)];
    const changes = req.body;
    try {
        const board = await Board.findBoardById(boardID);
        const card = await Board.findCardByID(cardID);
        if(board && card) {
            const updatedCard = await Board.updateCard(cardID, changes);
            res.json(updatedCard);
        }else {
            next({status: 404, message: 'Board or Card not found'});
        }
    } catch (err) {
        next(err);
    }
})

// [POST] /api/boards/:id/cards
server.post('/api/boards/:id/cards', async (req, res, next) => {
    const id = Number(req.params.id);
    try {
        const board = await Board.findBoardById(id);
        if (board) {
            const newCard = req.body;
            newCard.boardID = id;
            const validationError = validatePostData(newCard.title, newCard.owner, newCard.description, newCard.gif);
            if(validationError){
                next(validationError);
            }
            const created = await Board.createCard(id, newCard);
            res.status(201).json(created);
        }else {
            next({status: 404, message: 'Board not found'});
        }
    } catch (err) {
        next(err);
    }
})

// [CATCH-ALL] 
server.use((req, res, next) => {
    console.log('Server Catch all');
})

//  [ERROR-HANDLING]
server.use((err, req, res, next) => {
    const { message, status = 500 } = err;
    res.status(status).json({ message }); // Unsafe in prod
})


module.exports = server