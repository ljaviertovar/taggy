import { useEffect, useMemo } from "react"
import { Button, Container, Flex, useMediaQuery } from "@chakra-ui/react"
import { TaggyCopyToClipboard } from "@/components/ui"

import { useTaggyStore } from "@/store/taggyStore"

import { getCaptionByTags } from "@/services/cloudinary"
import IconTaggyReload from "../../../assets/taggyIcons/IconTaggyReload"
import TaggyCaption from "./TaggyCaption"

export default function CaptionResult() {
	const detectionResult = useTaggyStore(state => state.detectionResult)
	const caption = useTaggyStore(state => state.caption)
	const setCaption = useTaggyStore(state => state.setCaption)

	const getCaption = () => {
		setCaption({ ...caption, status: "LOADING" })
		getCaptionByTags(selectedTags).then(resp => setCaption({ text: resp, status: "DONE" }))
	}

	useEffect(() => {
		if (selectedTags) {
			getCaption()
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const textCaptionTags = useMemo(() => {
		let text = ""
		for (let category of detectionResult.categoryTags) {
			for (let tag of category.tags) {
				if (tag.selected) {
					text += `#${tag.name} `
				}
			}
		}

		return text.trim()
	}, [detectionResult.categoryTags])

	const selectedTags = useMemo(() => {
		let tags = []

		for (let category of detectionResult.categoryTags) {
			for (let tag of category.tags) {
				if (tag.selected) {
					tags.push(tag.name)
				}
			}
		}

		return tags
	}, [detectionResult.categoryTags])

	return (
		<>
			<Container padding={0} mt={2} mb={8}>
				<TaggyCaption textCaptionTags={textCaptionTags} />
			</Container>

			<Flex justifyContent={"space-between"}>
				<Button
					variant={"unstyled"}
					_hover={{ color: "#e6e6e6" }}
					color={"textBtn.900"}
					gap={2}
					display={"flex"}
					alignItems={"center"}
					onClick={() => getCaption()}
				>
					<IconTaggyReload width={"30px"} color='taggyPrimary.900' />
					Reaload caption
				</Button>
				<TaggyCopyToClipboard text={`${caption.text}\n.\n.\n.\n.\n.\n${textCaptionTags}`} />
			</Flex>
		</>
	)
}
