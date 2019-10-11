import { prisma } from '../../generated/prisma-client';

export const ProjectTrade = {
    async project(parent) {
		return await prisma.projectTrade({ id: parent.id }).project();
	},
}
