import bcrypt from 'bcryptjs';
import { generateToken } from '../../utils/generateToken';
import { getUserId } from '../../utils/getUserId';

export const User = {
	async createUser(parent, args, { prisma }, info) {
		if (args.data.password.length < 8) {
			throw new Error('Password must be 8 characters or longer.');
		}

		const password = await bcrypt.hash(args.data.password, 10);

		const user = prisma.mutation.createUser({
			data: {
				...args.data,
				password
			}
		});

		return { user, token: generateToken(user.id) };
	},
	async loginUser(parent, args, { prisma }, info) {
		const user = await prisma.query.user({
			where: {
				email: args.data.email
			}
		});

		if (!user) {
			throw new Error('Unable to login');
		}

		const validPassword = await bcrypt.compare(args.data.password, user.password);

		if (!validPassword) {
			throw new Error('Unable to login');
		}

		return { user, token: generateToken(user.id) };
	},
	async updateUser(parent, args, { prisma, request }, info) {
		const userId = getUserId(request);

		return prisma.mutation.updateUser(
			{
				where: {
					id: userId
				},
				data: args.data
			},
			info
		);
	},
	async deleteUser(parent, args, { prisma, request }, info) {
		const userId = getUserId(request);

		return prisma.mutation.deleteUser(
			{
				where: {
					id: userId
				}
			},
			info
		);
	}
};
