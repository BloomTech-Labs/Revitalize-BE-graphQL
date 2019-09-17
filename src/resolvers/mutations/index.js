import { UserAccount } from './UserAccount';
import { ExternalAccount } from './ExternalAccount'
import { UserProfile } from './UserProfile';
import { Project } from './Project';

export const Mutation = {
	...UserAccount,
	...ExternalAccount,
	...UserProfile,
	...Project
};
