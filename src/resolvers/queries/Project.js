import { getProfileId } from '../../utils/getProfileId';
import { async } from 'rxjs/internal/scheduler/async';

export const Project = {
	async project(parent, args, { prisma }, info) {
		return prisma.projects({
			where: {
				id: args.id
			}
		}, info)
	},
	async projects(parent, args, { prisma }, info) {
		const opArgs = {};

		if (args.query) {
			opArgs.where = {
				OR: [
					{
						name_contains: args.query
					},
					{
						city_contains: args.query
					},
					{
						state_contains: args.query
					}
				]
			};
		}

		return prisma.projects(opArgs, info)
	},
	async myProjects(parent, args, { prisma, request }, info) {
		const profileId = getProfileId(request);

		return prisma.projects({
			where: {
				profile: {
					id: profileId
				}
			}
		}, info)
	},
	async userProjects(parent, args, { prisma }, info) {
		return prisma.projects({
			where: {
				profile: {
					id: args.id
				}
			}
		}, info)
	}
};
