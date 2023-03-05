import { Container } from "@chakra-ui/react"
import { TaggyCategory } from "."

import { useDropzoneStore } from "../../../store/dropzoneStore"

export default function TagList() {
	const detectionResult = useDropzoneStore(state => state.detectionResult)

	return (
		<Container>
			{detectionResult.categoryTags.map(tag => {
				if (!tag.tags.length) return null
				return <TaggyCategory key={tag.category} category={tag.category} tags={tag.tags} />
			})}
		</Container>
	)
}
