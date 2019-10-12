import { getProfileId } from '../../utils/getProfileId';

export const ProjectMasterTradesman = {
	async createProjectMasterTradesman(parent, args, { prisma, request }, info) {
		const profileId = getProfileId(request);

		const project = await prisma.$exists.project({ id: args.data.project, profile: { id: profileId } });

		if (!project) throw new Error('Sorry, but that project does not exist');

		return prisma.createProjectMasterTradesman({
			project: {
				connect: {
					id: args.data.project,
				},
			},
			profile: {
				connect: {
					id: args.data.profile,
				},
			},
		});
	},
};
