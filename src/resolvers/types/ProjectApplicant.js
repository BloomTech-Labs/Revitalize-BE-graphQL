import { prisma } from '../../generated/prisma-client';

export const ProjectApplicant = {
	async project(parent) {
		return await prisma.projectApplicant({ id: parent.id }).project();
    },
    async profile(parent) {
		return await prisma.projectApplicant({ id: parent.id }).profile();
    },
    async trade(parent) {
		return await prisma.projectApplicant({ id: parent.id }).trade();
	},
};
