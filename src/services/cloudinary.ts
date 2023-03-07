import axios from "axios"

export const scanningAndCategorization = async (secure_url: string) => {
	const categorizationResult = await axios({
		method: "POST",
		url: "/api/categorization",
		data: {
			uploadInfo: { secure_url },
		},
	})
	console.log(categorizationResult.data)
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
