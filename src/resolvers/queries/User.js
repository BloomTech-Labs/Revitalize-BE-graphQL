import { getUserId } from '../../utils/getUserId';

export const User = {
	// WIP
	users(parent, args, { prisma }, info) {
		const opArgs = {};

		if (args.query) {
			opArgs.where = {
				OR: [
					{
						name_contains: args.query
					}
				]
			};
		}

		return prisma.query.users(opArgs, info);
	},
	// WIP
	user(parent, args, { prisma, request }, info) {
		return prisma.query.user(
			{
				where: {
					id: args.id
				}
			},
			info
		);
	},
	async me(parent, args, { prisma, request }, info) {
		const userId = getUserId(request);

		return prisma.query.user(
			{
				where: {
					id: userId
				}
			},
			info
		);
	}
};
