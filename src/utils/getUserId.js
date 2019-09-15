import jwt from 'jsonwebtoken';

export function getUserId(request) {
	const header = request.request.headers.authorization;

	if (!header) {
		throw new Error('Authentication required');
	}

	const token = header.split(' ')[1];
	const decoded = jwt.verify(token, 'thisisasecret');
	return decoded.userId;
}
