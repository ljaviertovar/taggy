import { useMemo, useEffect } from "react"

import { Text, VStack, HStack, Button } from "@chakra-ui/react"
import { TaggyCopyToClipboard } from "."

import { useDropzoneStore } from "@/store/dropzoneStore"
import { getCaptionByTags } from "../../services/cloudinary"

export default function TaggyCaption() {
	const detectionResult = useDropzoneStore((state: { detectionResult: any }) => state.detectionResult)
	const caption = useDropzoneStore(state => state.caption)
	const setCaption = useDropzoneStore(state => state.setCaption)

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

	return (
		<VStack>
			<HStack>
				<Button onClick={() => getCaption()}>Generate Caption</Button>
				<TaggyCopyToClipboard text={caption.text} />
			</HStack>
			{caption.status === "LOADING" ? <h2>LOADING..</h2> : <Text size={"lg"}>{caption.text}</Text>}
		</VStack>
	)
}
