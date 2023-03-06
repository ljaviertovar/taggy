import { Button, Center, Box, Flex, useMediaQuery, Link } from "@chakra-ui/react"
import IconTaggyCloudinary from "../../assets/taggyIcons/IconTaggyCloudinary"
import IconTaggyMidudev from "../../assets/taggyIcons/IconTaggyMidudev"
import IconTaggyGithub from "../../assets/taggyIcons/IconTaggyGithub"

export default function Footer() {
	const [isDesktop] = useMediaQuery("(min-width: 769px)")
	return (
		<Center as={"footer"} width={"80%"} maxW={"1200px"} margin={"auto"} mb={8}>
			<Flex
				justifyContent={"space-between"}
				w={"100%"}
				flexDirection={`${isDesktop ? "inherit" : "column-reverse"}`}
				alignItems={`${isDesktop ? "end" : "center"}`}
			>
				<Box fontSize={`${isDesktop ? "sm" : "sm"}`} color='textBtn.900'>
					<Flex flexDirection={`${isDesktop ? "inherit" : "column"}`} gap={1}>
						<Flex justifyContent={`${isDesktop ? "inherit" : "center"}`} alignItems={`${isDesktop ? "end" : "center"}`}>
							Hackathon organized by:
						</Flex>
						<Flex mt={`${isDesktop ? "0" : "2"}`} alignItems={`${isDesktop ? "end" : "center"}`} gap={1}>
							<Link href='https://cloudinary.com/' target='_blank'>
								<IconTaggyCloudinary height={"22px"} />
							</Link>
							and
							<Link href='https://midu.dev/' target='_blank'>
								<IconTaggyMidudev height={"22px"} />
							</Link>
						</Flex>
					</Flex>
				</Box>
				<Link
					href='https://github.com/ljaviertovar/taggy'
					target='_blank'
					variant={"outline"}
					size={"sm"}
					my={`${isDesktop ? "0" : "4"}`}
					gap={2}
					display={"flex"}
				>
					<IconTaggyGithub width={"20px"} />
					Star on Github
				</Link>
			</Flex>
		</Center>
	)
}
