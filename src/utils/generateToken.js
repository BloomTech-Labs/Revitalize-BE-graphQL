import jwt from 'jsonwebtoken';

export function generateToken(userId) {
	return jwt.sign({ userId }, 'thisisasecret', { expiresIn: '7d' });
}
