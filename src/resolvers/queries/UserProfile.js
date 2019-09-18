import { getProfileId } from '../../utils/getProfileId';

export const UserProfile = {
	async me(parent, args, { prisma, request }, info) {
		const profileId = getProfileId(request);

		return prisma.query.userProfile(
			{
				where: {
					id: profileId
				}
			},
			info
		);
	}
	// WIP
	// users(parent, args, { prisma }, info) {
	// 	const opArgs = {};

	// 	if (args.query) {
	// 		opArgs.where = {
	// 			OR: [
	// 				{
	// 					name_contains: args.query
	// 				}
	// 			]
	// 		};
	// 	}

	// 	return prisma.query.users(opArgs, info);
	// },
	// WIP
	// user(parent, args, { prisma, request }, info) {
	// 	return prisma.query.user(
	// 		{
	// 			where: {
	// 				id: args.id
	// 			}
	// 		},
	// 		info
	// 	);
	// },
};
