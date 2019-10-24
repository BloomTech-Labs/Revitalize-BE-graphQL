export const Project = {
	async getProjectsView(resolve, parent, args, { redis }, info) {
		const data = await redis.getAsync('getProjectsView');

		if (data) {
			return JSON.parse(data);
		} else {
			return resolve();
		}
	},
};
