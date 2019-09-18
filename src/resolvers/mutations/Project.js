import { getProfileId } from '../../utils/getProfileId';

export const Project = {
	createProject(parent, args, { prisma, request }, info) {
		const profileId = getProfileId(request);

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
					profile: {
						connect: {
							id: profileId
						}
					}
				}
			},
			info
		);
	},
	async updateProject(parent, args, { prisma }, info) {
		const userId = getUserId(request);
		const userProjectExists = await prisma.exists.Project({ id: args.id, user: { id: userId } });

		if (!userProjectExists) {
			throw new Error('Sorry, but that project does not exist');
		}

		return prisma.mutation.updateProject(
			{
				where: {
					id: args.id
				},
				data: args.data
			},
			info
		);
	},
	async deleteProject(parent, args, { prisma, request }, info) {
		const userId = getUserId(request);
		const userProjectExists = await prisma.exists.Project({ id: args.id, user: { id: userId } });

		if (!userProjectExists) {
			throw new Error('Sorry, but that project does not exist');
		}

		return prisma.mutation.deleteProject(
			{
				where: {
					id: args.id
				}
			},
			info
		);
	},
};
