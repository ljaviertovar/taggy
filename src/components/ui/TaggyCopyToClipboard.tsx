import IconTaggyCopy from "../../assets/taggyIcons/IconTaggyCopy"
import { Button, Flex, Center, useMediaQuery } from "@chakra-ui/react"
import { useState } from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"

interface Props {
	text: string
}

export default function TaggyCopyToClipboard({ text = "" }: Props) {
	const [isCopied, setIsCopied] = useState(false)

	const [isDesktop] = useMediaQuery("(min-width: 769px)")

	const setCopied = () => {
		setIsCopied(true)
		setTimeout(() => {
			setIsCopied(false)
		}, 1000)
	}

	return (
		<CopyToClipboard text={text}>
			<Button
				variant={"unstyled"}
				_hover={{ color: "#e6e6e6" }}
				color={"textBtn.900"}
				gap={2}
				display={"flex"}
				alignItems={"center"}
				size={`${isDesktop ? "md" : "sm"}`}
				onClick={() => setCopied()}
			>
				{isCopied ? (
					<span>Copied!</span>
				) : (
					<>
						<Flex>
							<Center>
								Copy to Clipboard <IconTaggyCopy width={"40px"} color='taggyPrimary.900' />
							</Center>
						</Flex>
					</>
				)}
			</Button>
		</CopyToClipboard>
	)
}
