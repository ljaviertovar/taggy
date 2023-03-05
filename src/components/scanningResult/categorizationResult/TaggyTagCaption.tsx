import { Tag, TagLabel } from "@chakra-ui/react"

interface Props {
	tag: string
}

export default function TaggyTagCaption({ tag }: Props) {
	return (
		<Tag size={"md"} key={tag} variant='' colorScheme={""} sx={{ minW: "auto" }}>
			<TagLabel>#{tag}</TagLabel>
		</Tag>
	)
}
