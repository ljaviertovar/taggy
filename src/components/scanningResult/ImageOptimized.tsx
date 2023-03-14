import { useState } from "react"
import { buildUrl } from "cloudinary-build-url"
import { saveAs } from "file-saver"
import { AspectRatio, Box, Button, Flex, Grid, Image, useMediaQuery } from "@chakra-ui/react"

import IconTaggySquareImage from "../../assets/taggyIcons/IconTaggySquareImage"
import IconTaggyRectangle from "../../assets/taggyIcons/IconTaggyRectangle"
import IconTaggyRectangleFull from "../../assets/taggyIcons/IconTaggyRectangleFull"
import IconTaggySquareFull from "../../assets/taggyIcons/IconTaggySquareFull"
import IconTaggyDownloadImage from "../../assets/taggyIcons/IconTaggyDownloadImage"

import { useTaggyStore } from "@/store/taggyStore"
import { TaggyImageType } from "@/types.d"
import { taggyParams } from "@/services/cloudinary"

export default function ImageOptimized() {
	const [imageSelected, setImageSelected] = useState([TaggyImageType.SQUARE, TaggyImageType.SQUAREBLUR])

	console.log({ imageSelected })

	const detectionResult = useTaggyStore(state => state.detectionResult)

	const [isDesktop] = useMediaQuery("(min-width: 769px)")

	const myBuildUrl = (imageType: TaggyImageType) => {
		const imageParams = taggyParams()
		const paramValue = imageParams[imageType]

		return buildUrl(detectionResult.publicId, {
			cloud: {
				cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
			},
			transformations: {
				rawTransformation: paramValue,
			},
		})
	}

	const saveImage = () => {
		const url = myBuildUrl(imageSelected[0])
		saveAs(url, `taggy-${detectionResult.publicId}`)
	}

	return (
		<>
			<AspectRatio mb={6} ratio={[4 / 5]}>
				<Box
					bg='black'
					borderRadius={3}
					sx={{
						position: "relative",
						height: "100%",
						width: "100%",
						backgroundImage: `url(${myBuildUrl(imageSelected[1])})`,
						backgroundPosition: "center center",
						backgroundSize: "100%",
						backgroundRepeat: "no-repeat",
					}}
				>
					<Image src={myBuildUrl(imageSelected[0])} alt='My image of Instagram' />
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
						onClick={() => setImageSelected([TaggyImageType.SQUARE, TaggyImageType.SQUAREBLUR])}
					>
						<IconTaggySquareImage
							fill={imageSelected[0] === TaggyImageType.SQUARE ? "#e6e6e6" : "#4d4d4d"}
							width='30px'
						/>
					</Button>
					<Button
						variant='unstyled'
						onClick={() => setImageSelected([TaggyImageType.VERTICAL, TaggyImageType.VERTICALBLUR])}
					>
						<IconTaggyRectangle
							fill={imageSelected[0] === TaggyImageType.VERTICAL ? "#e6e6e6" : "#4d4d4d"}
							width='30px'
						/>
					</Button>
					<Button
						variant='unstyled'
						onClick={() => setImageSelected([TaggyImageType.SQUAREPAD, TaggyImageType.SQUAREBLURPAD])}
					>
						<IconTaggySquareFull
							fill={imageSelected[0] === TaggyImageType.SQUAREPAD ? "#e6e6e6" : "#4d4d4d"}
							width='30px'
						/>
					</Button>
					<Button
						variant='unstyled'
						onClick={() => setImageSelected([TaggyImageType.VERTICALPAD, TaggyImageType.VERTICALBLURPAD])}
					>
						<IconTaggyRectangleFull
							fill={imageSelected[0] === TaggyImageType.VERTICALPAD ? "#e6e6e6" : "#4d4d4d"}
							width='30px'
						/>
					</Button>
				</Grid>

				<Box mt={`${isDesktop ? "0px" : "10px"}`}>
					<Button
						variant={"unstyled"}
						_hover={{ color: "#e6e6e6" }}
						color={"textBtn.900"}
						gap={2}
						display={"flex"}
						alignItems={"center"}
						onClick={() => saveImage()}
					>
						Save Image
						<IconTaggyDownloadImage width={"30px"} color='taggyPrimary.900' />
					</Button>
				</Box>
			</Flex>
		</>
	)
}
