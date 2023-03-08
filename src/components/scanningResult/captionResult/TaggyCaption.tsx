import { IconTaggy } from "@/assets/taggyIcons"
import { Text, VStack, useMediaQuery } from "@chakra-ui/react"

import animations from "@/styles/animations.module.css"

interface Props {
	showCaption: boolean
	captionStatus: string
	caption: string
}

export default function TaggyCaption({ showCaption, captionStatus, caption }: Props) {
	const [isDesktop] = useMediaQuery("(min-width: 769px)")
	const manito: string = isDesktop ? "👉" : "👇"

	if (!showCaption) {
		return <Text size={"lg"}>Please, select some hashtags {manito}</Text>
	}

	return (
		<>
			{captionStatus === "LOADING" ? (
				<VStack padding={4}>
					<IconTaggy width={"40px"} color='taggyPrimary.900' />
					<Text>LOADING...</Text>
				</VStack>
			) : (
				<Text size={"lg"}>{caption}</Text>
			)}
		</>
	)
}
