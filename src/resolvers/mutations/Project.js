import { getProfileId } from '../../utils/getProfileId';
import { uploadImage } from '../../utils/uploadImage';

export const Project = {
	async createProject(parent, args, { prisma, request }, info) {
		const profileId = getProfileId(request);

		const project = await prisma.createProject({
			name: args.data.name,
			description: args.data.description,
			address: args.data.address,
			state: args.data.state,
			zip: args.data.zip,
			city: args.data.city,
			goalAmount: args.data.goalAmount,
			amountFunded: args.data.amountFunded,
			profile: {
				connect: {
					id: profileId,
				},
			},
		});

		for (let i = 0; i < images.length; i++) {
			const image = await uploadImage(args.images[i]);
			await prisma.createProjectImage({
				project: project.id,
				imageUrl: image.secure_url,
				public_id: image.public_id,
			});
		}

		return prisma.project({ id: project.id }, info);
	},
	async updateProject(parent, args, { prisma, request }, info) {
		const profileId = getProfileId(request);
		const userProjectExists = await prisma.$exists.project({ id: args.id, profile: { id: profileId } });

		if (!userProjectExists) {
			throw new Error('Sorry, but that project does not exist');
		}

		return prisma.updateProject(
			{
				id: args.id,
				data: args.data,
			},
			info,
		);
	},
	async deleteProject(parent, args, { prisma, request }, info) {
		const profileId = getProfileId(request);
		const userProjectExists = await prisma.$exists.project({ id: args.id, profile: { id: profileId } });

		if (!userProjectExists) {
			throw new Error('Sorry, but that project does not exist');
		}

		return prisma.deleteProject(
			{
				id: args.id,
			},
			info,
		);
	},
};
