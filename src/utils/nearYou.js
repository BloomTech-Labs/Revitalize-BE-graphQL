import { getProfileId } from './getProfileId';
import { resolveIp } from './resolveIp';
import iplocation from 'iplocation';
import zipcodes from 'zipcodes';

export const nearYou = async (prisma, request) => {
	let location = {};
	let profile;

	// Get user profile id
	const profileId = getProfileId(request, false);

	if (profileId && profileId !== null) {
		// Query user profile
		profile = await prisma.userProfiles({
			where: {
				AND: [{ id: profileId }, { state_not: null }, { city_not: null }, { zip_not: null }],
			},
		});
	}

	if (profile && profile[0]) {
		// Set location
		location = {
			state: profile[0].state,
			city: profile[0].city,
			zip: profile[0].zip,
		};
	} else {
		// @NOTE:Geolocation does not work on localhost! Please pass a token when querying this data on localhost

		// Resolve ip if user profile doesn't exist
		const ip = resolveIp(request);

		// If on localhost return all the projects
		if (!ip) return prisma.projects();

		// Get geolocation
		const ipLocation = await iplocation(ip);

		// Set location
		location = {
			state: ipLocation.region,
			city: ipLocation.city,
			zip: parseInt(ipLocation.postal, 10),
		};
	}

	// Query all projects that are relevant by state, city or zip
	let projects = await prisma.projects({
		where: {
			OR: [
				{
					zip: location.zip,
				},
				{
					state: location.state,
				},
				{
					city: location.city,
				},
				{
					country: 'United States',
				},
			],
		},
	});

	// Return a sorted array based off of zipcode distance
	return projects
		.map(project => {
			let distance = zipcodes.distance(project.zip, location.zip);
			if (distance === null) distance = 99999;
			// look up the city/state, get the zip based off of that

			return {
				...project,
				// Calculate the distances between the project zipcode and location object zipcode
				distance,
			};
		})
		.sort((a, b) => a.distance - b.distance);
};
