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
	async deleteProjectLike(parent, args, { prisma, request }, info) {
		const profileId = getProfileId(request);

		const userProjectLikeExists = await prisma.$exists.projectLike({ id: args.id, profile: { id: profileId } });

		if (!userProjectLikeExists)
			throw new Error('Sorry, but something went wrong while trying to delete that comment');

		return prisma.deleteProjectLike({
			where: {
				id: args.data.id,
			},
		});
	},
};
