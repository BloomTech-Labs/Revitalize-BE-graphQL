import { getProfileId } from '../../utils/getProfileId';
import { uploadImage } from '../../utils/uploadImage';

export const Project = {
	async createProject(parent, args, { prisma, request }, info) {
		const profileId = getProfileId(request);

		let featuredImage = '';
		if (args.data.featuredImage) {
			featuredImage = await uploadImage(args.data.featuredImage).imageUrl;
		}

		const project = await prisma.createProject({
			name: args.data.name,
			description: args.data.description,
			country: args.data.country,
			address: args.data.address,
			state: args.data.state,
			zip: args.data.zip,
			city: args.data.city,
			goalAmount: args.data.goalAmount,
			amountFunded: args.data.amountFunded,
			duration: args.data.duration,
			difficulty: args.data.difficulty,
			startDate: args.data.startDate,
			featuredImage,
			profile: {
				connect: {
					id: profileId,
				},
			},
		});

		args.data.images.map(async image => {
			const result = await uploadImage(image);

			await prisma.createProjectImage({
				project: {
					connect: {
						id: project.id,
					},
				},
				imageUrl: result.secure_url,
				public_id: result.public_id,
			});
		});

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
