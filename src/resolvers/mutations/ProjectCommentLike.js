import { getProfileId } from '../../utils/getProfileId';

export const ProjectCommentLike = {
	async createProjectCommentLike(parent, args, { prisma, request }, info) {
		const profileId = getProfileId(request);

		const commentExists = await prisma.$exists.projectCommentLike({ id: args.id });
		if (!commentExists) throw new Error("Sorry, but that comment doesn't exist");

		return prisma.createProjectCommentLike({
			data: {
				profile: {
					connect: {
						id: profileId,
					},
				},
				comment: {
					connect: {
						id: args.id,
					},
				},
			},
		});
	},
	async deleteProjectCommentLike(parent, args, { prisma, request }, info) {
		const profileId = getProfileId(request);

		const commentExists = await prisma.$exists.projectCommentLike({ id: args.id, profile: { id: profileId } });

		if (!commentExists) throw new Error("Sorry, but that comment doesn't exist");

		return prisma.deleteProjectCommentLike({
			where: {
				id: args.id,
			},
		});
	},
};
