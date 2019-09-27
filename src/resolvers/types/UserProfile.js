import { prisma } from '../../generated/prisma-client';
import { getUserId } from '../../utils/getUserId';

export const UserProfile = {
	async projects(parent) {
		return await prisma.userProfile({ id: parent.id}).projects()
	}
	// email: {
	// 	fragment: 'fragment userId on UserProfile { id }',
	// 	resolve(parent, args, { request }, info) {
	// 		const userId = getUserId(request, false);

	// 		if (userId && userId === parent.id) {
	// 			return parent.email;
	// 		} else {
	// 			return "xxxxxx";
	// 		}
	// 	}
	// }
};
