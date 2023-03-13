import type { NextApiRequest, NextApiResponse } from "next"
const cloudinary = require("cloudinary").v2

cloudinary.config({
	cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
	api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
})

type Data =
	| {
			tags: string[]
			secureUrl: string
			publicId: string
	  }
	| { msg: string }

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	const { imageBase64 } = req.body

	if (!imageBase64) {
		res.status(200).json({ msg: "Image not found" })
	}

	let categorizationResult = null

	if (process.env.TYPE_OF_CATEGORIZATION === "imagga") {
		categorizationResult = await cloudinary.uploader.upload(imageBase64, {
			categorization: "imagga_tagging",
			auto_tagging: 0.3,
		})
	} else if (process.env.TYPE_OF_CATEGORIZATION === "google") {
		categorizationResult = await cloudinary.uploader.upload(imageBase64, {
			categorization: "google_tagging",
			auto_tagging: 0.6,
		})
	} else {
		categorizationResult = await cloudinary.uploader.upload(imageBase64, {
			categorization: "aws_rek_tagging",
			auto_tagging: 0.6,
		})
	}

	const tagsResult = categorizationResult.tags
	const tags = tagsResult.map((tag: string) => tag.replace(/\s/g, ""))

	res.status(200).json({ tags, secureUrl: categorizationResult.secure_url, publicId: categorizationResult.public_id })
}

export const config = {
	api: {
		bodyParser: {
			sizeLimit: "8mb",
		},
	},
}
