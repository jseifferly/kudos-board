// import prisma client lib and instantiate
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

module.exports = {
    async findBoard(where) {
        // SELECT * FROM "Board";
        const boards = await prisma.board.findMany({ where });
        return boards;
    },

    async findBoardById(id) {
        // SELECT * FROM "Board" WHERE id = 1;
        const board = await prisma.board.findUnique({where: { id }})
        return board;
    },

    async createBoard(data) {
        // INSERT INTO "Board" (title, ?author?, type, img)
        const created = await prisma.board.create({data});
        return created;
    },

    async deleteBoard(id) {
        // DELETE FROM "Board" WHERE id = 1;
        const deleted = await prisma.board.delete({where: { id }});
        return deleted;
    },
}