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

        const frankProfile = await prisma.createUserProfile({
            userAccountId: frank.id,
            email: frank.email,
            firstName: "Frank",
            lastName: "Martinez",
            profileImage: "https://i.gyazo.com/54e7ee14f83cceb6159134196775ecd1.png",
            country: "United States",
            city: "Kelseyville",
            zip: 95451,
            address: "This is an address",
            state: "Califorina",
            projects: {
                create: [
                    {
                        name: 'Murals of Hope',
                        description: 'Atlanta gets a mural upgrade with apprentice artits showcasing their skills and process',
                        featuredImage: 'https://res.cloudinary.com/revitalize/image/upload/v1569880022/start%20page/Murals_Of_Hope_i49iqz.png',
                        country:'United States',
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

        const skyelarProfile = await prisma.createUserProfile({
            userAccountId: skyelar.id,
            email: skyelar.email,
            firstName: "Skyelar",
            lastName: "Carroll",
            profileImage: "https://avatars2.githubusercontent.com/u/32372095?s=400&u=213263fdc4bbfba59bbf43ca53009fd9aac15095&v=4",
            country: "United States",
            state: "Califorina",
            city: "Palmdale",
            address: "38000 Palms",
            zip: 93552,
            projects: {
                create: [
                    {
                        name: 'Mission Zero',
                        featuredImage: 'https://res.cloudinary.com/revitalize/image/upload/v1569879306/start%20page/Mission_Zero_image_cvd99p',
                        description: 'Javontay investigates the construction rubble of a collapsed building after tornado strikes.',
                        country:'United States',
                        state: 'Illinois',
                        address: 'Elk Grove Village, IL 60007',
                        zip: 60007,
                        city: 'Chicago',
                        goalAmount: 100000,
                        amountFunded: 67432.34,
                        likes: {
                            create: [
                                {
                                    profile: {
                                        connect: {
                                            id: frankProfile.id
                                        },
                                    },
                                }
                            ]
                        },
                        comments: {
                            create: [
                                {
                                    profile: {
                                        connect: {
                                            id: frankProfile.id
                                        },
                                    },
                                    comment: "Can't wait to see this come to life!"
                                }
                            ],
                        }
                    }
                ],
            },
        })
    } catch (error) {
        console.log(error);
    }
}

main();
