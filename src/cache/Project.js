import { resolveIp } from '../utils/resolveIp';

export const Project = {
	async getProjectsView(resolve, parent, args, { redis }, info) {
		const ip = resolveIp(request);

		if (ip === null) {
			return resolve();
		}

		const data = await redis.getAsync(`getProjectsView${ip}`);

		if (data) {
			return JSON.parse(data);
		} else {
			return resolve();
		}
	},
};
