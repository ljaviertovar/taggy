import IconTaggyCopy from "../../assets/taggyIcons/IconTaggyCopy"
import { Button, Flex, Center } from "@chakra-ui/react"
import { useState } from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"

interface Props {
	text: string
}

export default function TaggyCopyToClipboard({ text = "" }: Props) {
	const [isCopied, setIsCopied] = useState(false)

	const setCopied = () => {
		setIsCopied(true)
		setTimeout(() => {
			setIsCopied(false)
		}, 1000)
	}

	return (
		<CopyToClipboard text={text}>
			<Button variant={"unstyled"} color={"textBtn.900"} _hover={{ color: "#e6e6e6" }} onClick={() => setCopied()}>
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
