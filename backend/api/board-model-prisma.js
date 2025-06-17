// import prisma client lib and instantiate
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

module.exports = {
    async find(where) {
        // SELECT * FROM "Board";
        const boards = await prisma.board.findMany({ where });
        return boards;
    },

    async findById(id) {
        // SELECT * FROM "Board" WHERE id = 1;
        const board = await prisma.board.findUnique({where: { id }})
        return board;
    },
}