import { AspectRatio, Box, Button, Flex, Grid, Image, Link, useMediaQuery } from "@chakra-ui/react"
import IconTaggySquareImage from "../../assets/taggyIcons/IconTaggySquareImage"
import IconTaggyRectangle from "../../assets/taggyIcons/IconTaggyRectangle"
import IconTaggyRectangleFull from "../../assets/taggyIcons/IconTaggyRectangleFull"
import IconTaggySquareFull from "../../assets/taggyIcons/IconTaggySquareFull"
import IconTaggyDownloadImage from "../../assets/taggyIcons/IconTaggyDownloadImage"

import { useTaggyStore } from "@/store/taggyStore"
import { useMemo } from "react"
import { TaggyImageType } from "@/types.d"

export default function ImageOptimized() {
	const { images } = useTaggyStore(state => state.detectionResult)
	const imageSelected = useTaggyStore(state => state.imageSelected)
	const setImageSelected = useTaggyStore(state => state.setImageSelected)

	const [isDesktop] = useMediaQuery("(min-width: 769px)")

	const taggyImageSelected = useMemo(() => {
		const imageMap = {
			SQUARE: { src: images.SQUARE, fallbackSrc: images.SQUAREBLUR },
			SQUAREPAD: { src: images.SQUAREPAD, fallbackSrc: images.SQUAREBLURPAD },
			VERTICAL: { src: images.VERTICAL, fallbackSrc: images.VERTICALBLUR },
			VERTICALPAD: { src: images.VERTICALPAD, fallbackSrc: images.VERTICALBLURPAD },
		}

		const selectedImage = imageMap[imageSelected as keyof typeof imageMap]

		if (!selectedImage) {
			return null
		}

		return selectedImage
	}, [imageSelected, images])

	return (
		<>
			<AspectRatio mb={6} ratio={[4 / 5]}>
				<Box padding={1} bg='black' borderRadius={3}>
					<Image
						src={taggyImageSelected?.src}
						alt='My image of Instagram'
						fallbackSrc={taggyImageSelected?.fallbackSrc}
					/>
				</Box>
			</AspectRatio>

			<Flex
				justifyContent={"space-between"}
				mb={6}
				alignItems={"center"}
				flexDirection={`${isDesktop ? "inherit" : "column"}`}
			>
				<Grid templateColumns='repeat(4, 30px)' gap={6}>
					<Button variant='unstyled' onClick={() => setImageSelected(TaggyImageType.SQUARE)}>
						<IconTaggySquareImage fill={imageSelected === TaggyImageType.SQUARE ? "#e6e6e6" : "#4d4d4d"} width='30px' />
					</Button>
					<Button variant='unstyled' onClick={() => setImageSelected(TaggyImageType.SQUAREPAD)}>
						<IconTaggySquareFull
							fill={imageSelected === TaggyImageType.SQUAREPAD ? "#e6e6e6" : "#4d4d4d"}
							width='30px'
						/>
					</Button>
					<Button variant='unstyled' onClick={() => setImageSelected(TaggyImageType.VERTICAL)}>
						<IconTaggyRectangle fill={imageSelected === TaggyImageType.VERTICAL ? "#e6e6e6" : "#4d4d4d"} width='30px' />
					</Button>
					<Button variant='unstyled' onClick={() => setImageSelected(TaggyImageType.VERTICALPAD)}>
						<IconTaggyRectangleFull
							fill={imageSelected === TaggyImageType.VERTICALPAD ? "#e6e6e6" : "#4d4d4d"}
							width='30px'
						/>
					</Button>
				</Grid>

				<Box mt={`${isDesktop ? "0px" : "10px"}`}>
					<Link
						href={images[imageSelected]}
						download
						target='_blank'
						color={"textBtn.900"}
						_hover={{ color: "#e6e6e6", textDecoration: "none" }}
					>
						<Flex alignItems={"center"} gap={2}>
							Save Image
							<IconTaggyDownloadImage width={"30px"} color='taggyPrimary.900' />
						</Flex>
					</Link>
				</Box>
			</Flex>
		</>
	)
}
