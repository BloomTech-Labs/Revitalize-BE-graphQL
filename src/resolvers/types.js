import { getUserId } from '../utils/getUserId';


const UserAccount = {}
const ExternalAccount = {}

const UserProfile = {
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

const Project = {};

export const Types = {
	UserProfile,
	UserAccount,
	ExternalAccount,
	Project
};
