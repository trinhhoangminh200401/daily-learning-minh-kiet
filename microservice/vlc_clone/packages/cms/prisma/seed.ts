import "dotenv/config"
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const admin = await prisma.user.upsert({
        where: { email: 'admin@vlc.com' },
        update: {},
        create: {
            email: 'admin@vlc.com',
            name: 'Admin VLC',
            password: 'password123', // Demo purpose only
            role: 'ADMIN'
        },
    })

    console.log('Seeded database with default admin:', admin)
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
