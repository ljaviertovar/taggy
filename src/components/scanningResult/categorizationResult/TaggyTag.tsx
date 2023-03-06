import { Tag, TagLabel } from "@chakra-ui/react"
import { AddIcon, CloseIcon, SmallAddIcon, SmallCloseIcon } from "@chakra-ui/icons"
import { useTaggyStore } from "../../../store/taggyStore"

interface Props {
	category: string
	tag: string
	enabled: boolean
}

export default function TaggyTag({ category, tag, enabled }: Props) {
	const toggleTag = useTaggyStore(state => state.toggleTag)

	return (
		<Tag
			key={tag}
			size={"md"}
			borderRadius='6px'
			border={"2px solid"}
			borderColor='taggySecondary.900'
			color={"#ffffff"}
			gap={1}
			variant='solid'
			background={enabled ? "taggyDisabled.900" : "taggySecondary.900"}
			cursor='pointer'
			margin={1}
			onClick={() => toggleTag(category, tag)}
		>
			<TagLabel>#{tag}</TagLabel>
			{!enabled ? <SmallAddIcon w={"16px"} fontSize={"20px"} /> : <SmallCloseIcon w={"16px"} fontSize={"16px"} />}
		</Tag>
	)
}
