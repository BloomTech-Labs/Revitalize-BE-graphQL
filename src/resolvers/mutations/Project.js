import { getProfileId } from '../../utils/getProfileId';

export const Project = {
	createProject(parent, args, { prisma, request }, info) {
		const profileId = getProfileId(request);

		return prisma.createProject(
			{
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
						id: profileId,
					},
				},
			},
			info,
		);
	},
	async updateProject(parent, args, { prisma, request }, info) {
		const profileId = getProfileId(request);
		const userProjectExists = await prisma.$exists.project({ id: args.id, profile: { id: profileId } });

		if (!userProjectExists) {
			throw new Error('Sorry, but that project does not exist');
		}

		return prisma.updateProject(
			{
				id: args.id,
				data: args.data,
			},
			info,
		);
	},
	async deleteProject(parent, args, { prisma, request }, info) {
		const profileId = getProfileId(request);
		const userProjectExists = await prisma.$exists.project({ id: args.id, profile: { id: profileId } });

		if (!userProjectExists) {
			throw new Error('Sorry, but that project does not exist');
		}

		return prisma.deleteProject(
			{
				id: args.id,
			},
			info,
		);
	},
};
