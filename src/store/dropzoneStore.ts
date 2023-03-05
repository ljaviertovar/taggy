import { create } from "zustand"

import { DetectionResult, ImageStatus } from "@/types.d"

interface State {
	imageStatus: ImageStatus
	imageSelected: string
	detectionResult: DetectionResult
	caption: {
		text: string
		status: string
	}
}

const INITIAL_RESULT_STATE = {
	images: { original: "", square: "", squarePad: "", vertical: "", verticalPad: "", horizontal: "", horizontalPad: "" },
	categoryTags: [],
}
const INITIAL_CAPTION_STATE = { text: "", status: "DONE" }

interface Actions {
	setImageStatus: (value: ImageStatus) => void
	setDetectionResult: (value: DetectionResult) => void
	toggleTag: (category: string, tag: string) => void
	setCaption: (value: { text: string; status: string }) => void
	setImageSelected: (value: string) => void
}

export const useDropzoneStore = create<State & Actions>((set, get) => ({
	imageStatus: ImageStatus.READY,
	imageSelected: "",
	detectionResult: INITIAL_RESULT_STATE,
	caption: INITIAL_CAPTION_STATE,
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
	setImageSelected: value => set(state => ({ imageSelected: value })),
}))
