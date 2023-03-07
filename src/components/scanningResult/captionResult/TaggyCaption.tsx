import { IconTaggy } from "@/assets/taggyIcons"
import { useTaggyStore } from "@/store/taggyStore"
import { InfoIcon } from "@chakra-ui/icons"
import { Button, Flex, Heading, Text, Tooltip, useMediaQuery, VStack } from "@chakra-ui/react"

import animations from "@/styles/animations.module.css"

interface Props {
	textCaptionTags: string
}

export default function TaggyCaption({ textCaptionTags }: Props) {
	const caption = useTaggyStore(state => state.caption)

	const [isDesktop] = useMediaQuery("(min-width: 769px)")
	const manito = isDesktop ? "👉" : "👇"
	return (
		<>
			<Flex alignItems={"center"} mb={2}>
				<Heading as='h3' size='md' textTransform={"uppercase"} color='taggyPrimary.900'>
					CAPTION
				</Heading>
				<Tooltip
					hasArrow
					label='You can add or remove tags to generate a new caption, and then click in "Reload caption" button.'
					placement={`${isDesktop ? "right" : "bottom"}`}
					bg='#e6e6e6'
				>
					<Button variant='unstyled'>
						<InfoIcon fontSize={"20px"} color='#3385ff' />
					</Button>
				</Tooltip>
			</Flex>

			<>
				{textCaptionTags !== "" ? (
					<>
						{caption.status === "LOADING" ? (
							<VStack padding={4}>
								<IconTaggy className={animations.iconLoading} width={"40px"} color='taggyPrimary.900' />
								<Text color={'textBtn.900'}>We are generating your new caption ✍️...</Text>
							</VStack>
						) : (
							<Text size={"lg"}>{caption.text}</Text>
						)}
					</>
				) : (
					<Text size={"lg"}>Please, select some hashtags. {manito}</Text>
				)}
			</>

			<Text mt={4} fontWeight={"bold"}>
				{textCaptionTags}
			</Text>
		</>
	)
}
