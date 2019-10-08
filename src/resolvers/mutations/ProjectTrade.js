import { getProfileId } from '../../utils/getProfileId';

export const ProjectTrade = {
    async createProjectTrade(parent, args, { prisma, request }, info) {
        const profileId = getProfileId(request);

        await prisma.$exist.projectTrade({ project: args.id, profile: profileId })

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
