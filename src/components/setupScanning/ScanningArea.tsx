import { Card, CardBody, CardHeader, Heading } from "@chakra-ui/react"
import { TaggyDropzone } from "../ui"

export default function ScanningArea() {
	return (
		<Card>
			<CardHeader>
				<Heading as='h2' size='xl' marginBottom={0}>
					Upload your image
				</Heading>
			</CardHeader>
			<CardBody>
				<TaggyDropzone actionUrl={`${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/image/upload`} />
			</CardBody>
		</Card>
	)
}
