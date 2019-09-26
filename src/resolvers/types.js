import { prisma } from '../generated/prisma-client';
import { getUserId } from '../utils/getUserId';
import { parentPort } from 'worker_threads';


const UserAccount = {}
const ExternalAccount = {}

const UserProfile = {
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

const Project = {
	async profile(parent) {
		return await prisma.project({ id: parent.id }).profile()
	}
};

export const Types = {
	UserProfile,
	UserAccount,
	ExternalAccount,
	Project
};
