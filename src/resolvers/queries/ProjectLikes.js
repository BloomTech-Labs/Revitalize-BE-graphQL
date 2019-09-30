export const ProjectLikes = {
    // Get all likes for a project by id
    async projectLikes(parent, args, { prisma }, info) {
        return prisma.projectLikes({
            where: {
                project: {
                    id: args.id
                }
            }
        })
    }
}
