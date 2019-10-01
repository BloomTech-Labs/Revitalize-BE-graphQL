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

        const anthony = await prisma.createUserAccount({
            email: 'anth@gmail.com',
            password: '$2a$10$zY9/yBf0MYWGGtiEZrFQ8ef1KYLFPAmguEk3tX2NWP1mBhdekcj8O'
        })

        const elan = await prisma.createUserAccount({
            email: 'elan@gmail.com',
            password: '$2a$10$zY9/yBf0MYWGGtiEZrFQ8ef1KYLFPAmguEk3tX2NWP1mBhdekcj8O'
        })

        const clark = await prisma.createUserAccount({
            email: 'clark@gmail.com',
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
            state: "CA",
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
                        address: 'Elk Grove Village',
                        zip: 60007,
                        city: 'Chicago',
                        goalAmount: 100000,
                        amountFunded: 67432,
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

        const anthonyProfile = await prisma.createUserProfile({
            userAccountId: anthony.id,
            email: anthony.email,
            firstName: "Anthony",
            lastName: "Venturini",
            profileImage: "https://avatars0.githubusercontent.com/u/12114942?s=400&v=4",
            country: "United States",
            state: "CA",
            city: "San Francisco",
            address: "708 Long Bridge",
            zip: 94158,
            projects: {
                create: [
                    {
                        name: 'Alger Theater',
                        featuredImage: 'https://res.cloudinary.com/revitalize/image/upload/v1569879306/start%20page/Mission_Zero_image_cvd99p',
                        description: 'The Alger sits at the corner of Warren Avenue and Outer Drive. It is constructed of structural steel faced with brick. A two-story square-plan tower structure with an instepped parapet stands at the corner, dominating the building\'s facade. The tower houses the theater entrance and box office. A vertical sign with the theater\'s name extends from the tower toward the street. Along the Warren facade, four single-story commercial spaces faced with painted yellow brick line the sidewalk; the facade of the theater proper above is set back.',
                        country:'United States',
                        state: 'MI',
                        address: '16451 East Warren Avenue',
                        zip: 48224,
                        city: 'Detroit',
                        goalAmount: 1000000,
                        amountFunded: 237432.34,
                        likes: {
                            create: [
                                {
                                    profile: {
                                        connect: {
                                            id: skyelarProfile.id
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
                                    comment: "We miss Alger Theater!"
                                },
                                {
                                    profile: {
                                        connect: {
                                            id: skyelarProfile.id
                                        },
                                    },
                                    comment: "This building is iconic!"
                                }

                            ],
                        }
                    }
                ],
            },
        })

        const elanProfile = await prisma.createUserProfile({
            userAccountId: elan.id,
            email: elan.email,
            firstName: "Elan",
            lastName: "Riznis",
            profileImage: "https://avatars0.githubusercontent.com/u/46504999?s=460&v=4",
            country: "United States",
            state: "NY",
            city: "Harlem",
            address: "1919 West",
            zip: 10026,
            projects: {
                create: [
                    {
                        name: 'Providence Theater',
                        featuredImage: 'https://res.cloudinary.com/revitalize/image/upload/v1569879306/start%20page/Mission_Zero_image_cvd99p',
                        description: 'The tower houses the theater entrance and box office. A vertical sign with the theater\'s name extends from the tower toward the street. Along the Warren facade, four single-story commercial spaces faced with painted yellow brick line the sidewalk; the facade of the theater proper above is set back.',
                        country:'United States',
                        state: 'NY',
                        address: '520 Eighth Ave',
                        zip: 10018,
                        city: 'New York',
                        goalAmount: 1300000,
                        amountFunded: 537432.34,
                        likes: {
                            create: [
                                {
                                    profile: {
                                        connect: {
                                            id: skyelarProfile.id
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
                                    comment: "We miss Providence Theater!"
                                },
                                {
                                    profile: {
                                        connect: {
                                            id: skyelarProfile.id
                                        },
                                    },
                                    comment: "This building is iconic!"
                                },
                                {
                                    profile: {
                                        connect: {
                                            id: anthonyProfile.id
                                        },
                                    },
                                    comment: "Billy Joel was here"
                                }

                            ],
                        }
                    }
                ],
            },
        })

        const clarkProfile = await prisma.createUserProfile({
            userAccountId: clark.id,
            email: clark.email,
            firstName: "Clark",
            lastName: "Williams",
            profileImage: "https://avatars2.githubusercontent.com/u/32372095?s=400&u=213263fdc4bbfba59bbf43ca53009fd9aac15095&v=4",
            country: "United States",
            state: "UT",
            city: "Salt Lake City",
            address: "1919 West",
            zip: 84044,
            projects: {
                create: [
                    {
                        name: 'Cottonwood Paper Mill',
                        featuredImage: 'https://res.cloudinary.com/revitalize/image/upload/v1569879306/start%20page/Mission_Zero_image_cvd99p',
                        description: 'The tower houses the theater entrance and box office. A vertical sign with the theater\'s name extends from the tower toward the street. Along the Warren facade, four single-story commercial spaces faced with painted yellow brick line the sidewalk; the facade of the theater proper above is set back.',
                        country:'United States',
                        state: 'UT',
                        address: '6900 S Big Cottonwood Canyon Rd',
                        zip: 84121,
                        city: 'Cottonwood Heights',
                        goalAmount: 1100000,
                        amountFunded: 237432.34,
                        likes: {
                            create: [
                                {
                                    profile: {
                                        connect: {
                                            id: skyelarProfile.id
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
                                    comment: "We miss Providence Theater!"
                                },
                                {
                                    profile: {
                                        connect: {
                                            id: skyelarProfile.id
                                        },
                                    },
                                    comment: "This building is iconic!"
                                },
                                {
                                    profile: {
                                        connect: {
                                            id: anthonyProfile.id
                                        },
                                    },
                                    comment: "Billy Joel was here"
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
