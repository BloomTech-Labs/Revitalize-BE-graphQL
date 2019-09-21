import { getProfileId } from '../../utils/getProfileId';
import { getUserId } from '../../utils/getUserId';

export const UserProfile = {
    async updateUserProfile(parent, args, { prisma, request }, info) {
        const profileId = getProfileId(request);
		const userId = getUserId(request);

		const projectExists = await prisma.$exists.userProfile({ id: profileId, userAccountId: userId });

		if (!projectExists) {
			throw new Error('Sorry, but that profile does not exist');
		}

		return prisma.updateUserProfile(
			{
				where: {
					id: profileId
				},
				data: args.data
			},
			info
		);
    },
    async deleteUserProfile(parent, args, { prisma, request }, info) {
        const profileId = getProfileId(request);
        const userId = getUserId(request);

		const projectExists = await prisma.$exists.userProfile({ id: profileId, userAccountId: userId });

		if (!projectExists) {
			throw new Error('Sorry, but that profile does not exist');
		}

		return prisma.deleteUserProfile(
			{
				where: {
					id: profileId
				}
			},
			info
		);
	}
};
