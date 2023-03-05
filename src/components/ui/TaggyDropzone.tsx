import { useRef } from "react"
import { Button, Text } from "@chakra-ui/react"
import { FaCloudUploadAlt } from "react-icons/fa"

import useDropzone from "@/hooks/useDropzone"

import styles from "@/styles/dropzone.module.css"

interface Props {
	actionUrl: string
}

export default function TaggyDropzone({ actionUrl }: Props) {
	const dropzoneRef = useRef<HTMLFormElement | null>(null)

	useDropzone(dropzoneRef)

	return (
		<form ref={dropzoneRef} action={actionUrl} className={styles.dropzoneForm}>
			<Text pointerEvents={"none"} as='b' fontSize='lg'>
				Drag here!
			</Text>
			<Text pointerEvents={"none"} as='b' fontSize='lg'>
				or
			</Text>
			<Button leftIcon={<FaCloudUploadAlt />} colorScheme='teal' variant='solid' pointerEvents={"none"}>
				Choose an Image
			</Button>
		</form>
	)
}
