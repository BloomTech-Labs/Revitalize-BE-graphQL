import { UserAccount } from './UserAccount';
import { ExternalAccount } from './ExternalAccount';
import { UserProfile } from './UserProfile';
import { Project } from './Project';
import { ProjectComment } from './ProjectComment';
import { ProjectDonation } from './ProjectDonation';
import { ProjectApplicant } from './ProjectApplicant';

export const Mutation = {
	...UserAccount,
	...ExternalAccount,
	...UserProfile,
	...Project,
	...ProjectComment,
	...ProjectDonation,
	...ProjectApplicant
};
