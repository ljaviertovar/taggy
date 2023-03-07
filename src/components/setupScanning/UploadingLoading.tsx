import { Text, VStack } from "@chakra-ui/react"
import IconTaggy from "../../assets/taggyIcons/IconTaggy"

import animations from "@/styles/animations.module.css"

export default function UploadingLoading() {
	return (
		<VStack padding={12}>
			<IconTaggy className={animations.iconLoading}  width={'150px'}/>
			<Text fontSize={22} textAlign={'center'}>Uploading your image, please wait a few seconds 🙌</Text>
		</VStack>
	)
}
