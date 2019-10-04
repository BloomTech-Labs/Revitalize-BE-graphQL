import { getProfileId } from '../../utils/getProfileId';
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export const ProjectDonation = {
	async createProjectDonation(parent, args, { prisma, request }, info) {
		const profileId = getProfileId(request);

		const project = await prisma.project({ id: args.id });

		if (!project) throw new Error("Sorry, but that project doesn't exist");
		console.log(args);
		const charge = await stripe.charges.create(
			{
				amount: args.data.amount,
				currency: 'usd',
				source: args.data.token,
				description: `Donation for ${project.name}'s crowd funded project.`,
			},
			function(err, charge) {
				// if (err) throw new Error(err);
				console.log(err);
				console.log(charge);
				// asynchronously called
			},
		);

		return console.log(charge);

		return null;

		// return prisma.createProjectDonation({
		// 	data: {
		// 		amount: args.data.amount,
		// 		project: {
		// 			connect: {
		// 				id: args.data.id,
		// 			},
		// 		},
		// 		profile: {
		// 			connect: {
		// 				id: profileId,
		// 			},
		// 		},
		// 	},
		// });
	},
};
