export const Project = {
	creatProject(parent, args, { prisma }, info) {
		return prisma.mutation.creatProject(
			{
				data: {
					name: args.data.name,
					description: args.data.description,
					address: args.data.address,
					state: args.data.state,
					zip: args.data.zip,
					city: args.data.city,
					goalAmount: args.data.goalAmount,
					amountFunded: args.data.amountFunded,
					user: {
						connect: {
							id: args.data.user
						}
					}
				}
			},
			info
		);
	},
	deletProject(parent, args, { prisma }, info) {
		return prisma.mutation.deletProject(
			{
				where: {
					id: args.id
				}
			},
			info
		);
	},
	updatProject(parent, args, { prisma }, info) {
		return prisma.mutation.updatProject(
			{
				where: {
					id: args.id
				},
				data: args.data
			},
			info
		);
	}
};
