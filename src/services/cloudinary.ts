import axios from "axios"
import { ImageParams } from "../types"

export const scanningAndCategorization = async (imageBase64: string) => {
	const categorizationResult = await axios({
		method: "POST",
		url: "/api/categorization",
		data: {
			imageBase64,
		},
	})

	const taggyResult = await axios({
		method: "POST",
		url: "/api/taggy",
		data: {
			tagsDetected: categorizationResult.data.tags,
		},
	})

	return {
		categoryTags: taggyResult.data,
		secureUrl: categorizationResult.data.secureUrl,
		publicId: categorizationResult.data.publicId,
	}
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

export const taggyParams = (): ImageParams => {
	return {
		SQUARE: "q_auto:best,f_jpg,w_1080,h_1080,c_fill,g_auto,ar_1:1",
		SQUAREPAD: "q_auto:best,f_jpg,w_1080,h_1080,c_pad,b_auto:predominant,ar_1:1",
		SQUAREBLUR: "q_auto:best,f_jpg,w_1080,h_1080,c_fill,g_auto,ar_1:1,e_blur:1000",
		SQUAREBLURPAD: "q_auto:best,f_jpg,w_1080,h_1080,c_pad,b_auto:predominant,ar_1:1,e_blur:1000",
		VERTICAL: "q_auto:best,f_jpg,w_1080,h_1350,c_fill,g_auto,ar_4:5",
		VERTICALPAD: "q_auto:best,f_jpg,w_1080,h_1350,c_pad,b_auto:predominant,ar_4:5",
		VERTICALBLUR: "q_auto:best,f_jpg,w_1080,h_1350,c_fill,g_auto,ar_4:5,e_blur:1000",
		VERTICALBLURPAD: "q_auto:best,f_jpg,w_1080,h_1350,c_pad,b_auto:predominant,ar_4:5,e_blur:1000",
	}
}
