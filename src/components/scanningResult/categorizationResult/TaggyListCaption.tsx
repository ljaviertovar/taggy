import { usetaggyStore } from "../../../store/taggyStore"
import { TaggyTagCaption } from "."

export default function TaggyListCaption() {
	const detectionResult = usetaggyStore(state => state.detectionResult)

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
