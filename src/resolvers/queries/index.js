import { UserProfile } from './UserProfile';
import { Project } from './Project';
import { DirectMessage } from './DirectMessage';

export const Query = {
	...UserProfile,
	...Project,
	...DirectMessage,
};
