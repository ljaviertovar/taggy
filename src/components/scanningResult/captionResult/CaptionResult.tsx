import { useEffect } from "react"
import { Button, Container, Flex, Text, useMediaQuery } from "@chakra-ui/react"
import { TaggyCopyToClipboard } from "@/components/ui"
import { TaggyCaption } from "."

import IconTaggyReload from "../../../assets/taggyIcons/IconTaggyReload"

import { useTaggyStore } from "@/store/taggyStore"
import { getCaptionByTags } from "@/services/cloudinary"

interface Props {
	selectedTags: string[]
	textCaptionTags: string
}

export default function CaptionResult({ selectedTags, textCaptionTags }: Props) {
	const caption = useTaggyStore(state => state.caption)
	const setCaption = useTaggyStore(state => state.setCaption)

	const [isDesktop] = useMediaQuery("(min-width: 769px)")

	const getCaption = () => {
		if (!selectedTags.length) return null
		setCaption({ ...caption, status: "LOADING" })
		getCaptionByTags(selectedTags).then(resp => setCaption({ text: resp, status: "DONE" }))
	}

	useEffect(() => {
		if (selectedTags.length > 0) {
			getCaption()
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<Container padding={0} m={0} mt={6} maxW={"full"}>
			<TaggyCaption showCaption={selectedTags.length > 0} captionStatus={caption.status} caption={caption.text} />

			<Text mt={4} mb={6} fontWeight='bold'>
				{textCaptionTags}
			</Text>

			<Flex justifyContent={"space-between"}>
				<Button
					variant={"unstyled"}
					_hover={{ color: "#e6e6e6" }}
					color={"textBtn.900"}
					gap={2}
					display={"flex"}
					alignItems={"center"}
					onClick={() => getCaption()}
					size={`${isDesktop ? "md" : "sm"}`}
				>
					<IconTaggyReload width={"30px"} color='taggyPrimary.900' />
					Reaload caption
				</Button>

				<TaggyCopyToClipboard text={`${caption.text}\n.\n.\n.\n.\n.\n${textCaptionTags}`} />
			</Flex>
		</Container>
	)
}
