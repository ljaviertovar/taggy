import { Center, Text, VStack, Container, List, ListItem, ListIcon } from "@chakra-ui/react"
import { TaggyDropzone } from "../ui"
import { CheckCircleIcon } from "@chakra-ui/icons"

export default function ScanningArea() {
	return (
		<VStack gap={6}>
			<Center>
				<TaggyDropzone actionUrl={`${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_URL}/image/upload`} />
			</Center>

			<Container mt={8} maxW='container.sm' px={6}>
				<Text
					as={"h2"}
					mb={12}
					textAlign={"center"}
					bgGradient='linear(to-l, #5EAD27, #ff3385)'
					bgClip='text'
					fontSize='lg'
					fontWeight='extrabold'
				>
					Save time and improve the visibility of your posts!
				</Text>

				<Text textAlign={"center"} color={"taggyText.900"} fontWeight={"bold"}>
					What can you do with Taggy?
				</Text>

				<List spacing={3} mb={"6"}>
					<ListItem>
						<ListIcon as={CheckCircleIcon} color='taggySecondary.900' />
						Download your optimized photo adapted to Instagram.
					</ListItem>
					<ListItem>
						<ListIcon as={CheckCircleIcon} color='taggySecondary.900' />
						Generate custom captions and quotes based on the content of your photo. You can add or remove hashtags and
						generate new texts.
					</ListItem>
					<ListItem>
						<ListIcon as={CheckCircleIcon} color='taggySecondary.900' />
						Copy the text with the hashtags and use them in your publication.
					</ListItem>
				</List>

				<Text textAlign={"center"} color={"taggyText.900"} fontWeight={"bold"}>
					How does it work?
				</Text>
				<Text color={"taggyText.900"}>
					We detect and classify the keywords of your photo. Then, we translate them into trending texts.
				</Text>
			</Container>
		</VStack>
	)
}
