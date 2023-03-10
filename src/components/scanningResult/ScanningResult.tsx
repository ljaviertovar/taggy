import {
	Card,
	CardBody,
	CardHeader,
	Heading,
	SimpleGrid,
	Center,
	Button,
	VStack,
	Flex,
	useMediaQuery,
} from "@chakra-ui/react"
import { ImageOptimized, TaggyList, TaggyTabs } from "./"
import { useTaggyStore } from "../../store/taggyStore"
import IconTaggyNewImage from "../../assets/taggyIcons/IconTaggyNewImage"

export default function ScanningResult() {
	const setInitialState = useTaggyStore(state => state.setInitialState)

	const [isDesktop] = useMediaQuery("(min-width: 769px)")

	return (
		<VStack gap={6}>
			<Flex gap={12} flexDirection={`${isDesktop ? "row" : "column"}`}>
				<Card
					padding={6}
					bgGradient='linear(taggyCardBg.900 0%, taggyCardBg.900 30%, taggyGray.900 70%)'
					boxShadow={"none"}
				>
					<CardBody padding={0}>
						<ImageOptimized />
						<TaggyTabs />
					</CardBody>
				</Card>

				<Card
					padding={6}
					bgGradient='linear(taggyCardBg.900 0%, taggyCardBg.900 30%, taggyGray.900 70%)'
					boxShadow={"none"}
				>
					<CardHeader padding={0}>
						<Heading as='h3' size='md' textTransform={"uppercase"} textAlign={"center"} color='taggyPrimary.900'>
							Suggested Hashtags
						</Heading>
					</CardHeader>
					<CardBody padding={0}>
						<TaggyList />
					</CardBody>
				</Card>
			</Flex>
			<Center>
				<Button
					bg='taggyTertiary.900'
					_hover={{ bg: "#3385ff" }}
					textTransform={"uppercase"}
					gap={2}
					onClick={() => setInitialState()}
				>
					New image <IconTaggyNewImage width={"30px"} />
				</Button>
			</Center>
		</VStack>
	)
}
