import { prisma } from '../../generated/prisma-client';

export const ProjectLike = {
	async project(parent) {
		return await prisma.projectLike({ id: parent.id }).project();
	},
	async profile(parent) {
		return await prisma.projectLike({ id: parent.id }).profile();
	},
};
