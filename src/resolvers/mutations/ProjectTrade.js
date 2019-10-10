import { getProfileId } from '../../utils/getProfileId';

export const ProjectTrade = {
    async createProjectTrade(parent, args, { prisma, request }, info) {
        const profileId = getProfileId(request);

        const project = await prisma.$exists.project({ project: args.data.id, profile: profileId })

        if (!project) throw new Error("Sorry, but that project does not exist")

        return prisma.createProjectTrade({
            data: {
                name: args.data.name,
                description: args.data.description,
                project: {
                    connect: {
                        id: args.data.id
                    }
                }

            }
        }, info)
    }
}
