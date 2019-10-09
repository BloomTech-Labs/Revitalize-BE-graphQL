import { UserAccount } from './UserAccount';
import { ExternalAccount } from './ExternalAccount';
import { UserProfile } from './UserProfile';
import { Project } from './Project';
import { ProjectComment } from './ProjectComment';
import { ProjectDonation } from './ProjectDonation';
import { ProjectApplicant } from './ProjectApplicant';
import { ProjectTrade } from './ProjectTrade';
import { ProjectStudent } from './ProjectStudent';
import { ProjectMasterTradesman } from './ProjectMasterTradesman';
import { ProjectTask } from './ProjectTask';

export const Mutation = {
	...UserAccount,
	...ExternalAccount,
	...UserProfile,
	...Project,
	...ProjectComment,
	...ProjectDonation,
	...ProjectApplicant,
	...ProjectTrade,
	...ProjectStudent,
	...ProjectMasterTradesman,
	...ProjectTask
};
