import { Text, VStack } from "@chakra-ui/react"
import IconTaggy from "../../assets/taggyIcons/IconTaggy"

import animations from "@/styles/animations.module.css"

export default function ScanningLoading() {
	return (
		<VStack padding={12}>
			<Text fontSize={22} textAlign={'center'}>Ups!, something went wrong 😣, we are working 💻</Text>
		</VStack>
	)
}