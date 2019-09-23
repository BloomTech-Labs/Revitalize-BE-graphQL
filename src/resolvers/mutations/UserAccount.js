import { generateToken } from '../../utils/generateToken';
import { getUserId } from '../../utils/getUserId';
import { hashPassword } from '../../utils/hashPassword';
import bcrypt from 'bcryptjs';

export const UserAccount = {
    async createUser(parent, args, { prisma }, info) {
		const password = await hashPassword(args.data.password);
		const email = args.data.email

		const user = await prisma.createUserAccount({
				email,
				password
		});


		const profile = await prisma.createUserProfile({
				email,
				userAccountId: user.id
		})

		const token = await generateToken(user.id, profile.id);

		return { profile, token };
	},
	async loginUser(parent, args, { prisma }, info) {
		const user = await prisma.userAccount({
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

		const profile = await prisma.userProfiles({
			where: {
				userAccountId: user.id
			}
		})

		const token = await generateToken(user.id, profile.id);

		return { profile: profile[0], token };
	},
	async updateUser(parent, args, { prisma, request }, info) {
		const userId = getUserId(request);

		if (typeof args.data.password === 'string') {
			args.data.password = await hashPassword(args.data.password);
		}

		return prisma.updateUserAccount(
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

		return prisma.deleteUserAccount(
			{
				where: {
					id: userId
				}
			},
			info
		);
	}
}
