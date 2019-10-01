import { getProfileId } from '../../utils/getProfileId';

export const ProjectComment = {
	async createProjectComment(parent, args, { prisma, request }, info) {
		const profileId = getProfileId(request);

		return prisma.createProjectComment(
			{
				profile: {
					connect: {
						id: profileId,
					},
				},
				project: {
					connect: {
						id: args.data.id,
					},
				},
				comment: args.data.comment,
			},
			info,
		);
	},
	async updateProjectComment(parent, args, { prisma, request }, info) {
		const profileId = getProfileId(request);

		const userComment = await prisma.$exists.projectComment({
			id: args.id,
			profile: profileId,
		});

		if (!userComment) {
			throw new Error('Sorry, but there was an error trying to edit that comment');
		}

		return prisma.updateProjectComment(
			{
				data: {
					comment: args.data.comment,
				},
				where: {
					id: args.data.id,
				},
			},
			info,
		);
	},
	async updateProjectComment(parent, args, { prisma, request }, info) {
		const profileId = getProfileId(request);

		const userComment = await prisma.$exists.projectComment({
			id: args.id,
			profile: profileId,
		});

		if (!userComment) {
			throw new Error('Sorry, but there was an error trying to delete that comment');
		}

		return prisma.deleteProjectComment(
			{
				where: {
					id: args.data.id,
				},
			},
			info,
		);
	},
};
