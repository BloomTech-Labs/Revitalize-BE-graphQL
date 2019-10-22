import { getProfileId } from '../../utils/getProfileId';
import { uploadImage } from '../../utils/uploadImage';
import slugify from '../../utils/slugify';

export const Project = {
	async createProject(parent, args, { prisma, request }, info) {
		const profileId = getProfileId(request);

		const slug = slugify(args.data.name);

		const project = await prisma.createProject({
			slug,
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
			profile: {
				connect: {
					id: profileId,
				},
			},
		});

		const imagesUploaded = await args.data.images.map(async image => {
			const currentImage = await image;
			const isFeaturedImage = currentImage.filename == args.data.featuredImage;

			if (isFeaturedImage) {
				const result = await uploadImage(image);
				await prisma.updateProject({
					where: {
						id: project.id,
					},
					data: {
						featuredImage: result.secure_url,
					},
				});
			} else {
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
			}
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
