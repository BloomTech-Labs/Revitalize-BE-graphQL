import { getProfileId } from '../../utils/getProfileId';

export const Project = {
	async project(parent, args, { prisma }, info) {
		return prisma.query.projects({
			where: {
				id: args.id
			}
		}, info)
	}
};
