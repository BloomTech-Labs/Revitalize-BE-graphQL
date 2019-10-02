import { getProfileId } from '../../utils/getProfileId';

export const ProjectLike = {
	async createProjectLike(parent, args, { prisma, request }, info) {
		const profileId = getProfileId(request);

		return prisma.createProjectLike({
			data: {
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
			},
		});
	},
};
