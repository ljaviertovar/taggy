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
			<button onClick={() => setCopied()}>
				{isCopied ? <span title='Copied!'>Copied</span> : <span title='Copy to Clipboard'>Copy</span>}
			</button>
		</CopyToClipboard>
	)
}
