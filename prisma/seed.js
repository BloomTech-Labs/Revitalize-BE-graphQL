const { prisma } = require('../src/generated/prisma-client');

async function main() {
	try {
		const frank = await prisma.createUserAccount({
			email: 'frank@gmail.com',
			password: '$2a$10$zY9/yBf0MYWGGtiEZrFQ8ef1KYLFPAmguEk3tX2NWP1mBhdekcj8O',
		});

		const skyelar = await prisma.createUserAccount({
			email: 'skyelar@gmail.com',
			password: '$2a$10$zY9/yBf0MYWGGtiEZrFQ8ef1KYLFPAmguEk3tX2NWP1mBhdekcj8O',
		});

		const anthony = await prisma.createUserAccount({
			email: 'anth@gmail.com',
			password: '$2a$10$zY9/yBf0MYWGGtiEZrFQ8ef1KYLFPAmguEk3tX2NWP1mBhdekcj8O',
		});

		const elan = await prisma.createUserAccount({
			email: 'elan@gmail.com',
			password: '$2a$10$zY9/yBf0MYWGGtiEZrFQ8ef1KYLFPAmguEk3tX2NWP1mBhdekcj8O',
		});

		const clark = await prisma.createUserAccount({
			email: 'clark@gmail.com',
			password: '$2a$10$zY9/yBf0MYWGGtiEZrFQ8ef1KYLFPAmguEk3tX2NWP1mBhdekcj8O',
		});

		const jose = await prisma.createUserAccount({
			email: 'jose@gmail.com',
			password: '$2a$10$zY9/yBf0MYWGGtiEZrFQ8ef1KYLFPAmguEk3tX2NWP1mBhdekcj8O',
		});

		const kerry = await prisma.createUserAccount({
			email: 'kerry@gmail.com',
			password: '$2a$10$zY9/yBf0MYWGGtiEZrFQ8ef1KYLFPAmguEk3tX2NWP1mBhdekcj8O',
		});

		const alexander = await prisma.createUserAccount({
			email: 'alexander@gmail.com',
			password: '$2a$10$zY9/yBf0MYWGGtiEZrFQ8ef1KYLFPAmguEk3tX2NWP1mBhdekcj8O',
		});

		const ruth = await prisma.createUserAccount({
			email: 'ruth@gmail.com',
			password: '$2a$10$zY9/yBf0MYWGGtiEZrFQ8ef1KYLFPAmguEk3tX2NWP1mBhdekcj8O',
		});

		const omar = await prisma.createUserAccount({
			email: 'omar@gmail.com',
			password: '$2a$10$zY9/yBf0MYWGGtiEZrFQ8ef1KYLFPAmguEk3tX2NWP1mBhdekcj8O',
		});

		const frankProfile = await prisma.createUserProfile({
			userAccountId: frank.id,
			email: frank.email,
			firstName: 'Frank',
			lastName: 'Martinez',
			profileImage: 'https://i.gyazo.com/54e7ee14f83cceb6159134196775ecd1.png',
			country: 'United States',
			city: 'Kelseyville',
			zip: 95451,
			address: 'This is an address',
			state: 'California',
			projects: {
				create: [
					{
						slug: 'murals-of-hope',
						name: 'Murals of Hope',
						description:
							'Atlanta gets a mural upgrade with apprentice artits showcasing their skills and process',
						featuredImage:
							'https://res.cloudinary.com/revitalize/image/upload/v1569880022/start%20page/Murals_Of_Hope_i49iqz.png',
						country: 'United States',
						state: 'Georgia',
						address: '2300 Windy Ridge Pkwy SE',
						zip: 30339,
						city: 'Atlanta',
						goalAmount: 250000,
						duration: 24,
						difficulty: 'Easy',
						startDate: '2019-10-09',
					},
				],
			},
		});

<<<<<<< HEAD
		const skyelarProfile = await prisma.createUserProfile({
			userAccountId: skyelar.id,
			email: skyelar.email,
			firstName: 'Skyelar',
			lastName: 'Carroll',
			profileImage:
				'https://avatars2.githubusercontent.com/u/32372095?s=400&u=213263fdc4bbfba59bbf43ca53009fd9aac15095&v=4',
			country: 'United States',
			state: 'California',
			city: 'Palmdale',
			address: '38000 Palms',
			zip: 93552,
			projects: {
				create: [
					{
						slug: 'mission-zero',
						name: 'Mission Zero',
						featuredImage:
							'https://res.cloudinary.com/revitalize/image/upload/v1569879306/start%20page/Mission_Zero_image_cvd99p',
						description:
							'Javontay investigates the construction rubble of a collapsed building after tornado strikes.',
						country: 'United States',
						state: 'Illinois',
						address: 'Elk Grove Village',
						zip: 60007,
						city: 'Chicago',
						goalAmount: 100000,
						duration: 24,
						difficulty: 'Easy',
						startDate: '2019-10-09',
						donations: {
							create: [
								{
									profile: {
										connect: {
											id: frankProfile.id,
										},
									},
									amount: 5000.5,
								},
							],
						},
						likes: {
							create: [
								{
									profile: {
										connect: {
											id: frankProfile.id,
										},
									},
								},
							],
						},
						comments: {
							create: [
								{
									profile: {
										connect: {
											id: frankProfile.id,
										},
									},
									comment: "Can't wait to see this come to life!",
								},
							],
						},
					},
				],
			},
		});

		const anthonyProfile = await prisma.createUserProfile({
			userAccountId: anthony.id,
			email: anthony.email,
			firstName: 'Anthony',
			lastName: 'Venturini',
			profileImage: 'https://avatars0.githubusercontent.com/u/12114942?s=400&v=4',
			country: 'United States',
			state: 'California',
			city: 'San Francisco',
			address: '708 Long Bridge',
			zip: 94158,
			projects: {
				create: [
					{
						slug: 'alger-theater',
						name: 'Alger Theater',
						featuredImage:
							'https://res.cloudinary.com/revitalize/image/upload/v1571093114/seed%20images/Alger_Theater_Detroit_f5gfsw.jpg',
						description:
							"The Alger sits at the corner of Warren Avenue and Outer Drive. It is constructed of structural steel faced with brick. A two-story square-plan tower structure with an instepped parapet stands at the corner, dominating the building's facade. The tower houses the theater entrance and box office. A vertical sign with the theater's name extends from the tower toward the street. Along the Warren facade, four single-story commercial spaces faced with painted yellow brick line the sidewalk; the facade of the theater proper above is set back.",
						country: 'United States',
						state: 'Michigan',
						address: '16451 East Warren Avenue',
						zip: 48224,
						city: 'Detroit',
						goalAmount: 300000,
						duration: 24,
						difficulty: 'Easy',
						startDate: '2019-10-09',
						donations: {
							create: [
								{
									profile: {
										connect: {
											id: frankProfile.id,
										},
									},
									amount: 50.23,
								},
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
									amount: 500.0,
								},
							],
						},
						likes: {
							create: [
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
								},
							],
						},
						comments: {
							create: [
								{
									profile: {
										connect: {
											id: frankProfile.id,
										},
									},
									comment: 'We miss Alger Theater!',
								},
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
									comment: 'This building is iconic!',
								},
							],
						},
					},
				],
			},
		});
=======
        const skyelarProfile = await prisma.createUserProfile({
            userAccountId: skyelar.id,
            email: skyelar.email,
            firstName: "Skyelar",
            lastName: "Carroll",
            profileImage: "https://avatars2.githubusercontent.com/u/32372095?s=400&u=213263fdc4bbfba59bbf43ca53009fd9aac15095&v=4",
            country: "United States",
            state: "California",
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
                        trades: {
                            create: [
                                {
                                     id: "3",
                                    name: "Carpentry",
                                    description: "Carpentry Certification"
                                },
                                {
                                     id: "4",
                                    name: "Electrician",
                                    description: "Electrician Certification"
                                },
                                {    id: "5",
                                    name: "Mason",
                                    description: "Mason Certification"
                                },
                                {     id: "6",
                                     name: "Interior Design",
                                     description: "Interior Design Certification"
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
            state: "California",
            city: "San Francisco",
            address: "708 Long Bridge",
            zip: 94158,
            projects: {
                create: [
                    {
                        slug: 'alger-theater',
                        name: 'Alger Theater',
                        featuredImage: 'https://res.cloudinary.com/revitalize/image/upload/v1571093114/seed%20images/Alger_Theater_Detroit_f5gfsw.jpg',
                        description: 'The Alger sits at the corner of Warren Avenue and Outer Drive. It is constructed of structural steel faced with brick. A two-story square-plan tower structure with an instepped parapet stands at the corner, dominating the building\'s facade. The tower houses the theater entrance and box office. A vertical sign with the theater\'s name extends from the tower toward the street. Along the Warren facade, four single-story commercial spaces faced with painted yellow brick line the sidewalk; the facade of the theater proper above is set back.',
                        country:'United States',
                        state: 'Michigan',
                        address: '16451 East Warren Avenue',
                        zip: 48224,
                        city: 'Detroit',
                        goalAmount: 300000,
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
                        trades: {
                            create: [
                                {
                                     id: "3",
                                    name: "Carpentry",
                                    description: "Carpentry Certification"
                                },
                                {
                                     id: "4",
                                    name: "Electrician",
                                    description: "Electrician Certification"
                                },
                                {    id: "5",
                                    name: "Mason",
                                    description: "Mason Certification"
                                },
                                {     id: "6",
                                     name: "Interior Design",
                                     description: "Interior Design Certification"
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
>>>>>>> 4d3b0dfc37cbb47af7bd1f45e91e69308e901b78

		const elanProfile = await prisma.createUserProfile({
			userAccountId: elan.id,
			email: elan.email,
			firstName: 'Elan',
			lastName: 'Riznis',
			profileImage: 'https://avatars1.githubusercontent.com/u/46504999?s=400&v=4',
			country: 'United States',
			state: 'New York',
			city: 'Harlem',
			address: '1919 West',
			zip: 10026,
			projects: {
				create: [
					{
						slug: 'providence-theater',
						name: 'Providence Theater',
						featuredImage:
							'https://res.cloudinary.com/revitalize/image/upload/v1571093185/seed%20images/Providence_Theater__32026116024_y5z9so.jpg',
						description:
							"The tower houses the theater entrance and box office. A vertical sign with the theater's name extends from the tower toward the street. Along the Warren facade, four single-story commercial spaces faced with painted yellow brick line the sidewalk; the facade of the theater proper above is set back.",
						country: 'United States',
						state: 'New York',
						address: '520 Eighth Ave',
						zip: 10018,
						city: 'New York',
						goalAmount: 150000,
						duration: 24,
						difficulty: 'Easy',
						startDate: '2019-10-09',
						donations: {
							create: [
								{
									profile: {
										connect: {
											id: frankProfile.id,
										},
									},
									amount: 50.23,
								},
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
									amount: 500.0,
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									amount: 2000.0,
								},
							],
						},
						likes: {
							create: [
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
								},
							],
						},
						comments: {
							create: [
								{
									profile: {
										connect: {
											id: frankProfile.id,
										},
									},
									comment: 'We miss Providence Theater!',
								},
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
									comment: 'This building is iconic!',
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									comment: 'Billy Joel was here',
								},
							],
						},
					},
					{
						slug: 'lake-dolores-waterpark',
						name: 'Lake Dolores Waterpark',
						description:
							'Lake Dolores Waterpark is an abandoned waterpark off Interstate 15 in the Mojave Desert in the community of Newberry Springs, California, United States. The waterpark had operated under numerous names in the past, including Lake Dolores, Rock–A–Hoola Waterpark, and Discovery Waterpark.',
						featuredImage:
							'https://res.cloudinary.com/revitalize/image/upload/v1571252406/seed%20images/rock-a-hoola_juzsww.jpg',
						country: 'United States',
						state: 'California',
						address: 'Dolores Lake, California 92365',
						zip: 92365,
						city: 'Newberry Springs',
						goalAmount: 100000,
						duration: 24,
						difficulty: 'Easy',
						startDate: '2019-10-09',
						donations: {
							create: [
								{
									profile: {
										connect: {
											id: frankProfile.id,
										},
									},
									amount: 50.23,
								},
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
									amount: 500.0,
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									amount: 2000.0,
								},
							],
						},
						likes: {
							create: [
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
								},
							],
						},
						comments: {
							create: [
								{
									profile: {
										connect: {
											id: frankProfile.id,
										},
									},
									comment: 'We miss Providence Theater!',
								},
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
									comment: 'This building is iconic!',
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									comment: 'Billy Joel was here',
								},
							],
						},
					},
				],
			},
		});

<<<<<<< HEAD
		const clarkProfile = await prisma.createUserProfile({
			userAccountId: clark.id,
			email: clark.email,
			firstName: 'Clark',
			lastName: 'Williams',
			profileImage: 'https://avatars3.githubusercontent.com/u/48037077?s=400&v=4',
			country: 'United States',
			state: 'Utah',
			city: 'Salt Lake City',
			address: '1919 West',
			zip: 84044,
			projects: {
				create: [
					{
						slug: 'cottonwood-paper-mill',
						name: 'Cottonwood Paper Mill',
						featuredImage:
							'https://res.cloudinary.com/revitalize/image/upload/v1571093246/seed%20images/Cottonwood_Paper_Mill_3_uqwbxa.jpg',
						description:
							"The tower houses the theater entrance and box office. A vertical sign with the theater's name extends from the tower toward the street. Along the Warren facade, four single-story commercial spaces faced with painted yellow brick line the sidewalk; the facade of the theater proper above is set back.",
						country: 'United States',
						state: 'Utah',
						address: '6900 S Big Cottonwood Canyon Rd',
						zip: 84121,
						city: 'Cottonwood Heights',
						goalAmount: 110000,
						duration: 24,
						difficulty: 'Easy',
						startDate: '2019-10-09',
						donations: {
							create: [
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									amount: 2000.0,
								},
							],
						},
						likes: {
							create: [
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
								},
							],
						},
						comments: {
							create: [
								{
									profile: {
										connect: {
											id: frankProfile.id,
										},
									},
									comment: 'We miss Cottonwood Paper Mill!',
								},
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
									comment: 'This building is iconic!',
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									comment: "Let's make some paper!",
								},
							],
						},
					},
					{
						slug: 'keddy-mill',
						name: 'Keddy Mill',
						featuredImage:
							'https://res.cloudinary.com/revitalize/image/upload/v1571629628/seed%20images/3_fivqi8.jpg',
						description:
							'Constructed in the early 1900s, Keddy Mill is a little known abandoned industrial complex. The Keddy Mill company began a metal manufacturing operation in the 1960s that continued well into the 1970s. During its operational years, the mill ran on hydroelectricity but has been abandoned for decades',
						country: 'United States',
						state: 'Maine',
						address: '7 Depot St.',
						zip: 14062,
						city: 'Windham',
						goalAmount: 250000,
						duration: 150,
						difficulty: 'Medium',
						startDate: '2020-6-1',
						donations: {
							create: [
								{
									profile: {
										connect: {
											id: frankProfile.id,
										},
									},
									amount: 1950.0,
								},
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
									amount: 12000.0,
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									amount: 100000.0,
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									amount: 15000.0,
								},
							],
						},
						likes: {
							create: [
								{
									profile: {
										connect: {
											id: frankProfile.id,
										},
									},
								},
							],
						},
						comments: {
							create: [
								{
									profile: {
										connect: {
											id: frankProfile.id,
										},
									},
									comment: 'What a beautiful building. Wish you the best in your endeavor.',
								},
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
									comment: 'Amazing architecture. Good luck.',
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									comment: 'Please donate to this amazing project. This is so cool.',
								},
							],
						},
					},
					{
						slug: 'elsinore-naval-and-military-school',
						name: 'Elsinore Naval and Military School',
						featuredImage:
							'https://res.cloudinary.com/revitalize/image/upload/v1571629571/seed%20images/NEJ_8793_vrtbu0.jpg',
						description:
							'Originally built as Southern California Athletic and Country Club in 1924. The Club was meant to cater to the wealthy and famous personalities of the 1920s. Although the facilities were completed, the Country Club never opened due to financial problems and the coming Depression. At a later date it was repurposed as a school and the name changed to the Elsinore Naval and Military School and operations continued with the school finally closing its doors in 1977.',
						country: 'United States',
						state: 'California',
						address: '15891 Grand Ave',
						zip: 92530,
						city: 'Lake Elsinore',
						goalAmount: 250000,
						duration: 150,
						difficulty: 'Medium',
						startDate: '2020-6-1',
						donations: {
							create: [
								{
									profile: {
										connect: {
											id: frankProfile.id,
										},
									},
									amount: 1950.0,
								},
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
									amount: 12000.0,
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									amount: 100000.0,
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									amount: 15000.0,
								},
							],
						},
						likes: {
							create: [
								{
									profile: {
										connect: {
											id: frankProfile.id,
										},
									},
								},
							],
						},
						comments: {
							create: [
								{
									profile: {
										connect: {
											id: frankProfile.id,
										},
									},
									comment: 'What a beautiful building. Wish you the best in your endeavor.',
								},
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
									comment: 'Amazing architecture. Good luck.',
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									comment: 'Please donate to this amazing project. This is so cool.',
								},
							],
						},
					},
					{
						slug: 'hart-island',
						name: 'Hart Island',
						featuredImage:
							'https://res.cloudinary.com/revitalize/image/upload/v1571629444/seed%20images/3269859182_ce38a3f4f6_b_dnmlc5.jpg',
						description:
							"The island's first public use was as a training ground for the United States Colored Troops in 1864. Since then, Hart Island has been the location of a Union Civil War prison camp, a psychiatric institution, a tuberculosis sanatorium, a potter's field, a homeless shelter, a boys' reformatory, a jail, and a drug rehabilitation center. Several other structures, such as an amusement park, were planned for Hart Island but not built. During the Cold War, Nike defense missiles were stationed on Hart Island. The island was intermittently used as a prison and a homeless shelter until 1967, and the last inhabited structures were abandoned in 1977.",
						country: 'United States',
						state: 'New York',
						address: 'Long Island Sound',
						zip: 10464,
						city: 'Bronx',
						goalAmount: 250000,
						duration: 150,
						difficulty: 'Medium',
						startDate: '2020-6-1',
						donations: {
							create: [
								{
									profile: {
										connect: {
											id: frankProfile.id,
										},
									},
									amount: 1950.0,
								},
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
									amount: 12000.0,
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									amount: 100000.0,
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									amount: 15000.0,
								},
							],
						},
						likes: {
							create: [
								{
									profile: {
										connect: {
											id: frankProfile.id,
										},
									},
								},
							],
						},
						comments: {
							create: [
								{
									profile: {
										connect: {
											id: frankProfile.id,
										},
									},
									comment: 'What a beautiful building. Wish you the best in your endeavor.',
								},
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
									comment: 'Amazing architecture. Good luck.',
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									comment: 'Please donate to this amazing project. This is so cool.',
								},
							],
						},
					},
					{
						slug: 'chemung-mine',
						name: 'Chemung Mine',
						description:
							'Chemung Mine. Located near the ghost town of Masonic, CA, the Chemung Mine was founded in 1909. It was reputedly a good producer of gold (although the area was consistently overshadowed by the mining operations in Bodie), but legal issues were a constant problem.',
						featuredImage:
							'https://res.cloudinary.com/revitalize/image/upload/v1571252755/seed%20images/chemung_mine_whyr8b.jpg',
						country: 'United States',
						state: 'California',
						address: 'Bridgeport, California 93517',
						zip: 93517,
						city: 'Bridgeport',
						goalAmount: 220000,
						duration: 24,
						difficulty: 'Medium',
						startDate: '2019-10-09',
						donations: {
							create: [
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									amount: 2000.0,
								},
							],
						},
						likes: {
							create: [
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
								},
							],
						},
						comments: {
							create: [
								{
									profile: {
										connect: {
											id: frankProfile.id,
										},
									},
									comment: 'We miss Cottonwood Paper Mill!',
								},
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
									comment: 'This building is iconic!',
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									comment: "Let's make some paper!",
								},
							],
						},
					},
					{
						slug: 'fox-theatre',
						name: 'Fox Theatre',
						featuredImage:
							'https://afterthefinalcurtain.files.wordpress.com/2015/09/fox-theatre-inglewood_13.jpg?w=764&h=509',
						description:
							'Built in 1949 on the site of another theater that burned down, the Fox Theatre closed permanently in 1988 but the Inglewood Fox Theatre Alliance was able to get the theater listed on the National Register of Historic Places and hopes to restore it one day.',
						country: 'United States',
						state: 'California',
						address: '115 N. Market St.',
						zip: 30308,
						city: 'Inglewood',
						goalAmount: 250000,
						duration: 150,
						difficulty: 'Medium',
						startDate: '2020-6-1',
						donations: {
							create: [
								{
									profile: {
										connect: {
											id: frankProfile.id,
										},
									},
									amount: 1950.0,
								},
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
									amount: 12000.0,
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									amount: 100000.0,
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									amount: 15000.0,
								},
							],
						},
						likes: {
							create: [
								{
									profile: {
										connect: {
											id: frankProfile.id,
										},
									},
								},
							],
						},
						comments: {
							create: [
								{
									profile: {
										connect: {
											id: frankProfile.id,
										},
									},
									comment: 'What a beautiful building. Wish you the best in your endeavor.',
								},
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
									comment: 'Amazing architecture. Good luck.',
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									comment: 'Please donate to this amazing project. This is so cool.',
								},
							],
						},
					},
					{
						slug: 'uptown-theatre',
						name: 'Uptown Theatre',
						featuredImage:
							'https://res.cloudinary.com/revitalize/image/upload/v1571351292/seed%20images/uptown_hcp9fp.jpg',
						description:
							'Opened less than a year before the 1929 stock market crash, the Uptown Theatre operated as a live music venue until the 1970s hosting acts like the Jackson 5, the Temptations, Ray Charles, Stevie Wonder and more. ',
						country: 'United States',
						state: 'Pennsylvania',
						address: '2240 N. Broad Street',
						zip: 19132,
						city: 'Philadelphia',
						goalAmount: 250000,
						duration: 150,
						difficulty: 'Medium',
						startDate: '2020-6-1',
						donations: {
							create: [
								{
									profile: {
										connect: {
											id: frankProfile.id,
										},
									},
									amount: 1950.0,
								},
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
									amount: 12000.0,
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									amount: 100000.0,
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									amount: 15000.0,
								},
							],
						},
						likes: {
							create: [
								{
									profile: {
										connect: {
											id: frankProfile.id,
										},
									},
								},
							],
						},
						comments: {
							create: [
								{
									profile: {
										connect: {
											id: frankProfile.id,
										},
									},
									comment: 'What a beautiful building. Wish you the best in your endeavor.',
								},
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
									comment: 'Amazing architecture. Good luck.',
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									comment: 'Please donate to this amazing project. This is so cool.',
								},
							],
						},
					},
					{
						slug: 'loews-canal-theatre',
						name: 'Loews Canal Theatre',
						featuredImage:
							'https://wswd-wordpress-production.s3.amazonaws.com/content/uploads/2017/03/blog-matt-lambros-courtesy-of-matt-lambros4.jpg',
						description:
							"Loew's Canal Theatre opened in 1927 and on September 10, 1932, an explosion threw the theater's ticket booth into the street and shattered windows on neighboring buildings. An hour earlier, another bomb destroyed the entrance to the Loew's 46th Street Theatre. While nothing was ever proven, both explosions were assumed to be the work of the Motion Picture Operators' Union Local 306, who were on strike at the time.",
						country: 'United States',
						state: 'New York',
						address: '31 Canal Street',
						zip: 10002,
						city: 'New York',
						goalAmount: 250000,
						duration: 150,
						difficulty: 'Medium',
						startDate: '2020-6-1',
						donations: {
							create: [
								{
									profile: {
										connect: {
											id: frankProfile.id,
										},
									},
									amount: 1950.0,
								},
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
									amount: 12000.0,
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									amount: 100000.0,
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									amount: 15000.0,
								},
							],
						},
						likes: {
							create: [
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
								},
							],
						},
						comments: {
							create: [
								{
									profile: {
										connect: {
											id: frankProfile.id,
										},
									},
									comment: 'What a beautiful building. Wish you the best in your endeavor.',
								},
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
									comment: 'Amazing architecture. Good luck.',
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									comment: 'Please donate to this amazing project. This is so cool.',
								},
							],
						},
					},
					{
						slug: 'medfield-state-hospital',
						name: 'Medfield State Hospital',
						featuredImage:
							'https://res.cloudinary.com/revitalize/image/upload/v1571629370/seed%20images/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzL2NjYTg4N2Y3NmNkMjZiMGViNV9JTUdfMTA1OC5KUEciXSxbInAiLCJ0aHVtYiIsIjEyMDB4PiJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA4MSAtYXV0by1vcmllbnQiXV0_so4dn9.jpg',
						description:
							'Medfield State Hospital was founded in 1892, and for over 100 years served as a self-sustaining institution and community for thousands of mentally ill patients until closing its doors in 2003.',
						country: 'United States',
						state: 'Massachusetts',
						address: '45 Hospital Rd',
						zip: 12052,
						city: 'Medfield',
						goalAmount: 250000,
						duration: 150,
						difficulty: 'Medium',
						startDate: '2020-6-1',
						donations: {
							create: [
								{
									profile: {
										connect: {
											id: frankProfile.id,
										},
									},
									amount: 1950.0,
								},
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
									amount: 12000.0,
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									amount: 100000.0,
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									amount: 15000.0,
								},
							],
						},
						likes: {
							create: [
								{
									profile: {
										connect: {
											id: frankProfile.id,
										},
									},
								},
							],
						},
						comments: {
							create: [
								{
									profile: {
										connect: {
											id: frankProfile.id,
										},
									},
									comment: 'What a beautiful building. Wish you the best in your endeavor.',
								},
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
									comment: 'Amazing architecture. Good luck.',
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									comment: 'Please donate to this amazing project. This is so cool.',
								},
							],
						},
					},
				],
			},
		});

		const joseProfile = await prisma.createUserProfile({
			userAccountId: jose.id,
			email: jose.email,
			firstName: 'Jose',
			lastName: 'Montero',
			profileImage: 'https://avatars1.githubusercontent.com/u/25395103?s=400&v=4',
			country: 'United States',
			state: 'Illinois',
			city: 'Chicago',
			address: '912 North',
			zip: 60614,
			projects: {
				create: [
					{
						slug: 'edgewater-medical-center',
						name: 'Edgewater Medical Center',
						featuredImage:
							'https://res.cloudinary.com/revitalize/image/upload/v1571093299/seed%20images/extralarge_sdpmaw.jpg',
						description:
							'A healthy portion of large abandoned buildings that urban explorers seek out are left behind after major changes in economic markets, competition and innovation leave stagnant companies behind. That is not the case with Edgewater Medical Center. What sets this building apart from other urbex locations is that it was created by criminal acts over an extended period of time. Even though the hospital was dated, they were still operating in a capacity that for the most part benefitted patients. By the time the FBI discovered the corruption it had already metastasized and killed Edgewater Medical Center.',
						country: 'United States',
						state: 'Illinois',
						address: '1621-1623 W Edgewater Ave',
						zip: 60660,
						city: 'Chicago',
						goalAmount: 350000,
						duration: 24,
						difficulty: 'Easy',
						startDate: '2019-10-09',
						donations: {
							create: [
								{
									profile: {
										connect: {
											id: frankProfile.id,
										},
									},
									amount: 50.23,
								},
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
									amount: 500.0,
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									amount: 2000.0,
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									amount: 10000.0,
								},
							],
						},
						likes: {
							create: [
								{
									profile: {
										connect: {
											id: clarkProfile.id,
										},
									},
								},
							],
						},
						comments: {
							create: [
								{
									profile: {
										connect: {
											id: frankProfile.id,
										},
									},
									comment: 'Looks like a fantastic building!!',
								},
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
									comment: 'This building is iconic!',
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									comment: 'What an awesome project',
								},
							],
						},
					},
					{
						slug: 'industrial-national-bank-building',
						name: 'Industrial National Bank Building',
						featuredImage:
							'https://res.cloudinary.com/revitalize/image/upload/v1571629874/seed%20images/C7C7A40E-B26D-45EB-9E27-82A2A0E36A52_vb20dk.jpg',
						description:
							'The Superman building, as it is commonly called by locals, is a distinct part of the Providence skyline and an iconic Rhode Island building. Officially titled the Industrial National Bank Building, it sits 428 feet tall, making it the tallest building in the state. The structure, completed in 1928, was built in an Art Deco style and bears striking similarity to the Daily Planet building from Superman. The last tenant was Bank of America, who chose not to renew its lease and vacated in 2013. Since then, the building has remained empty.',
						country: 'United States',
						state: 'Rhode Island',
						address: '111 Westminster St',
						zip: 32903,
						city: 'Providence',
						goalAmount: 2500000,
						duration: 150,
						difficulty: 'Medium',
						startDate: '2020-6-1',
						donations: {
							create: [
								{
									profile: {
										connect: {
											id: frankProfile.id,
										},
									},
									amount: 19500.0,
								},
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
									amount: 1200000.0,
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									amount: 3000000.0,
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									amount: 15000.0,
								},
							],
						},
						likes: {
							create: [
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
								},
							],
						},
						comments: {
							create: [
								{
									profile: {
										connect: {
											id: frankProfile.id,
										},
									},
									comment: 'What a beautiful building. Wish you the best in your endeavor.',
								},
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
									comment: 'Amazing architecture. Good luck.',
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									comment: 'Please donate to this amazing project. This is so cool.',
								},
							],
						},
					},
					{
						slug: 'abundant-life-building',
						name: 'Abundant Life Building',
						featuredImage:
							'https://res.cloudinary.com/revitalize/image/upload/v1571630420/seed%20images/14945430933_71a8eb853b_k_1_tjjcp1.jpg',
						description:
							'One of the most unusual and fascinating buildings in Tulsa is a huge, windowless, seven-story concrete block sitting empty in south downtown. Abandoned, dark, and in a state of decay, the Abundant Life Building could not be less like its name Of course, it didn’t start out that way. It was designed in 1958 during the midcentury trend toward modernist, futuristic architecture. It was built as the world headquarters for the Oral Roberts Ministries, which at the time was a gigantic televangelist enterprise reaching millions of followers around the globe. By the middle of the 1960s, however, Oral Roberts had moved his operation to the new university he founded in his name. By the early ‘70s, Abundant Life was completely abandoned. It has sat empty for decades, boarded up and closed to the public.',
						country: 'United States',
						state: 'Oklahoma',
						address: '1720 S Boulder Ave',
						zip: 74119,
						city: 'Tulsa',
						goalAmount: 250000,
						duration: 150,
						difficulty: 'Medium',
						startDate: '2020-6-1',
						donations: {
							create: [
								{
									profile: {
										connect: {
											id: frankProfile.id,
										},
									},
									amount: 1950.0,
								},
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
									amount: 12000.0,
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									amount: 100000.0,
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									amount: 15000.0,
								},
							],
						},
						likes: {
							create: [
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
								},
							],
						},
						comments: {
							create: [
								{
									profile: {
										connect: {
											id: frankProfile.id,
										},
									},
									comment: 'What a beautiful building. Wish you the best in your endeavor.',
								},
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
									comment: 'Amazing architecture. Good luck.',
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									comment: 'Please donate to this amazing project. This is so cool.',
								},
							],
						},
					},
					{
						slug: 'general-laundry-building',
						name: 'General Laundry Building',
						featuredImage:
							'https://res.cloudinary.com/revitalize/image/upload/v1571630509/seed%20images/gl2_potkkm.jpg',
						description:
							'Splashes of color stand out among the rest of this abandoned building’s decaying, vandalized exterior. The bright pigment and intricate designs peeking out from behind tangles of vines and weeds hint that this Art Deco gem was no ordinary laundry facility.Built in the 1930s, the General Laundry Building is an example of Art Deco architecture. As its artful exterior suggests, the building was for more than washing clothes. During its heyday, the laundromat hosted monthly fashion shows. With the invention of the in-home modern washing machine, Chapoit closed the facilities in 1945 and sold the building.',
						country: 'United States',
						state: 'Louisiana',
						address: '2544 St Peter St',
						zip: 70119,
						city: 'New Orleans',
						goalAmount: 250000,
						duration: 150,
						difficulty: 'Medium',
						startDate: '2020-6-1',
						donations: {
							create: [
								{
									profile: {
										connect: {
											id: frankProfile.id,
										},
									},
									amount: 1950.0,
								},
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
									amount: 12000.0,
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									amount: 100000.0,
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									amount: 15000.0,
								},
							],
						},
						likes: {
							create: [
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
								},
							],
						},
						comments: {
							create: [
								{
									profile: {
										connect: {
											id: frankProfile.id,
										},
									},
									comment: 'What a beautiful building. Wish you the best in your endeavor.',
								},
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
									comment: 'Amazing architecture. Good luck.',
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									comment: 'Please donate to this amazing project. This is so cool.',
								},
							],
						},
					},
					{
						slug: 'wonder-bread-factory',
						name: 'Wonder Bread Factory',
						featuredImage:
							'https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzLzk1NDA0OTZhLWI3ZDUtNGU4Zi04NGM1LTZhOTExZjBkNTA1MzM5YWNjM2UyOTA2OGYyYWI5Y19JTUdfMDI2NS5qcGciXSxbInAiLCJ0aHVtYiIsIjEyMDB4PiJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA4MSAtYXV0by1vcmllbnQiXV0/IMG_0265.jpg',
						description:
							'The Wonder Bread factory, built in 1923, was once an industrial icon of Buffalo’s East Side. While it was in operation, the facility produced that classic mid century staple, as well as Hostess brand snacks. The factory closed in 2004, and has sat empty ever since, in an ever-worsening state of decay.',
						country: 'United States',
						state: 'New York',
						address: '313 Fugerson St',
						zip: 14211,
						city: 'Buffalo',
						goalAmount: 250000,
						duration: 150,
						difficulty: 'Medium',
						startDate: '2020-6-1',
						donations: {
							create: [
								{
									profile: {
										connect: {
											id: frankProfile.id,
										},
									},
									amount: 1950.0,
								},
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
									amount: 12000.0,
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									amount: 100000.0,
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									amount: 15000.0,
								},
							],
						},
						likes: {
							create: [
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
								},
							],
						},
						comments: {
							create: [
								{
									profile: {
										connect: {
											id: frankProfile.id,
										},
									},
									comment: 'What a beautiful building. Wish you the best in your endeavor.',
								},
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
									comment: 'Amazing architecture. Good luck.',
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									comment: 'Please donate to this amazing project. This is so cool.',
								},
							],
						},
					},
					{
						slug: 'neponsit-health-care-center',
						name: 'Neponsit Health Care Center',
						featuredImage:
							'https://res.cloudinary.com/revitalize/image/upload/v1571630232/seed%20images/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzL2NjODRjYzE1MDkzNWExMDBiNV9JTUdfMTM2My5KUEciXSxbInAiLCJ0aHVtYiIsIjEyMDB4PiJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA4MSAtYXV0by1vcmllbnQiXV0_fbsnac.jpg',
						description:
							'Built in 1918, the hospital was home to about 200 stricken children recuperating in the clean, bracing air of the Atlantic. As the dangers of TB waned in the 20th century, the hospital was turned into a care home for the elderly and Alzheimer’s patients. Disaster struck on September 7th, 1998, when a strong storm battered the Rockaway coastline. The Neponsit hospital was badly hit to the point where it was thought that it was in imminent danger of collapsing.',
						country: 'United States',
						state: 'New York',
						address: '149-25 Rockaway Beach Blvd',
						zip: 11694,
						city: 'Queens',
						goalAmount: 350000,
						duration: 150,
						difficulty: 'Medium',
						startDate: '2020-6-1',
						donations: {
							create: [
								{
									profile: {
										connect: {
											id: frankProfile.id,
										},
									},
									amount: 214950.0,
								},
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
									amount: 12000.0,
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									amount: 100000.0,
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									amount: 15000.0,
								},
							],
						},
						likes: {
							create: [
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
								},
							],
						},
						comments: {
							create: [
								{
									profile: {
										connect: {
											id: frankProfile.id,
										},
									},
									comment: 'What a beautiful building. Wish you the best in your endeavor.',
								},
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
									comment: 'Amazing architecture. Good luck.',
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									comment: 'Please donate to this amazing project. This is so cool.',
								},
							],
						},
					},
					{
						slug: 'seaside-sanatorium',
						name: 'Seaside Sanatorium',
						featuredImage:
							'https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzLzFjOTA1NWVkLTMzZmYtNDc5NC04NGQ5LTdmZGZjNDMwNjYxN2ZkMTdlMmZiNWU3ZDJkNTQzM18zQTQyNjI1Qi1BNDA0LTQwMTQtODAxNi0yRTNDQkY2OUEyM0UuanBlZyJdLFsicCIsInRodW1iIiwiMTIwMHg-Il0sWyJwIiwiY29udmVydCIsIi1xdWFsaXR5IDgxIC1hdXRvLW9yaWVudCJdXQ/3A42625B-A404-4014-8016-2E3CBF69A23E.jpeg',
						description:
							'This brick fortress, designed in 1934 by architect Cass Gilbert, was America’s first medical facility designed to offer heliotropic treatment to children with tuberculosis. As such, the building’s role would shift several times over the next six decades before it was added to the National Register of Historic Places in 1995.',
						country: 'United States',
						state: 'Connecticut',
						address: '36 Shore Road',
						zip: 16835,
						city: 'Waterford',
						goalAmount: 250000,
						duration: 150,
						difficulty: 'Medium',
						startDate: '2020-6-1',
						donations: {
							create: [
								{
									profile: {
										connect: {
											id: frankProfile.id,
										},
									},
									amount: 1950.0,
								},
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
									amount: 12000.0,
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									amount: 100000.0,
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									amount: 15000.0,
								},
							],
						},
						likes: {
							create: [
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
								},
							],
						},
						comments: {
							create: [
								{
									profile: {
										connect: {
											id: frankProfile.id,
										},
									},
									comment: 'What a beautiful building. Wish you the best in your endeavor.',
								},
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
									comment: 'Amazing architecture. Good luck.',
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									comment: 'Please donate to this amazing project. This is so cool.',
								},
							],
						},
					},
					{
						slug: 'annie-lytle-elementary-school',
						name: 'Annie Lytle Elementary School',
						featuredImage:
							'https://res.cloudinary.com/revitalize/image/upload/v1571630731/seed%20images/Screen_Shot_2017-01-03_at_5.22.10_PM_udcray.png',
						description:
							'Built in 1915, this gigantic schoolhouse was originally christened as Public School Number Four, but was renamed Annie Lytle Elementary in 1957 in honor of a former principal. Unfortunately, the school only got to live under its new name for a few years before it was shuttered and abandoned.',
						country: 'United States',
						state: 'Florida',
						address: '699 Chelsea Ave',
						zip: 32204,
						city: 'Jacksonville',
						goalAmount: 250000,
						duration: 150,
						difficulty: 'Medium',
						startDate: '2020-6-1',
						donations: {
							create: [
								{
									profile: {
										connect: {
											id: frankProfile.id,
										},
									},
									amount: 1950.0,
								},
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
									amount: 12000.0,
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									amount: 100000.0,
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									amount: 15000.0,
								},
							],
						},
						likes: {
							create: [
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
								},
							],
						},
						comments: {
							create: [
								{
									profile: {
										connect: {
											id: frankProfile.id,
										},
									},
									comment: 'What a beautiful building. Wish you the best in your endeavor.',
								},
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
									comment: 'Amazing architecture. Good luck.',
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									comment: 'Please donate to this amazing project. This is so cool.',
								},
							],
						},
					},
					{
						slug: 'comet-diner',
						name: 'Comet Diner',
						featuredImage:
							'https://res.cloudinary.com/revitalize/image/upload/v1571630606/seed%20images/IMG_2347_copy_r3fnfr.jpg',
						description:
							'Just down the street from Mark Twain’s house and museum in Hartford, Connecticut, is one of the city’s other most recognizable buildings, a vintage chrome and steel diner, glinting in the sun. The old Comet Diner, however, has been sadly left abandoned for nearly two years.',
						country: 'United States',
						state: 'Connecticut',
						address: '267 Farmington Ave',
						zip: 16105,
						city: 'Hartford',
						goalAmount: 250000,
						duration: 150,
						difficulty: 'Medium',
						startDate: '2020-6-1',
						donations: {
							create: [
								{
									profile: {
										connect: {
											id: frankProfile.id,
										},
									},
									amount: 1950.0,
								},
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
									amount: 12000.0,
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									amount: 100000.0,
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									amount: 15000.0,
								},
							],
						},
						likes: {
							create: [
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
								},
							],
						},
						comments: {
							create: [
								{
									profile: {
										connect: {
											id: frankProfile.id,
										},
									},
									comment: 'What a beautiful building. Wish you the best in your endeavor.',
								},
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
									comment: 'Amazing architecture. Good luck.',
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									comment: 'Please donate to this amazing project. This is so cool.',
								},
							],
						},
					},
=======
        const elanProfile = await prisma.createUserProfile({
            userAccountId: elan.id,
            email: elan.email,
            firstName: "Elan",
            lastName: "Riznis",
            profileImage: "https://avatars1.githubusercontent.com/u/46504999?s=400&v=4",
            country: "United States",
            state: "New York",
            city: "Harlem",
            address: "1919 West",
            zip: 10026,
            projects: {
                create: [
                    {
                        slug: 'providence-theater',
                        name: 'Providence Theater',
                        featuredImage: 'https://res.cloudinary.com/revitalize/image/upload/v1571093185/seed%20images/Providence_Theater__32026116024_y5z9so.jpg',
                        description: 'The tower houses the theater entrance and box office. A vertical sign with the theater\'s name extends from the tower toward the street. Along the Warren facade, four single-story commercial spaces faced with painted yellow brick line the sidewalk; the facade of the theater proper above is set back.',
                        country:'United States',
                        state: 'New York',
                        address: '520 Eighth Ave',
                        zip: 10018,
                        city: 'New York',
                        goalAmount: 150000,
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
                                {     id: "6",
                                     name: "Interior Design",
                                     description: "Interior Design Certification"
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
                    },
                    {
                        slug: 'lake-dolores-waterpark',
                        name: 'Lake Dolores Waterpark',
                        description: 'Lake Dolores Waterpark is an abandoned waterpark off Interstate 15 in the Mojave Desert in the community of Newberry Springs, California, United States. The waterpark had operated under numerous names in the past, including Lake Dolores, Rock–A–Hoola Waterpark, and Discovery Waterpark.',
                        featuredImage: 'https://res.cloudinary.com/revitalize/image/upload/v1571252406/seed%20images/rock-a-hoola_juzsww.jpg',
                        country:'United States',
                        state: 'California',
                        address: 'Dolores Lake, California 92365',
                        zip: 92365,
                        city: 'Newberry Springs',
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
                        trades: {
                            create: [
                                {
                                    id: "1",
                                    name: "HVAC",
                                    description: "HVAC Certification"
                                },
                                {    id: "5",
                                    name: "Mason",
                                    description: "Mason Certification"
                                },
                                {     id: "6",
                                     name: "Interior Design",
                                     description: "Interior Design Certification"
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
>>>>>>> 4d3b0dfc37cbb47af7bd1f45e91e69308e901b78

					{
						slug: 'jumping-jack-power-plant',
						name: 'Jumping Jack Power Plant',
						featuredImage:
							'https://res.cloudinary.com/revitalize/image/upload/v1571629980/seed%20images/1DE11DE8-1981-4647-A1D5-BE1AC1B5AF0E_kuxltp.jpg',
						description:
							'This abandoned power plant is tucked away along the Brooklyn waterfront. Dilapidated and looking as though it could crumble into itself at any moment, it stands like a ghostly reminder of the area’s industrial past. Not much is known about the decaying structure, beyond the fact that it was once either a power plant or pump house. Old papers found inside have led some to speculate that the plant was used up until the 1960s.',
						country: 'United States',
						state: 'New York',
						address: '4110 1st Ave',
						zip: 11232,
						city: 'Brooklyn',
						goalAmount: 450000,
						duration: 150,
						difficulty: 'Medium',
						startDate: '2020-6-1',
						donations: {
							create: [
								{
									profile: {
										connect: {
											id: frankProfile.id,
										},
									},
									amount: 11950.0,
								},
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
									amount: 120000.0,
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									amount: 100000.0,
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									amount: 15000.0,
								},
							],
						},
						likes: {
							create: [
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
								},
							],
						},
						comments: {
							create: [
								{
									profile: {
										connect: {
											id: frankProfile.id,
										},
									},
									comment: 'What a beautiful building. Wish you the best in your endeavor.',
								},
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
									comment: 'Amazing architecture. Good luck.',
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									comment: 'Please donate to this amazing project. This is so cool.',
								},
							],
						},
					},
					{
						slug: 'old-cahawba-archeological-park',
						name: 'Old Cahawba Archeological Park',
						featuredImage:
							'https://res.cloudinary.com/revitalize/image/upload/v1571629776/seed%20images/P1200654_tf0evk.jpg',
						description:
							'Cahawba (also known as Cahaba) was the state capital of Alabama from 1819 to 1826. It was also the county seat of Dallas County, Alabama, until 1866, at which point its population was a little under 2,000. But by 1900, most of Cahawba’s inhabitants had left. Its buildings were dismantled, their materials used elsewhere.',
						country: 'United States',
						state: 'Alabama',
						address: '9518 Cahaba Road',
						zip: 36767,
						city: 'Orrville',
						goalAmount: 250000,
						duration: 150,
						difficulty: 'Medium',
						startDate: '2020-6-1',
						donations: {
							create: [
								{
									profile: {
										connect: {
											id: frankProfile.id,
										},
									},
									amount: 1950.0,
								},
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
									amount: 12000.0,
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									amount: 100000.0,
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									amount: 15000.0,
								},
							],
						},
						likes: {
							create: [
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
								},
							],
						},
						comments: {
							create: [
								{
									profile: {
										connect: {
											id: frankProfile.id,
										},
									},
									comment: 'What a beautiful building. Wish you the best in your endeavor.',
								},
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
									comment: 'Amazing architecture. Good luck.',
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									comment: 'Please donate to this amazing project. This is so cool.',
								},
							],
						},
					},
					{
						slug: 'heritage-usa',
						name: 'Heritage USA',
						featuredImage:
							'https://res.cloudinary.com/revitalize/image/upload/v1571629707/seed%20images/20190715_132424_gnggvv.jpg',
						description:
							'Heritage USA was a Christian-themed amusement park opened in 1978 by televangelists Jim and Tammy Faye Bakker. At its peak, it was the third-largest park in the USA behind Disney World and DisneyLand, with almost 6 million visitors annually. Following various debilitating scandals and being heavily damaged by Hurricane Hugo it was shut down for good and still stands abandoned to this day.',
						country: 'United States',
						state: 'South Carolina',
						address: '375 Star Light Dr',
						zip: 29715,
						city: 'Fort Mill',
						goalAmount: 250000,
						duration: 150,
						difficulty: 'Medium',
						startDate: '2020-6-1',
						donations: {
							create: [
								{
									profile: {
										connect: {
											id: frankProfile.id,
										},
									},
									amount: 1950.0,
								},
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
									amount: 12000.0,
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									amount: 100000.0,
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									amount: 15000.0,
								},
							],
						},
						likes: {
							create: [
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
								},
							],
						},
						comments: {
							create: [
								{
									profile: {
										connect: {
											id: frankProfile.id,
										},
									},
									comment: 'What a beautiful building. Wish you the best in your endeavor.',
								},
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
									comment: 'Amazing architecture. Good luck.',
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									comment: 'Please donate to this amazing project. This is so cool.',
								},
							],
						},
					},
					{
						slug: 'calvary-university',
						name: 'Calvary University',
						featuredImage:
							'https://res.cloudinary.com/revitalize/image/upload/v1571336443/seed%20images/calvary_rqntdw.jpg',
						description:
							'Formerly the Fort Morgan Middle School, this building and adjacent land is currently owned and operated by Calvary University. The building, outbuildings and modulars, and land is all available as a package deal. The property is currently zoned transitional by the City of Fort Morgan and can be used for a variety of purposes such as businesses, single-family homes, multi-family units, church, etc.',
						country: 'United States',
						state: 'Colorado',
						address: '300 Deuel St',
						zip: 80701,
						city: 'Fort Morgan',
						goalAmount: 400000,
						duration: 150,
						difficulty: 'Easy',
						startDate: '2020-6-1',
						donations: {
							create: [
								{
									profile: {
										connect: {
											id: frankProfile.id,
										},
									},
									amount: 2950.0,
								},
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
									amount: 10000.0,
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									amount: 120000.0,
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									amount: 15000.0,
								},
							],
						},
						likes: {
							create: [
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
								},
							],
						},
						comments: {
							create: [
								{
									profile: {
										connect: {
											id: frankProfile.id,
										},
									},
									comment: 'What a beautiful building. Wish you the best in your endeavor.',
								},
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
									comment: 'Amazing architecture. Good luck.',
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									comment: 'Please donate to this amazing project. This is so cool.',
								},
							],
						},
					},
					{
						slug: 'zelda-fitzgeralds-sanatorium',
						name: 'Zelda Fitzgerald’s Sanatorium',
						featuredImage:
							'https://res.cloudinary.com/revitalize/image/upload/v1571629299/seed%20images/Zelda_Fitzgeralds_Abandoned_Sanatorium_3-823x420_nuzrjr.jpg',
						description:
							'Once built for the Civil War officer General Joseph Howland in 1859, and called Tioranda, the gothic house was turned into America’s first privately licensed psychiatric hospital in 1915. Closing its doors 16 years ago, it has lain abandoned ever since. Bordering the forests of the highlands overlooking the Hudson River, the hospital was surrounded by over 60 acres, including a now deserted swimming pool, gymnasium, and golf course.',
						country: 'United States',
						state: 'New York',
						address: '7 Craig House Lane',
						zip: 12508,
						city: 'Beacon',
						goalAmount: 250000,
						duration: 150,
						difficulty: 'Medium',
						startDate: '2020-6-1',
						donations: {
							create: [
								{
									profile: {
										connect: {
											id: frankProfile.id,
										},
									},
									amount: 1950.0,
								},
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
									amount: 12000.0,
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									amount: 100000.0,
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									amount: 15000.0,
								},
							],
						},
						likes: {
							create: [
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
								},
							],
						},
						comments: {
							create: [
								{
									profile: {
										connect: {
											id: frankProfile.id,
										},
									},
									comment: 'What a beautiful building. Wish you the best in your endeavor.',
								},
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
									comment: 'Amazing architecture. Good luck.',
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									comment: 'Please donate to this amazing project. This is so cool.',
								},
							],
						},
					},
					{
						slug: 'paramount-theatre',
						name: 'Paramount Theatre',
						featuredImage:
							'https://res.cloudinary.com/revitalize/image/upload/v1571351603/seed%20images/paramount_theatre_02_hignqq.jpg',
						description:
							"Originally called the H.C. Miner's Newark Theatre when it opened in 1886, the Paramount Theatre was remodeled and renamed in 1917 and operated until it closed in 1986 due to a hike in insurance rates.",
						country: 'United States',
						state: 'New Jersey',
						address: '195 Market Street',
						zip: 17012,
						city: 'Newark',
						goalAmount: 250000,
						duration: 150,
						difficulty: 'Medium',
						startDate: '2020-6-1',
						donations: {
							create: [
								{
									profile: {
										connect: {
											id: frankProfile.id,
										},
									},
									amount: 1950.0,
								},
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
									amount: 12000.0,
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									amount: 100000.0,
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									amount: 15000.0,
								},
							],
						},
						likes: {
							create: [
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
								},
							],
						},
						comments: {
							create: [
								{
									profile: {
										connect: {
											id: frankProfile.id,
										},
									},
									comment: 'What a beautiful building. Wish you the best in your endeavor.',
								},
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
									comment: 'Amazing architecture. Good luck.',
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									comment: 'Please donate to this amazing project. This is so cool.',
								},
							],
						},
					},
					{
						slug: 'echo-hose-ambulance-training',
						name: 'Echo Hose Ambulance Training',
						featuredImage:
							'https://res.cloudinary.com/revitalize/image/upload/v1571338032/seed%20images/kingsbury_wqta9e.jpg',
						description:
							'The Kingsbury Center provides a transformative educational and social experience for children and adults with learning differences. The Center uses action research to ensure best practices. The Kingsbury Keystones are three guiding principles that shape our dynamic teaching and learning environment to support the growth and development of students who have a range of learning challenges.',
						country: 'United States',
						state: 'Maryland',
						address: '5000 14th St NW',
						zip: 20011,
						city: 'Washington, DC',
						goalAmount: 250000,
						duration: 150,
						difficulty: 'Medium',
						startDate: '2020-6-1',
						donations: {
							create: [
								{
									profile: {
										connect: {
											id: frankProfile.id,
										},
									},
									amount: 1950.0,
								},
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
									amount: 12000.0,
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									amount: 100000.0,
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									amount: 15000.0,
								},
							],
						},
						likes: {
							create: [
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
								},
							],
						},
						comments: {
							create: [
								{
									profile: {
										connect: {
											id: frankProfile.id,
										},
									},
									comment: 'What a beautiful building. Wish you the best in your endeavor.',
								},
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
									comment: 'Amazing architecture. Good luck.',
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									comment: 'Please donate to this amazing project. This is so cool.',
								},
							],
						},
					},
					{
						slug: 'emery-theatre',
						name: 'Emery Theatre',
						featuredImage:
							'https://res.cloudinary.com/revitalize/image/upload/v1571338032/seed%20images/kingsbury_wqta9e.jpg',
						description:
							'The Emery Theatre, or Emery Auditorium, is a historic, acoustically exceptional theater located in the Over-the-Rhine neighborhood of Cincinnati, Ohio. The building was constructed in 1911 as the home for a trade school (the Ohio Mechanics Institute), but its large, impressive auditorium was intended for public use. The design of the Emery Theatre is based on the "is acoustic curve" principles that were first proposed by John Scott Russell. The theatre was built with two balconies and a total of 2,211 seats. It was one of the first concert halls in the United States to have no obstructed seats.',
						country: 'United States',
						state: 'Ohio',
						address: '1112 Walnut Street',
						zip: 41073,
						city: 'Cincinnati',
						goalAmount: 250000,
						duration: 150,
						difficulty: 'Medium',
						startDate: '2020-4-6',
						donations: {
							create: [
								{
									profile: {
										connect: {
											id: frankProfile.id,
										},
									},
									amount: 1950.0,
								},
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
									amount: 12000.0,
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									amount: 100000.0,
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									amount: 15000.0,
								},
							],
						},
						likes: {
							create: [
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
								},
							],
						},
						comments: {
							create: [
								{
									profile: {
										connect: {
											id: frankProfile.id,
										},
									},
									comment: 'What a beautiful building. Wish you the best in your endeavor.',
								},
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
									comment: 'Amazing architecture. Good luck.',
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									comment: 'Please donate to this amazing project. This is so cool.',
								},
							],
						},
					},
				],
			},
		});

<<<<<<< HEAD
		const kerryProfile = await prisma.createUserProfile({
			userAccountId: kerry.id,
			email: kerry.email,
			firstName: 'Kerry',
			lastName: 'McPhearson',
			profileImage:
				'https://avatars2.githubusercontent.com/u/32372095?s=400&u=213263fdc4bbfba59bbf43ca53009fd9aac15095&v=4',
			country: 'United States',
			state: 'Georgia',
			city: 'Atlanta',
			address: '3634 Limer Street',
			zip: 30303,
			projects: {
				create: [
					{
						slug: 'georgia-girl-drive-in',
						name: 'Georgia Girl Drive-In',
						featuredImage:
							'https://res.cloudinary.com/revitalize/image/upload/v1571093348/seed%20images/43467774685_5ca2f9fa81_b_qchgnz.jpg',
						description:
							'Just south of Woodbine, Georgia on the nearly forgotten stretch of highway known as US-17 sits the remains of the Georgia Girl Drive-In. The catchy old neon sign and rapidly crumbling building is all that remains of this once-groovy hangout from the 1960s.',
						country: 'United States',
						state: 'Georgia',
						address: '1602 GA-25',
						zip: 31569,
						city: 'Atlanta',
						goalAmount: 120000,
						duration: 24,
						difficulty: 'Easy',
						startDate: '2019-10-09',
						donations: {
							create: [
								{
									profile: {
										connect: {
											id: frankProfile.id,
										},
									},
									amount: 25550.23,
								},
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
									amount: 500.0,
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									amount: 2000.0,
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									amount: 10000.0,
								},
							],
						},
						likes: {
							create: [
								{
									profile: {
										connect: {
											id: clarkProfile.id,
										},
									},
								},
							],
						},
						comments: {
							create: [
								{
									profile: {
										connect: {
											id: frankProfile.id,
										},
									},
									comment: 'Looks like a fantastic building!!',
								},
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
									comment: 'This building is iconic!',
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									comment: 'What an awesome project',
								},
							],
						},
					},
					{
						slug: 'ano-nuevo-island',
						name: 'Año Nuevo Island',
						description:
							"Off the California coast between SF and Santa Cruz, the nine-acre Año Nuevo Island once served as a light station, but was abandoned in 1948. It's closed to the public, but has become home to hundreds of Northern elephant seals/endangered sea lions.",
						featuredImage:
							'https://res.cloudinary.com/revitalize/image/upload/v1571252989/seed%20images/ano_nuevo_island_itzrar.jpg',
						country: 'United States',
						state: 'California',
						address: 'Island in San Mateo County, California 94065',
						zip: 94065,
						city: 'Island in San Mateo County',
						goalAmount: 220000,
						duration: 24,
						difficulty: 'Medium',
						startDate: '2019-10-09',
						donations: {
							create: [
								{
									profile: {
										connect: {
											id: frankProfile.id,
										},
									},
									amount: 25550.23,
								},
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
									amount: 500.0,
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									amount: 2000.0,
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									amount: 10000.0,
								},
							],
						},
						likes: {
							create: [
								{
									profile: {
										connect: {
											id: clarkProfile.id,
										},
									},
								},
							],
						},
						comments: {
							create: [
								{
									profile: {
										connect: {
											id: frankProfile.id,
										},
									},
									comment: 'Looks like a fantastic building!!',
								},
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
									comment: 'This building is iconic!',
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									comment: 'What an awesome project',
								},
							],
						},
					},
					{
						slug: 'east-globe-school',
						name: 'East Globe School',
						featuredImage:
							'https://res.cloudinary.com/revitalize/image/upload/v1571335246/seed%20images/eastglobe_jlz3ij.jpg',
						description:
							'This facility consists of 2 buildings one built in 1945 and the other building built in 1906 and is the oldest school building in Globe and has not been used for school purposes since 2009. Each building is constructed with poured concrete, foam-covered roofs and formerly an East Globe Elementary school. These structures are located on a rectangular-shaped full city block, with this entire perimeter covered with 6 foot chain-link metal fencing. The first building has 3 floors each measuring some 5,000 sf. THE FRONT BUILDING faces on U.S. 60 which is named Ash Avenue as it runs through Globe, AZ and has a total of 15,000 sf. The first floor currently contains administrative offices for a (a) Student Reception area, (b) A School Principal & (c) A School Nurse. These offices are served by a central air conditioning/heating unit and on the same first floor of the building there are five large classrooms which have an evaporative cooling system with forced air heat. Additionally, there are both men and women bathrooms on the ground floor here, along with blackboards and other school accessories in each classroom. Further, all three floors of this building have tile flooring in the rooms and polished cement in the outside hallways. THE SECOND FLOOR in this front building contains a total of 6 classrooms. The third floor has three large rooms, all three of these floors each containing 5,000 sf of space.',
						country: 'United States',
						state: 'Arizona',
						address: '439 S Fourth St',
						zip: 85501,
						city: 'Globe',
						goalAmount: 300000,
						duration: 120,
						difficulty: 'Easy',
						startDate: '2020-5-1',
						donations: {
							create: [
								{
									profile: {
										connect: {
											id: frankProfile.id,
										},
									},
									amount: 1950.0,
								},
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
									amount: 11400.0,
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									amount: 120000.0,
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									amount: 25000.0,
								},
							],
						},
						likes: {
							create: [
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
								},
							],
						},
						comments: {
							create: [
								{
									profile: {
										connect: {
											id: frankProfile.id,
										},
									},
									comment: 'What a beautiful building. Wish you the best in your endeavor.',
								},
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
									comment: 'Amazing architecture. Good luck.',
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									comment: 'Please donate to this amazing project. This is so cool.',
								},
							],
						},
					},
					{
						slug: 'kings-theatre',
						name: 'Kings Theatre',
						featuredImage:
							'https://res.cloudinary.com/revitalize/image/upload/v1571350991/seed%20images/4793943088_ba279e5e41_b_erbein.jpg',
						description:
							'One of five Loew\'s "wonder" theaters opened in New York and New Jersey just before the Great Depression hit, Brooklyn\'s Kings Theatre became abandoned in 1977. ',
						country: 'United States',
						state: 'New York',
						address: '1027 Flatbush Avenue ',
						zip: 11226,
						city: 'Brooklyn',
						goalAmount: 250000,
						duration: 150,
						difficulty: 'Medium',
						startDate: '2020-6-1',
						donations: {
							create: [
								{
									profile: {
										connect: {
											id: frankProfile.id,
										},
									},
									amount: 1950.0,
								},
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
									amount: 12000.0,
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									amount: 100000.0,
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									amount: 15000.0,
								},
							],
						},
						likes: {
							create: [
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
								},
							],
						},
						comments: {
							create: [
								{
									profile: {
										connect: {
											id: frankProfile.id,
										},
									},
									comment: 'What a beautiful building. Wish you the best in your endeavor.',
								},
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
									comment: 'Amazing architecture. Good luck.',
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									comment: 'Please donate to this amazing project. This is so cool.',
								},
							],
						},
					},
				],
			},
		});

		const alexanderProfile = await prisma.createUserProfile({
			userAccountId: alexander.id,
			email: alexander.email,
			firstName: 'Alexander',
			lastName: 'Piroumian',
			profileImage: 'https://avatars3.githubusercontent.com/u/43027065?s=400&v=4',
			country: 'United States',
			state: 'California',
			city: 'Palmdale',
			address: '667 Williams Avenue',
			zip: 93552,
			projects: {
				create: [
					{
						slug: 'hawthorne-mall',
						name: 'Hawthorne Mall',
						featuredImage:
							'https://res.cloudinary.com/revitalize/image/upload/v1571093414/seed%20images/maxresdefault_gevrek.jpg',
						description:
							"Hawthorne Plaza is a dead mall along Hawthorne Boulevard between 120th Street and El Segundo Blvd in Hawthorne, California. The 40-acre (16 ha) property opened in 1977 and included an indoor mall and free standing stores at the property's south end. The mall largely catered to the middle class residents living in and around Hawthorne and featured cheaper stores than other nearby malls such as South Bay Galleria and Manhattan Village.",
						country: 'United States',
						state: 'California',
						address: '12000 Hawthorne Blvd. ',
						zip: 90250,
						city: 'Hawthorne',
						goalAmount: 200000,
						duration: 24,
						difficulty: 'Easy',
						startDate: '2019-10-09',
						donations: {
							create: [
								{
									profile: {
										connect: {
											id: frankProfile.id,
										},
									},
									amount: 50.23,
								},
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
									amount: 500.0,
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									amount: 2000.0,
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									amount: 1200.0,
								},
							],
						},
						likes: {
							create: [
								{
									profile: {
										connect: {
											id: kerryProfile.id,
										},
									},
								},
							],
						},
						comments: {
							create: [
								{
									profile: {
										connect: {
											id: frankProfile.id,
										},
									},
									comment: 'Wow. What a beautiful building!!',
								},
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
									comment: 'This building is iconic!',
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									comment: 'Please donate to this amazing project.',
								},
							],
						},
					},
					{
						slug: 'st-charles-mission-center',
						name: 'St. Charles Mission Center',
						featuredImage:
							'https://res.cloudinary.com/revitalize/image/upload/v1571333365/seed%20images/Flagg_s3zory.jpg',
						description:
							'Until recently, the site was home to the St. Charles Mission Center. There are two main structures standing on the 347,370 SF tax lot – A 32 room Colonial Revival-Style Mansion , built in 1900 and designed by famed architect Ernest Flagg (1857-1947) as the centerpiece of his Stone Court country estate; and an adjacent dormitory which was added in later years. While the Mansion’s Exterior Structure is Landmarked and subject to LPC jurisdiction, it’s interior and the adjacent dormitory structure are not and can be altered and reconfigured without the need for special permits.',
						country: 'United States',
						state: 'New York',
						address: '209 Flagg Pl',
						zip: 10304,
						city: 'Staten Island',
						goalAmount: 350000,
						duration: 104,
						difficulty: 'Easy',
						startDate: '2020-1-12',
						donations: {
							create: [
								{
									profile: {
										connect: {
											id: frankProfile.id,
										},
									},
									amount: 250.0,
								},
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
									amount: 1300.0,
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									amount: 2100.0,
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									amount: 25000.0,
								},
							],
						},
						likes: {
							create: [
								{
									profile: {
										connect: {
											id: frankProfile.id,
										},
									},
								},
							],
						},
						comments: {
							create: [
								{
									profile: {
										connect: {
											id: frankProfile.id,
										},
									},
									comment: 'What a beautiful building. Wish you the best in your endeavor.',
								},
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
									comment: 'Amazing architecture. Good luck.',
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									comment: 'Please donate to this amazing project. This is so cool.',
								},
							],
						},
					},
					{
						slug: 'planet-abacus-charter-school',
						name: 'Planet Abacus Charter School',
						featuredImage:
							'https://res.cloudinary.com/revitalize/image/upload/v1571334764/seed%20images/PlanetAbacus_ysttuk.jpg',
						description:
							'The school opened its doors in 2007 serving students in grades K-4. Each year, a grade level was added until the enrollment included a diverse student population of kindergarten through eighth graders. During the 2016-2017 school year, Keystone Academy moved to its current location- a combination of the renovated historic Mary Disston School joined to a newly constructed building. The mission of Keystone Academy is to provide students with a rigorous academic program using a concentrated science and mathematics curriculum that employs the use of integrated technology.The school, which continues to serve a diverse student population from both in and around the Philadelphia region, provides students with a rigorous academic program, opportunities for social and emotional growth, an appreciation for the arts, and opportunities to help our community through charitable works and service learning projects.',
						country: 'United States',
						state: 'Pennsylvania',
						address: '6649 Tulip St',
						zip: 19135,
						city: 'Philadelphia',
						goalAmount: 300000,
						duration: 94,
						difficulty: 'Hard',
						startDate: '2020-3-1',
						donations: {
							create: [
								{
									profile: {
										connect: {
											id: frankProfile.id,
										},
									},
									amount: 1950.0,
								},
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
									amount: 1400.0,
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									amount: 120000.0,
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									amount: 25000.0,
								},
							],
						},
						likes: {
							create: [
								{
									profile: {
										connect: {
											id: frankProfile.id,
										},
									},
								},
							],
						},
						comments: {
							create: [
								{
									profile: {
										connect: {
											id: frankProfile.id,
										},
									},
									comment: 'What a beautiful building. Wish you the best in your endeavor.',
								},
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
									comment: 'Amazing architecture. Good luck.',
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									comment: 'Please donate to this amazing project. This is so cool.',
								},
							],
						},
					},
					{
						slug: 'willard-asylum',
						name: 'Willard Asylum',
						featuredImage:
							'https://res.cloudinary.com/revitalize/image/upload/v1571629026/seed%20images/Willard-Unnamed-building_vtepi7.jpg',
						description:
							'The Willard Asylum for the Chronic Insane is a former state hospital in Willard, New York, near Seneca Lake. It was listed on the National Register of Historic Places in 1975. It discharged its last patient and closed down in 1995',
						country: 'United States',
						state: 'New York',
						address: 'Willard Road',
						zip: 14521,
						city: 'Uvid',
						goalAmount: 250000,
						duration: 150,
						difficulty: 'Medium',
						startDate: '2020-6-1',
						donations: {
							create: [
								{
									profile: {
										connect: {
											id: frankProfile.id,
										},
									},
									amount: 1950.0,
								},
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
									amount: 12000.0,
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									amount: 100000.0,
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									amount: 15000.0,
								},
							],
						},
						likes: {
							create: [
								{
									profile: {
										connect: {
											id: frankProfile.id,
										},
									},
								},
							],
						},
						comments: {
							create: [
								{
									profile: {
										connect: {
											id: frankProfile.id,
										},
									},
									comment: 'What a beautiful building. Wish you the best in your endeavor.',
								},
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
									comment: 'Amazing architecture. Good luck.',
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									comment: 'Please donate to this amazing project. This is so cool.',
								},
							],
						},
					},
				],
			},
		});

		const omarProfile = await prisma.createUserProfile({
			userAccountId: omar.id,
			email: omar.email,
			firstName: 'Omar',
			lastName: 'Salah',
			profileImage: 'https://avatars1.githubusercontent.com/u/42569856?s=400&v=4',
			country: 'United States',
			state: 'California',
			city: 'San Francisco',
			address: '601 Avenue A, San Francisco',
			zip: 94130,
			projects: {
				create: [
					{
						slug: 'cosson-hall',
						name: 'Cosson Hall',
						featuredImage:
							'https://res.cloudinary.com/revitalize/image/upload/v1571093630/seed%20images/Treasure-Island_s-Cosson-Hall-is-Haunted_ojbdvq.jpg',
						description:
							'Opened in 1969 on sadly treasure-less Treasure Island, Cosson Hall was an asterisk-shaped barracks that featured six wings, all of which were occupied by male sailors stationed on the island.',
						country: 'United States',
						state: 'California',
						address: '601 Avenue A',
						zip: 94130,
						city: 'San Francisco',
						goalAmount: 350000,
						duration: 24,
						difficulty: 'Easy',
						startDate: '2019-10-09',
						likes: {
							create: [
								{
									profile: {
										connect: {
											id: alexanderProfile.id,
										},
									},
								},
							],
						},
						comments: {
							create: [
								{
									profile: {
										connect: {
											id: frankProfile.id,
										},
									},
									comment: 'This building is huge! Good luck!',
									likes: {
										create: [
											{
												profile: {
													connect: {
														id: anthonyProfile.id,
													},
												},
											},
											{
												profile: {
													connect: {
														id: elanProfile.id,
													},
												},
											},
											{
												profile: {
													connect: {
														id: frankProfile.id,
													},
												},
											},
										],
									},
								},
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
									comment: 'This building is iconic!',
									likes: {
										create: [
											{
												profile: {
													connect: {
														id: elanProfile.id,
													},
												},
											},
											{
												profile: {
													connect: {
														id: anthonyProfile.id,
													},
												},
											},
											{
												profile: {
													connect: {
														id: elanProfile.id,
													},
												},
											},
											{
												profile: {
													connect: {
														id: frankProfile.id,
													},
												},
											},
										],
									},
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									comment: 'Please donate to this amazing project.',
								},
							],
						},
						donations: {
							create: [
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									amount: 3325.54,
								},
								{
									profile: {
										connect: {
											id: joseProfile.id,
										},
									},
									amount: 250.0,
								},
								{
									profile: {
										connect: {
											id: frankProfile.id,
										},
									},
									amount: 1200.0,
								},
								{
									profile: {
										connect: {
											id: clarkProfile.id,
										},
									},
									amount: 225.0,
								},
							],
						},
						trades: {
							create: [
								{
									id: '1',
									name: 'HVAC',
									description: 'HVAC Certification',
								},
								{
									id: '2',
									name: 'Plumber',
									description: 'Plumbing Certification',
								},
								{
									id: '3',
									name: 'Carpentry',
									description: 'Carpentry Certification',
								},
								{
									id: '4',
									name: 'Electrician',
									description: 'Electrician Certification',
								},
							],
						},
						applicants: {
							create: [
								{
									profile: {
										connect: {
											id: clarkProfile.id,
										},
									},
									trade: {
										connect: {
											id: '1',
										},
									},
									coverLetter: 'This is a cover letter :)',
									licensed: false,
									coverLetter: 'Cover letter',
									jobExperience: 'This is my job exp',
									education: 'This is my education',
									availability: 'All the time',
								},
							],
						},
						tradeMasters: {
							create: [
								{
									profile: {
										connect: {
											id: frankProfile.id,
										},
									},
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
								},
							],
						},
						students: {
							create: [
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
								},
								{
									profile: {
										connect: {
											id: joseProfile.id,
										},
									},
								},
							],
						},
						tasks: {
							create: [
								{
									trade: {
										connect: {
											id: '1',
										},
									},
									dueDate: '2019-10-16T22:12:34.296Z',
									title: 'This is a title',
									description: 'Mow the lawn',
									priority: 'LOW',
									budgetHours: 40,
									apprentices: {
										create: [
											{
												profile: {
													connect: {
														id: joseProfile.id,
													},
												},
											},
										],
									},
								},
								{
									trade: {
										connect: {
											id: '2',
										},
									},
									dueDate: '2019-10-18T22:12:34.296Z',
									title: 'This is also a title',
									description: 'Take out the trash',
									priority: 'LOW',
									budgetHours: 40,
									apprentices: {
										create: [
											{
												profile: {
													connect: {
														id: skyelarProfile.id,
													},
												},
											},
											{
												profile: {
													connect: {
														id: joseProfile.id,
													},
												},
											},
										],
									},
								},
								{
									trade: {
										connect: {
											id: '4',
										},
									},
									dueDate: '2019-10-22T22:12:34.296Z',
									title: 'Hey look another title!',
									description: 'Do something :)',
									priority: 'LOW',
									budgetHours: 40,
									apprentices: {
										create: [
											{
												profile: {
													connect: {
														id: skyelarProfile.id,
													},
												},
											},
										],
									},
								},
							],
						},
					},
					{
						slug: 'govan-schoolhouse',
						name: 'Govan Schoolhouse',
						featuredImage:
							'https://res.cloudinary.com/revitalize/image/upload/v1571256845/seed%20images/govanschoolhouse_rxzklk.jpg',
						description:
							'Govan is a ghost town in central Washington State. There are remnants of several buildings, most notably the old Govan Schoolhouse. Govan once was a small farming community, large enough to boast a post office, school, two churches, and several businesses, and in 1909 listed a population of 114. However, a fire in 1927 devastated the business district, and many stores chose not to rebuild. The 1933 bypass of the town by Highway 2 hasted its demise, and the school closed in 1942. The post office and final business closed in 1967.',
						country: 'United States',
						state: 'Washington',
						address: 'School House Rd, Wilbur, WA 99185',
						zip: 99185,
						city: 'Wilbur',
						goalAmount: 150000,
						duration: 124,
						difficulty: 'Hard',
						startDate: '2020-10-09',
						donations: {
							create: [
								{
									profile: {
										connect: {
											id: frankProfile.id,
										},
									},
									amount: 420.0,
								},
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
									amount: 500.0,
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									amount: 200.0,
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									amount: 10000.0,
								},
							],
						},
						likes: {
							create: [
								{
									profile: {
										connect: {
											id: frankProfile.id,
										},
									},
								},
							],
						},
						comments: {
							create: [
								{
									profile: {
										connect: {
											id: frankProfile.id,
										},
									},
									comment: 'Wow. Such a sad fire.',
								},
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
									comment: 'This is going to take years to rebuild! Good Luck',
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									comment: 'Please donate to this amazing project. This is so cool.',
								},
							],
						},
					},
					{
						slug: 'state-palace-theatre',
						name: 'State Palace Theatre',
						featuredImage:
							'https://res.cloudinary.com/revitalize/image/upload/v1571628423/seed%20images/1_state_palace_theatre_new_orleans_la_jgknwo.jpg',
						description:
							'The State Palace Theatre operated from 1926 until it was forced to close when Hurricane Katrina damaged the building. After that it was used as a rave venue from time to time until it was officially shut down in 2007 for fire code violations.',
						country: 'United States',
						state: 'Louisiana',
						address: '1108 Canal Street',
						zip: 70112,
						city: 'New Orleans',
						goalAmount: 250000,
						duration: 150,
						difficulty: 'Medium',
						startDate: '2020-6-1',
						donations: {
							create: [
								{
									profile: {
										connect: {
											id: frankProfile.id,
										},
									},
									amount: 1950.0,
								},
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
									amount: 12000.0,
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									amount: 100000.0,
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									amount: 15000.0,
								},
							],
						},
						likes: {
							create: [
								{
									profile: {
										connect: {
											id: frankProfile.id,
										},
									},
								},
							],
						},
						comments: {
							create: [
								{
									profile: {
										connect: {
											id: frankProfile.id,
										},
									},
									comment: 'What a beautiful building. Wish you the best in your endeavor.',
								},
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
									comment: 'Amazing architecture. Good luck.',
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									comment: 'Please donate to this amazing project. This is so cool.',
								},
							],
						},
					},
					{
						slug: 'the-united-artists-theatre-building',
						name: 'The-United-Artists-Theatre-Building',
						featuredImage:
							'https://www.gannett-cdn.com/-mm-/7f98b4bd4c201e3574afc7b23de7a1de16231f32/c=56-0-2184-1600&r=x408&c=540x405/local/-/media/2017/08/23/DetroitFreeP/DetroitFreePress/636391019026817468-arena-082317-kpm-4.jpg',
						description:
							"The United Artists Theatre Building is a vacant high-rise tower in downtown Detroit, Michigan. It was built in 1928 and stands 18 stories tall. The building was designed by architect C. Howard Crane in the renaissance revival architectural style, and is made mainly of brick. Until December 29, 1971, it was a first-run movie house and office space, and then after that, the theatre saw sporadic usage until 1973. The United Artists Theatre, designed in a Spanish-Gothic design, sat 2,070 people, and after closing served from 1978 to 1983 as the Detroit Symphony Orchestra's recording theater. After the theater closed, the office block struggled as tenants moved to suburbs. It finally closed in 1984. An original 10-story, vertical UA sign was replaced in the 1950s with a marquee that remained until 2005.",
						country: 'United States',
						state: 'Michigan',
						address: '150 Bagley Avenue',
						zip: 48226,
						city: 'Detroit',
						goalAmount: 360000,
						duration: 210,
						difficulty: 'Hard',
						startDate: '2020-2-24',
						donations: {
							create: [
								{
									profile: {
										connect: {
											id: frankProfile.id,
										},
									},
									amount: 1950.0,
								},
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
									amount: 12000.0,
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									amount: 100000.0,
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									amount: 15000.0,
								},
							],
						},
						likes: {
							create: [
								{
									profile: {
										connect: {
											id: frankProfile.id,
										},
									},
								},
							],
						},
						comments: {
							create: [
								{
									profile: {
										connect: {
											id: frankProfile.id,
										},
									},
									comment: 'What a beautiful building. Wish you the best in your endeavor.',
								},
								{
									profile: {
										connect: {
											id: skyelarProfile.id,
										},
									},
									comment: 'Amazing architecture. Good luck.',
								},
								{
									profile: {
										connect: {
											id: anthonyProfile.id,
										},
									},
									comment: 'Please donate to this amazing project. This is so cool.',
								},
							],
						},
					},
				],
			},
		});

		await prisma.createDirectMessage({
			sender: {
				connect: {
					id: skyelarProfile.id,
				},
			},
			recipient: {
				connect: {
					id: frankProfile.id,
				},
			},
			message: 'Hey Frank!',
			read: false,
		});

		await prisma.createDirectMessage({
			sender: {
				connect: {
					id: frankProfile.id,
				},
			},
			recipient: {
				connect: {
					id: skyelarProfile.id,
				},
			},
			message: 'Hey Skyelar! How are you?',
			read: false,
		});

		await prisma.createDirectMessage({
			sender: {
				connect: {
					id: frankProfile.id,
				},
			},
			recipient: {
				connect: {
					id: skyelarProfile.id,
				},
			},
			message: 'Good! How about yourself?',
			read: false,
		});

		await prisma.createDirectMessage({
			sender: {
				connect: {
					id: anthonyProfile.id,
				},
			},
			recipient: {
				connect: {
					id: skyelarProfile.id,
				},
			},
			message: 'Hey!',
			read: false,
		});
	} catch (error) {
		console.log(error);
	}
=======
        const clarkProfile = await prisma.createUserProfile({
            userAccountId: clark.id,
            email: clark.email,
            firstName: "Clark",
            lastName: "Williams",
            profileImage: "https://avatars3.githubusercontent.com/u/48037077?s=400&v=4",
            country: "United States",
            state: "Utah",
            city: "Salt Lake City",
            address: "1919 West",
            zip: 84044,
            projects: {
                create: [
                    {
                        slug: 'cottonwood-paper-mill',
                        name: 'Cottonwood Paper Mill',
                        featuredImage: 'https://res.cloudinary.com/revitalize/image/upload/v1571093246/seed%20images/Cottonwood_Paper_Mill_3_uqwbxa.jpg',
                        description: 'The tower houses the theater entrance and box office. A vertical sign with the theater\'s name extends from the tower toward the street. Along the Warren facade, four single-story commercial spaces faced with painted yellow brick line the sidewalk; the facade of the theater proper above is set back.',
                        country:'United States',
                        state: 'Utah',
                        address: '6900 S Big Cottonwood Canyon Rd',
                        zip: 84121,
                        city: 'Cottonwood Heights',
                        goalAmount: 110000,
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
                        trades: {
                            create: [
                                
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
                    },
                    {
                        slug:'keddy-mill',
                                                name: 'Keddy Mill',
                                                featuredImage: 'https://res.cloudinary.com/revitalize/image/upload/v1571629628/seed%20images/3_fivqi8.jpg',
                                                description: 'Constructed in the early 1900s, Keddy Mill is a little known abandoned industrial complex. The Keddy Mill company began a metal manufacturing operation in the 1960s that continued well into the 1970s. During its operational years, the mill ran on hydroelectricity but has been abandoned for decades',
                                                country:'United States',
                                                state: 'Maine',
                                                address: '7 Depot St.',
                                                zip:04062,
                                                city: 'Windham',
                                                goalAmount: 250000,
                                                duration: 150,
                                                difficulty: "Medium",
                                                startDate: "2020-6-1",
                                                donations: {
                                                    create: [
                                                        {
                                                            profile: {
                                                                connect: {
                                                                    id: frankProfile.id
                                                                }
                                                            },
                                                            amount: 1950.00
                                                        },
                                                        {
                                                            profile: {
                                                                connect: {
                                                                    id: skyelarProfile.id
                                                                }
                                                            },
                                                            amount: 12000.00
                                                        },
                                                        {
                                                            profile: {
                                                                connect: {
                                                                    id: anthonyProfile.id
                                                                }
                                                            },
                                                            amount: 100000.00
                                                        },
                                                        {
                                                            profile: {
                                                                connect: {
                                                                    id: anthonyProfile.id
                                                                }
                                                            },
                                                            amount: 15000.00
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
                                                       
                                                        {    id: "5",
                                                            name: "Mason",
                                                            description: "Mason Certification"
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
                                                            comment: "What a beautiful building. Wish you the best in your endeavor."
                                                        },
                                                        {
                                                            profile: {
                                                                connect: {
                                                                    id: skyelarProfile.id
                                                                },
                                                            },
                                                            comment: "Amazing architecture. Good luck."
                                                        },
                                                        {
                                                            profile: {
                                                                connect: {
                                                                    id: anthonyProfile.id
                                                                },
                                                            },
                                                            comment: "Please donate to this amazing project. This is so cool."
                                                        }
                                                    ],
                                                }
                                            },                        
                    {
                        slug:'elsinore-naval-and-military-school',
                                                name: 'Elsinore Naval and Military School',
                                                featuredImage: 'https://res.cloudinary.com/revitalize/image/upload/v1571629571/seed%20images/NEJ_8793_vrtbu0.jpg',
                                                description: 'Originally built as Southern California Athletic and Country Club in 1924. The Club was meant to cater to the wealthy and famous personalities of the 1920s. Although the facilities were completed, the Country Club never opened due to financial problems and the coming Depression. At a later date it was repurposed as a school and the name changed to the Elsinore Naval and Military School and operations continued with the school finally closing its doors in 1977.',
                                                country:'United States',
                                                state: 'California',
                                                address: '15891 Grand Ave',
                                                zip:92530,
                                                city: 'Lake Elsinore',
                                                goalAmount: 250000,
                                                duration: 150,
                                                difficulty: "Medium",
                                                startDate: "2020-6-1",
                                                donations: {
                                                    create: [
                                                        {
                                                            profile: {
                                                                connect: {
                                                                    id: frankProfile.id
                                                                }
                                                            },
                                                            amount: 1950.00
                                                        },
                                                        {
                                                            profile: {
                                                                connect: {
                                                                    id: skyelarProfile.id
                                                                }
                                                            },
                                                            amount: 12000.00
                                                        },
                                                        {
                                                            profile: {
                                                                connect: {
                                                                    id: anthonyProfile.id
                                                                }
                                                            },
                                                            amount: 100000.00
                                                        },
                                                        {
                                                            profile: {
                                                                connect: {
                                                                    id: anthonyProfile.id
                                                                }
                                                            },
                                                            amount: 15000.00
                                                        }
                                                    ]
                                                },
                                                trades: {
                                                    create: [
                                                        {
                                                             id: "3",
                                                            name: "Carpentry",
                                                            description: "Carpentry Certification"
                                                        },
                                                        {
                                                             id: "4",
                                                            name: "Electrician",
                                                            description: "Electrician Certification"
                                                        },
                                                        {    id: "5",
                                                            name: "Mason",
                                                            description: "Mason Certification"
                                                        },
                                                        {     id: "6",
                                                             name: "Interior Design",
                                                             description: "Interior Design Certification"
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
                                                            comment: "What a beautiful building. Wish you the best in your endeavor."
                                                        },
                                                        {
                                                            profile: {
                                                                connect: {
                                                                    id: skyelarProfile.id
                                                                },
                                                            },
                                                            comment: "Amazing architecture. Good luck."
                                                        },
                                                        {
                                                            profile: {
                                                                connect: {
                                                                    id: anthonyProfile.id
                                                                },
                                                            },
                                                            comment: "Please donate to this amazing project. This is so cool."
                                                        }
                                                    ],
                                                }
                                            },                        
                    {
                        slug:'hart-island',
                                                name: 'Hart Island',
                                                featuredImage: 'https://res.cloudinary.com/revitalize/image/upload/v1571629444/seed%20images/3269859182_ce38a3f4f6_b_dnmlc5.jpg',
                                                description: 'The island\'s first public use was as a training ground for the United States Colored Troops in 1864. Since then, Hart Island has been the location of a Union Civil War prison camp, a psychiatric institution, a tuberculosis sanatorium, a potter\'s field, a homeless shelter, a boys\' reformatory, a jail, and a drug rehabilitation center. Several other structures, such as an amusement park, were planned for Hart Island but not built. During the Cold War, Nike defense missiles were stationed on Hart Island. The island was intermittently used as a prison and a homeless shelter until 1967, and the last inhabited structures were abandoned in 1977.',
                                                country:'United States',
                                                state: 'New York',
                                                address: 'Long Island Sound',
                                                zip:10464,
                                                city: 'Bronx',
                                                goalAmount: 250000,
                                                duration: 150,
                                                difficulty: "Medium",
                                                startDate: "2020-6-1",
                                                donations: {
                                                    create: [
                                                        {
                                                            profile: {
                                                                connect: {
                                                                    id: frankProfile.id
                                                                }
                                                            },
                                                            amount: 1950.00
                                                        },
                                                        {
                                                            profile: {
                                                                connect: {
                                                                    id: skyelarProfile.id
                                                                }
                                                            },
                                                            amount: 12000.00
                                                        },
                                                        {
                                                            profile: {
                                                                connect: {
                                                                    id: anthonyProfile.id
                                                                }
                                                            },
                                                            amount: 100000.00
                                                        },
                                                        {
                                                            profile: {
                                                                connect: {
                                                                    id: anthonyProfile.id
                                                                }
                                                            },
                                                            amount: 15000.00
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
                                                        },
                                                        {    id: "5",
                                                            name: "Mason",
                                                            description: "Mason Certification"
                                                        },
                                                        {     id: "6",
                                                             name: "Interior Design",
                                                             description: "Interior Design Certification"
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
                                                            comment: "What a beautiful building. Wish you the best in your endeavor."
                                                        },
                                                        {
                                                            profile: {
                                                                connect: {
                                                                    id: skyelarProfile.id
                                                                },
                                                            },
                                                            comment: "Amazing architecture. Good luck."
                                                        },
                                                        {
                                                            profile: {
                                                                connect: {
                                                                    id: anthonyProfile.id
                                                                },
                                                            },
                                                            comment: "Please donate to this amazing project. This is so cool."
                                                        }
                                                    ],
                                                }
                                            },                        
                    {
                        slug: 'chemung-mine',
                        name: 'Chemung Mine',
                        description: 'Chemung Mine. Located near the ghost town of Masonic, CA, the Chemung Mine was founded in 1909. It was reputedly a good producer of gold (although the area was consistently overshadowed by the mining operations in Bodie), but legal issues were a constant problem.',
                        featuredImage: 'https://res.cloudinary.com/revitalize/image/upload/v1571252755/seed%20images/chemung_mine_whyr8b.jpg',
                        country:'United States',
                        state: 'California',
                        address: 'Bridgeport, California 93517',
                        zip: 93517,
                        city: 'Bridgeport',
                        goalAmount: 220000,
                        duration: 24,
                        difficulty: "Medium",
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
                                {    id: "5",
                                    name: "Mason",
                                    description: "Mason Certification"
                                },
                                {     id: "6",
                                     name: "Interior Design",
                                     description: "Interior Design Certification"
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
                    },
                    {
                        slug:'fox-theatre',
                                                name: 'Fox Theatre',
                                                featuredImage: 'https://afterthefinalcurtain.files.wordpress.com/2015/09/fox-theatre-inglewood_13.jpg?w=764&h=509',
                                                description: 'Built in 1949 on the site of another theater that burned down, the Fox Theatre closed permanently in 1988 but the Inglewood Fox Theatre Alliance was able to get the theater listed on the National Register of Historic Places and hopes to restore it one day.',
                                                country:'United States',
                                                state: 'California',
                                                address: '115 N. Market St.',
                                                zip:30308,
                                                city: 'Inglewood',
                                                goalAmount: 250000,
                                                duration: 150,
                                                difficulty: "Medium",
                                                startDate: "2020-6-1",
                                                donations: {
                                                    create: [
                                                        {
                                                            profile: {
                                                                connect: {
                                                                    id: frankProfile.id
                                                                }
                                                            },
                                                            amount: 1950.00
                                                        },
                                                        {
                                                            profile: {
                                                                connect: {
                                                                    id: skyelarProfile.id
                                                                }
                                                            },
                                                            amount: 12000.00
                                                        },
                                                        {
                                                            profile: {
                                                                connect: {
                                                                    id: anthonyProfile.id
                                                                }
                                                            },
                                                            amount: 100000.00
                                                        },
                                                        {
                                                            profile: {
                                                                connect: {
                                                                    id: anthonyProfile.id
                                                                }
                                                            },
                                                            amount: 15000.00
                                                        }
                                                    ]
                                                },
                                                trades: {
                                                    create: [
                                                       
                                                        {
                                                            id: "2",
                                                            name: "Plumber",
                                                            description: "Plumbing Certification"
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
                                                            comment: "What a beautiful building. Wish you the best in your endeavor."
                                                        },
                                                        {
                                                            profile: {
                                                                connect: {
                                                                    id: skyelarProfile.id
                                                                },
                                                            },
                                                            comment: "Amazing architecture. Good luck."
                                                        },
                                                        {
                                                            profile: {
                                                                connect: {
                                                                    id: anthonyProfile.id
                                                                },
                                                            },
                                                            comment: "Please donate to this amazing project. This is so cool."
                                                        }
                                                    ],
                                                }
                                            },
                                            {
                                                slug:'uptown-theatre',
                                                                        name: 'Uptown Theatre',
                                                                        featuredImage: 'https://res.cloudinary.com/revitalize/image/upload/v1571351292/seed%20images/uptown_hcp9fp.jpg',
                                                                        description: 'Opened less than a year before the 1929 stock market crash, the Uptown Theatre operated as a live music venue until the 1970s hosting acts like the Jackson 5, the Temptations, Ray Charles, Stevie Wonder and more. ',
                                                                        country:'United States',
                                                                        state: 'Pennsylvania',
                                                                        address: '2240 N. Broad Street',
                                                                        zip:19132,
                                                                        city: 'Philadelphia',
                                                                        goalAmount: 250000,
                                                                        duration: 150,
                                                                        difficulty: "Medium",
                                                                        startDate: "2020-6-1",
                                                                        donations: {
                                                                            create: [
                                                                                {
                                                                                    profile: {
                                                                                        connect: {
                                                                                            id: frankProfile.id
                                                                                        }
                                                                                    },
                                                                                    amount: 1950.00
                                                                                },
                                                                                {
                                                                                    profile: {
                                                                                        connect: {
                                                                                            id: skyelarProfile.id
                                                                                        }
                                                                                    },
                                                                                    amount: 12000.00
                                                                                },
                                                                                {
                                                                                    profile: {
                                                                                        connect: {
                                                                                            id: anthonyProfile.id
                                                                                        }
                                                                                    },
                                                                                    amount: 100000.00
                                                                                },
                                                                                {
                                                                                    profile: {
                                                                                        connect: {
                                                                                            id: anthonyProfile.id
                                                                                        }
                                                                                    },
                                                                                    amount: 15000.00
                                                                                }
                                                                            ]
                                                                        },
                                                                        trades: {
                                                                            create: [
                                                                                
                                                                                {     id: "6",
                                                                                     name: "Interior Design",
                                                                                     description: "Interior Design Certification"
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
                                                                                    comment: "What a beautiful building. Wish you the best in your endeavor."
                                                                                },
                                                                                {
                                                                                    profile: {
                                                                                        connect: {
                                                                                            id: skyelarProfile.id
                                                                                        },
                                                                                    },
                                                                                    comment: "Amazing architecture. Good luck."
                                                                                },
                                                                                {
                                                                                    profile: {
                                                                                        connect: {
                                                                                            id: anthonyProfile.id
                                                                                        },
                                                                                    },
                                                                                    comment: "Please donate to this amazing project. This is so cool."
                                                                                }
                                                                            ],
                                                                        }
                                                                    },
                                                                    {
                                                                        slug:'loews-canal-theatre',
                                                                                                name: 'Loews Canal Theatre',
                                                                                                featuredImage: 'https://wswd-wordpress-production.s3.amazonaws.com/content/uploads/2017/03/blog-matt-lambros-courtesy-of-matt-lambros4.jpg',
                                                                                                description: 'Loew\'s Canal Theatre opened in 1927 and on September 10, 1932, an explosion threw the theater\'s ticket booth into the street and shattered windows on neighboring buildings. An hour earlier, another bomb destroyed the entrance to the Loew\'s 46th Street Theatre. While nothing was ever proven, both explosions were assumed to be the work of the Motion Picture Operators\' Union Local 306, who were on strike at the time.',
                                                                                                country:'United States',
                                                                                                state: 'New York',
                                                                                                address: '31 Canal Street',
                                                                                                zip:10002,
                                                                                                city: 'New York',
                                                                                                goalAmount: 250000,
                                                                                                duration: 150,
                                                                                                difficulty: "Medium",
                                                                                                startDate: "2020-6-1",
                                                                                                donations: {
                                                                                                    create: [
                                                                                                        {
                                                                                                            profile: {
                                                                                                                connect: {
                                                                                                                    id: frankProfile.id
                                                                                                                }
                                                                                                            },
                                                                                                            amount: 1950.00
                                                                                                        },
                                                                                                        {
                                                                                                            profile: {
                                                                                                                connect: {
                                                                                                                    id: skyelarProfile.id
                                                                                                                }
                                                                                                            },
                                                                                                            amount: 12000.00
                                                                                                        },
                                                                                                        {
                                                                                                            profile: {
                                                                                                                connect: {
                                                                                                                    id: anthonyProfile.id
                                                                                                                }
                                                                                                            },
                                                                                                            amount: 100000.00
                                                                                                        },
                                                                                                        {
                                                                                                            profile: {
                                                                                                                connect: {
                                                                                                                    id: anthonyProfile.id
                                                                                                                }
                                                                                                            },
                                                                                                            amount: 15000.00
                                                                                                        }
                                                                                                    ]
                                                                                                },
                                                                                                trades: {
                                                                                                    create: [
                                                                                                        
                                                                                                        {
                                                                                                             id: "4",
                                                                                                            name: "Electrician",
                                                                                                            description: "Electrician Certification"
                                                                                                        },
                                                                                                        {    id: "5",
                                                                                                            name: "Mason",
                                                                                                            description: "Mason Certification"
                                                                                                        },
                                                                                                        {     id: "6",
                                                                                                             name: "Interior Design",
                                                                                                             description: "Interior Design Certification"
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
                                                                                                            comment: "What a beautiful building. Wish you the best in your endeavor."
                                                                                                        },
                                                                                                        {
                                                                                                            profile: {
                                                                                                                connect: {
                                                                                                                    id: skyelarProfile.id
                                                                                                                },
                                                                                                            },
                                                                                                            comment: "Amazing architecture. Good luck."
                                                                                                        },
                                                                                                        {
                                                                                                            profile: {
                                                                                                                connect: {
                                                                                                                    id: anthonyProfile.id
                                                                                                                },
                                                                                                            },
                                                                                                            comment: "Please donate to this amazing project. This is so cool."
                                                                                                        }
                                                                                                    ],
                                                                                                }
                                                                                            },
                                                                                            {
                                                                                                slug:'medfield-state-hospital',
                                                                                                                        name: 'Medfield State Hospital',
                                                                                                                        featuredImage: 'https://res.cloudinary.com/revitalize/image/upload/v1571629370/seed%20images/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzL2NjYTg4N2Y3NmNkMjZiMGViNV9JTUdfMTA1OC5KUEciXSxbInAiLCJ0aHVtYiIsIjEyMDB4PiJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA4MSAtYXV0by1vcmllbnQiXV0_so4dn9.jpg',
                                                                                                                        description: 'Medfield State Hospital was founded in 1892, and for over 100 years served as a self-sustaining institution and community for thousands of mentally ill patients until closing its doors in 2003.',
                                                                                                                        country:'United States',
                                                                                                                        state: 'Massachusetts',
                                                                                                                        address: '45 Hospital Rd',
                                                                                                                        zip:02052,
                                                                                                                        city: 'Medfield',
                                                                                                                        goalAmount: 250000,
                                                                                                                        duration: 150,
                                                                                                                        difficulty: "Medium",
                                                                                                                        startDate: "2020-6-1",
                                                                                                                        donations: {
                                                                                                                            create: [
                                                                                                                                {
                                                                                                                                    profile: {
                                                                                                                                        connect: {
                                                                                                                                            id: frankProfile.id
                                                                                                                                        }
                                                                                                                                    },
                                                                                                                                    amount: 1950.00
                                                                                                                                },
                                                                                                                                {
                                                                                                                                    profile: {
                                                                                                                                        connect: {
                                                                                                                                            id: skyelarProfile.id
                                                                                                                                        }
                                                                                                                                    },
                                                                                                                                    amount: 12000.00
                                                                                                                                },
                                                                                                                                {
                                                                                                                                    profile: {
                                                                                                                                        connect: {
                                                                                                                                            id: anthonyProfile.id
                                                                                                                                        }
                                                                                                                                    },
                                                                                                                                    amount: 100000.00
                                                                                                                                },
                                                                                                                                {
                                                                                                                                    profile: {
                                                                                                                                        connect: {
                                                                                                                                            id: anthonyProfile.id
                                                                                                                                        }
                                                                                                                                    },
                                                                                                                                    amount: 15000.00
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
                                                                                                                                },
                                                                                                                                {    id: "5",
                                                                                                                                    name: "Mason",
                                                                                                                                    description: "Mason Certification"
                                                                                                                                },
                                                                                                                                {     id: "6",
                                                                                                                                     name: "Interior Design",
                                                                                                                                     description: "Interior Design Certification"
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
                                                                                                                                    comment: "What a beautiful building. Wish you the best in your endeavor."
                                                                                                                                },
                                                                                                                                {
                                                                                                                                    profile: {
                                                                                                                                        connect: {
                                                                                                                                            id: skyelarProfile.id
                                                                                                                                        },
                                                                                                                                    },
                                                                                                                                    comment: "Amazing architecture. Good luck."
                                                                                                                                },
                                                                                                                                {
                                                                                                                                    profile: {
                                                                                                                                        connect: {
                                                                                                                                            id: anthonyProfile.id
                                                                                                                                        },
                                                                                                                                    },
                                                                                                                                    comment: "Please donate to this amazing project. This is so cool."
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
            profileImage: "https://avatars1.githubusercontent.com/u/25395103?s=400&v=4",
            country: "United States",
            state: "Illinois",
            city: "Chicago",
            address: "912 North",
            zip: 60614,
            projects: {
                create: [
                    {
                        slug: 'edgewater-medical-center',
                        name: 'Edgewater Medical Center',
                        featuredImage: 'https://res.cloudinary.com/revitalize/image/upload/v1571093299/seed%20images/extralarge_sdpmaw.jpg',
                        description: 'A healthy portion of large abandoned buildings that urban explorers seek out are left behind after major changes in economic markets, competition and innovation leave stagnant companies behind. That is not the case with Edgewater Medical Center. What sets this building apart from other urbex locations is that it was created by criminal acts over an extended period of time. Even though the hospital was dated, they were still operating in a capacity that for the most part benefitted patients. By the time the FBI discovered the corruption it had already metastasized and killed Edgewater Medical Center.',
                        country:'United States',
                        state: 'Illinois',
                        address: '1621-1623 W Edgewater Ave',
                        zip: 60660,
                        city: 'Chicago',
                        goalAmount: 350000,
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
                    },
                    {
                        slug:'industrial-national-bank-building',
                                                name: 'Industrial National Bank Building',
                                                featuredImage: 'https://res.cloudinary.com/revitalize/image/upload/v1571629874/seed%20images/C7C7A40E-B26D-45EB-9E27-82A2A0E36A52_vb20dk.jpg',
                                                description: 'The Superman building, as it is commonly called by locals, is a distinct part of the Providence skyline and an iconic Rhode Island building. Officially titled the Industrial National Bank Building, it sits 428 feet tall, making it the tallest building in the state. The structure, completed in 1928, was built in an Art Deco style and bears striking similarity to the Daily Planet building from Superman. The last tenant was Bank of America, who chose not to renew its lease and vacated in 2013. Since then, the building has remained empty.',
                                                country:'United States',
                                                state: 'Rhode Island',
                                                address: '111 Westminster St',
                                                zip: 32903,
                                                city: 'Providence',
                                                goalAmount: 2500000,
                                                duration: 150,
                                                difficulty: "Medium",
                                                startDate: "2020-6-1",
                                                donations: {
                                                    create: [
                                                        {
                                                            profile: {
                                                                connect: {
                                                                    id: frankProfile.id
                                                                }
                                                            },
                                                            amount: 19500.00
                                                        },
                                                        {
                                                            profile: {
                                                                connect: {
                                                                    id: skyelarProfile.id
                                                                }
                                                            },
                                                            amount: 1200000.00
                                                        },
                                                        {
                                                            profile: {
                                                                connect: {
                                                                    id: anthonyProfile.id
                                                                }
                                                            },
                                                            amount: 3000000.00
                                                        },
                                                        {
                                                            profile: {
                                                                connect: {
                                                                    id: anthonyProfile.id
                                                                }
                                                            },
                                                            amount: 15000.00
                                                        }
                                                    ]
                                                },
                                                trades: {
                                                    create: [
                                                        {
                                                             id: "3",
                                                            name: "Carpentry",
                                                            description: "Carpentry Certification"
                                                        },
                                                        {
                                                             id: "4",
                                                            name: "Electrician",
                                                            description: "Electrician Certification"
                                                        },
                                                        {    id: "5",
                                                            name: "Mason",
                                                            description: "Mason Certification"
                                                        },
                                                        {     id: "6",
                                                             name: "Interior Design",
                                                             description: "Interior Design Certification"
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
                                                            comment: "What a beautiful building. Wish you the best in your endeavor."
                                                        },
                                                        {
                                                            profile: {
                                                                connect: {
                                                                    id: skyelarProfile.id
                                                                },
                                                            },
                                                            comment: "Amazing architecture. Good luck."
                                                        },
                                                        {
                                                            profile: {
                                                                connect: {
                                                                    id: anthonyProfile.id
                                                                },
                                                            },
                                                            comment: "Please donate to this amazing project. This is so cool."
                                                        }
                                                    ],
                                                }
                                            },                                       
                                            {
                                                slug:'neponsit-health-care-center',
                                                                        name: 'Neponsit Health Care Center',
                                                                        featuredImage: 'https://res.cloudinary.com/revitalize/image/upload/v1571630232/seed%20images/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzL2NjODRjYzE1MDkzNWExMDBiNV9JTUdfMTM2My5KUEciXSxbInAiLCJ0aHVtYiIsIjEyMDB4PiJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA4MSAtYXV0by1vcmllbnQiXV0_fbsnac.jpg',
                                                                        description: 'Built in 1918, the hospital was home to about 200 stricken children recuperating in the clean, bracing air of the Atlantic. As the dangers of TB waned in the 20th century, the hospital was turned into a care home for the elderly and Alzheimer’s patients. Disaster struck on September 7th, 1998, when a strong storm battered the Rockaway coastline. The Neponsit hospital was badly hit to the point where it was thought that it was in imminent danger of collapsing.',
                                                                        country:'United States',
                                                                        state: 'New York',
                                                                        address: '149-25 Rockaway Beach Blvd',
                                                                        zip:11694,
                                                                        city: 'Queens',
                                                                        goalAmount: 350000,
                                                                        duration: 150,
                                                                        difficulty: "Medium",
                                                                        startDate: "2020-6-1",
                                                                        donations: {
                                                                            create: [
                                                                                {
                                                                                    profile: {
                                                                                        connect: {
                                                                                            id: frankProfile.id
                                                                                        }
                                                                                    },
                                                                                    amount: 214950.00
                                                                                },
                                                                                {
                                                                                    profile: {
                                                                                        connect: {
                                                                                            id: skyelarProfile.id
                                                                                        }
                                                                                    },
                                                                                    amount: 12000.00
                                                                                },
                                                                                {
                                                                                    profile: {
                                                                                        connect: {
                                                                                            id: anthonyProfile.id
                                                                                        }
                                                                                    },
                                                                                    amount: 100000.00
                                                                                },
                                                                                {
                                                                                    profile: {
                                                                                        connect: {
                                                                                            id: anthonyProfile.id
                                                                                        }
                                                                                    },
                                                                                    amount: 15000.00
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
                                                                                {    id: "5",
                                                                                    name: "Mason",
                                                                                    description: "Mason Certification"
                                                                                },
                                                                                {     id: "6",
                                                                                     name: "Interior Design",
                                                                                     description: "Interior Design Certification"
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
                                                                                    comment: "What a beautiful building. Wish you the best in your endeavor."
                                                                                },
                                                                                {
                                                                                    profile: {
                                                                                        connect: {
                                                                                            id: skyelarProfile.id
                                                                                        },
                                                                                    },
                                                                                    comment: "Amazing architecture. Good luck."
                                                                                },
                                                                                {
                                                                                    profile: {
                                                                                        connect: {
                                                                                            id: anthonyProfile.id
                                                                                        },
                                                                                    },
                                                                                    comment: "Please donate to this amazing project. This is so cool."
                                                                                }
                                                                            ],
                                                                        }
                                                                    },
                                                
                                                                                                 
                                            {
                                                slug:'seaside-sanatorium',
                                                                        name: 'Seaside Sanatorium',
                                                                        featuredImage: 'https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzLzFjOTA1NWVkLTMzZmYtNDc5NC04NGQ5LTdmZGZjNDMwNjYxN2ZkMTdlMmZiNWU3ZDJkNTQzM18zQTQyNjI1Qi1BNDA0LTQwMTQtODAxNi0yRTNDQkY2OUEyM0UuanBlZyJdLFsicCIsInRodW1iIiwiMTIwMHg-Il0sWyJwIiwiY29udmVydCIsIi1xdWFsaXR5IDgxIC1hdXRvLW9yaWVudCJdXQ/3A42625B-A404-4014-8016-2E3CBF69A23E.jpeg',
                                                                        description: 'This brick fortress, designed in 1934 by architect Cass Gilbert, was America’s first medical facility designed to offer heliotropic treatment to children with tuberculosis. As such, the building’s role would shift several times over the next six decades before it was added to the National Register of Historic Places in 1995.',
                                                                        country:'United States',
                                                                        state: 'Connecticut',
                                                                        address: '36 Shore Road',
                                                                        zip: 16835,
                                                                        city: 'Waterford',
                                                                        goalAmount: 250000,
                                                                        duration: 150,
                                                                        difficulty: "Medium",
                                                                        startDate: "2020-6-1",
                                                                        donations: {
                                                                            create: [
                                                                                {
                                                                                    profile: {
                                                                                        connect: {
                                                                                            id: frankProfile.id
                                                                                        }
                                                                                    },
                                                                                    amount: 1950.00
                                                                                },
                                                                                {
                                                                                    profile: {
                                                                                        connect: {
                                                                                            id: skyelarProfile.id
                                                                                        }
                                                                                    },
                                                                                    amount: 12000.00
                                                                                },
                                                                                {
                                                                                    profile: {
                                                                                        connect: {
                                                                                            id: anthonyProfile.id
                                                                                        }
                                                                                    },
                                                                                    amount: 100000.00
                                                                                },
                                                                                {
                                                                                    profile: {
                                                                                        connect: {
                                                                                            id: anthonyProfile.id
                                                                                        }
                                                                                    },
                                                                                    amount: 15000.00
                                                                                }
                                                                            ]
                                                                        },
                                                                        trades: {
                                                                            create: [
                                                                                
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
                                                                                },
                                                                                {    id: "5",
                                                                                    name: "Mason",
                                                                                    description: "Mason Certification"
                                                                                },
                                                                                {     id: "6",
                                                                                     name: "Interior Design",
                                                                                     description: "Interior Design Certification"
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
                                                                                    comment: "What a beautiful building. Wish you the best in your endeavor."
                                                                                },
                                                                                {
                                                                                    profile: {
                                                                                        connect: {
                                                                                            id: skyelarProfile.id
                                                                                        },
                                                                                    },
                                                                                    comment: "Amazing architecture. Good luck."
                                                                                },
                                                                                {
                                                                                    profile: {
                                                                                        connect: {
                                                                                            id: anthonyProfile.id
                                                                                        },
                                                                                    },
                                                                                    comment: "Please donate to this amazing project. This is so cool."
                                                                                }
                                                                            ],
                                                                        }
                                                                    },
                                                                    {
                                                                        slug:'annie-lytle-elementary-school',
                                                                                                name: 'Annie Lytle Elementary School',
                                                                                                featuredImage: 'https://res.cloudinary.com/revitalize/image/upload/v1571630731/seed%20images/Screen_Shot_2017-01-03_at_5.22.10_PM_udcray.png',
                                                                                                description: 'Built in 1915, this gigantic schoolhouse was originally christened as Public School Number Four, but was renamed Annie Lytle Elementary in 1957 in honor of a former principal. Unfortunately, the school only got to live under its new name for a few years before it was shuttered and abandoned.',
                                                                                                country:'United States',
                                                                                                state: 'Florida',
                                                                                                address: '699 Chelsea Ave',
                                                                                                zip: 32204,
                                                                                                city: 'Jacksonville',
                                                                                                goalAmount: 250000,
                                                                                                duration: 150,
                                                                                                difficulty: "Medium",
                                                                                                startDate: "2020-6-1",
                                                                                                donations: {
                                                                                                    create: [
                                                                                                        {
                                                                                                            profile: {
                                                                                                                connect: {
                                                                                                                    id: frankProfile.id
                                                                                                                }
                                                                                                            },
                                                                                                            amount: 1950.00
                                                                                                        },
                                                                                                        {
                                                                                                            profile: {
                                                                                                                connect: {
                                                                                                                    id: skyelarProfile.id
                                                                                                                }
                                                                                                            },
                                                                                                            amount: 12000.00
                                                                                                        },
                                                                                                        {
                                                                                                            profile: {
                                                                                                                connect: {
                                                                                                                    id: anthonyProfile.id
                                                                                                                }
                                                                                                            },
                                                                                                            amount: 100000.00
                                                                                                        },
                                                                                                        {
                                                                                                            profile: {
                                                                                                                connect: {
                                                                                                                    id: anthonyProfile.id
                                                                                                                }
                                                                                                            },
                                                                                                            amount: 15000.00
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
                                                                                                            comment: "What a beautiful building. Wish you the best in your endeavor."
                                                                                                        },
                                                                                                        {
                                                                                                            profile: {
                                                                                                                connect: {
                                                                                                                    id: skyelarProfile.id
                                                                                                                },
                                                                                                            },
                                                                                                            comment: "Amazing architecture. Good luck."
                                                                                                        },
                                                                                                        {
                                                                                                            profile: {
                                                                                                                connect: {
                                                                                                                    id: anthonyProfile.id
                                                                                                                },
                                                                                                            },
                                                                                                            comment: "Please donate to this amazing project. This is so cool."
                                                                                                        }
                                                                                                    ],
                                                                                                }
                                                                                            },                                                                        
                                                                    {
                                                                        slug:'comet-diner',
                                                                                                name: 'Comet Diner',
                                                                                                featuredImage: 'https://res.cloudinary.com/revitalize/image/upload/v1571630606/seed%20images/IMG_2347_copy_r3fnfr.jpg',
                                                                                                description: 'Just down the street from Mark Twain’s house and museum in Hartford, Connecticut, is one of the city’s other most recognizable buildings, a vintage chrome and steel diner, glinting in the sun. The old Comet Diner, however, has been sadly left abandoned for nearly two years.',
                                                                                                country:'United States',
                                                                                                state: 'Connecticut',
                                                                                                address: '267 Farmington Ave',
                                                                                                zip: 06105,
                                                                                                city: 'Hartford',
                                                                                                goalAmount: 250000,
                                                                                                duration: 150,
                                                                                                difficulty: "Medium",
                                                                                                startDate: "2020-6-1",
                                                                                                donations: {
                                                                                                    create: [
                                                                                                        {
                                                                                                            profile: {
                                                                                                                connect: {
                                                                                                                    id: frankProfile.id
                                                                                                                }
                                                                                                            },
                                                                                                            amount: 1950.00
                                                                                                        },
                                                                                                        {
                                                                                                            profile: {
                                                                                                                connect: {
                                                                                                                    id: skyelarProfile.id
                                                                                                                }
                                                                                                            },
                                                                                                            amount: 12000.00
                                                                                                        },
                                                                                                        {
                                                                                                            profile: {
                                                                                                                connect: {
                                                                                                                    id: anthonyProfile.id
                                                                                                                }
                                                                                                            },
                                                                                                            amount: 100000.00
                                                                                                        },
                                                                                                        {
                                                                                                            profile: {
                                                                                                                connect: {
                                                                                                                    id: anthonyProfile.id
                                                                                                                }
                                                                                                            },
                                                                                                            amount: 15000.00
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
                                                                                                            comment: "What a beautiful building. Wish you the best in your endeavor."
                                                                                                        },
                                                                                                        {
                                                                                                            profile: {
                                                                                                                connect: {
                                                                                                                    id: skyelarProfile.id
                                                                                                                },
                                                                                                            },
                                                                                                            comment: "Amazing architecture. Good luck."
                                                                                                        },
                                                                                                        {
                                                                                                            profile: {
                                                                                                                connect: {
                                                                                                                    id: anthonyProfile.id
                                                                                                                },
                                                                                                            },
                                                                                                            comment: "Please donate to this amazing project. This is so cool."
                                                                                                        }
                                                                                                    ],
                                                                                                }
                                                                                            },                                                                        
                                                                                                
                                            {
                                                slug:'jumping-jack-power-plant',
                                                                        name: 'Jumping Jack Power Plant',
                                                                        featuredImage: 'https://res.cloudinary.com/revitalize/image/upload/v1571629980/seed%20images/1DE11DE8-1981-4647-A1D5-BE1AC1B5AF0E_kuxltp.jpg',
                                                                        description: 'This abandoned power plant is tucked away along the Brooklyn waterfront. Dilapidated and looking as though it could crumble into itself at any moment, it stands like a ghostly reminder of the area’s industrial past. Not much is known about the decaying structure, beyond the fact that it was once either a power plant or pump house. Old papers found inside have led some to speculate that the plant was used up until the 1960s.',
                                                                        country:'United States',
                                                                        state: 'New York',
                                                                        address: '4110 1st Ave',
                                                                        zip: 11232,
                                                                        city: 'Brooklyn',
                                                                        goalAmount: 450000,
                                                                        duration: 150,
                                                                        difficulty: "Medium",
                                                                        startDate: "2020-6-1",
                                                                        donations: {
                                                                            create: [
                                                                                {
                                                                                    profile: {
                                                                                        connect: {
                                                                                            id: frankProfile.id
                                                                                        }
                                                                                    },
                                                                                    amount: 11950.00
                                                                                },
                                                                                {
                                                                                    profile: {
                                                                                        connect: {
                                                                                            id: skyelarProfile.id
                                                                                        }
                                                                                    },
                                                                                    amount: 120000.00
                                                                                },
                                                                                {
                                                                                    profile: {
                                                                                        connect: {
                                                                                            id: anthonyProfile.id
                                                                                        }
                                                                                    },
                                                                                    amount: 100000.00
                                                                                },
                                                                                {
                                                                                    profile: {
                                                                                        connect: {
                                                                                            id: anthonyProfile.id
                                                                                        }
                                                                                    },
                                                                                    amount: 15000.00
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
                                                                                     id: "4",
                                                                                    name: "Electrician",
                                                                                    description: "Electrician Certification"
                                                                                },
                                                                                {    id: "5",
                                                                                    name: "Mason",
                                                                                    description: "Mason Certification"
                                                                                },
                                                                                {     id: "6",
                                                                                     name: "Interior Design",
                                                                                     description: "Interior Design Certification"
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
                                                                                    comment: "What a beautiful building. Wish you the best in your endeavor."
                                                                                },
                                                                                {
                                                                                    profile: {
                                                                                        connect: {
                                                                                            id: skyelarProfile.id
                                                                                        },
                                                                                    },
                                                                                    comment: "Amazing architecture. Good luck."
                                                                                },
                                                                                {
                                                                                    profile: {
                                                                                        connect: {
                                                                                            id: anthonyProfile.id
                                                                                        },
                                                                                    },
                                                                                    comment: "Please donate to this amazing project. This is so cool."
                                                                                }
                                                                            ],
                                                                        }
                                                                    },                                                                     
                    {
                        slug:'old-cahawba-archeological park',
                                                name: 'Old Cahawba Archeological Park',
                                                featuredImage: 'https://res.cloudinary.com/revitalize/image/upload/v1571629776/seed%20images/P1200654_tf0evk.jpg',
                                                description: 'Cahawba (also known as Cahaba) was the state capital of Alabama from 1819 to 1826. It was also the county seat of Dallas County, Alabama, until 1866, at which point its population was a little under 2,000. But by 1900, most of Cahawba’s inhabitants had left. Its buildings were dismantled, their materials used elsewhere.',
                                                country:'United States',
                                                state: 'Alabama',
                                                address: '9518 Cahaba Road',
                                                zip: 36767,
                                                city: 'Orrville',
                                                goalAmount: 250000,
                                                duration: 150,
                                                difficulty: "Medium",
                                                startDate: "2020-6-1",
                                                donations: {
                                                    create: [
                                                        {
                                                            profile: {
                                                                connect: {
                                                                    id: frankProfile.id
                                                                }
                                                            },
                                                            amount: 1950.00
                                                        },
                                                        {
                                                            profile: {
                                                                connect: {
                                                                    id: skyelarProfile.id
                                                                }
                                                            },
                                                            amount: 12000.00
                                                        },
                                                        {
                                                            profile: {
                                                                connect: {
                                                                    id: anthonyProfile.id
                                                                }
                                                            },
                                                            amount: 100000.00
                                                        },
                                                        {
                                                            profile: {
                                                                connect: {
                                                                    id: anthonyProfile.id
                                                                }
                                                            },
                                                            amount: 15000.00
                                                        }
                                                    ]
                                                },
                                                trades: {
                                                    create: [
                                                        {
                                                            id: "1",
                                                            name: "HVAC",
                                                            description: "HVAC Certification"
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
                                                            comment: "What a beautiful building. Wish you the best in your endeavor."
                                                        },
                                                        {
                                                            profile: {
                                                                connect: {
                                                                    id: skyelarProfile.id
                                                                },
                                                            },
                                                            comment: "Amazing architecture. Good luck."
                                                        },
                                                        {
                                                            profile: {
                                                                connect: {
                                                                    id: anthonyProfile.id
                                                                },
                                                            },
                                                            comment: "Please donate to this amazing project. This is so cool."
                                                        }
                                                    ],
                                                }
                                            },                        
                    {
slug:'heritage-usa',
                        name: 'Heritage USA',
                        featuredImage: 'https://res.cloudinary.com/revitalize/image/upload/v1571629707/seed%20images/20190715_132424_gnggvv.jpg',
                        description: 'Heritage USA was a Christian-themed amusement park opened in 1978 by televangelists Jim and Tammy Faye Bakker. At its peak, it was the third-largest park in the USA behind Disney World and DisneyLand, with almost 6 million visitors annually. Following various debilitating scandals and being heavily damaged by Hurricane Hugo it was shut down for good and still stands abandoned to this day.',
                        country:'United States',
                        state: 'South Carolina',
                        address: '375 Star Light Dr',
                        zip: 29715,
                        city: 'Fort Mill',
                        goalAmount: 250000,
                        duration: 150,
                        difficulty: "Medium",
                        startDate: "2020-6-1",
                        donations: {
                            create: [
                                {
                                    profile: {
                                        connect: {
                                            id: frankProfile.id
                                        }
                                    },
                                    amount: 1950.00
                                },
                                {
                                    profile: {
                                        connect: {
                                            id: skyelarProfile.id
                                        }
                                    },
                                    amount: 12000.00
                                },
                                {
                                    profile: {
                                        connect: {
                                            id: anthonyProfile.id
                                        }
                                    },
                                    amount: 100000.00
                                },
                                {
                                    profile: {
                                        connect: {
                                            id: anthonyProfile.id
                                        }
                                    },
                                    amount: 15000.00
                                }
                            ]
                        },
                        trades: {
                            create: [
                                
                                {
                                    id: "2",
                                    name: "Plumber",
                                    description: "Plumbing Certification"
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
                                    comment: "What a beautiful building. Wish you the best in your endeavor."
                                },
                                {
                                    profile: {
                                        connect: {
                                            id: skyelarProfile.id
                                        },
                                    },
                                    comment: "Amazing architecture. Good luck."
                                },
                                {
                                    profile: {
                                        connect: {
                                            id: anthonyProfile.id
                                        },
                                    },
                                    comment: "Please donate to this amazing project. This is so cool."
                                }
                            ],
                        }
                    },
                    {
                        slug: 'calvary-university',
                        name: 'Calvary University',
                        featuredImage: 'https://res.cloudinary.com/revitalize/image/upload/v1571336443/seed%20images/calvary_rqntdw.jpg',
                        description: 'Formerly the Fort Morgan Middle School, this building and adjacent land is currently owned and operated by Calvary University. The building, outbuildings and modulars, and land is all available as a package deal. The property is currently zoned transitional by the City of Fort Morgan and can be used for a variety of purposes such as businesses, single-family homes, multi-family units, church, etc.',
                        country:'United States',
                        state: 'Colorado',
                        address: '300 Deuel St',
                        zip: 80701,
                        city: 'Fort Morgan',
                        goalAmount: 400000,
                        duration: 150,
                        difficulty: "Easy",
                        startDate: "2020-6-1",
                        donations: {
                            create: [
                                {
                                    profile: {
                                        connect: {
                                            id: frankProfile.id
                                        }
                                    },
                                    amount: 2950.00
                                },
                                {
                                    profile: {
                                        connect: {
                                            id: skyelarProfile.id
                                        }
                                    },
                                    amount: 10000.00
                                },
                                {
                                    profile: {
                                        connect: {
                                            id: anthonyProfile.id
                                        }
                                    },
                                    amount: 120000.00
                                },
                                {
                                    profile: {
                                        connect: {
                                            id: anthonyProfile.id
                                        }
                                    },
                                    amount: 15000.00
                                }
                            ]
                        },
                        trades: {
                            create: [
                                
                                {
                                     id: "3",
                                    name: "Carpentry",
                                    description: "Carpentry Certification"
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
                                    comment: "What a beautiful building. Wish you the best in your endeavor."
                                },
                                {
                                    profile: {
                                        connect: {
                                            id: skyelarProfile.id
                                        },
                                    },
                                    comment: "Amazing architecture. Good luck."
                                },
                                {
                                    profile: {
                                        connect: {
                                            id: anthonyProfile.id
                                        },
                                    },
                                    comment: "Please donate to this amazing project. This is so cool."
                                }

                            ],
                        }
                    },
                    {
                        slug:'zelda-fitzgeralds-sanatorium',
                                                name: 'Zelda Fitzgerald’s Sanatorium',
                                                featuredImage: 'https://res.cloudinary.com/revitalize/image/upload/v1571629299/seed%20images/Zelda_Fitzgeralds_Abandoned_Sanatorium_3-823x420_nuzrjr.jpg',
                                                description: 'Once built for the Civil War officer General Joseph Howland in 1859, and called Tioranda, the gothic house was turned into America’s first privately licensed psychiatric hospital in 1915. Closing its doors 16 years ago, it has lain abandoned ever since. Bordering the forests of the highlands overlooking the Hudson River, the hospital was surrounded by over 60 acres, including a now deserted swimming pool, gymnasium, and golf course.',
                                                country:'United States',
                                                state: 'New York',
                                                address: '7 Craig House Lane',
                                                zip: 12508,
                                                city: 'Beacon',
                                                goalAmount: 250000,
                                                duration: 150,
                                                difficulty: "Medium",
                                                startDate: "2020-6-1",
                                                donations: {
                                                    create: [
                                                        {
                                                            profile: {
                                                                connect: {
                                                                    id: frankProfile.id
                                                                }
                                                            },
                                                            amount: 1950.00
                                                        },
                                                        {
                                                            profile: {
                                                                connect: {
                                                                    id: skyelarProfile.id
                                                                }
                                                            },
                                                            amount: 12000.00
                                                        },
                                                        {
                                                            profile: {
                                                                connect: {
                                                                    id: anthonyProfile.id
                                                                }
                                                            },
                                                            amount: 100000.00
                                                        },
                                                        {
                                                            profile: {
                                                                connect: {
                                                                    id: anthonyProfile.id
                                                                }
                                                            },
                                                            amount: 15000.00
                                                        }
                                                    ]
                                                },
                                                trades: {
                                                    create: [
                                                        
                                                        {
                                                             id: "4",
                                                            name: "Electrician",
                                                            description: "Electrician Certification"
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
                                                            comment: "What a beautiful building. Wish you the best in your endeavor."
                                                        },
                                                        {
                                                            profile: {
                                                                connect: {
                                                                    id: skyelarProfile.id
                                                                },
                                                            },
                                                            comment: "Amazing architecture. Good luck."
                                                        },
                                                        {
                                                            profile: {
                                                                connect: {
                                                                    id: anthonyProfile.id
                                                                },
                                                            },
                                                            comment: "Please donate to this amazing project. This is so cool."
                                                        }
                                                    ],
                                                }
                                            },                        
                    {
                        slug: 'echo-hose-ambulance-training',
                        name: 'Echo Hose Ambulance Training',
                        featuredImage: 'https://res.cloudinary.com/revitalize/image/upload/v1571336998/seed%20images/echo_scbpbq.jpg',
                        description: 'Former School Building - For Sale: $379,900 - Also For Lease: 4 Contiguous Former Classroom Spaces. 32,720 sf, 2 story plus basement level masonry and brick former school building with a variety of former classroom spaces being used as offices/training rooms, and a large gymnasium.Numerous potential uses for dance school, martial arts, art or theater work spaces or school, training school, flex space or offices, adult day care, or new charter school. Renovated to 55+ housing or apartments also possible. School building to be split from main church property.',
                        country:'United States',
                        state: 'Connecticut',
                        address: '430 Coram Ave',
                        zip: 66484,
                        city: 'Shelton',
                        goalAmount: 200000,
                        duration: 180,
                        difficulty: "Easy",
                        startDate: "2020-6-1",
                        donations: {
                            create: [
                                {
                                    profile: {
                                        connect: {
                                            id: frankProfile.id
                                        }
                                    },
                                    amount: 1950.00
                                },
                                {
                                    profile: {
                                        connect: {
                                            id: skyelarProfile.id
                                        }
                                    },
                                    amount: 12000.00
                                },
                                {
                                    profile: {
                                        connect: {
                                            id: anthonyProfile.id
                                        }
                                    },
                                    amount: 120000.00
                                },
                                {
                                    profile: {
                                        connect: {
                                            id: anthonyProfile.id
                                        }
                                    },
                                    amount: 15000.00
                                }
                            ]
                        },
                        trades: {
                            create: [
                                
                                {    id: "5",
                                    name: "Mason",
                                    description: "Mason Certification"
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
                                    comment: "What a beautiful building. Wish you the best in your endeavor."
                                },
                                {
                                    profile: {
                                        connect: {
                                            id: skyelarProfile.id
                                        },
                                    },
                                    comment: "Amazing architecture. Good luck."
                                },
                                {
                                    profile: {
                                        connect: {
                                            id: anthonyProfile.id
                                        },
                                    },
                                    comment: "Please donate to this amazing project. This is so cool."
                                }

                            ],
                        }
                    },
                    {
                        slug:'paramount-theatre',
                                                name: 'Paramount Theatre',
                                                featuredImage: 'https://res.cloudinary.com/revitalize/image/upload/v1571351603/seed%20images/paramount_theatre_02_hignqq.jpg',
                                                description: 'Originally called the H.C. Miner\'s Newark Theatre when it opened in 1886, the Paramount Theatre was remodeled and renamed in 1917 and operated until it closed in 1986 due to a hike in insurance rates.',
                                                country:'United States',
                                                state: 'New Jersey',
                                                address: '195 Market Street',
                                                zip: 07012,
                                                city: 'Newark',
                                                goalAmount: 250000,
                                                duration: 150,
                                                difficulty: "Medium",
                                                startDate: "2020-6-1",
                                                donations: {
                                                    create: [
                                                        {
                                                            profile: {
                                                                connect: {
                                                                    id: frankProfile.id
                                                                }
                                                            },
                                                            amount: 1950.00
                                                        },
                                                        {
                                                            profile: {
                                                                connect: {
                                                                    id: skyelarProfile.id
                                                                }
                                                            },
                                                            amount: 12000.00
                                                        },
                                                        {
                                                            profile: {
                                                                connect: {
                                                                    id: anthonyProfile.id
                                                                }
                                                            },
                                                            amount: 100000.00
                                                        },
                                                        {
                                                            profile: {
                                                                connect: {
                                                                    id: anthonyProfile.id
                                                                }
                                                            },
                                                            amount: 15000.00
                                                        }
                                                    ]
                                                },
                                                trades: {
                                                    create: [
                                                        {     id: "6",
                                                             name: "Interior Design",
                                                             description: "Interior Design Certification"
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
                                                            comment: "What a beautiful building. Wish you the best in your endeavor."
                                                        },
                                                        {
                                                            profile: {
                                                                connect: {
                                                                    id: skyelarProfile.id
                                                                },
                                                            },
                                                            comment: "Amazing architecture. Good luck."
                                                        },
                                                        {
                                                            profile: {
                                                                connect: {
                                                                    id: anthonyProfile.id
                                                                },
                                                            },
                                                            comment: "Please donate to this amazing project. This is so cool."
                                                        }
                                                    ],
                                                }
                                            },                        
                    {
                        slug: 'echo-hose-ambulance-training',
                        name: 'Echo Hose Ambulance Training',
                        featuredImage: 'https://res.cloudinary.com/revitalize/image/upload/v1571338032/seed%20images/kingsbury_wqta9e.jpg',
                        description: 'The Kingsbury Center provides a transformative educational and social experience for children and adults with learning differences. The Center uses action research to ensure best practices. The Kingsbury Keystones are three guiding principles that shape our dynamic teaching and learning environment to support the growth and development of students who have a range of learning challenges.',
                        country:'United States',
                        state: 'Maryland',
                        address: '5000 14th St NW',
                        zip: 20011,
                        city: 'Washington, DC',
                        goalAmount: 250000,
                        duration: 150,
                        difficulty: "Medium",
                        startDate: "2020-6-1",
                        donations: {
                            create: [
                                {
                                    profile: {
                                        connect: {
                                            id: frankProfile.id
                                        }
                                    },
                                    amount: 1950.00
                                },
                                {
                                    profile: {
                                        connect: {
                                            id: skyelarProfile.id
                                        }
                                    },
                                    amount: 12000.00
                                },
                                {
                                    profile: {
                                        connect: {
                                            id: anthonyProfile.id
                                        }
                                    },
                                    amount: 100000.00
                                },
                                {
                                    profile: {
                                        connect: {
                                            id: anthonyProfile.id
                                        }
                                    },
                                    amount: 15000.00
                                }
                            ]
                        },
                        trades: {
                            create: [
                                {
                                    id: "1",
                                    name: "HVAC",
                                    description: "HVAC Certification"
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
                                    comment: "What a beautiful building. Wish you the best in your endeavor."
                                },
                                {
                                    profile: {
                                        connect: {
                                            id: skyelarProfile.id
                                        },
                                    },
                                    comment: "Amazing architecture. Good luck."
                                },
                                {
                                    profile: {
                                        connect: {
                                            id: anthonyProfile.id
                                        },
                                    },
                                    comment: "Please donate to this amazing project. This is so cool."
                                }

                            ],
                        }
                    },
                    {
                        slug:'emery-theatre',
                                                name: 'Emery Theatre',
                                                featuredImage: 'https://res.cloudinary.com/revitalize/image/upload/v1571338032/seed%20images/kingsbury_wqta9e.jpg',
                                                description: 'The Emery Theatre, or Emery Auditorium, is a historic, acoustically exceptional theater located in the Over-the-Rhine neighborhood of Cincinnati, Ohio. The building was constructed in 1911 as the home for a trade school (the Ohio Mechanics Institute), but its large, impressive auditorium was intended for public use. The design of the Emery Theatre is based on the "is acoustic curve" principles that were first proposed by John Scott Russell. The theatre was built with two balconies and a total of 2,211 seats. It was one of the first concert halls in the United States to have no obstructed seats.',
                                                country:'United States',
                                                state: 'Ohio',
                                                address: '1112 Walnut Street',
                                                zip: 45210,
                                                city: 'Cincinnati',
                                                goalAmount: 250000,
                                                duration: 150,
                                                difficulty: "Medium",
                                                startDate: "2020-4-6",
                                                donations: {
                                                    create: [
                                                        {
                                                            profile: {
                                                                connect: {
                                                                    id: frankProfile.id
                                                                }
                                                            },
                                                            amount: 1950.00
                                                        },
                                                        {
                                                            profile: {
                                                                connect: {
                                                                    id: skyelarProfile.id
                                                                }
                                                            },
                                                            amount: 12000.00
                                                        },
                                                        {
                                                            profile: {
                                                                connect: {
                                                                    id: anthonyProfile.id
                                                                }
                                                            },
                                                            amount: 100000.00
                                                        },
                                                        {
                                                            profile: {
                                                                connect: {
                                                                    id: anthonyProfile.id
                                                                }
                                                            },
                                                            amount: 15000.00
                                                        }
                                                    ]
                                                },
                                                trades: {
                                                    create: [
                                                        
                                                        {
                                                            id: "2",
                                                            name: "Plumber",
                                                            description: "Plumbing Certification"
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
                                                            comment: "What a beautiful building. Wish you the best in your endeavor."
                                                        },
                                                        {
                                                            profile: {
                                                                connect: {
                                                                    id: skyelarProfile.id
                                                                },
                                                            },
                                                            comment: "Amazing architecture. Good luck."
                                                        },
                                                        {
                                                            profile: {
                                                                connect: {
                                                                    id: anthonyProfile.id
                                                                },
                                                            },
                                                            comment: "Please donate to this amazing project. This is so cool."
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
            state: "Georgia",
            city: "Atlanta",
            address: "3634 Limer Street",
            zip: 30303,
            projects: {
                create: [
                    {
                        slug: 'georgia-girl-drive-in',
                        name: 'Georgia Girl Drive-In',
                        featuredImage: 'https://res.cloudinary.com/revitalize/image/upload/v1571093348/seed%20images/43467774685_5ca2f9fa81_b_qchgnz.jpg',
                        description: 'Just south of Woodbine, Georgia on the nearly forgotten stretch of highway known as US-17 sits the remains of the Georgia Girl Drive-In. The catchy old neon sign and rapidly crumbling building is all that remains of this once-groovy hangout from the 1960s.',
                        country:'United States',
                        state: 'Georgia',
                        address: '1602 GA-25',
                        zip: 31569,
                        city: 'Atlanta',
                        goalAmount: 120000,
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
                        trades: {
                            create: [
                                
                                {
                                     id: "3",
                                    name: "Carpentry",
                                    description: "Carpentry Certification"
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
                    },
                     {
                        slug: 'ano-nuevo-island',
                        name: 'Año Nuevo Island',
                        description: "Off the California coast between SF and Santa Cruz, the nine-acre Año Nuevo Island once served as a light station, but was abandoned in 1948. It's closed to the public, but has become home to hundreds of Northern elephant seals/endangered sea lions.",
                        featuredImage: 'https://res.cloudinary.com/revitalize/image/upload/v1571252989/seed%20images/ano_nuevo_island_itzrar.jpg',
                        country:'United States',
                        state: 'California',
                        address: 'Island in San Mateo County, California 94065',
                        zip: 94065,
                        city: 'Island in San Mateo County',
                        goalAmount: 220000,
                        duration: 24,
                        difficulty: "Medium",
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
                        trades: {
                            create: [
                               
                                {
                                     id: "4",
                                    name: "Electrician",
                                    description: "Electrician Certification"
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
                    },
                    {
                        slug: 'east-globe-school',
                        name: 'East Globe School',
                        featuredImage: 'https://res.cloudinary.com/revitalize/image/upload/v1571335246/seed%20images/eastglobe_jlz3ij.jpg',
                        description: 'This facility consists of 2 buildings one built in 1945 and the other building built in 1906 and is the oldest school building in Globe and has not been used for school purposes since 2009. Each building is constructed with poured concrete, foam-covered roofs and formerly an East Globe Elementary school. These structures are located on a rectangular-shaped full city block, with this entire perimeter covered with 6 foot chain-link metal fencing. The first building has 3 floors each measuring some 5,000 sf. THE FRONT BUILDING faces on U.S. 60 which is named Ash Avenue as it runs through Globe, AZ and has a total of 15,000 sf. The first floor currently contains administrative offices for a (a) Student Reception area, (b) A School Principal & (c) A School Nurse. These offices are served by a central air conditioning/heating unit and on the same first floor of the building there are five large classrooms which have an evaporative cooling system with forced air heat. Additionally, there are both men and women bathrooms on the ground floor here, along with blackboards and other school accessories in each classroom. Further, all three floors of this building have tile flooring in the rooms and polished cement in the outside hallways. THE SECOND FLOOR in this front building contains a total of 6 classrooms. The third floor has three large rooms, all three of these floors each containing 5,000 sf of space.',
                        country:'United States',
                        state: 'Arizona',
                        address: '439 S Fourth St',
                        zip: 85501,
                        city: 'Globe',
                        goalAmount: 300000,
                        duration: 120,
                        difficulty: "Easy",
                        startDate: "2020-5-1",
                        donations: {
                            create: [
                                {
                                    profile: {
                                        connect: {
                                            id: frankProfile.id
                                        }
                                    },
                                    amount: 1950.00
                                },
                                {
                                    profile: {
                                        connect: {
                                            id: skyelarProfile.id
                                        }
                                    },
                                    amount: 11400.00
                                },
                                {
                                    profile: {
                                        connect: {
                                            id: anthonyProfile.id
                                        }
                                    },
                                    amount: 120000.00
                                },
                                {
                                    profile: {
                                        connect: {
                                            id: anthonyProfile.id
                                        }
                                    },
                                    amount: 25000.00
                                }
                            ]
                        },
                        trades: {
                            create: [
                              
                                {    id: "5",
                                    name: "Mason",
                                    description: "Mason Certification"
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
                                    comment: "What a beautiful building. Wish you the best in your endeavor."
                                },
                                {
                                    profile: {
                                        connect: {
                                            id: skyelarProfile.id
                                        },
                                    },
                                    comment: "Amazing architecture. Good luck."
                                },
                                {
                                    profile: {
                                        connect: {
                                            id: anthonyProfile.id
                                        },
                                    },
                                    comment: "Please donate to this amazing project. This is so cool."
                                }

                            ],
                        }
                    },
                    {
                        slug:'kings-theatre',
                                                name: 'Kings Theatre',
                                                featuredImage: 'https://res.cloudinary.com/revitalize/image/upload/v1571350991/seed%20images/4793943088_ba279e5e41_b_erbein.jpg',
                                                description: 'One of five Loew\'s "wonder" theaters opened in New York and New Jersey just before the Great Depression hit, Brooklyn\'s Kings Theatre became abandoned in 1977. ',
                                                country:'United States',
                                                state: 'New York',
                                                address: '1027 Flatbush Avenue ',
                                                zip:11226,
                                                city: 'Brooklyn',
                                                goalAmount: 250000,
                                                duration: 150,
                                                difficulty: "Medium",
                                                startDate: "2020-6-1",
                                                donations: {
                                                    create: [
                                                        {
                                                            profile: {
                                                                connect: {
                                                                    id: frankProfile.id
                                                                }
                                                            },
                                                            amount: 1950.00
                                                        },
                                                        {
                                                            profile: {
                                                                connect: {
                                                                    id: skyelarProfile.id
                                                                }
                                                            },
                                                            amount: 12000.00
                                                        },
                                                        {
                                                            profile: {
                                                                connect: {
                                                                    id: anthonyProfile.id
                                                                }
                                                            },
                                                            amount: 100000.00
                                                        },
                                                        {
                                                            profile: {
                                                                connect: {
                                                                    id: anthonyProfile.id
                                                                }
                                                            },
                                                            amount: 15000.00
                                                        }
                                                    ]
                                                },
                                                trades: {
                                                    create: [
                                                       
                                                        {     id: "6",
                                                             name: "Interior Design",
                                                             description: "Interior Design Certification"
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
                                                            comment: "What a beautiful building. Wish you the best in your endeavor."
                                                        },
                                                        {
                                                            profile: {
                                                                connect: {
                                                                    id: skyelarProfile.id
                                                                },
                                                            },
                                                            comment: "Amazing architecture. Good luck."
                                                        },
                                                        {
                                                            profile: {
                                                                connect: {
                                                                    id: anthonyProfile.id
                                                                },
                                                            },
                                                            comment: "Please donate to this amazing project. This is so cool."
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
            profileImage: "https://avatars3.githubusercontent.com/u/43027065?s=400&v=4",
            country: "United States",
            state: "California",
            city: "Palmdale",
            address: "667 Williams Avenue",
            zip: 93552,
            projects: {
                create: [
                    {
                        slug: 'hawthorne-mall',
                        name: 'Hawthorne Mall',
                        featuredImage: 'https://res.cloudinary.com/revitalize/image/upload/v1571093414/seed%20images/maxresdefault_gevrek.jpg',
                        description: 'Hawthorne Plaza is a dead mall along Hawthorne Boulevard between 120th Street and El Segundo Blvd in Hawthorne, California. The 40-acre (16 ha) property opened in 1977 and included an indoor mall and free standing stores at the property\'s south end. The mall largely catered to the middle class residents living in and around Hawthorne and featured cheaper stores than other nearby malls such as South Bay Galleria and Manhattan Village.',
                        country:'United States',
                        state: 'California',
                        address: '12000 Hawthorne Blvd. ',
                        zip: 90250,
                        city: 'Hawthorne',
                        goalAmount: 200000,
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
                    },
                    {
                        slug: 'st-charles-mission-center',
                        name: 'St. Charles Mission Center',
                        featuredImage: 'https://res.cloudinary.com/revitalize/image/upload/v1571333365/seed%20images/Flagg_s3zory.jpg',
                        description: 'Until recently, the site was home to the St. Charles Mission Center. There are two main structures standing on the 347,370 SF tax lot – A 32 room Colonial Revival-Style Mansion , built in 1900 and designed by famed architect Ernest Flagg (1857-1947) as the centerpiece of his Stone Court country estate; and an adjacent dormitory which was added in later years. While the Mansion’s Exterior Structure is Landmarked and subject to LPC jurisdiction, it’s interior and the adjacent dormitory structure are not and can be altered and reconfigured without the need for special permits.',
                        country:'United States',
                        state: 'New York',
                        address: '209 Flagg Pl',
                        zip: 10304,
                        city: 'Staten Island',
                        goalAmount: 350000,
                        duration: 104,
                        difficulty: "Easy",
                        startDate: "2020-1-12",
                        donations: {
                            create: [
                                {
                                    profile: {
                                        connect: {
                                            id: frankProfile.id
                                        }
                                    },
                                    amount: 250.00
                                },
                                {
                                    profile: {
                                        connect: {
                                            id: skyelarProfile.id
                                        }
                                    },
                                    amount: 1300.00
                                },
                                {
                                    profile: {
                                        connect: {
                                            id: anthonyProfile.id
                                        }
                                    },
                                    amount: 2100.00
                                },
                                {
                                    profile: {
                                        connect: {
                                            id: anthonyProfile.id
                                        }
                                    },
                                    amount: 25000.00
                                }
                            ]
                        },
                        trades: {
                            create: [
                                
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
                                    comment: "What a beautiful building. Wish you the best in your endeavor."
                                },
                                {
                                    profile: {
                                        connect: {
                                            id: skyelarProfile.id
                                        },
                                    },
                                    comment: "Amazing architecture. Good luck."
                                },
                                {
                                    profile: {
                                        connect: {
                                            id: anthonyProfile.id
                                        },
                                    },
                                    comment: "Please donate to this amazing project. This is so cool."
                                }

                            ],
                        }
                    },
                    {
                        slug: 'planet-abacus-charter-school',
                        name: 'Planet Abacus Charter School',
                        featuredImage: 'https://res.cloudinary.com/revitalize/image/upload/v1571334764/seed%20images/PlanetAbacus_ysttuk.jpg',
                        description: 'The school opened its doors in 2007 serving students in grades K-4. Each year, a grade level was added until the enrollment included a diverse student population of kindergarten through eighth graders. During the 2016-2017 school year, Keystone Academy moved to its current location- a combination of the renovated historic Mary Disston School joined to a newly constructed building. The mission of Keystone Academy is to provide students with a rigorous academic program using a concentrated science and mathematics curriculum that employs the use of integrated technology.The school, which continues to serve a diverse student population from both in and around the Philadelphia region, provides students with a rigorous academic program, opportunities for social and emotional growth, an appreciation for the arts, and opportunities to help our community through charitable works and service learning projects.',
                        country:'United States',
                        state: 'Pennsylvania',
                        address: '6649 Tulip St',
                        zip: 19135,
                        city: 'Philadelphia',
                        goalAmount: 300000,
                        duration: 94,
                        difficulty: "Hard",
                        startDate: "2020-3-1",
                        donations: {
                            create: [
                                {
                                    profile: {
                                        connect: {
                                            id: frankProfile.id
                                        }
                                    },
                                    amount: 1950.00
                                },
                                {
                                    profile: {
                                        connect: {
                                            id: skyelarProfile.id
                                        }
                                    },
                                    amount: 1400.00
                                },
                                {
                                    profile: {
                                        connect: {
                                            id: anthonyProfile.id
                                        }
                                    },
                                    amount: 120000.00
                                },
                                {
                                    profile: {
                                        connect: {
                                            id: anthonyProfile.id
                                        }
                                    },
                                    amount: 25000.00
                                }
                            ]
                        },
                        trades: {
                            create: [
                                
                                {    id: "5",
                                    name: "Mason",
                                    description: "Mason Certification"
                                },
                                {     id: "6",
                                     name: "Interior Design",
                                     description: "Interior Design Certification"
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
                                    comment: "What a beautiful building. Wish you the best in your endeavor."
                                },
                                {
                                    profile: {
                                        connect: {
                                            id: skyelarProfile.id
                                        },
                                    },
                                    comment: "Amazing architecture. Good luck."
                                },
                                {
                                    profile: {
                                        connect: {
                                            id: anthonyProfile.id
                                        },
                                    },
                                    comment: "Please donate to this amazing project. This is so cool."
                                }

                            ],
                        }
                    },
                    {
                        slug:'willard-asylum',
                                                name: 'Willard Asylum',
                                                featuredImage: 'https://res.cloudinary.com/revitalize/image/upload/v1571629026/seed%20images/Willard-Unnamed-building_vtepi7.jpg',
                                                description: 'The Willard Asylum for the Chronic Insane is a former state hospital in Willard, New York, near Seneca Lake. It was listed on the National Register of Historic Places in 1975. It discharged its last patient and closed down in 1995',
                                                country:'United States',
                                                state: 'New York',
                                                address: 'Willard Road',
                                                zip:14521,
                                                city: 'Uvid',
                                                goalAmount: 250000,
                                                duration: 150,
                                                difficulty: "Medium",
                                                startDate: "2020-6-1",
                                                donations: {
                                                    create: [
                                                        {
                                                            profile: {
                                                                connect: {
                                                                    id: frankProfile.id
                                                                }
                                                            },
                                                            amount: 1950.00
                                                        },
                                                        {
                                                            profile: {
                                                                connect: {
                                                                    id: skyelarProfile.id
                                                                }
                                                            },
                                                            amount: 12000.00
                                                        },
                                                        {
                                                            profile: {
                                                                connect: {
                                                                    id: anthonyProfile.id
                                                                }
                                                            },
                                                            amount: 100000.00
                                                        },
                                                        {
                                                            profile: {
                                                                connect: {
                                                                    id: anthonyProfile.id
                                                                }
                                                            },
                                                            amount: 15000.00
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
                                                        {     id: "6",
                                                             name: "Interior Design",
                                                             description: "Interior Design Certification"
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
                                                            comment: "What a beautiful building. Wish you the best in your endeavor."
                                                        },
                                                        {
                                                            profile: {
                                                                connect: {
                                                                    id: skyelarProfile.id
                                                                },
                                                            },
                                                            comment: "Amazing architecture. Good luck."
                                                        },
                                                        {
                                                            profile: {
                                                                connect: {
                                                                    id: anthonyProfile.id
                                                                },
                                                            },
                                                            comment: "Please donate to this amazing project. This is so cool."
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
            state: "California",
            city: "Oakland",
            address: "481 Beech Street",
            zip: 94612,
            projects: {
                create: [
                    {
                        slug: '16th-street-station',
                        name: '16th Street Station',
                        featuredImage: 'https://res.cloudinary.com/revitalize/image/upload/v1571093581/seed%20images/16thSt_IMG_9176_nggf1t.jpg',
                        description: 'The original 16th Street depot was a smaller wood structure, built when the tracks were on the shoreline of San Francisco Bay. Later the shoreline was filled and now lies nearly a mile west. It was replaced in 1912 by a Beaux-Arts building designed by architect Jarvis Hunt.',
                        country:'United States',
                        state: 'California',
                        address: '1601 Wood Street',
                        zip: 94607,
                        city: 'Oakland',
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
                        trades: {
                            create: [
                                
                                {
                                    id: "2",
                                    name: "Plumber",
                                    description: "Plumbing Certification"
                                },
                                {    id: "5",
                                    name: "Mason",
                                    description: "Mason Certification"
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
                    },
                    {
                        slug: 'fairview-training-center',
                        name: 'Fairview Training Center',
                        featuredImage: 'https://res.cloudinary.com/revitalize/image/upload/v1571259152/seed%20images/fairviewtrainingcenter_pef8kf.jpg',
                        description: 'The Fairview Training Center was a state-run facility for people with developmental disabilities in Salem, Oregon, United States. Fairview was established in 1907 as the State Institution for the Feeble-Minded. The hospital opened on December 1, 1908 with 39 patients transferred from the Oregon State Hospital for the Insane. Before its closure in 2000, Fairview was administered by the Oregon Department of Human Services (DHS).',
                        country:'United States',
                        state: 'Oregon',
                        address: '2201 Strong Rd. SE',
                        zip: 97302,
                        city: 'Salem',
                        goalAmount: 350000,
                        duration: 114,
                        difficulty: "Hard",
                        startDate: "2020-10-02",
                        donations: {
                            create: [
                                {
                                    profile: {
                                        connect: {
                                            id: frankProfile.id
                                        }
                                    },
                                    amount: 50.00
                                },
                                {
                                    profile: {
                                        connect: {
                                            id: skyelarProfile.id
                                        }
                                    },
                                    amount: 300.00
                                },
                                {
                                    profile: {
                                        connect: {
                                            id: anthonyProfile.id
                                        }
                                    },
                                    amount: 2100.00
                                },
                                {
                                    profile: {
                                        connect: {
                                            id: anthonyProfile.id
                                        }
                                    },
                                    amount: 12000.00
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
                                     id: "3",
                                    name: "Carpentry",
                                    description: "Carpentry Certification"
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
                                    comment: "This place seems crazy. Wish you the best in your endeavor."
                                },
                                {
                                    profile: {
                                        connect: {
                                            id: skyelarProfile.id
                                        },
                                    },
                                    comment: "One of my favorite places to visit."
                                },
                                {
                                    profile: {
                                        connect: {
                                            id: anthonyProfile.id
                                        },
                                    },
                                    comment: "Please donate to this amazing project. This is so cool."
                                },
                                {
                                    slug:'the-majestic-theatre',
                                                            name: 'The Majestic Theatre',
                                                            featuredImage: 'https://res.cloudinary.com/revitalize/image/upload/v1571350912/seed%20images/majestic_ieus9a.jpg',
                                                            description: 'The Majestic Theatre is a historic movie theater located in East St. Louis, Illinois. Built in 1928, the theater replaced a 1907 theater which had burned down. The Spanish Gothic theater was designed by the Boller Brothers, who were nationally prominent theater architects. Multicolored tiles decorate the building\'s front facade, forming patterned mosaics. The front facade also features piers with decorative peaks and tall arched windows. The theater attracted numerous celebrities to its grand opening, and it represented several firsts among East St. Louis cinemas; it was the first in the city with a modern air conditioning system and the first in Southern Illinois to show talkies. The theater closed in the 1960s.',
                                                            country:'United States',
                                                            state: 'Illinois',
                                                            address: '240 Collinsville Avenue',
                                                            zip:62201,
                                                            city: 'East St. Louis',
                                                            goalAmount: 320000,
                                                            duration: 250,
                                                            difficulty: "Hard",
                                                            startDate: "2020-3-31",
                                                            donations: {
                                                                create: [
                                                                    {
                                                                        profile: {
                                                                            connect: {
                                                                                id: frankProfile.id
                                                                            }
                                                                        },
                                                                        amount: 1950.00
                                                                    },
                                                                    {
                                                                        profile: {
                                                                            connect: {
                                                                                id: skyelarProfile.id
                                                                            }
                                                                        },
                                                                        amount: 12000.00
                                                                    },
                                                                    {
                                                                        profile: {
                                                                            connect: {
                                                                                id: anthonyProfile.id
                                                                            }
                                                                        },
                                                                        amount: 100000.00
                                                                    },
                                                                    {
                                                                        profile: {
                                                                            connect: {
                                                                                id: anthonyProfile.id
                                                                            }
                                                                        },
                                                                        amount: 15000.00
                                                                    }
                                                                ]
                                                            },
                                                            trades: {
                                                                create: [
                                                                    
                                                                    {
                                                                         id: "4",
                                                                        name: "Electrician",
                                                                        description: "Electrician Certification"
                                                                    },
                                                                    {    id: "5",
                                                                        name: "Mason",
                                                                        description: "Mason Certification"
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
                                                                        comment: "What a beautiful building. Wish you the best in your endeavor."
                                                                    },
                                                                    {
                                                                        profile: {
                                                                            connect: {
                                                                                id: skyelarProfile.id
                                                                            },
                                                                        },
                                                                        comment: "Amazing architecture. Good luck."
                                                                    },
                                                                    {
                                                                        profile: {
                                                                            connect: {
                                                                                id: anthonyProfile.id
                                                                            },
                                                                        },
                                                                        comment: "Please donate to this amazing project. This is so cool."
                                                                    }
                                                                ],
                                                            }
                                                        },
                                                        {
                                                            slug:'elmo-theatre',
                                                                                    name: 'Elmo Theatre',
                                                                                    featuredImage: 'https://res.cloudinary.com/revitalize/image/upload/v1571628947/seed%20images/large_jzggiw.jpg',
                                                                                    description: 'The Elmo Theater opened in 1941 on Saint Elmo’s Main Street, to replace an earlier theater of the same name on the site which was destroyed by a fire in 1940. It features a brick, fairly plain facade, but its signage is its real highlight. The triangular marquee, now missing its glass, exposing where the neon tubing once was, featured a large “E” on its front. The vertical sign was L-shaped, reaching up from the top of the marquee towards the facade, with the theater’s name at one time illuminated by neon lights.The Elmo has been closed as a movie house since 1979.',
                                                                                    country:'United States',
                                                                                    state: 'Illinois',
                                                                                    address: '516 N. Main Street',
                                                                                    zip:62458,
                                                                                    city: 'St. Elmo',
                                                                                    goalAmount: 250000,
                                                                                    duration: 150,
                                                                                    difficulty: "Medium",
                                                                                    startDate: "2020-6-1",
                                                                                    donations: {
                                                                                        create: [
                                                                                            {
                                                                                                profile: {
                                                                                                    connect: {
                                                                                                        id: frankProfile.id
                                                                                                    }
                                                                                                },
                                                                                                amount: 1950.00
                                                                                            },
                                                                                            {
                                                                                                profile: {
                                                                                                    connect: {
                                                                                                        id: skyelarProfile.id
                                                                                                    }
                                                                                                },
                                                                                                amount: 12000.00
                                                                                            },
                                                                                            {
                                                                                                profile: {
                                                                                                    connect: {
                                                                                                        id: anthonyProfile.id
                                                                                                    }
                                                                                                },
                                                                                                amount: 100000.00
                                                                                            },
                                                                                            {
                                                                                                profile: {
                                                                                                    connect: {
                                                                                                        id: anthonyProfile.id
                                                                                                    }
                                                                                                },
                                                                                                amount: 15000.00
                                                                                            }
                                                                                        ]
                                                                                    },
                                                                                    trades: {
                                                                                        create: [
                                                                                          
                                                                                            {
                                                                                                id: "2",
                                                                                                name: "Plumber",
                                                                                                description: "Plumbing Certification"
                                                                                            },
                                                                                            
                                                                                            {     id: "6",
                                                                                                 name: "Interior Design",
                                                                                                 description: "Interior Design Certification"
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
                                                                                                comment: "What a beautiful building. Wish you the best in your endeavor."
                                                                                            },
                                                                                            {
                                                                                                profile: {
                                                                                                    connect: {
                                                                                                        id: skyelarProfile.id
                                                                                                    },
                                                                                                },
                                                                                                comment: "Amazing architecture. Good luck."
                                                                                            },
                                                                                            {
                                                                                                profile: {
                                                                                                    connect: {
                                                                                                        id: anthonyProfile.id
                                                                                                    },
                                                                                                },
                                                                                                comment: "Please donate to this amazing project. This is so cool."
                                                                                            }
                                                                                        ],
                                                                                    }
                                                                                },                                                            
                                                        {
                                                            slug:'broadway-theatre',
                                                                                    name: 'Broadway Theatre',
                                                                                    featuredImage: 'https://res.cloudinary.com/revitalize/image/upload/v1571628833/seed%20images/from_the_stage_02_ebcmbd.jpg',
                                                                                    description: '',
                                                                                    country:'United States',
                                                                                    state: 'New York',
                                                                                    address: '516 Broadway Street',
                                                                                    zip:14204,
                                                                                    city: 'Buffalo',
                                                                                    goalAmount: 250000,
                                                                                    duration: 150,
                                                                                    difficulty: "Medium",
                                                                                    startDate: "2020-6-1",
                                                                                    donations: {
                                                                                        create: [
                                                                                            {
                                                                                                profile: {
                                                                                                    connect: {
                                                                                                        id: frankProfile.id
                                                                                                    }
                                                                                                },
                                                                                                amount: 1950.00
                                                                                            },
                                                                                            {
                                                                                                profile: {
                                                                                                    connect: {
                                                                                                        id: skyelarProfile.id
                                                                                                    }
                                                                                                },
                                                                                                amount: 12000.00
                                                                                            },
                                                                                            {
                                                                                                profile: {
                                                                                                    connect: {
                                                                                                        id: anthonyProfile.id
                                                                                                    }
                                                                                                },
                                                                                                amount: 100000.00
                                                                                            },
                                                                                            {
                                                                                                profile: {
                                                                                                    connect: {
                                                                                                        id: anthonyProfile.id
                                                                                                    }
                                                                                                },
                                                                                                amount: 15000.00
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
                                                                                            },
                                                                                            {    id: "5",
                                                                                                name: "Mason",
                                                                                                description: "Mason Certification"
                                                                                            },
                                                                                            {     id: "6",
                                                                                                 name: "Interior Design",
                                                                                                 description: "Interior Design Certification"
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
                                                                                                comment: "What a beautiful building. Wish you the best in your endeavor."
                                                                                            },
                                                                                            {
                                                                                                profile: {
                                                                                                    connect: {
                                                                                                        id: skyelarProfile.id
                                                                                                    },
                                                                                                },
                                                                                                comment: "Amazing architecture. Good luck."
                                                                                            },
                                                                                            {
                                                                                                profile: {
                                                                                                    connect: {
                                                                                                        id: anthonyProfile.id
                                                                                                    },
                                                                                                },
                                                                                                comment: "Please donate to this amazing project. This is so cool."
                                                                                            }
                                                                                        ],
                                                                                    }
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
            profileImage: "https://avatars1.githubusercontent.com/u/42569856?s=400&v=4",
            country: "United States",
            state: "California",
            city: "San Francisco",
            address: "601 Avenue A, San Francisco",
            zip: 94130,
            projects: {
                create: [
                    {
                        slug: 'cosson-hall',
                        name: 'Cosson Hall',
                        featuredImage: 'https://res.cloudinary.com/revitalize/image/upload/v1571093630/seed%20images/Treasure-Island_s-Cosson-Hall-is-Haunted_ojbdvq.jpg',
                        description: 'Opened in 1969 on sadly treasure-less Treasure Island, Cosson Hall was an asterisk-shaped barracks that featured six wings, all of which were occupied by male sailors stationed on the island.',
                        country:'United States',
                        state: 'California',
                        address: '601 Avenue A',
                        zip: 94130,
                        city: 'San Francisco',
                        goalAmount: 350000,
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
                                },
                                {    id: "5",
                                    name: "Mason",
                                    description: "Mason Certification"
                                },
                                {     id: "6",
                                     name: "Interior Design",
                                     description: "Interior Design Certification"
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
                                    title: "This is a title",
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
                                    title: "This is also a title",
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
                                    title: "Hey look another title!",
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
                    },
                    {
                        slug: 'govan-schoolhouse',
                        name: 'Govan Schoolhouse',
                        featuredImage: 'https://res.cloudinary.com/revitalize/image/upload/v1571256845/seed%20images/govanschoolhouse_rxzklk.jpg',
                        description: 'Govan is a ghost town in central Washington State. There are remnants of several buildings, most notably the old Govan Schoolhouse. Govan once was a small farming community, large enough to boast a post office, school, two churches, and several businesses, and in 1909 listed a population of 114. However, a fire in 1927 devastated the business district, and many stores chose not to rebuild. The 1933 bypass of the town by Highway 2 hasted its demise, and the school closed in 1942. The post office and final business closed in 1967.',
                        country:'United States',
                        state: 'Washington',
                        address: 'School House Rd, Wilbur, WA 99185',
                        zip: 99185,
                        city: 'Wilbur',
                        goalAmount: 150000,
                        duration: 124,
                        difficulty: "Hard",
                        startDate: "2020-10-09",
                        donations: {
                            create: [
                                {
                                    profile: {
                                        connect: {
                                            id: frankProfile.id
                                        }
                                    },
                                    amount: 420.00
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
                                    amount: 200.00
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
                                },
                                {    id: "5",
                                    name: "Mason",
                                    description: "Mason Certification"
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
                                    comment: "Wow. Such a sad fire."
                                },
                                {
                                    profile: {
                                        connect: {
                                            id: skyelarProfile.id
                                        },
                                    },
                                    comment: "This is going to take years to rebuild! Good Luck"
                                },
                                {
                                    profile: {
                                        connect: {
                                            id: anthonyProfile.id
                                        },
                                    },
                                    comment: "Please donate to this amazing project. This is so cool."
                                }

                            ],
                        }
                    },
                    {
                        slug:'state-palace-theatre',
                                                name: 'State Palace Theatre',
                                                featuredImage: 'https://res.cloudinary.com/revitalize/image/upload/v1571628423/seed%20images/1_state_palace_theatre_new_orleans_la_jgknwo.jpg',
                                                description: 'The State Palace Theatre operated from 1926 until it was forced to close when Hurricane Katrina damaged the building. After that it was used as a rave venue from time to time until it was officially shut down in 2007 for fire code violations.',
                                                country:'United States',
                                                state: 'Louisiana',
                                                address: '1108 Canal Street',
                                                zip:70112,
                                                city: 'New Orleans',
                                                goalAmount: 250000,
                                                duration: 150,
                                                difficulty: "Medium",
                                                startDate: "2020-6-1",
                                                donations: {
                                                    create: [
                                                        {
                                                            profile: {
                                                                connect: {
                                                                    id: frankProfile.id
                                                                }
                                                            },
                                                            amount: 1950.00
                                                        },
                                                        {
                                                            profile: {
                                                                connect: {
                                                                    id: skyelarProfile.id
                                                                }
                                                            },
                                                            amount: 12000.00
                                                        },
                                                        {
                                                            profile: {
                                                                connect: {
                                                                    id: anthonyProfile.id
                                                                }
                                                            },
                                                            amount: 100000.00
                                                        },
                                                        {
                                                            profile: {
                                                                connect: {
                                                                    id: anthonyProfile.id
                                                                }
                                                            },
                                                            amount: 15000.00
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
                                                             id: "3",
                                                            name: "Carpentry",
                                                            description: "Carpentry Certification"
                                                        },
                                                        
                                                        {    id: "5",
                                                            name: "Mason",
                                                            description: "Mason Certification"
                                                        },
                                                        {     id: "6",
                                                             name: "Interior Design",
                                                             description: "Interior Design Certification"
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
                                                            comment: "What a beautiful building. Wish you the best in your endeavor."
                                                        },
                                                        {
                                                            profile: {
                                                                connect: {
                                                                    id: skyelarProfile.id
                                                                },
                                                            },
                                                            comment: "Amazing architecture. Good luck."
                                                        },
                                                        {
                                                            profile: {
                                                                connect: {
                                                                    id: anthonyProfile.id
                                                                },
                                                            },
                                                            comment: "Please donate to this amazing project. This is so cool."
                                                        }
                                                    ],
                                                }
                                            },                        
                    {
                        slug:'the-united-artists-theatre-building',
                                                name: 'The-United-Artists-Theatre-Building',            
                        featuredImage:  'https://www.gannett-cdn.com/-mm-/7f98b4bd4c201e3574afc7b23de7a1de16231f32/c=56-0-2184-1600&r=x408&c=540x405/local/-/media/2017/08/23/DetroitFreeP/DetroitFreePress/636391019026817468-arena-082317-kpm-4.jpg',
                                                description: 'The United Artists Theatre Building is a vacant high-rise tower in downtown Detroit, Michigan. It was built in 1928 and stands 18 stories tall. The building was designed by architect C. Howard Crane in the renaissance revival architectural style, and is made mainly of brick. Until December 29, 1971, it was a first-run movie house and office space, and then after that, the theatre saw sporadic usage until 1973. The United Artists Theatre, designed in a Spanish-Gothic design, sat 2,070 people, and after closing served from 1978 to 1983 as the Detroit Symphony Orchestra\'s recording theater. After the theater closed, the office block struggled as tenants moved to suburbs. It finally closed in 1984. An original 10-story, vertical UA sign was replaced in the 1950s with a marquee that remained until 2005.',
                                                country:'United States',
                                                state: 'Michigan',
                                                address: '150 Bagley Avenue',
                                                zip:48226,
                                                city: 'Detroit',
                                                goalAmount: 360000,
                                                duration: 210,
                                                difficulty: "Hard",
                                                startDate: "2020-2-24",
                                                donations: {
                                                    create: [
                                                        {
                                                            profile: {
                                                                connect: {
                                                                    id: frankProfile.id
                                                                }
                                                            },
                                                            amount: 1950.00
                                                        },
                                                        {
                                                            profile: {
                                                                connect: {
                                                                    id: skyelarProfile.id
                                                                }
                                                            },
                                                            amount: 12000.00
                                                        },
                                                        {
                                                            profile: {
                                                                connect: {
                                                                    id: anthonyProfile.id
                                                                }
                                                            },
                                                            amount: 100000.00
                                                        },
                                                        {
                                                            profile: {
                                                                connect: {
                                                                    id: anthonyProfile.id
                                                                }
                                                            },
                                                            amount: 15000.00
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
                                                            comment: "What a beautiful building. Wish you the best in your endeavor."
                                                        },
                                                        {
                                                            profile: {
                                                                connect: {
                                                                    id: skyelarProfile.id
                                                                },
                                                            },
                                                            comment: "Amazing architecture. Good luck."
                                                        },
                                                        {
                                                            profile: {
                                                                connect: {
                                                                    id: anthonyProfile.id
                                                                },
                                                            },
                                                            comment: "Please donate to this amazing project. This is so cool."
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
>>>>>>> 4d3b0dfc37cbb47af7bd1f45e91e69308e901b78
}

main();
