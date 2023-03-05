import { Tag } from "@/types"
import { Box, Container, Heading, HStack } from "@chakra-ui/react"
import { TaggyTag } from "."

interface Props {
	category: string
	tags: Tag[]
}

export default function TaggyCategory({ category, tags }: Props) {
	return (
		<Container>
			<Heading as='h4' size='md' mt={4} mb={4}>
				{category}
			</Heading>
			<Box>
				{tags.map(tag => (
					<TaggyTag key={tag.name} category={category} tag={tag.name} enabled={tag.selected} />
				))}
			</Box>
		</Container>
	)
}
