import { prisma } from '../../generated/prisma-client';

export const ProjectTask = {
	async trade(parent) {
		return await prisma.projectTask({ id: parent.id }).trade();
    },
    async project(parent) {
		return await prisma.projectTask({ id: parent.id }).project();
	},
};
