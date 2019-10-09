import { getProfileId } from '../../utils/getProfileId';

export const ProjectApplicant = {
    async  createProjectApplicant(parent, args, { prisma, request }, info) {
        const profileId = getProfileId(request);

        const project = await prisma.$exists.project({ project: args.id })

        if (!project) throw new Error("Sorry, but that project does not exist")

        return prisma.createProjectApplicant({
            data: {
                project: {
                    connect: {
                        id: args.project
                    }
                },
                profile: {
                    connect: {
                        id: profileId
                    }
                },
                trade: {
                    connect: {
                        id: args.trade
                    }
                },
                status: args.coverLetter,
                coverLetter: args.status
            }
        }, info)
    }
}
