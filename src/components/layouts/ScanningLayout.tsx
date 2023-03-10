import Head from "next/head"
import { Grid } from "@chakra-ui/react"

interface Props {
	children: React.ReactNode | React.ReactNode[]
	title: string
	pageDescription: string
	imageUrl?: string
}

export default function ScanningLayout({
	children,
	imageUrl = "https://res.cloudinary.com/ljtdev/image/upload/v1678488373/WhatsApp_Image_2023-03-10_at_17.45.20_xdibu7.jpg",
	pageDescription,
	title,
}: Props) {
	return (
		<>
			<Head>
				<title>{title}</title>

				<meta name='description' content={pageDescription} />

				<meta name='og:title' content={title} />
				<meta name='og:description' content={pageDescription} />

				{imageUrl && <meta name='og:image' content={imageUrl} />}
			</Head>
			<Grid height='100vh' placeContent='center'>
				{children}
			</Grid>
		</>
	)
}
