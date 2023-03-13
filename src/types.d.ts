export enum ImageStatus {
	READY,
	UPLOADING,
	SCANNING,
	DONE,
	ERROR,
}

export enum TextSelected {
	CAPTION,
	QUOTES,
}

export type DetectionResult = {
	secureUrl: string
	publicId: string
	categoryTags: Taggy[]
}

// export type TaggyImages = TaggyImage[]
export type TaggyImages = {
	ORIGINAL: string
	SQUARE: string
	SQUAREPAD: string
	SQUAREBLUR: string
	SQUAREBLURPAD: string
	VERTICAL: string
	VERTICALPAD: string
	VERTICALBLUR: string
	VERTICALBLURPAD: string
}

export type TaggyImage = {
	url: string
	type: TaggyImageType
}

export enum TaggyImageType {
	// ORIGINAL = "ORIGINAL",
	SQUARE = "SQUARE",
	SQUAREPAD = "SQUAREPAD",
	SQUAREBLUR = "SQUAREBLUR",
	SQUAREBLURPAD = "SQUAREBLURPAD",
	VERTICAL = "VERTICAL",
	VERTICALPAD = "VERTICALPAD",
	VERTICALBLUR = "VERTICALBLUR",
	VERTICALBLURPAD = "VERTICALBLURPAD",
}

// export interface ImageParams {
// 	SQUARE_URL_PARAMS: string
// 	SQUAREPAD_URL_PARAMS: string
// 	SQUAREBLUR_URL_PARAMS: string
// 	SQUAREBLURPAD_URL_PARAMS: string
// 	VERTICAL_URL_PARAMS: string
// 	VERTICALPAD_URL_PARAMS: string
// 	VERTICALBLUR_URL_PARAMS: string
// 	VERTICALBLURPAD_URL_PARAMS: string
// }

export interface ImageParams {
	[key: string]: string
}

export type Taggy = { category: string; tags: Tag[] }

export type Tag = {
	name: string
	selected: boolean
}
