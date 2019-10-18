import { prisma } from '../../generated/prisma-client';

export const DirectMessage = {
	async sender(parent) {
		return await prisma.directMessage({ id: parent.id }).sender();
    },
    async recipient(parent) {
		return await prisma.directMessage({ id: parent.id }).recipient();
	},
};
