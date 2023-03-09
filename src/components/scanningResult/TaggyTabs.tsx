import { InfoIcon } from "@chakra-ui/icons"
import {
	Button,
	Flex,
	Heading,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	Tooltip,
	useMediaQuery,
} from "@chakra-ui/react"
import React, { useMemo } from "react"
import { CaptionResult } from "./captionResult"
import QuotesResult from "./quotesResult/QuotesResult"
import { useTaggyStore } from "@/store/taggyStore"

export default function TaggyTabs() {
	const detectionResult = useTaggyStore(state => state.detectionResult)

	const [isDesktop] = useMediaQuery("(min-width: 769px)")

	const textCaptionTags: string = useMemo(() => {
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

	const selectedTags: string[] = useMemo(() => {
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
		<Tabs size='sm' variant='enclosed'>
			<TabList>
				<Tab>CAPTION</Tab>
				<Tab>QUOTES</Tab>
			</TabList>
			<TabPanels>
				<TabPanel padding={0} margin={0}>
					<CaptionResult textCaptionTags={textCaptionTags} selectedTags={selectedTags} />
				</TabPanel>
				<TabPanel padding={0} margin={0}>
					<QuotesResult textCaptionTags={textCaptionTags} selectedTags={selectedTags} />
				</TabPanel>
			</TabPanels>
		</Tabs>

		// <Flex alignItems={"center"} mb={2}>
		// 	<Heading as='h3' size='md' textTransform={"uppercase"} color='taggyPrimary.900'>
		// 		CAPTION
		// 	</Heading>
		// 	<Tooltip
		// 		hasArrow
		// 		label='You can add or remove tags to generate a new caption, and then click in "Reload caption" button.'
		// 		placement={`${isDesktop ? "right" : "bottom"}`}
		// 		bg='#e6e6e6'
		// 	>
		// 		<Button variant='unstyled'>
		// 			<InfoIcon fontSize={"20px"} color='#3385ff' />
		// 		</Button>
		// 	</Tooltip>
		// </Flex>
	)
}
