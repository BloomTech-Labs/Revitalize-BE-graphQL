import { getProfileId } from '../../utils/getProfileId';

export const ProjectApplicant = {
    async  createProjectApplicant(parent, args, { prisma, request }, info) {
        const profileId = getProfileId(request);

        prisma.createProjectApplicant({
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
        })
    }
}
