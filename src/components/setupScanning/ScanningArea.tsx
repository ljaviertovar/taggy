import { Center, Text, VStack, useMediaQuery, Flex, Container } from "@chakra-ui/react"
import { TaggyDropzone } from "../ui"

export default function ScanningArea() {
	return (
		<VStack gap={6}>
			<Center>
				<TaggyDropzone actionUrl={`${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/image/upload`} />
			</Center>

			<Container mt={8} maxW='container.sm'>
				<Text
					as={"h2"}
					mb={6}
					textAlign={"center"}
					bgGradient='linear(to-l, #5EAD27, #ff3385)'
					bgClip='text'
					fontSize='lg'
					fontWeight='extrabold'
				>
					Change the dimensions of your image and select trending hashtags to generate perzonalized captions and quotes!
				</Text>
				<Text textAlign={"center"} color={"textBtn.900"}>
					We detect and classify keywords. Then, we translate them into trending texts.
				</Text>
				<Text textAlign={"center"} color={"textBtn.900"}>
					Save time and improve the visibility of your posts.
				</Text>
			</Container>
		</VStack>
	)
}
