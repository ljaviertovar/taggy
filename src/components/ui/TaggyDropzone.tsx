import { useRef } from "react"
import { Button, Text, Center, useMediaQuery } from "@chakra-ui/react"
import { FaCloudUploadAlt } from "react-icons/fa"

import useDropzone from "@/hooks/useDropzone"

import styles from "@/styles/dropzone.module.css"
import animations from "@/styles/animations.module.css"
import IconTaggyAddImage from "../../assets/taggyIcons/IconTaggyAddImage"

import TriangleBackground from "../../assets/taggyIcons/triangle.svg"

interface Props {
	actionUrl: string
}

export default function TaggyDropzone({ actionUrl }: Props) {
	const dropzoneRef = useRef<HTMLFormElement | null>(null)
	const [isDesktop] = useMediaQuery("(min-width: 769px)")

	useDropzone(dropzoneRef)

	return (
		<Center
			backgroundImage={`url(${TriangleBackground.src})`}
			backgroundRepeat={"no-repeat"}
			backgroundPosition={"center"}
			backgroundSize={"contain"}
			w={`${isDesktop ? "420px" : "320px"}`}
			h={`${isDesktop ? "420px" : "320px"}`}
		>
			<form ref={dropzoneRef} action={actionUrl} className={styles.dropzoneForm}>
				<Button variant='unstyled' pointerEvents={"none"} w={"60px"} h={"60px"} mt={10}>
					<IconTaggyAddImage width='60px' />
				</Button>
				<Text
					className={animations.scaleElement}
					as='b'
					fontSize={`${isDesktop ? "lg" : "md"}`}
					maxW={"160px"}
					textAlign={"center"}
					pointerEvents={"none"}
				>
					Drag and drop your photo here or tap to upload.
				</Text>
			</form>
		</Center>
	)
}
