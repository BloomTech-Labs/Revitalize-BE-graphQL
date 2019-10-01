import { getProfileId } from '../../utils/getProfileId';

export const ProjectComment = {
	async createProjectComment(parent, args, { prisma, request }, info) {
		const profileId = getProfileId(request);

		return prisma.createProjectComment({
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
		});
	},
};
