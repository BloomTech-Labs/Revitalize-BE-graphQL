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

        const jose = await prisma.createUserAccount({
            email: 'jose@gmail.com',
            password: '$2a$10$zY9/yBf0MYWGGtiEZrFQ8ef1KYLFPAmguEk3tX2NWP1mBhdekcj8O'
        })

        const kerry = await prisma.createUserAccount({
            email: 'kerry@gmail.com',
            password: '$2a$10$zY9/yBf0MYWGGtiEZrFQ8ef1KYLFPAmguEk3tX2NWP1mBhdekcj8O'
        })

        const alexander = await prisma.createUserAccount({
            email: 'alexander@gmail.com',
            password: '$2a$10$zY9/yBf0MYWGGtiEZrFQ8ef1KYLFPAmguEk3tX2NWP1mBhdekcj8O'
        })

        const ruth = await prisma.createUserAccount({
            email: 'ruth@gmail.com',
            password: '$2a$10$zY9/yBf0MYWGGtiEZrFQ8ef1KYLFPAmguEk3tX2NWP1mBhdekcj8O'
        })

        const omar = await prisma.createUserAccount({
            email: 'omar@gmail.com',
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
                        slug: 'murals-of-hope',
                        name: 'Murals of Hope',
                        description: 'Atlanta gets a mural upgrade with apprentice artits showcasing their skills and process',
                        featuredImage: 'https://res.cloudinary.com/revitalize/image/upload/v1569880022/start%20page/Murals_Of_Hope_i49iqz.png',
                        country:'United States',
                        state: 'Georgia',
                        address: '2300 Windy Ridge Pkwy SE',
                        zip: 30339,
                        city: 'Atlanta',
                        goalAmount: 250000,
                        duration: 24,
                        difficulty: "Easy",
                        startDate: "2019-10-09",
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
                        slug: 'mission-zero',
                        name: 'Mission Zero',
                        featuredImage: 'https://res.cloudinary.com/revitalize/image/upload/v1569879306/start%20page/Mission_Zero_image_cvd99p',
                        description: 'Javontay investigates the construction rubble of a collapsed building after tornado strikes.',
                        country:'United States',
                        state: 'Illinois',
                        address: 'Elk Grove Village',
                        zip: 60007,
                        city: 'Chicago',
                        goalAmount: 100000,
                        duration: 24,
                        difficulty: "Easy",
                        startDate: "2019-10-09",
                        donations: {
                            create: [
                                {
                                    profile: {
                                        connect: {
                                            id: frankProfile.id
                                        }
                                    },
                                    amount: 5000.50
                                }
                            ]
                        },
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
                        slug: 'alger-theater',
                        name: 'Alger Theater',
                        featuredImage: 'https://res.cloudinary.com/revitalize/image/upload/v1569879306/start%20page/Mission_Zero_image_cvd99p',
                        description: 'The Alger sits at the corner of Warren Avenue and Outer Drive. It is constructed of structural steel faced with brick. A two-story square-plan tower structure with an instepped parapet stands at the corner, dominating the building\'s facade. The tower houses the theater entrance and box office. A vertical sign with the theater\'s name extends from the tower toward the street. Along the Warren facade, four single-story commercial spaces faced with painted yellow brick line the sidewalk; the facade of the theater proper above is set back.',
                        country:'United States',
                        state: 'MI',
                        address: '16451 East Warren Avenue',
                        zip: 48224,
                        city: 'Detroit',
                        goalAmount: 1000000,
                        duration: 24,
                        difficulty: "Easy",
                        startDate: "2019-10-09",
                        donations: {
                            create: [
                                {
                                    profile: {
                                        connect: {
                                            id: frankProfile.id
                                        }
                                    },
                                    amount: 50.23
                                },
                                {
                                    profile: {
                                        connect: {
                                            id: skyelarProfile.id
                                        }
                                    },
                                    amount: 500.00
                                }
                            ]
                        },
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
                        slug: 'providence-theater',
                        name: 'Providence Theater',
                        featuredImage: 'https://res.cloudinary.com/revitalize/image/upload/v1569879306/start%20page/Mission_Zero_image_cvd99p',
                        description: 'The tower houses the theater entrance and box office. A vertical sign with the theater\'s name extends from the tower toward the street. Along the Warren facade, four single-story commercial spaces faced with painted yellow brick line the sidewalk; the facade of the theater proper above is set back.',
                        country:'United States',
                        state: 'NY',
                        address: '520 Eighth Ave',
                        zip: 10018,
                        city: 'New York',
                        goalAmount: 1300000,
                        duration: 24,
                        difficulty: "Easy",
                        startDate: "2019-10-09",
                        donations: {
                            create: [
                                {
                                    profile: {
                                        connect: {
                                            id: frankProfile.id
                                        }
                                    },
                                    amount: 50.23
                                },
                                {
                                    profile: {
                                        connect: {
                                            id: skyelarProfile.id
                                        }
                                    },
                                    amount: 500.00
                                },
                                {
                                    profile: {
                                        connect: {
                                            id: anthonyProfile.id
                                        }
                                    },
                                    amount: 2000.00
                                }
                            ]
                        },
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
                        slug: 'cottonwood-paper-mill',
                        name: 'Cottonwood Paper Mill',
                        featuredImage: 'https://res.cloudinary.com/revitalize/image/upload/v1569879306/start%20page/Mission_Zero_image_cvd99p',
                        description: 'The tower houses the theater entrance and box office. A vertical sign with the theater\'s name extends from the tower toward the street. Along the Warren facade, four single-story commercial spaces faced with painted yellow brick line the sidewalk; the facade of the theater proper above is set back.',
                        country:'United States',
                        state: 'UT',
                        address: '6900 S Big Cottonwood Canyon Rd',
                        zip: 84121,
                        city: 'Cottonwood Heights',
                        goalAmount: 1100000,
                        duration: 24,
                        difficulty: "Easy",
                        startDate: "2019-10-09",
                        donations: {
                            create: [
                                {
                                    profile: {
                                        connect: {
                                            id: anthonyProfile.id
                                        }
                                    },
                                    amount: 2000.00
                                }
                            ]
                        },
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
                                    comment: "We miss Cottonwood Paper Mill!"
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
                                    comment: "Let's make some paper!"
                                }

                            ],
                        }
                    }
                ],
            },
        })

        const joseProfile = await prisma.createUserProfile({
            userAccountId: jose.id,
            email: jose.email,
            firstName: "Jose",
            lastName: "Montero",
            profileImage: "https://avatars2.githubusercontent.com/u/32372095?s=400&u=213263fdc4bbfba59bbf43ca53009fd9aac15095&v=4",
            country: "United States",
            state: "IL",
            city: "Chicago",
            address: "912 North",
            zip: 60614,
            projects: {
                create: [
                    {
                        slug: 'edgewater-medical-center',
                        name: 'Edgewater Medical Center',
                        featuredImage: 'https://res.cloudinary.com/revitalize/image/upload/v1569879306/start%20page/Mission_Zero_image_cvd99p',
                        description: 'A healthy portion of large abandoned buildings that urban explorers seek out are left behind after major changes in economic markets, competition and innovation leave stagnant companies behind. That is not the case with Edgewater Medical Center. What sets this building apart from other urbex locations is that it was created by criminal acts over an extended period of time. Even though the hospital was dated, they were still operating in a capacity that for the most part benefitted patients. By the time the FBI discovered the corruption it had already metastasized and killed Edgewater Medical Center.',
                        country:'United States',
                        state: 'IL',
                        address: '1621-1623 W Edgewater Ave',
                        zip: 60660,
                        city: 'Chicago',
                        goalAmount: 1300000,
                        duration: 24,
                        difficulty: "Easy",
                        startDate: "2019-10-09",
                        donations: {
                            create: [
                                {
                                    profile: {
                                        connect: {
                                            id: frankProfile.id
                                        }
                                    },
                                    amount: 50.23
                                },
                                {
                                    profile: {
                                        connect: {
                                            id: skyelarProfile.id
                                        }
                                    },
                                    amount: 500.00
                                },
                                {
                                    profile: {
                                        connect: {
                                            id: anthonyProfile.id
                                        }
                                    },
                                    amount: 2000.00
                                },
                                {
                                    profile: {
                                        connect: {
                                            id: anthonyProfile.id
                                        }
                                    },
                                    amount: 10000.00
                                }
                            ]
                        },
                        likes: {
                            create: [
                                {
                                    profile: {
                                        connect: {
                                            id: clarkProfile.id
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
                                    comment: "Looks like a fantastic building!!"
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
                                    comment: "What an awesome project"
                                }

                            ],
                        }
                    }
                ],
            },
        })

        const kerryProfile = await prisma.createUserProfile({
            userAccountId: kerry.id,
            email: kerry.email,
            firstName: "Kerry",
            lastName: "McPhearson",
            profileImage: "https://avatars2.githubusercontent.com/u/32372095?s=400&u=213263fdc4bbfba59bbf43ca53009fd9aac15095&v=4",
            country: "United States",
            state: "GA",
            city: "Atlanta",
            address: "3634 Limer Street",
            zip: 30303,
            projects: {
                create: [
                    {
                        slug: 'georgia-girl-drive-in',
                        name: 'Georgia Girl Drive-In',
                        featuredImage: 'https://res.cloudinary.com/revitalize/image/upload/v1569879306/start%20page/Mission_Zero_image_cvd99p',
                        description: 'Just south of Woodbine, Georgia on the nearly forgotten stretch of highway known as US-17 sits the remains of the Georgia Girl Drive-In. The catchy old neon sign and rapidly crumbling building is all that remains of this once-groovy hangout from the 1960s.',
                        country:'United States',
                        state: 'GA',
                        address: '1602 GA-25',
                        zip: 31569,
                        city: 'Atlanta',
                        goalAmount: 1120000,
                        duration: 24,
                        difficulty: "Easy",
                        startDate: "2019-10-09",
                        donations: {
                            create: [
                                {
                                    profile: {
                                        connect: {
                                            id: frankProfile.id
                                        }
                                    },
                                    amount: 25550.23
                                },
                                {
                                    profile: {
                                        connect: {
                                            id: skyelarProfile.id
                                        }
                                    },
                                    amount: 500.00
                                },
                                {
                                    profile: {
                                        connect: {
                                            id: anthonyProfile.id
                                        }
                                    },
                                    amount: 2000.00
                                },
                                {
                                    profile: {
                                        connect: {
                                            id: anthonyProfile.id
                                        }
                                    },
                                    amount: 10000.00
                                }
                            ]
                        },
                        likes: {
                            create: [
                                {
                                    profile: {
                                        connect: {
                                            id: clarkProfile.id
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
                                    comment: "Looks like a fantastic building!!"
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
                                    comment: "What an awesome project"
                                }

                            ],
                        }
                    }
                ],
            },
        })

        const alexanderProfile = await prisma.createUserProfile({
            userAccountId: alexander.id,
            email: alexander.email,
            firstName: "Alexander",
            lastName: "Piroumian",
            profileImage: "https://avatars2.githubusercontent.com/u/32372095?s=400&u=213263fdc4bbfba59bbf43ca53009fd9aac15095&v=4",
            country: "United States",
            state: "CA",
            city: "Palmdale",
            address: "667 Williams Avenue",
            zip: 93552,
            projects: {
                create: [
                    {
                        slug: 'hawthorne-mall',
                        name: 'Hawthorne Mall',
                        featuredImage: 'https://res.cloudinary.com/revitalize/image/upload/v1569879306/start%20page/Mission_Zero_image_cvd99p',
                        description: 'Hawthorne Plaza is a dead mall along Hawthorne Boulevard between 120th Street and El Segundo Blvd in Hawthorne, California. The 40-acre (16 ha) property opened in 1977 and included an indoor mall and free standing stores at the property\'s south end. The mall largely catered to the middle class residents living in and around Hawthorne and featured cheaper stores than other nearby malls such as South Bay Galleria and Manhattan Village.',
                        country:'United States',
                        state: 'CA',
                        address: '12000 Hawthorne Blvd. ',
                        zip: 90250,
                        city: 'Atlanta',
                        goalAmount: 21120000,
                        duration: 24,
                        difficulty: "Easy",
                        startDate: "2019-10-09",
                        donations: {
                            create: [
                                {
                                    profile: {
                                        connect: {
                                            id: frankProfile.id
                                        }
                                    },
                                    amount: 50.23
                                },
                                {
                                    profile: {
                                        connect: {
                                            id: skyelarProfile.id
                                        }
                                    },
                                    amount: 500.00
                                },
                                {
                                    profile: {
                                        connect: {
                                            id: anthonyProfile.id
                                        }
                                    },
                                    amount: 2000.00
                                },
                                {
                                    profile: {
                                        connect: {
                                            id: anthonyProfile.id
                                        }
                                    },
                                    amount: 1200.00
                                }
                            ]
                        },
                        likes: {
                            create: [
                                {
                                    profile: {
                                        connect: {
                                            id: kerryProfile.id
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
                                    comment: "Wow. What a beautiful building!!"
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
                                    comment: "Please donate to this amazing project."
                                }

                            ],
                        }
                    }
                ],
            },
        })

        const ruthProfile = await prisma.createUserProfile({
            userAccountId: ruth.id,
            email: ruth.email,
            firstName: "Ruth",
            lastName: "Philips",
            profileImage: "https://avatars2.githubusercontent.com/u/32372095?s=400&u=213263fdc4bbfba59bbf43ca53009fd9aac15095&v=4",
            country: "United States",
            state: "CA",
            city: "Oakland",
            address: "481 Beech Street",
            zip: 94612,
            projects: {
                create: [
                    {
                        slug: 'hawthorne-mall-2',
                        name: 'Hawthorne Mall',
                        featuredImage: 'https://res.cloudinary.com/revitalize/image/upload/v1569879306/start%20page/Mission_Zero_image_cvd99p',
                        description: 'The original 16th Street depot was a smaller wood structure, built when the tracks were on the shoreline of San Francisco Bay. Later the shoreline was filled and now lies nearly a mile west. It was replaced in 1912 by a Beaux-Arts building designed by architect Jarvis Hunt.',
                        country:'United States',
                        state: 'CA',
                        address: '1601 Wood Street',
                        zip: 94607,
                        city: 'Oakland',
                        goalAmount: 19120000,
                        duration: 24,
                        difficulty: "Easy",
                        startDate: "2019-10-09",
                        donations: {
                            create: [
                                {
                                    profile: {
                                        connect: {
                                            id: frankProfile.id
                                        }
                                    },
                                    amount: 5423.23
                                },
                                {
                                    profile: {
                                        connect: {
                                            id: skyelarProfile.id
                                        }
                                    },
                                    amount: 500.00
                                },
                                {
                                    profile: {
                                        connect: {
                                            id: anthonyProfile.id
                                        }
                                    },
                                    amount: 2000.00
                                },
                                {
                                    profile: {
                                        connect: {
                                            id: anthonyProfile.id
                                        }
                                    },
                                    amount: 10000.00
                                }
                            ]
                        },
                        likes: {
                            create: [
                                {
                                    profile: {
                                        connect: {
                                            id: alexanderProfile.id
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
                                    comment: "This building is huge! Good luck!"
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
                                    comment: "Please donate to this amazing project."
                                }

                            ],
                        }
                    }
                ],
            },
        })

        const omarProfile = await prisma.createUserProfile({
            userAccountId: omar.id,
            email: omar.email,
            firstName: "Omar",
            lastName: "Salah",
            profileImage: "https://avatars2.githubusercontent.com/u/32372095?s=400&u=213263fdc4bbfba59bbf43ca53009fd9aac15095&v=4",
            country: "United States",
            state: "CA",
            city: "San Francisco",
            address: "601 Avenue A, San Francisco",
            zip: 94130,
            projects: {
                create: [
                    {
                        slug: 'cosson-hall',
                        name: 'Cosson Hall',
                        featuredImage: 'https://res.cloudinary.com/revitalize/image/upload/v1569879306/start%20page/Mission_Zero_image_cvd99p',
                        description: 'Opened in 1969 on sadly treasure-less Treasure Island, Cosson Hall was an asterisk-shaped barracks that featured six wings, all of which were occupied by male sailors stationed on the island.',
                        country:'United States',
                        state: 'CA',
                        address: '601 Avenue A',
                        zip: 94130,
                        city: 'San Francisco',
                        goalAmount: 29120000,
                        duration: 24,
                        difficulty: "Easy",
                        startDate: "2019-10-09",
                        likes: {
                            create: [
                                {
                                    profile: {
                                        connect: {
                                            id: ruthProfile.id
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
                                    comment: "This building is huge! Good luck!",
                                    likes: {
                                        create: [
                                            {
                                                profile: {
                                                    connect: {
                                                        id:  anthonyProfile.id
                                                    }
                                                },
                                            },
                                            {
                                                profile: {
                                                    connect: {
                                                        id: elanProfile.id
                                                    }
                                                }
                                            },
                                            {
                                                profile: {
                                                    connect: {
                                                        id: frankProfile.id
                                                    }
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    profile: {
                                        connect: {
                                            id: skyelarProfile.id
                                        },
                                    },
                                    comment: "This building is iconic!",
                                    likes: {
                                        create: [
                                            {
                                                profile: {
                                                    connect: {
                                                        id: ruthProfile.id
                                                    }
                                                }
                                            },
                                            {
                                                profile: {
                                                    connect: {
                                                        id: anthonyProfile.id
                                                    }
                                                }
                                            },
                                            {
                                                profile: {
                                                    connect: {
                                                        id: elanProfile.id
                                                    }
                                                }
                                            },
                                            {
                                                profile: {
                                                    connect: {
                                                        id: frankProfile.id
                                                    }
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    profile: {
                                        connect: {
                                            id: anthonyProfile.id
                                        },
                                    },
                                    comment: "Please donate to this amazing project."
                                }

                            ],
                        },
                        donations: {
                            create: [
                                {
                                    profile: {
                                        connect: {
                                            id: anthonyProfile.id
                                        }
                                    },
                                    amount: 3325.54
                                },
                                {
                                    profile: {
                                        connect: {
                                            id: joseProfile.id
                                        }
                                    },
                                    amount: 250.00
                                },
                                {
                                    profile: {
                                        connect: {
                                            id: frankProfile.id
                                        }
                                    },
                                    amount: 1200.00
                                },
                                {
                                    profile: {
                                        connect: {
                                            id: clarkProfile.id
                                        }
                                    },
                                    amount: 225.00
                                }
                            ]
                        },
                        trades: {
                            create: [
                                {
                                    id: "1",
                                    name: "HVAC",
                                    description: "HVAC Certification"
                                },
                                {
                                    id: "2",
                                    name: "Plumber",
                                    description: "Plumbing Certification"
                                },
                                {
                                     id: "3",
                                    name: "Carpentry",
                                    description: "Carpentry Certification"
                                },
                                {
                                     id: "4",
                                    name: "Electrician",
                                    description: "Electrician Certification"
                                }
                            ]
                        },
                        applicants: {
                            create: [
                                {
                                    profile: {
                                        connect: {
                                            id: clarkProfile.id
                                        }
                                    },
                                    trade: {
                                        connect: {
                                            id: "1"
                                        }
                                    },
                                    coverLetter: "This is a cover letter :)",
                                    licensed: false,
                                    coverLetter: "Cover letter",
                                    jobExperience: "This is my job exp",
                                    education: "This is my education",
                                    availability: "All the time",
                                }
                            ]
                        },
                        tradeMasters: {
                            create: [
                                {
                                    profile: {
                                        connect: {
                                            id: frankProfile.id
                                        }
                                    },
                                },
                                {
                                    profile: {
                                        connect: {
                                            id: anthonyProfile.id
                                        }
                                    },
                                }
                            ]
                        },
                        students: {
                            create: [
                                {
                                    profile: {
                                        connect: {
                                            id: skyelarProfile.id
                                        }
                                    },
                                },
                                {
                                    profile: {
                                        connect: {
                                            id: joseProfile.id
                                        }
                                    },
                                }
                            ]
                        },
                        tasks: {
                            create: [
                                {
                                    trade: {
                                        connect: {
                                            id: "1"
                                        }
                                    },
                                    dueDate: "2019-10-16T22:12:34.296Z",
                                    description: "Mow the lawn",
                                    priority: "LOW",
                                    budgetHours: 40,
                                    apprentices: {
                                        create: [
                                            {
                                                profile: {
                                                    connect: {
                                                        id: joseProfile.id
                                                    }
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    trade: {
                                        connect: {
                                            id: "2"
                                        }
                                    },
                                    dueDate: "2019-10-18T22:12:34.296Z",
                                    description: "Take out the trash",
                                    priority: "LOW",
                                    budgetHours: 40,
                                    apprentices: {
                                        create: [
                                            {
                                                profile: {
                                                    connect: {
                                                        id: skyelarProfile.id
                                                    }
                                                }
                                            },
                                            {
                                                profile: {
                                                    connect: {
                                                        id: joseProfile.id
                                                    }
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    trade: {
                                        connect: {
                                            id: "4"
                                        }
                                    },
                                    dueDate: "2019-10-22T22:12:34.296Z",
                                    description: "Do something :)",
                                    priority: "LOW",
                                    budgetHours: 40,
                                    apprentices: {
                                        create: [
                                            {
                                                profile: {
                                                    connect: {
                                                        id: skyelarProfile.id
                                                    }
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
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
