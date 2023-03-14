import type { AppProps } from "next/app"

import { ChakraProvider } from "@chakra-ui/react"
import { darkTheme } from "@/themes"
import TagManager from "react-gtm-module"
import '../styles/globals.css';
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
	useEffect(() => {
		TagManager.initialize({ gtmId: 'GTM-PNV7PKD' });
	}, []);
	return (
		<ChakraProvider theme={darkTheme}>
			<Component {...pageProps} />
		</ChakraProvider>
	)
}

