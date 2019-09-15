import { getUserId } from '../../utils/getUserId';

export const Project = {
	// WIP
	async projects(parent, args, { prisma }, info) {
		const opArgs = {};

		if (opArgs) {
			opArgs.where = {
				OR: [
					{
						name_contains: args.query
					},
					{
						description_contains: args.query
					},
					{
						state_contains: args.query
					},
					{
						zip_contains: args.query
					},
					{
						city_contains: args.query
					}
				]
			};
		}

		return await prisma.query.projects(opArgs, info);
	},
	async project(parent, args, { prisma }, info) {
		return await prisma.query.project(
			{
				where: {
					id: args.id
				}
			},
			info
		);
	}
};
