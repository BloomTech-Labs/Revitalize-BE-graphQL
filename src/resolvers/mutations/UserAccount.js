import { generateToken } from '../../utils/generateToken';
import { getUserId } from '../../utils/getUserId';
import { hashPassword } from '../../utils/hashPassword';
import bcrypt from 'bcryptjs';

export const UserAccount = {
    async createUser(parent, args, { prisma }, info) {
		const password = await hashPassword(args.data.password);
		const email = args.data.email

		const user = await prisma.mutation.createUserAccount({
			data: {
				email,
				password
			}
        });

		const profile = await prisma.mutation.createUserProfile({
			data: {
				email,
				userAccountId: user.id
			}
        })

		return { profile, token: generateToken(user.id) };
	},
	async loginUser(parent, args, { prisma }, info) {
		const user = await prisma.query.userAccounts({
			where: {
				email: args.data.email
			}
        });

        console.log(user)

		if (!user) {
			throw new Error('Unable to login');
		}

		const validPassword = await bcrypt.compare(args.data.password, user.password);

		if (!validPassword) {
			throw new Error('Unable to login');
		}

		return { profile, token: generateToken(user.id) };
	},
	async updateUser(parent, args, { prisma, request }, info) {
		const userId = getUserId(request);

		if (typeof args.data.password === 'string') {
			args.data.password = await hashPassword(args.data.password);
		}

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
}
