import { useCallback, useState } from "react"
import { useDropzone } from "react-dropzone"

import { useTaggyStore } from "@/store/taggyStore"
import { ImageStatus } from "@/types.d"
import { scanningAndCategorization } from "@/services/cloudinary"

type ReturnProps = {
	selectedFile: File | null
	getRootProps: () => any
	getInputProps: () => any
	isDragActive: boolean
	isDragReject: boolean
	isFileTooLarge: boolean
}

const acceptedFileTypes: any = ["image/*"]
const maxFileSize = 8388608

export default function useTaggyDropzone(): ReturnProps {
	const [selectedFile, setSelectedFile] = useState<File | null>(null)
	const [isDragActive, setIsDragActive] = useState(false)
	const [isDragReject, setIsDragReject] = useState(false)
	const [isFileTooLarge, setIsFileTooLarge] = useState(false)

	const setImageStatus = useTaggyStore(state => state.setImageStatus)
	const setDetectionResult = useTaggyStore(state => state.setDetectionResult)

	const sendFile = useCallback(
		(file: File) => {
			setImageStatus(ImageStatus.UPLOADING)

			const reader = new FileReader()

			reader.onload = function (onLoadEvent) {
				setImageStatus(ImageStatus.SCANNING)

				const imageBase64: string = onLoadEvent.target?.result as string
				scanningAndCategorization(imageBase64)
					.then(resp => {
						// console.log(resp)
						setDetectionResult({
							secureUrl: resp.secureUrl,
							publicId: resp.publicId,
							categoryTags: resp.categoryTags,
						})
						setImageStatus(ImageStatus.DONE)
					})
					.catch(err => {
						console.log(err)
						setImageStatus(ImageStatus.ERROR)
					})
			}

			reader.readAsDataURL(file)
		},
		[setDetectionResult, setImageStatus]
	)

	const onDrop = useCallback(
		(acceptedFiles: File[]) => {
			const file = acceptedFiles[0]
			if (file && file.type.startsWith("image/")) {
				setSelectedFile(file)
				setIsDragActive(false)
				setIsDragReject(false)
				setIsFileTooLarge(file.size > maxFileSize)

				sendFile(file)
			} else {
				setIsDragReject(true)
			}
		},
		[sendFile]
	)

	const onDragEnter = useCallback(() => {
		setIsDragActive(true)
	}, [])

	const onDragLeave = useCallback(() => {
		setIsDragActive(false)
	}, [])

	const onDropRejected = useCallback(() => {
		setIsDragReject(true)
	}, [])

	const { getRootProps, getInputProps } = useDropzone({
		onDrop,
		onDragEnter,
		onDragLeave,
		onDropRejected,
		accept: acceptedFileTypes,
		maxSize: maxFileSize,
		multiple: false,
	})

	return { selectedFile, getRootProps, getInputProps, isDragActive, isDragReject, isFileTooLarge }
}
