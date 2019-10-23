import { getProfileId } from '../../utils/getProfileId';

export const ProjectTask = {
	async createProjectTask(parent, args, { prisma, request }, info) {
		const profileId = getProfileId(request);

		const isProjectOwner = await prisma.$exists.project({ id: args.project, profile: { id: profileId } });
		const isProjectTradesman = await prisma.$exists.projectMasterTradesman({
			project: { id: args.project },
			profile: { id: profileId },
		});

		if (!isProjectOwner && !isProjectTradesman && !isProjectStudent)
			throw new Error('Sorry, but that project does not exist');

		return prisma.createProjectTask({
			project: {
				connect: {
					id: args.data.project,
				},
			},
			trade: {
				connect: {
					id: args.data.trade,
				},
			},
			title: args.data.title,
			description: args.data.description,
			priority: args.data.priority,
			dueDate: args.data.dueDate,
			budgetHours: args.data.budgetHours,
		});
	},
	async updateProjectTask(parent, args, { prisma, request }, info) {
		const profileId = getProfileId(request);

		const isProjectOwner = await prisma.$exists.project({ id: args.project, profile: { id: profileId } });
		const isProjectTradesman = await prisma.$exists.projectMasterTradesman({
			project: { id: args.project },
			profile: { id: profileId },
		});
		const isProjectStudent = await prisma.$exists.projectStudent({
			project: { id: args.project },
			profile: { id: profileId },
		});

		if (!isProjectOwner && !isProjectTradesman && !isProjectStudent)
			throw new Error('Sorry, but that project does not exist');

		return prisma.updateProjectTask(
			{
				where: {
					id: args.id,
				},
				data: args.data,
			},
			info,
		);
	},
	// Add a student to a created task
	async CreateProjectApprenticeTask(parent, args, { prisma, request }, info) {
		const profileId = getProfileId(request);

		const isProjectOwner = await prisma.$exists.project({ id: args.data.project, profile: { id: profileId } });
		const isProjectTradesman = await prisma.$exists.projectMasterTradesman({
			project: { id: args.data.project },
			profile: { id: profileId },
		});

		if (!isProjectOwner && !isProjectTradesman) throw new Error('Sorry, but that project does not exist');

		return prisma.CreateProjectApprenticeTask({
			projectTask: {
				connect: {
					id: args.data.projectTask,
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
