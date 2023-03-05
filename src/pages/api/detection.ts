import type { NextApiRequest, NextApiResponse } from "next"
const cloudinary = require("cloudinary").v2

import { DetectionResult } from "@/types.d"

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
})

interface ImagesDetected {
	tag: string
	images: string[]
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<DetectionResult>) {
	const { uploadInfo } = req.body
	const { public_id, secure_url } = uploadInfo

	const results = await cloudinary.uploader.upload(secure_url, {
		detection: "lvis_v1",
		auto_tagging: 0.8,
	})
	const detectionTags = results.info.detection.object_detection.data.lvis.tags
	const imagesDetected: ImagesDetected[] = []

	for (let tag in detectionTags) {
		let images = []

		for (let item of detectionTags[tag]) {
			const x = Math.round(item["bounding-box"][0])
			const y = Math.round(item["bounding-box"][1])
			const w = Math.round(item["bounding-box"][2])
			const h = Math.round(item["bounding-box"][3])

			// const imageCrop = await cloudinary.image(secure_url, {
			// 	crop: "crop",
			// 	x: x,
			// 	y: y,
			// 	width: w,
			// 	height: h,
			// })

			// images.push(imageCrop)

			images.push(
				`${process.env.NEXT_PUBLIC_CLOUDINARY_IMAGE_RES_URL}/x_${x},y_${y},w_${w},h_${h},c_crop/v1234567/${public_id}.jpg`
			)
		}

		imagesDetected.push({ tag, images })
	}

	res.status(200).json({ image: secure_url, tags: results.tags, imagesDetected })
}
