import { prisma } from '../../generated/prisma-client';

export const ProjectMasterTradesman = {
	async project(parent) {
		return await prisma.projectMasterTradesman({ id: parent.id }).project();
	},
	async profile(parent) {
		return await prisma.projectMasterTradesman({ id: parent.id }).profile();
	},
};
