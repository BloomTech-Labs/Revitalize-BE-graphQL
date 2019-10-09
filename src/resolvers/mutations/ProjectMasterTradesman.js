export const ProjectMasterTradesman = {
    async createProjectMasterTradesman(parent, args, { prisma, request }, info) {
        const profileId = getProfileId(request);

        const project = await prisma.$exists.project({ project: args.id, profile: profileId })
        if (!project) throw new Error("Sorry, but that project does not exist")

        prisma.createProjectMasterTradesman({
            data: {
                project: {
                    connect: {
                        id: args.project
                    }
                },
                profile: {
                    connect: {
                        id: args.profile
                    }
                }
            }
        })
    }
}
