import { getProfileId } from '../../utils/getProfileId';
import { resolveIp } from '../../utils/resolveIp';
const iplocation = require("iplocation").default;

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
	async projectsNearMe(parent, args, { prisma, request }, info) {
		let location = {}

		// Get user profile id
		const profileId = getProfileId(request, false);

		if (profileId) {
			// Query user profile
			const profile = await prisma.userProfile({
				id: profileId
			})

			if (profile.state !== null && profile.zip !== null) {
				// Set location
				location = {
					state: profile.state,
					zip: profile.zip
				}
			}
		} else {
			// @note - Geolocation does not work on localhost! Please pass a token when querying this data on localhost

			// Resolve ip if user profile doesn't exist
			const ip = resolveIp(request)

			// Get geolocation
			const ipLocation = await iplocation(ip)

			// Set location
			location = {
				state: ipLocation.city,
				zip: parseInt(ipLocation.zip, 10)
			}
		}
		console.log(location)
		return location;
		// Resolve client ip or user profile

		// Pull all projects in by state

		// Pull all project zipcodes into an array

		// Calculate the distance between each zipcode with the current user zipcode or client ip zipcode

		// Sort zipcode distances
	}
};
