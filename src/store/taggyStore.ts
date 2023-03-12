import { create } from "zustand"

import { DetectionResult, ImageStatus, TextSelected, TaggyImageType } from "@/types.d"
import { dummy } from "dummy"

interface State {
	imageStatus: ImageStatus
	imageSelected: TaggyImageType
	detectionResult: DetectionResult
	caption: {
		text: string
		status: string
	}
	quotes: {
		text: string
		status: string
	}
	textSelected: TextSelected
}

const INITIAL_RESULT_STATE = {
	images: {
		ORIGINAL: "",
		SQUARE: "",
		SQUAREPAD: "",
		SQUAREBLUR: "",
		SQUAREBLURPAD: "",
		VERTICAL: "",
		VERTICALPAD: "",
		VERTICALBLUR: "",
		VERTICALBLURPAD: "",
	},
	categoryTags: [],
}

const INITIAL_CAPTION_STATE = { text: "", status: "DONE" }
const INITIAL_QUOTES_STATE = { text: "", status: "DONE" }

const INITIAL_TAGGY_STATE = {
	imageStatus: ImageStatus.READY,
	imageSelected: TaggyImageType.SQUARE,
	detectionResult: INITIAL_RESULT_STATE,
	caption: INITIAL_CAPTION_STATE,
	quotes: INITIAL_QUOTES_STATE,
	textSelected: TextSelected.CAPTION,
}

interface Actions {
	setImageStatus: (value: ImageStatus) => void
	setDetectionResult: (value: DetectionResult) => void
	toggleTag: (category: string, tag: string) => void
	setCaption: (value: { text: string; status: string }) => void
	setQuotes: (value: { text: string; status: string }) => void
	setTextSelected: (value: TextSelected) => void
	setImageSelected: (value: TaggyImageType) => void
	setInitialState: () => void
}

export const useTaggyStore = create<State & Actions>((set, get) => ({
	imageStatus: ImageStatus.READY,
	imageSelected: TaggyImageType.SQUARE,
	detectionResult: INITIAL_RESULT_STATE,
	caption: INITIAL_CAPTION_STATE,
	quotes: INITIAL_QUOTES_STATE,
	textSelected: TextSelected.CAPTION,
	setImageStatus: value => set(state => ({ imageStatus: value })),
	setDetectionResult: value => set(state => ({ detectionResult: value })),
	toggleTag: (category, tag) => {
		const detectionResult = get().detectionResult
		const updated = detectionResult.categoryTags.map(categoryTag => {
			if (categoryTag.category === category) {
				const updated = categoryTag.tags.map(t => {
					if (t.name === tag) {
						return { ...t, selected: !t.selected }
					}
					return t
				})

				return { ...categoryTag, tags: updated }
			}
			return categoryTag
		})

		set(state => ({
			detectionResult: { ...detectionResult, categoryTags: updated },
		}))
	},
	setCaption: value => set(state => ({ caption: value })),
	setQuotes: value => set(state => ({ quotes: value })),
	setTextSelected: value => set(state => ({ textSelected: value })),
	setImageSelected: value => set(state => ({ imageSelected: value })),
	setInitialState: () => set(state => ({ ...INITIAL_TAGGY_STATE })),
}))
