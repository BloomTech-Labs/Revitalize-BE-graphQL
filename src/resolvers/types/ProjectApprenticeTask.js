import { prisma } from '../../generated/prisma-client';

export const ProjectApprenticeTask = {
	async projectTask(parent) {
		return await prisma.projectApprenticeTask({ id: parent.id }).projectTask();
    },
    async profile(parent) {
		return await prisma.projectApprenticeTask({ id: parent.id }).profile();
	},
};
