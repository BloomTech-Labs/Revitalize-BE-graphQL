import { prisma } from '../../generated/prisma-client';

export const ProjectDonation = {
    async project(parent) {
		return await prisma.projectDonation({ id: parent.id }).project();
    },
    async profile(parent) {
		return await prisma.projectDonation({ id: parent.id }).profile();
	},
}
