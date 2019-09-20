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
	},
	async user(parent, args, { prisma }, info) {
		return prisma.query.userProfile(
			{
				where: {
					id: args.id
				}
			},
			info
		);
	},
	async users(parent, args, { prisma }, info) {
		const opArgs = {};

		if (args.query) {
			opArgs.where = {
				OR: [
					{
						email_contains: args.query
					},
					{
						firstName_contains: args.query
					},
					{
						lastName_contains: args.query
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

		return prisma.query.userProfiles(opArgs, info);
	},
};