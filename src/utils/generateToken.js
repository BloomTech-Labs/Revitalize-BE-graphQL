import jwt from 'jsonwebtoken';

export function generateToken(userId, profileId) {
	return jwt.sign({ userId, profileId }, process.env.JWT_SECRET, { expiresIn: '7 days' });
}
