import type { AppProps } from "next/app"

import { ChakraProvider } from "@chakra-ui/react"
import { darkTheme } from "@/themes"

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={darkTheme}>
			<Component {...pageProps} />
		</ChakraProvider>
	)
}
