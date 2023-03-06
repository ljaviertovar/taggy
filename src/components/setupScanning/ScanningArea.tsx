import { Center, Text, VStack, useMediaQuery, Flex, Container } from "@chakra-ui/react"
import { TaggyDropzone } from "../ui"

export default function ScanningArea() {
	return (
		<VStack gap={6}>
			<Center>
				<TaggyDropzone actionUrl={`${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/image/upload`} />
			</Center>

			<Container mt={8} maxW='container.sm'>
				Optimize your Instagram posts easily. Just upload your image and let us automatically detect and classify
				keywords. Then, we translate the detected keywords into trending hashtags, captions, and quotes. Save time and
				improve the visibility of your posts.
			</Container>
		</VStack>
	)
}
