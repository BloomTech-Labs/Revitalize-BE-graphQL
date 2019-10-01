import { prisma } from '../../generated/prisma-client';

export const ProjectComment = {
	async profile(parent) {
		return await prisma.projectComment({ id: parent.id }).profile();
	},
};
