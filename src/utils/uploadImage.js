import cloudinary from 'cloudinary';

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_NAME,
	api_key: process.env.CLOUDINARY_KEY,
	api_secret: process.env.CLOUDINARY_SECRET,
});

export const uploadImage = async picture => {
	const { createReadStream, filename, mimetype, encoding } = await picture;

	// todo categorize images into folder so I know what to do
	try {
		const result = await new Promise((resolve, reject) => {
			createReadStream().pipe(
				cloudinary.uploader.upload_stream((error, result) => {
					if (error) {
						reject(error);
					}

					resolve(result);
				}),
			);
		});
		return result;
	} catch (error) {
		throw new Error('Sorry, but there was an issue uploading that image');
	}
};
