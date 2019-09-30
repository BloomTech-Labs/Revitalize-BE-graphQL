const { prisma } = require('../src/generated/prisma-client');

async function main() {
	try {
        const frank = await prisma.createUserAccount({
            email: 'frank@gmail.com',
            password: '$2a$10$zY9/yBf0MYWGGtiEZrFQ8ef1KYLFPAmguEk3tX2NWP1mBhdekcj8O',
        });

        const skyelar = await prisma.createUserAccount({
            email: 'skyelar@gmail.com',
            password: '$2a$10$zY9/yBf0MYWGGtiEZrFQ8ef1KYLFPAmguEk3tX2NWP1mBhdekcj8O'
        })

        const muralsOfHope = await prisma.createUserProfile({
            userAccountId: frank.id,
            email: frank.email,
            firstName: "Frank",
            lastName: "Martinez",
            profileImage: "https://i.gyazo.com/54e7ee14f83cceb6159134196775ecd1.png",
            city: "Kelseyville",
            zip: "95451",
            address: "This is an address",
            state: "Califorina",
            projects: {
                create: [
                    {
                        name: 'Murals of Hope',
                        description: 'Atlanta gets a mural upgrade with apprentice artits showcasing their skills and process',
                        state: 'Georgia',
                        address: '2300 Windy Ridge Pkwy SE',
                        zip: 30339,
                        city: 'Atlanta',
                        goalAmount: 250000,
                        amountFunded: 24313,
                    }
                ],
            },
        })

        const muralsOfHope = await prisma.createUserProfile({
            userAccountId: frank.id,
            email: frank.email,
            firstName: "Frank",
            lastName: "Martinez",
            profileImage: "https://i.gyazo.com/54e7ee14f83cceb6159134196775ecd1.png",
            city: "Kelseyville",
            zip: "95451",
            address: "This is an address",
            state: "Califorina",
            projects: {
                create: [
                    {
                        name: 'Murals of Hope',
                        description: 'Atlanta gets a mural upgrade with apprentice artits showcasing their skills and process',
                        state: 'Georgia',
                        address: '2300 Windy Ridge Pkwy SE',
                        zip: 30339,
                        city: 'Atlanta',
                        goalAmount: 250000,
                        amountFunded: 24313,
                    }
                ],
            },
        })
    } catch (error) {
        console.log(error);
    }
}

main();
