import { Center, Text, VStack, useMediaQuery, Flex, Container } from "@chakra-ui/react"
import { TaggyDropzone } from "../ui"

export default function ScanningArea() {
	const [isDesktop] = useMediaQuery("(min-width: 769px)")
	return (
		<VStack gap={6}>
			<Center>
				<TaggyDropzone actionUrl={`${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/image/upload`} />
			</Center>

			<Container mt={8} maxW='container.sm'>
				Optimize your posts easily. Simply upload your image and let us automatically detect and categorize its
				elements. Then, we translate the detected elements into text and description, allowing you to save time and
				improve the quality of your posts.
			</Container>
		</VStack>
	)
}
