import { getProfileId } from '../../utils/getProfileId';

export const ProjectComment = {
	async createProjectComment(parent, args, { prisma, request }, info) {
		const profileId = getProfileId(request);

		return prisma.createProjectComment({
			profile: profileId,
			project: args.id,
		});
	},
};
