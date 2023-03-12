import type { NextApiRequest, NextApiResponse } from "next"
const cloudinary = require("cloudinary").v2

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
})

interface Data {
	tags: string[]
	secureUrl: string
	publicId: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	const { imageBase64 } = req.body

	const awsResult = await cloudinary.uploader.upload(imageBase64, {
		categorization: "aws_rek_tagging",
		auto_tagging: 0.6,
	})

	// const imaggaResult = await cloudinary.uploader.upload(secure_url, {
	// 	categorization: "imagga_tagging",
	// 	auto_tagging: 0.3,
	// })

	const awsDetectionTags = awsResult.tags
	// const imaggaDetectionTags = imaggaResult.tags

	const tags = awsDetectionTags.map((tag: string) => tag.replace(/\s/g, ""))

	// const setTags = new Set()
	// awsDetectionTags.forEach((item: string) => setTags.add(item.replace(/\s/g, "")))
	// imaggaDetectionTags.forEach((item: string) => setTags.add(item.replace(/\s/g, "")))
	// const tags = Array.from(setTags) as string[]

	res.status(200).json({ tags, secureUrl: awsResult.secure_url, publicId: awsResult.public_id })
}

export const config = {
	api: {
		bodyParser: {
			sizeLimit: "8mb",
		},
	},
}
