// Resolve IP address sent from client
export function resolveIp(request) {
	const ip = request.request.headers['x-forwarded-for'];
	if (!ip) return null;
	return ip;
}
