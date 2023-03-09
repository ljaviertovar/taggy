import Head from "next/head"
import { Box } from "@chakra-ui/react"
import { Footer, Header } from "../ui"
interface Props {
	children: React.ReactNode | React.ReactNode[]
	title: string
	pageDescription: string
	imageUrl?: string
}

export default function MainLayout({ children, imageUrl, pageDescription, title }: Props) {	
	return (
		<>
			<Head>
				<title>{title}</title>

				<meta name='description' content={pageDescription} />

				<meta name='og:title' content={title} />
				<meta name='og:description' content={pageDescription} />

				{imageUrl && <meta name='og:image' content={imageUrl} />}
			</Head>

			<Header />

			<Box as={"main"} width={"80%"} maxW={"1200px"} margin={"auto"} mb={28}>
				{children}
			</Box>

			<Footer />
		</>
	)
}
