import { MutableRefObject, useEffect } from "react"

import Dropzone from "dropzone"

import { useTaggyStore } from "@/store/taggyStore"

import { ImageStatus } from "@/types.d"

import "dropzone/dist/dropzone.css"
import { getTaggyCloudURLS, scanningAndCategorization } from "@/services/cloudinary"

export default function useDropzone(dropzoneRef: MutableRefObject<HTMLFormElement | null>) {
	const setImageStatus = useTaggyStore(state => state.setImageStatus)
	const setImageSelected = useTaggyStore(state => state.setImageSelected)
	const setDetectionResult = useTaggyStore(state => state.setDetectionResult)

	useEffect(() => {
		if (!dropzoneRef?.current?.dropzone) {
			const dropzone = new Dropzone(dropzoneRef?.current as HTMLFormElement, {
				uploadMultiple: false,
				acceptedFiles: ".jpg, .jpeg, .png, .webp",
				maxFiles: 1,
			})

			dropzone.on("sending", (_file, _xhr, formData) => {
				setImageStatus(ImageStatus.UPLOADING)

				formData.append("upload_preset", process.env.NEXT_PUBLIC_PRESET as string)
				formData.append("timestamp", (Date.now() / 1000).toString())
				formData.append("api_key", process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY as string)
			})

			dropzone.on("success", (_file, response: { public_id: string; secure_url: string }) => {
				setImageStatus(ImageStatus.SCANNING)

				scanningAndCategorization(response.secure_url)
					.then(resp => {
						const images = getTaggyCloudURLS(response.secure_url, response.public_id)
						setDetectionResult({ images, categoryTags: resp })
						setImageStatus(ImageStatus.DONE)
					})
					.catch(err => {
						console.log(err)
						setImageStatus(ImageStatus.ERROR)
					})
			})

			dropzone.on("error", (_file, response) => {
				console.log("ERROR", response)
				setImageStatus(ImageStatus.ERROR)
			})
		}
	}, [dropzoneRef, setImageStatus, setDetectionResult, setImageSelected])
}
