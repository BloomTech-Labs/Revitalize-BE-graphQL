import { extractFragmentReplacements } from 'prisma-binding';
import { Query } from './queries';
import { Mutation } from './mutations';
import { Types } from './types';

export const resolvers = {
	Query,
	Mutation,
	...Types
};

export const fragmentReplacements = extractFragmentReplacements(resolvers);
