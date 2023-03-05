import { Box, Button, ButtonGroup, Image, Link } from "@chakra-ui/react"

import { useDropzoneStore } from "@/store/dropzoneStore"

export default function ImageOptimized() {
	const { images } = useDropzoneStore(state => state.detectionResult)
	const imageSelected = useDropzoneStore(state => state.imageSelected)
	const setImageSelected = useDropzoneStore(state => state.setImageSelected)

	return (
		<Box>
			<ButtonGroup variant='outline' spacing='6'>
				<Button colorScheme='blue' onClick={() => setImageSelected(images.square)}>
					size
				</Button>
				<Button onClick={() => setImageSelected(images.squarePad)}>squere</Button>
				<Button onClick={() => setImageSelected(images.vertical)}>vertical</Button>
				<Button onClick={() => setImageSelected(images.verticalPad)}>verticalpad</Button>
				<Button onClick={() => setImageSelected(images.horizontalPad)}>horizontalpad</Button>
			</ButtonGroup>
			<Image objectFit='cover' src={imageSelected} alt='Image set up' />
			<Link href={imageSelected} download target={"_blank"}>
				Save Image
			</Link>
		</Box>
	)
}
