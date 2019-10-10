import { getProfileId } from '../../utils/getProfileId';

export const ProjectTrade = {
    async createProjectTrade(parent, args, { prisma, request }, info) {
        const profileId = getProfileId(request);

        const project = await prisma.$exists.project({ id: args.data.project, profile: { id: profileId } })

        if (!project) throw new Error("Sorry, but that project does not exist")

        return prisma.createProjectTrade({
            name: args.data.name,
            description: args.data.description,
            project: {
                connect: {
                    id: args.data.project
                }
            }
        }, info)
    }
}
