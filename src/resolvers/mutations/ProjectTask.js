import { getProfileId } from '../../utils/getProfileId';

export const ProjectTask = {
    async createProjectTask(parent, args, { prisma, request }, info) {
        const profileId = getProfileId(request);

        const project = await prisma.$exists.project({ project: args.id, profile: profileId })
        if (!project) throw new Error("Sorry, but that project does not exist")

        let apprentices = [];

        if (args.apprentices) {
            apprentices = args.apprentices.map(apprentice => {
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
                    id: args.project
                }
            },
            trade: {
                connect: {
                    id: args.trade
                }
            },
            description: args.description,
            priority: args.priority,
            dueDate: args.dueDate,
            budgetHours: args.budgetHours,
            apprentices
        })
    }
}
