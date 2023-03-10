import { AspectRatio, Box, Button, Flex, Grid, Image, Link, useMediaQuery } from "@chakra-ui/react"
import IconTaggySquareImage from "../../assets/taggyIcons/IconTaggySquareImage"
import IconTaggyRectangle from "../../assets/taggyIcons/IconTaggyRectangle"
import IconTaggyRectangleFull from "../../assets/taggyIcons/IconTaggyRectangleFull"
import IconTaggySquareFull from "../../assets/taggyIcons/IconTaggySquareFull"
import IconTaggyDownloadImage from "../../assets/taggyIcons/IconTaggyDownloadImage"

import { useTaggyStore } from "@/store/taggyStore"
import { useMemo, useState } from "react"
import { TaggyImageType } from "@/types.d"

export default function ImageOptimized() {
	const { images } = useTaggyStore(state => state.detectionResult)

	const [imageSelected, setImageSelected] = useState({
		type: TaggyImageType.SQUARE,
		src: images.SQUARE,
		fallback: images.SQUAREBLUR,
	})

	const [isDesktop] = useMediaQuery("(min-width: 769px)")

	// const taggyImageSelected = useMemo(() => {
	// 	const imageMap = {
	// 		SQUARE: { src: images.SQUARE, fallbackSrc: images.SQUAREBLUR },
	// 		SQUAREPAD: { src: images.SQUAREPAD, fallbackSrc: images.SQUAREBLURPAD },
	// 		VERTICAL: { src: images.VERTICAL, fallbackSrc: images.VERTICALBLUR },
	// 		VERTICALPAD: { src: images.VERTICALPAD, fallbackSrc: images.VERTICALBLURPAD },
	// 	}

	// 	const selectedImage = imageMap[imageSelected]

	// 	if (!selectedImage) {
	// 		return null
	// 	}

	// 	return selectedImage
	// }, [imageSelected, images])

	// const getImageSelected = (image: TaggyImageType) => {

	// }

	const setSelected = (type: TaggyImageType, src: string, fallback: string) => {
		setImageSelected({
			type,
			src,
			fallback,
		})
	}

	console.log({ imageSelected })

	return (
		<>
			<AspectRatio mb={6} ratio={[4 / 5]}>
				<Box padding={1} bg='black' borderRadius={3}>
					<Image src={imageSelected.src} alt='My image of Instagram' fallbackSrc={imageSelected.fallback} />
				</Box>
			</AspectRatio>

			<Flex
				justifyContent={"space-between"}
				mb={6}
				alignItems={"center"}
				flexDirection={`${isDesktop ? "inherit" : "column"}`}
			>
				<Grid templateColumns='repeat(4, 30px)' gap={6}>
					<Button
						variant='unstyled'
						onClick={() => setSelected(TaggyImageType.SQUARE, images.SQUARE, images.SQUAREBLUR)}
					>
						<IconTaggySquareImage
							fill={imageSelected.type === TaggyImageType.SQUARE ? "#e6e6e6" : "#4d4d4d"}
							width='30px'
						/>
					</Button>
					<Button
						variant='unstyled'
						onClick={() => setSelected(TaggyImageType.SQUAREPAD, images.SQUAREPAD, images.SQUAREBLURPAD)}
					>
						<IconTaggySquareFull
							fill={imageSelected.type === TaggyImageType.SQUAREPAD ? "#e6e6e6" : "#4d4d4d"}
							width='30px'
						/>
					</Button>
					<Button
						variant='unstyled'
						onClick={() => setSelected(TaggyImageType.VERTICAL, images.VERTICAL, images.VERTICALBLUR)}
					>
						<IconTaggyRectangle
							fill={imageSelected.type === TaggyImageType.VERTICAL ? "#e6e6e6" : "#4d4d4d"}
							width='30px'
						/>
					</Button>
					<Button
						variant='unstyled'
						onClick={() => setSelected(TaggyImageType.VERTICALPAD, images.VERTICALPAD, images.VERTICALBLURPAD)}
					>
						<IconTaggyRectangleFull
							fill={imageSelected.type === TaggyImageType.VERTICALPAD ? "#e6e6e6" : "#4d4d4d"}
							width='30px'
						/>
					</Button>
				</Grid>

				<Box mt={`${isDesktop ? "0px" : "10px"}`}>
					<Link
						href={imageSelected.src}
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
