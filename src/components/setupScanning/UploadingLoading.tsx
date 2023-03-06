import { Text, VStack } from "@chakra-ui/react"
import IconTaggy from "../../assets/taggyIcons/IconTaggy"

export default function UploadingLoading() {
	return (
		<VStack padding={12}>
			<IconTaggy />
			<Text>SCANNING...</Text>
		</VStack>
	)
}
