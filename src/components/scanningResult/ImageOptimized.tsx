import { Box, Button, Center, Flex, Image, Link, useMediaQuery } from "@chakra-ui/react"
import IconTaggySquareImage from "../../assets/taggyIcons/IconTaggySquareImage"
import IconTaggyRectangle from "../../assets/taggyIcons/IconTaggyRectangle"
import IconTaggySquareImageHorizontal from "../../assets/taggyIcons/IconTaggySquareImageHorizontal"
import IconTaggySquareImageVertical from "../../assets/taggyIcons/IconTaggySquareImageVertical"
import IconTaggyDownloadImage from "../../assets/taggyIcons/IconTaggyDownloadImage"

import { useTaggyStore } from "@/store/taggyStore"

export default function ImageOptimized() {
	const { images } = useTaggyStore(state => state.detectionResult)
	const imageSelected = useTaggyStore(state => state.imageSelected)
	const setImageSelected = useTaggyStore(state => state.setImageSelected)

	const [isDesktop] = useMediaQuery("(min-width: 769px)")

	return (
		<>
			<Box padding={1} bg='taggyGray.500' borderRadius={3} mb={6}>
				<Image objectFit='cover' src={imageSelected} alt='Image set up' />
			</Box>
			<Flex
				justifyContent={"space-between"}
				mb={6}
				alignItems={"center"}
				flexDirection={`${isDesktop ? "inherit" : "column"}`}
			>
				<Flex gap={6} justifyContent='center'>
					<Button variant={"unstyled"} width={"30px"} height={"30px"} onClick={() => setImageSelected(images.square)}>
						<IconTaggySquareImage fill={`${imageSelected === images.square ? "#e6e6e6" : "#4d4d4d"}`} width={"30px"} />
					</Button>
					<Button
						variant={"unstyled"}
						width={"30px"}
						height={"30px"}
						onClick={() => setImageSelected(images.squarePad)}
					>
						<IconTaggySquareImageVertical
							fill={`${imageSelected === images.squarePad ? "#e6e6e6" : "#4d4d4d"}`}
							width={"30px"}
						/>
					</Button>
					<Button variant={"unstyled"} width={"30px"} height={"30px"} onClick={() => setImageSelected(images.vertical)}>
						<IconTaggyRectangle fill={`${imageSelected === images.vertical ? "#e6e6e6" : "#4d4d4d"}`} width={"30px"} />
					</Button>
					<Button
						variant={"unstyled"}
						width={"30px"}
						height={"30px"}
						onClick={() => setImageSelected(images.verticalPad)}
					>
						<IconTaggySquareImageHorizontal
							fill={`${imageSelected === images.verticalPad ? "#e6e6e6" : "#4d4d4d"}`}
							width={"30px"}
						/>
					</Button>
					{/* <Button
						variant={"unstyled"}
						width={"30px"}
						height={"30px"}
						onClick={() => setImageSelected(images.horizontalPad)}
					>
						<IconTaggySquareImageVertical
							fill={`${imageSelected === images.horizontalPad ? "#e6e6e6" : "#4d4d4d"}`}
							width={"30px"}
						/>
					</Button> */}
				</Flex>
				<Box mt={`${isDesktop ? "0px" : "10px"}`}>
					<Link
						href={imageSelected}
						download
						target={"_blank"}
						color={"textBtn.900"}
						_hover={{ color: "#e6e6e6", textDecoration: "none" }}
					>
						<Flex>
							<Center>
								Save Image&nbsp;&nbsp;
								<IconTaggyDownloadImage width={"30px"} color='taggyPrimary.900' />
							</Center>
						</Flex>
					</Link>
				</Box>
			</Flex>
		</>
	)
}
