import { getProfileId } from '../../utils/getProfileId';

export const ProjectApplicant = {
	async createProjectApplicant(parent, args, { prisma, request }, info) {
		const profileId = getProfileId(request);

		const project = await prisma.$exists.project({ id: args.data.project });

		if (!project) throw new Error('Sorry, but that project does not exist');

		return prisma.createProjectApplicant(
			{
				project: {
					connect: {
						id: args.data.project,
					},
				},
				profile: {
					connect: {
						id: profileId,
					},
				},
				trade: {
					connect: {
						id: args.data.trade,
					},
				},
				licensed: args.data.licensed,
				coverLetter: args.data.coverLetter,
				jobExperience: args.data.jobExperience,
				education: args.data.education,
				availability: args.data.availability,
			},
			info,
		);
	},
};
