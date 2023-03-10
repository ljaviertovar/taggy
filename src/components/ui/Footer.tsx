import { Center, Flex } from "@chakra-ui/react"

export default function Footer() {
	return (
		<Center
			as={"footer"}
			width={"80%"}
			maxW={"1200px"}
			margin={"auto"}
			mb={8}
			fontSize={"sm"}
			color={"textBtn.900"}
			pt={20}
		>
			<Flex flexDir={"column"} justifyContent={"center"} alignContent={"center"} textAlign={"center"}>
				<span>Made with 💚 by</span>
				<div>
					<a href='https://www.linkedin.com/in/ljaviertovar/' target='_blank' rel='nofollow noreferrer'>
						L Javier Tovar
					</a>
					<span>&nbsp;and&nbsp;</span>
					<a href='https://www.instagram.com/asgaredmc/' target='_blank' rel='nofollow noreferrer'>
						Alejandro Mendiola
					</a>
				</div>
			</Flex>
		</Center>
	)
}
