import { UserProfile } from './UserProfile';
import { Project } from './Project';

export const Mutation = {
	...UserProfile,
	...Project
};
