import { IconTaggy } from "@/assets/taggyIcons"
import { Text, VStack, useMediaQuery } from "@chakra-ui/react"

interface Props {
	showQuotes: boolean
	quotesStatus: string
	quotes: string
}

export default function TaggyQuotes({ showQuotes, quotesStatus, quotes }: Props) {
	const [isDesktop] = useMediaQuery("(min-width: 769px)")
	const manito: string = isDesktop ? "👉" : "👇"

	if (!showQuotes) {
		return <Text size={"lg"}>Please, select some hashtagaaaaaaaaaaaaas {manito}</Text>
	}

	console.log({ quotes })

	return (
		<>
			{quotesStatus === "LOADING" ? (
				<VStack padding={4}>
					<IconTaggy width={"40px"} color='taggyPrimary.900' />
					<Text>LOADING...</Text>
				</VStack>
			) : (
				<Text size={"lg"}>{quotes}</Text>
			)}
		</>
	)
}
