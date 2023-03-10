import { IconTaggy } from "@/assets/taggyIcons"
import { Text, VStack, useMediaQuery } from "@chakra-ui/react"

import animations from "@/styles/animations.module.css"

interface Props {
	showQuotes: boolean
	quotesStatus: string
	quotes: string
}

export default function TaggyQuotes({ showQuotes, quotesStatus, quotes }: Props) {
	const [isDesktop] = useMediaQuery("(min-width: 769px)")
	const manito: string = isDesktop ? "👉" : "👇"

	if (!showQuotes) {
		return <Text size={"lg"}>Please, select some hashtags {manito}</Text>
	}

	return (
		<>
			{quotesStatus === "LOADING" ? (
				<VStack padding={4}>
					<IconTaggy className={animations.iconLoading} width={"40px"} color='taggyPrimary.900' />
					<Text color={"textBtn.900"}>We are generating your new quotes ✍️...</Text>
				</VStack>
			) : (
				<>
					{quotes.split(/\n/).map((line, i) => (
						<Text key={`taggy${i}`} size={"lg"} mb={4}>
							{line.replace(/\"/g, "")}
						</Text>
					))}
				</>
			)}
		</>
	)
}
