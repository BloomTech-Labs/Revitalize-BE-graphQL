import jwt from 'jsonwebtoken';

export function getUserId(request, requireAuth = true) {
	const header = request.request.headers.authorization;

	if (header) {
		const token = header.replace('Bearer ', '');
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		return decoded.userId;
	}

	if (requireAuth) {
		throw new Error('Authentication required');
	}

	return null;
}
