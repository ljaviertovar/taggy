import { Center, Link, Text } from "@chakra-ui/react"

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
			<Text>Made with 💚 by&nbsp;</Text>
			<Link href='https://www.linkedin.com/in/ljaviertovar/' target='_blank' rel='nofollow'>
				L Javier Tovar
			</Link>
			&nbsp;and&nbsp;
			<Link href='https://www.instagram.com/asgaredmc/' target='_blank' rel='nofollow'>
				Alejandro Mendiola
			</Link>
		</Center>
	)
}
