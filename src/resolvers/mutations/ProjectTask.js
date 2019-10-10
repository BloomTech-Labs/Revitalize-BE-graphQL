import { getProfileId } from '../../utils/getProfileId';

export const ProjectTask = {
    async createProjectTask(parent, args, { prisma, request }, info) {
        const profileId = getProfileId(request);

        const project = await prisma.$exists.project({ id: args.data.project, profile: { id: profileId } })

        if (!project) throw new Error("Sorry, but that project does not exist")


        let apprentices = [];

        if (args.data.apprentices) {
            apprentices = args.data.apprentices.map(apprentice => {
                return {
                    profile: {
                        connect: apprentice.id
                    }
                }
            })
        }

        return prisma.createProjectTask({
            project: {
                connect: {
                    id: args.data.project
                }
            },
            trade: {
                connect: {
                    id: args.data.trade
                }
            },
            description: args.data.description,
            priority: args.data.priority,
            dueDate: args.data.dueDate,
            budgetHours: args.data.budgetHours,
            apprentices
        })
    }
}
