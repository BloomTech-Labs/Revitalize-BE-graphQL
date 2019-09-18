import { getProfileId } from '../../utils/getProfileId';
import { getUserId } from '../../utils/getUserId';

export const UserProfile = {
    async updateUserProfile(parent, args, { prisma, request }, info) {
        const profileId = getProfileId(request);
        const userId = getUserId(request);

		const projectExists = await prisma.exists.UserProfile({ id: profileId, userAccountId: userId });

		if (!projectExists) {
			throw new Error('Sorry, but there was an error while trying to update that project');
		}

		return prisma.mutation.updateUserProfile(
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

		const projectExists = await prisma.exists.UserProfile({ id: profileId, userAccountId: userId });

		if (!projectExists) {
			throw new Error('Sorry, but there was an error while trying to delete that project');
		}

		return prisma.mutation.deleteUserProfile(
			{
				where: {
					id: profileId
				}
			},
			info
		);
	}
};
