const { prisma } = require('../src/generated/prisma-client');

async function main() {
    await prisma.createUser({
        email: "frank@gmail.com",
        password: "password"
    })
}

main();
