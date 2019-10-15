// Resolve IP address sent from client
export function resolveIp(request) {
	const headers = request.request.headers['x-forwarded-for'];
	if (!headers) return null;
	return headers;
}
