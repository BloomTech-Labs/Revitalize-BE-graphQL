import { getProfileId } from '../../utils/getProfileId';

import { recommendedProject } from '../../fragments/RecommendedProject';
import { weightSort } from '../../utils/projectWeightedSort';
import { nearYou } from '../../utils/nearYou';

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
		let opArgs = {};

		if (args.query) {
			opArgs = {
				where: {
					trades_some: {
						name_contains: args.query,
					},
				},
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
	async recommendedProjects(parent, args, { prisma }, info) {
		const projects = await prisma.projects({}, info).$fragment(recommendedProject);
		return weightSort(projects);
	},
	async projectsNearMe(parent, args, { prisma, request }, info) {
		return nearYou(prisma, request);
	},
	async getProjectsView(parent, args, { prisma, request }, info) {
		const projects = {};

		const recommendedProjects = await prisma.projects({}, info).$fragment(recommendedProject);
		projects.recommendedProjects = weightSort(recommendedProjects);

		const projectsNearYou = await nearYou(prisma, request);
		projects.spotlight = projectsNearYou[0];
		projects.projectsNearYou = projectsNearYou.slice(1);
		const newAndNoteworthyProjects = await prisma.projects({
			orderBy: 'createdAt_DESC',
		});

		projects.newAndNoteworthyProjects = newAndNoteworthyProjects;

		return projects;
	},
};
