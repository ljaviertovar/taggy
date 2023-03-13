import { useEffect } from "react"
import { Button, Container, Flex, Text, useMediaQuery } from "@chakra-ui/react"
import { TaggyCopyToClipboard } from "@/components/ui"
import { TaggyQuotes } from "./"

import IconTaggyReload from "../../../assets/taggyIcons/IconTaggyReload"

import { useTaggyStore } from "@/store/taggyStore"
import { getQuotesByTags } from "@/services/cloudinary"

interface Props {
	selectedTags: string[]
	textCaptionTags: string
}

export default function QuotesResult({ selectedTags, textCaptionTags }: Props) {
	const quotes = useTaggyStore(state => state.quotes)
	const setQuotes = useTaggyStore(state => state.setQuotes)

	const [isDesktop] = useMediaQuery("(min-width: 769px)")

	const getQuotes = () => {
		if (!selectedTags.length) return null
		setQuotes({ ...quotes, status: "LOADING" })
		getQuotesByTags(selectedTags).then(resp => {
			setQuotes({ text: resp, status: "DONE" })
		})
	}

	useEffect(() => {
		if (selectedTags.length > 0) {
			getQuotes()
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<Container padding={0} m={0} mt={6} maxW={"full"}>
			<TaggyQuotes showQuotes={selectedTags.length > 0} quotesStatus={quotes.status} quotes={quotes.text} />

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
					size={`${isDesktop ? "md" : "sm"}`}
					onClick={() => getQuotes()}
				>
					<IconTaggyReload width={"30px"} color='taggyPrimary.900' />
					Reaload quotes
				</Button>

				<TaggyCopyToClipboard text={`${quotes.text}\n.\n.\n.\n.\n.\n${textCaptionTags}`} />
			</Flex>
		</Container>
	)
}
