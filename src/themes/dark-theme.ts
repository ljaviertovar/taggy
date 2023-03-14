import { extendTheme, type ThemeConfig } from "@chakra-ui/react"

const config: ThemeConfig = {
	initialColorMode: "dark",
	useSystemColorMode: false,
}

const theme = extendTheme({
	config,
	styles: {
		global: () => ({
			body: {
				bg: "#1A1A1A",
				fontFamily: "boston-regular",
			},
		}),
	},
	colors: {
		taggyPrimary: {
			900: "#ff3385",
		},
		taggySecondary: {
			900: "#5EAD27",
		},
		taggyTertiary: {
			900: "#245484",
		},
		taggyText: {
			900: "#e6e6e6",
		},
		taggyGray: {
			100: "#7F7F7F",
			500: "#464646",
			900: "#1A1A1A",
		},
		taggyCardBg: {
			900: "#222222",
		},
		taggyDisabled: {
			900: "#385425",
		},
		textBtn: {
			900: "#808080",
		},
	},
	fonts: {
		body: 'boston',
		heading: 'boston',
	  },
})

export default theme
