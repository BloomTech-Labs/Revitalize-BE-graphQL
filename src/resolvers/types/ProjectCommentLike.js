import { prisma } from '../../generated/prisma-client';

export const ProjectCommentLike = {
	async profile(parent) {
		return await prisma.projectCommentLike({ id: parent.id }).profile();
	},
	async comment(parent) {
		return await prisma.projectCommentLike({ id: parent.id }).comment();
	},
};
