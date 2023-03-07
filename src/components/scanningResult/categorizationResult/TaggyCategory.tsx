import { Box, Container, Heading } from "@chakra-ui/react"
import { TaggyTag } from "."

import { Tag } from "@/types"
interface Props {
	category: string
	tags: Tag[]
}

export default function TaggyCategory({ category, tags }: Props) {
	const cat = category === "Top Hashtags" ? `🔥 ${category}` : category
	return (
		<Container padding={0}>
			<Heading as='h4' size='md' mt={6} mb={2} textTransform={"capitalize"}>
				{cat}
			</Heading>
			<>
				{tags.map(tag => (
					<TaggyTag key={tag.name} category={category} tag={tag.name} enabled={tag.selected} />
				))}
			</>
		</Container>
	)
}
