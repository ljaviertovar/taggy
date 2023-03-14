import Head from "next/head"
import { Box } from "@chakra-ui/react"
import { Footer, Header } from "../ui"
interface Props {
	children: React.ReactNode | React.ReactNode[]
	title: string
	pageDescription: string
	imageUrl?: string
}

export default function MainLayout({
	children,
	imageUrl = "https://res.cloudinary.com/ljtdev/image/upload/v1678488373/WhatsApp_Image_2023-03-10_at_17.45.20_xdibu7.jpg",
	pageDescription,
	title,
}: Props) {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name='title' content={title} />
				<meta name='description' content={pageDescription} />

				<meta name='og:title' content={title} />
				{imageUrl && <meta name='og:image' content={imageUrl} />}
				<meta name='og:description' content={pageDescription} />

				<meta property='og:title' content={title} />
				{imageUrl && <meta property='og:image' content={imageUrl} />}
				<meta property='og:description' content={pageDescription} />
				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://www.taggy.com.mx/' />

				<meta property='twitter:card' content='summary' />
				<meta property='twitter:url' content='https://www.taggy.com.mx/' />
				<meta property='twitter:title' content={title} />
				<meta property='twitter:description' content={pageDescription} />
				{imageUrl && <meta property='twitter:image' content={imageUrl} />}
			</Head>

			<Header />

			<Box as={"main"} width={["100%", "100%", "90%", "80%"]} maxW={"1200px"} margin={"auto"} mb={28}>
				{children}
			</Box>

			<Footer />
		</>
	)
}
