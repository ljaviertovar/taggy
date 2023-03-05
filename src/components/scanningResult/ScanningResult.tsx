import { useMemo } from "react"

import { Box, Card, CardBody, CardHeader, Heading, HStack, Image } from "@chakra-ui/react"
import { TaggyList, TaggyListCaption } from "./"
import { TaggyCaption, TaggyCopyToClipboard } from "../ui"

import { useDropzoneStore } from "@/store/dropzoneStore"
import ImageOptimized from "./ImageOptimized"

export default function ScanningResult() {
	const detectionResult = useDropzoneStore(state => state.detectionResult)

	const textTags = useMemo(() => {
		let text = ".\n.\n.\n.\n.\n"

		for (let category of detectionResult.categoryTags) {
			for (let tag of category.tags) {
				if (tag.selected) {
					text += `#${tag.name} `
				}
			}
		}

		return text.trim()
	}, [detectionResult.categoryTags])

	console.log({ detectionResult })

	return (
		<HStack spacing={8} alignItems={"flex-start"}>
			<Card width={"50%"}>
				<CardBody>
					<Box>
						<ImageOptimized />
						<TaggyCaption />
					</Box>
					<Box>
						<TaggyCopyToClipboard text={textTags} />
						<TaggyListCaption />
					</Box>
				</CardBody>
			</Card>

			<Card width={"50%"}>
				<CardHeader>
					<Heading as='h3' size='lg' marginBottom={0}>
						Suggested Hashtags
					</Heading>
				</CardHeader>
				<CardBody>
					<TaggyList />
				</CardBody>
			</Card>
		</HStack>
	)
}
