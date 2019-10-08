import { prisma } from '../../generated/prisma-client';
import { getUserId } from '../../utils/getUserId';

export const UserProfile = {
	async donations(parent) {
		return await prisma.userProfile({ id: parent.id }).donations();
	},
	async projects(parent) {
		return await prisma.userProfile({ id: parent.id }).projects();
	},
	async comments(parent) {
		return await prisma.userProfile({ id: parent.id }).comments();
	},
	async likedComments(parent) {
		return await prisma.userProfile({ id: parent.id }).likedComments();
	},
	async likedProjects(parent) {
		return await prisma.userProfile({ id: parent.id }).likedProjects();
	},
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
