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
	images: TaggyImage
	categoryTags: Taggy[]
}

export type TaggyImages = {
	original: string
	square: string
	squarePad: string
	squareBlur: string
	squareBlurPad: string
	vertical: string
	verticalPad: string
	verticalBlur: string
	verticalBlurPad: string
}

export type Taggy = { category: string; tags: Tag[] }

export type Tag = {
	name: string
	selected: boolean
}
