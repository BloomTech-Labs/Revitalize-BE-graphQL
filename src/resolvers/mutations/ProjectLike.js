import { getProfileId } from '../../utils/getProfileId';

export const ProjectLike = {
	async createProjectLike(parent, args, { prisma, request }, info) {
		const profileId = getProfileId(request);

		const projectExists = await prisma.$exists.project({ id: args.id });

		if (!projectExists) throw new Error('Sorry, but that project does not exist');

		return prisma.createProjectLike(
			{
				profile: {
					connect: {
						id: profileId,
					},
				},
				project: {
					connect: {
						id: args.id,
					},
				},
			},
			info,
		);
	},
	async deleteProjectLike(parent, args, { prisma, request }, info) {
		const profileId = getProfileId(request);

		const userProjectLikeExists = await prisma.$exists.projectLike({ id: args.id, profile: { id: profileId } });
		if (!userProjectLikeExists) throw new Error('Sorry, but that like does not exist');

		return prisma.deleteProjectLike(
			{
				id: args.id,
			},
			info,
		);
	},
};
