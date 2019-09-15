export const Project = {
	createProject(parent, args, { prisma }, info) {
		return prisma.mutation.createProject(
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
	deleteProject(parent, args, { prisma }, info) {
		return prisma.mutation.deleteProject(
			{
				where: {
					id: args.id
				}
			},
			info
		);
	},
	updateProject(parent, args, { prisma }, info) {
		return prisma.mutation.updateProject(
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
