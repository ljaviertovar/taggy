import { Container } from "@chakra-ui/react"
import { TaggyCategory } from "."

import { useTaggyStore } from "../../../store/taggyStore"

export default function TagList() {
	const detectionResult = useTaggyStore(state => state.detectionResult)

	return (
		<Container padding={0}>
			{detectionResult.categoryTags.map(tag => {
				if (!tag.tags.length) return null
				return <TaggyCategory key={tag.category} category={tag.category} tags={tag.tags} />
			})}
		</Container>
	)
}
