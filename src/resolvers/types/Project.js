import { prisma } from '../../generated/prisma-client';

export const Project = {
	async profile(parent) {
		return await prisma.project({ id: parent.id }).profile()
	}
};
