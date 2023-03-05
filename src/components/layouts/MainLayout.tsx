import Head from "next/head"
import { Box, Container } from "@chakra-ui/react"

interface Props {
	children: React.ReactNode | React.ReactNode[]
	title: string
	pageDescription: string
	imageUrl?: string
}

export default function ShopLayout({ children, imageUrl, pageDescription, title }: Props) {
	return (
		<>
			<Head>
				<title>{title}</title>

				<meta name='description' content={pageDescription} />

				<meta name='og:title' content={title} />
				<meta name='og:description' content={pageDescription} />

				{imageUrl && <meta name='og:image' content={imageUrl} />}
			</Head>

			<Box as={"main"} width={"80%"} maxW={"1200px"} margin={"auto"}>
				{children}
			</Box>
		</>
	)
}
