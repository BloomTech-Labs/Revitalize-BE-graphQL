import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

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

		return { user, token: jwt.sign({ userId: user.id }, 'thisisasecret') };
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

		return { user, token: jwt.sign({ userId: user.id }, 'secret') };
	},
    async updateUser(parent, args, { prisma }, info) {
        return prisma.mutation.updateUser(
            {
                where: {
                    id: args.id
                },
                data: args.data
            },
            info
        );
    },
	async deleteUser(parent, args, { prisma }, info) {
		return prisma.mutation.deleteUser(
			{
				where: {
					id: args.id
				}
			},
			info
		);
	},
}
