import { UserAccount } from './UserAccount';
import { ExternalAccount } from './ExternalAccount';
import { UserProfile } from './UserProfile';
import { Project } from './Project';
import { ProjectLike } from './ProjectLike';
import { ProjectComment } from './ProjectComment';
import { ProjectCommentLike } from './ProjectCommentLike ';
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
	...ProjectLike,
	...ProjectComment,
	...ProjectCommentLike,
	...ProjectDonation,
	...ProjectApplicant,
	...ProjectTrade,
	...ProjectStudent,
	...ProjectMasterTradesman,
	...ProjectTask,
};
