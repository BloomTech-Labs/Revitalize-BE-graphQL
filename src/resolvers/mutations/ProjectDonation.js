import { getProfileId } from '../../utils/getProfileId';
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export const ProjectDonation = {
	async createProjectDonation(parent, args, { prisma, request }, info) {
		try {
			const profileId = getProfileId(request);
			const project = await prisma.project({ id: args.id });
			if (!project) throw new Error("Sorry, but that project doesn't exist");

			const { paid } = await stripe.charges.create({
				amount: args.data.amount,
				currency: 'usd',
				source: args.data.token,
				description: `Donation for ${project.name}'s crowd funded project.`,
			});

			if (paid) {
				return prisma.createProjectDonation(
					{
						amount: args.data.amount,
						project: {
							connect: {
								id: args.id,
							},
						},
						profile: {
							connect: {
								id: profileId,
							},
						},
					},
					info,
				);
			}
		} catch (error) {
			throw new Error(error);
		}
	},
};
