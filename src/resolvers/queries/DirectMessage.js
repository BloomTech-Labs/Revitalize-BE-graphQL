import { getProfileId } from '../../utils/getProfileId';

export const DirectMessage = {
    async directMessages(parent, args, { prisma, request }, info) {
        const profileId = getProfileId(request);

        const messages = await prisma.directMessages({

        })
    }
}
