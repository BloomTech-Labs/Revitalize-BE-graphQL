import { getProfileId } from '../../utils/getProfileId';

export const Project = {
	async projectById(parent, args, { prisma }, info) {
		return prisma.project(
			{
				id: args.id,
			},
			info,
		);
	},
	async projectBySlug(parent, args, { prisma }, info) {
		const project = await prisma.projects(
			{
				where: {
					slug: args.slug,
				},
			},
			info,
		);

		return project[0];
	},
	async projects(parent, args, { prisma, request }, info) {
		const opArgs = {};

		if (args.query) {
			opArgs.where = {
				OR: [
					{
						slug_contains: args.query,
					},
					{
						name_contains: args.query,
					},
					{
						city_contains: args.query,
					},
					{
						state_contains: args.query,
					},
				],
			};
		}

		return prisma.projects(opArgs, info);
	},
	async myProjects(parent, args, { prisma, request }, info) {
		const profileId = getProfileId(request);

		return prisma.projects(
			{
				where: {
					profile: {
						id: profileId,
					},
				},
			},
			info,
		);
	},
	async userProjects(parent, args, { prisma }, info) {
		return prisma.projects(
			{
				where: {
					profile: {
						id: args.id,
					},
				},
			},
			info,
		);
	},
};
