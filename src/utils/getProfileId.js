import jwt from 'jsonwebtoken';

export function getProfileId(request, requireAuth = true) {
	const header = request.request.headers.authorization;

	if (header) {
		const token = header.replace('Bearer ', '');
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		return decoded.profileId;
	}

	if (requireAuth) {
		throw new Error('Sorry, but your token was not properly sent');
	}

	return null;
}
