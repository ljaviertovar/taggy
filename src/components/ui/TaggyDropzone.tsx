import { Text, Center, useMediaQuery } from "@chakra-ui/react"
import useTaggyDropzone from "@/hooks/useTaggyDropzone"
import styles from "@/styles/dropzone.module.css"
import animations from "@/styles/animations.module.css"
import IconTaggyAddImage from "../../assets/taggyIcons/IconTaggyAddImage"
import IconTaggyTriangle from "../../assets/taggyIcons/IconTaggyTriangle"

export default function TaggyDropzone() {
	const { getRootProps, getInputProps, isDragActive, isDragReject, isFileTooLarge } = useTaggyDropzone()

	const [isDesktop] = useMediaQuery("(min-width: 769px)")

	return (
		<Center w={`${isDesktop ? "420px" : "320px"}`} h={`${isDesktop ? "420px" : "320px"}`}>
			<div className={animations.gradientBorder}></div>
			<IconTaggyTriangle />
			<div {...getRootProps()} className={styles.dropzoneForm}>
				<IconTaggyAddImage width='60px' />
				<input {...getInputProps()} />
				<Text
					className={animations.scaleElement}
					as='b'
					fontSize={`${isDesktop ? "lg" : "md"}`}
					maxW={"160px"}
					textAlign={"center"}
					pointerEvents={"none"}
				>
					{!isDragActive && "Drop your photo here or tap to upload"}
					{isDragActive && !isDragReject && "Drop it like it's hot!"}
					{isDragReject && "File type not accepted, sorry!"}
					{isFileTooLarge && "File is too large"}
				</Text>
			</div>
		</Center>
	)
}
