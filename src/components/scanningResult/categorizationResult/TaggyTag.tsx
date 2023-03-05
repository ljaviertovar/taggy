import { Tag, TagLabel } from "@chakra-ui/react"
import { AddIcon, CloseIcon } from "@chakra-ui/icons"
import { useDropzoneStore } from "../../../store/dropzoneStore"

interface Props {
	category: string
	tag: string
	enabled: boolean
}

export default function TaggyTag({ category, tag, enabled }: Props) {
	const toggleTag = useDropzoneStore(state => state.toggleTag)

	return (
		<Tag
			as={"div"}
			size={"md"}
			key={tag}
			borderRadius='full'
			variant='solid'
			colorScheme={enabled ? "" : "green"}
			sx={{ minW: "auto" }}
			onClick={() => toggleTag(category, tag)}
			cursor='pointer'
		>
			<TagLabel>{tag}</TagLabel>
			{!enabled ? <AddIcon /> : <CloseIcon />}
		</Tag>
	)
}
