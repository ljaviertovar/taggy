import { ColorModeScript } from "@chakra-ui/react"
import NextDocument, { Html, Head, Main, NextScript } from "next/document"
import { darkTheme } from "@/themes"
export default class Document extends NextDocument {
	render() {
		return (
			<Html lang='en'>
				<Head />
				<body>
					<ColorModeScript initialColorMode={darkTheme.config.initialColorMode} />
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
