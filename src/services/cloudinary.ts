import axios from "axios"
import { TaggyImages } from "../types"

export const scanningAndCategorization = async (secure_url: string) => {
	const categorizationResult = await axios({
		method: "POST",
		url: "/api/categorization",
		data: {
			uploadInfo: { secure_url },
		},
	})

	const taggyResult = await axios({
		method: "POST",
		url: "/api/taggy",
		data: {
			tagsDetected: categorizationResult.data,
		},
	})

	return taggyResult.data
}

export const getCaptionByTags = async (tags: string[]) => {
	const resp = await axios({
		method: "POST",
		url: "/api/ai-caption",
		data: {
			tags,
		},
	})

	return resp.data
}

export const getQuotesByTags = async (tags: string[]) => {
	const resp = await axios({
		method: "POST",
		url: "/api/ai-quotes",
		data: {
			tags,
		},
	})

	return resp.data
}

export const getTaggyCloudURLS = (secure_url: string, public_id: string): TaggyImages => {
	const SQUARE_URL_PATHS = "q_auto:best,f_jpg,w_1080,h_1080,c_fill,g_auto,ar_1:1"
	const SQUAREPAD_URL_PATHS = "q_auto:best,f_jpg,w_1080,h_1080,c_pad,b_auto:predominant,ar_1:1"
	const SQUAREBLUR_URL_PATHS = "q_auto:best,f_jpg,w_1080,h_1080,c_fill,g_auto,ar_1:1,e_blur:1000"
	const SQUAREBLURPAD_URL_PATHS = "q_auto:best,f_jpg,w_1080,h_1080,c_pad,b_auto:predominant,ar_1:1,e_blur:1000"
	const VERTICAL_URL_PATHS = "q_auto:best,f_jpg,w_1080,h_1350,c_fill,g_auto,ar_4:5"
	const VERTICALPAD_URL_PATHS = "q_auto:best,f_jpg,w_1080,h_1350,c_pad,b_auto:predominant,ar_4:5"
	const VERTICALBLUR_URL_PATHS = "q_auto:best,f_jpg,w_1080,h_1350,c_fill,g_auto,ar_4:5,e_blur:1000"
	const VERTICALBLURPAD_URL_PATHS = "q_auto:best,f_jpg,w_1080,h_1350,c_pad,b_auto:predominant,ar_4:5,e_blur:1000"

	return {
		ORIGINAL: secure_url,
		SQUARE: `${process.env.NEXT_PUBLIC_CLOUDINARY_IMAGE_RES_URL}/${SQUARE_URL_PATHS}/${public_id}`,
		SQUAREPAD: `${process.env.NEXT_PUBLIC_CLOUDINARY_IMAGE_RES_URL}/${SQUAREPAD_URL_PATHS}/${public_id}`,
		SQUAREBLUR: `${process.env.NEXT_PUBLIC_CLOUDINARY_IMAGE_RES_URL}/${SQUAREBLUR_URL_PATHS}/${public_id}`,
		SQUAREBLURPAD: `${process.env.NEXT_PUBLIC_CLOUDINARY_IMAGE_RES_URL}/${SQUAREBLURPAD_URL_PATHS}/${public_id}`,
		VERTICAL: `${process.env.NEXT_PUBLIC_CLOUDINARY_IMAGE_RES_URL}/${VERTICAL_URL_PATHS}/${public_id}`,
		VERTICALPAD: `${process.env.NEXT_PUBLIC_CLOUDINARY_IMAGE_RES_URL}/${VERTICALPAD_URL_PATHS}/${public_id}`,
		VERTICALBLUR: `${process.env.NEXT_PUBLIC_CLOUDINARY_IMAGE_RES_URL}/${VERTICALBLUR_URL_PATHS}/${public_id}`,
		VERTICALBLURPAD: `${process.env.NEXT_PUBLIC_CLOUDINARY_IMAGE_RES_URL}/${VERTICALBLURPAD_URL_PATHS}/${public_id}`,
	}
}
