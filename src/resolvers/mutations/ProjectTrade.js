import { getProfileId } from '../../utils/getProfileId';

export const ProjectTrade = {
    async createProjectTrade(parent, args, { prisma, request }, info) {
        const profileId = getProfileId(request);

        const project = await prisma.$exists.project({ project: args.id, profile: profileId })

        if (!project) throw new Error("Sorry, but that project does not exist")

        return prisma.createProjectTrade({
            data: {
                name: args.name,
                description: args.description,
                project: {
                    connect: {
                        id: args.id
                    }
                }

            }
        }, info)
    }
}
