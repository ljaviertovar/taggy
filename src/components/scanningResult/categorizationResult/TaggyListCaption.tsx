import { useTaggyStore } from "../../../store/TaggyStore"
import { TaggyTagCaption } from "."

export default function TaggyListCaption() {
	const detectionResult = useTaggyStore(state => state.detectionResult)

	return (
		<>
			{[0, 1, 2, 3, 4].map(i => (
				<>
					.<br />
				</>
			))}

			{detectionResult.categoryTags.map(tagCategory => {
				return (
					<div key={tagCategory.category}>
						{tagCategory.tags.map(tag => {
							if (!tag.selected) return null
							return <TaggyTagCaption key={tag.name} tag={tag.name} />
						})}
					</div>
				)
			})}
		</>
	)
}
