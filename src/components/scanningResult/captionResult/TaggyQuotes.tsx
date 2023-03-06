import { IconTaggy } from "@/assets/taggyIcons"
import { useTaggyStore } from "@/store/taggyStore"
import { InfoIcon } from "@chakra-ui/icons"
import { Button, Flex, Heading, Text, Tooltip, useMediaQuery, VStack } from "@chakra-ui/react"

interface Props {
	textCaptionTags: string
}

export default function TaggyQuotes({ textCaptionTags }: Props) {
	const caption = useTaggyStore(state => state.caption)

	const [isDesktop] = useMediaQuery("(min-width: 769px)")

	return (
		<>
			<Flex alignItems={"center"} mb={2}>
				<Heading as='h3' size='md' textTransform={"uppercase"} color='taggyPrimary.900'>
					QUOTES
				</Heading>
				<Tooltip
					hasArrow
					label='You can add or remove tags to generate a new inspirational quotes, and then click in "Reload quotes" button.'
					placement={`${isDesktop ? "right" : "bottom"}`}
					bg='#e6e6e6'
				>
					<Button variant='unstyled'>
						<InfoIcon fontSize={"20px"} color='#3385ff' />
					</Button>
				</Tooltip>
			</Flex>
			{caption.status === "LOADING" ? (
				<VStack padding={4}>
					<IconTaggy width={"40px"} color='taggyPrimary.900' />
					<Text>LOADING...</Text>
				</VStack>
			) : (
				<Text size={"lg"}>{caption.text}</Text>
			)}

			<Text mt={4} fontWeight={"bold"}>
				{textCaptionTags}
			</Text>
		</>
	)
}
