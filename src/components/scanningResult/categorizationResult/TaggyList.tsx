import { Container } from "@chakra-ui/react"
import { TaggyCategory } from "."

import { useTaggyStore } from "../../../store/taggyStore"

export default function TagList() {
	const detectionResult = useTaggyStore(state => state.detectionResult)

	return (
		<Container padding={0}>
			{detectionResult.categoryTags.map((tag, i) => {
				if (!tag.tags.length) return null
				let category = tag.category
				if (i === 0) category = `🔥 ${category}`
				return <TaggyCategory key={tag.category} category={category} tags={tag.tags} />
			})}
		</Container>
	)
}
