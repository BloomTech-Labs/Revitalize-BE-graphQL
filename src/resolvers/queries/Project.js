export const Project = {
	projects(parent, args, { prisma }, info) {
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
					},
					{
						goalAmount_contains: args.query
					}
				]
			};
		}

		return prisma.query.projects(opArgs, info);
	}
};
