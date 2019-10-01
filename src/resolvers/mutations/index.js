import { UserAccount } from './UserAccount';
import { ExternalAccount } from './ExternalAccount';
import { UserProfile } from './UserProfile';
import { Project } from './Project';
import { ProjectComment } from './ProjectComment';

import cloudinary from 'cloudinary';

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_NAME,
	api_key: process.env.CLOUDINARY_KEY,
	api_secret: process.env.CLOUDINARY_SECRET,
});

const uploadImage = async (parent, args, ctx, info) => {
	cloudinary.v2.uploader.upload(
		args.picture,
		{
			unique_filename: true,
		},
		(error, result) => {
			console.log('error', error);
			console.log('result', result);
		},
	);
};

export const Mutation = {
	...UserAccount,
	...ExternalAccount,
	...UserProfile,
	...Project,
	...ProjectComment,
	uploadImage,
};
