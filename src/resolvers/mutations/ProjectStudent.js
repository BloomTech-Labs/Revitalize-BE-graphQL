import { getProfileId } from '../../utils/getProfileId';

export const ProjectStudent = {
    async createProjectStudent(parent, args, { prisma, request }, info) {
        const profileId = getProfileId(request);

        const project = await prisma.$exists.project({ id: args.data.project, profile: { id: profileId } })

        if (!project) throw new Error("Sorry, but that project does not exist")


        return prisma.createProjectStudent({
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
        })
    }
}
