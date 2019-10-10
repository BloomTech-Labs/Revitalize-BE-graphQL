import { getProfileId } from '../../utils/getProfileId';

export const ProjectApplicant = {
    async  createProjectApplicant(parent, args, { prisma, request }, info) {
        const profileId = getProfileId(request);

        const project = await prisma.$exists.project({ project: args.data.id })

        if (!project) throw new Error("Sorry, but that project does not exist")

        return prisma.createProjectApplicant({
            data: {
                project: {
                    connect: {
                        id: args.data.project
                    }
                },
                profile: {
                    connect: {
                        id: profileId
                    }
                },
                trade: {
                    connect: {
                        id: args.data.trade
                    }
                },
                status: args.data.coverLetter,
                coverLetter: args.data.status
            }
        }, info)
    }
}
