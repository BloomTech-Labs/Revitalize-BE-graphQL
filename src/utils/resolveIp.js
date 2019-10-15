// Resolve IP address sent from client
export function resolveIp(request) {
	const ip = request.headers['x-forwarded-for'];
	if (ip) return ip;
	return null;
}
