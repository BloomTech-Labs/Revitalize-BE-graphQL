import { getProfileId } from '../../utils/getProfileId';
import { resolveIp } from '../../utils/resolveIp';
import { weightSort } from '../../utils/projectWeightedSort';
import { recommendedProject } from '../../fragments/RecommendedProject';

import iplocation from 'iplocation';
import zipcodes from 'zipcodes';

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
	async recommendedProjects(parent, args, { prisma }, info) {
		const projects = await prisma.projects({}, info).$fragment(recommendedProject);
		return weightSort(projects)
	},
	async projectsNearMe(parent, args, { prisma, request }, info) {
		let location = {};
		let profile;

		// Get user profile id
		const profileId = getProfileId(request, false);

		if (profileId && profileId !== null) {
			// Query user profile
			profile = await prisma.userProfiles({
				where: {
					AND: [{ id: profileId }, { state_not: null }, { city_not: null }, { zip_not: null }],
				},
			});
		}

		if (profile && profile[0]) {
			// Set location
			location = {
				state: profile[0].state,
				city: profile[0].city,
				zip: profile[0].zip,
			};
		} else {
			// @NOTE:Geolocation does not work on localhost! Please pass a token when querying this data on localhost

			// Resolve ip if user profile doesn't exist
			const ip = resolveIp(request);

			// If on localhost return all the projects
			if (!ip) return prisma.projects()

			// Get geolocation
			const ipLocation = await iplocation(ip);

			// Set location
			location = {
				state: ipLocation.region,
				city: ipLocation.city,
				zip: parseInt(ipLocation.postal, 10),
			};
		}

		// Query all projects that are relevant by state, city or zip
		let projects = await prisma.projects(
			{
				where: {
					OR: [
						{
							state: location.state,
						},
						{
							city: location.city,
						},
						{
							zip: location.zip,
						},
					],
				},
			},
			info,
		);

		// Return a sorted array based off of zipcode distance
		return projects
			.map(project => {
				return {
					...project,
					// Calculate the distances between the project zipcode and location object zipcode
					distance: zipcodes.distance(project.zip, location.zip),
				};
			})
			.sort((a, b) => a.distance - b.distance);
	},
};
