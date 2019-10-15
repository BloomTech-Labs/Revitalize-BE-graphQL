import { getProfileId } from '../../utils/getProfileId';

export const ProjectApplicant = {
	async createProjectApplicant(parent, args, { prisma, request }, info) {
		const profileId = getProfileId(request);

		const projectExists = await prisma.$exists.project({ id: args.data.project });
		if (!projectExists) throw new Error('Sorry, but that project does not exist');

		const applicantExists = await prisma.$exists.projectApplicant({
			project: { id: args.data.project },
			profile: { id: args.data.profile },
		});

		if (applicantExists) throw new Error('Sorry, but you have already applied to that project');

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
	async acceptProjectApplicant(parent, args, { prisma, request }, info) {
		const profileId = getProfileId(request);

		const isProjectOwner = await prisma.$exists.project({ id: args.data.project, profile: { id: profileId } });
		const isProjectTradesman = await prisma.$exists.projectMasterTradesman({
			project: { id: args.data.id },
			profile: { id: profileId },
		});

		if (!isProjectOwner && !isProjectTradesman) throw new Error('Sorry, but that project does not exist');

		const applicant = await prisma.$exists.projectApplicant({
			id: args.data.application,
			project: { id: args.data.project },
			profile: { id: args.data.profile },
		});

		if (!applicant) throw new Error("Sorry, but that applicant doesn't exist");

		const isProjectStudent = await prisma.$exists.projectStudent({
			project: { id: args.data.project },
			profile: { id: args.data.profile },
		});

		if (isProjectStudent) throw new Error('Student already exists');

		const updatedApplication = await prisma.updateProjectApplicant({
			where: {
				id: args.data.application,
			},
			data: {
				status: 'ACCEPTED',
			},
		});

		if (!updatedApplication.licensed) {
			return await prisma.createProjectStudent(
				{
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
				},
				info,
			);
		} else {
			return await prisma.createProjectMasterTradesman(
				{
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
				},
				info,
			);
		}
	},
};
