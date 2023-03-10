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
	images: TaggyImages
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
	ORIGINAL = "ORIGINAL",
	SQUARE = "SQUARE",
	SQUAREPAD = "SQUAREPAD",
	SQUAREBLUR = "SQUAREBLUR",
	SQUAREBLURPAD = "SQUAREBLURPAD",
	VERTICAL = "VERTICAL",
	VERTICALPAD = "VERTICALPAD",
	VERTICALBLUR = "VERTICALBLUR",
	VERTICALBLURPAD = "VERTICALBLURPAD",
}

export type Taggy = { category: string; tags: Tag[] }

export type Tag = {
	name: string
	selected: boolean
}
