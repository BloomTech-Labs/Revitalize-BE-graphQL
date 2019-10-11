import { prisma } from '../../generated/prisma-client';

export const ProjectStudent = {
    async project(parent) {
		return await prisma.projectStudent({ id: parent.id }).project();
    },
    async profile(parent) {
		return await prisma.projectStudent({ id: parent.id }).profile();
	},
}
