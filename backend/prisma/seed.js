const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
    const boards = [
    {
        img: "./medal.svg",
        title: "Meow",
        type: "Thank You",
    },    
    {
        img: "./medal.svg",
        title: "Wuff",
        type: "Inspiration",
    },
    {
        img: "./medal.svg",
        title: "Mooooo",
        type: "Celebration",
    },
    {
        img: "./medal.svg",
        title: "Oink",
        type: "Thank You",
    }
    ]

    for (const board of boards) {
    await prisma.board.create({ data: board })
    }

    console.log('Seeded boards!')
}

main()
    .catch((e) => {
    console.error(e)
    process.exit(1)
    })
    .finally(async () => {
    await prisma.$disconnect()
    })
