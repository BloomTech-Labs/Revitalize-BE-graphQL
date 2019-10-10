import { getProfileId } from '../../utils/getProfileId';

export const ProjectStudent = {
    async createProjectStudent(parent, args, { prisma, request }, info) {
        const profileId = getProfileId(request);

        const project = await prisma.$exists.project({ project: args.data.project, profile: profileId })
        if (!project) throw new Error("Sorry, but that project does not exist")

        prisma.createProjectStudent({
            data: {
                project: {
                    connect: {
                        id: args.data.project
                    }
                },
                profile: {
                    connect: {
                        id: args.data.profile
                    }
                }
            }
        })
    }
}
