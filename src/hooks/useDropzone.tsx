import { MutableRefObject, useEffect } from "react"

import Dropzone from "dropzone"

import { useTaggyStore } from "@/store/taggyStore"

import { ImageStatus } from "@/types.d"

import "dropzone/dist/dropzone.css"
import { scanningAndCategorization } from "@/services/cloudinary"

export default function useDropzone(dropzoneRef: MutableRefObject<HTMLFormElement | null>) {
	const setImageStatus = useTaggyStore(state => state.setImageStatus)
	const setDetectionResult = useTaggyStore(state => state.setDetectionResult)

	useEffect(() => {
		if (!dropzoneRef?.current?.dropzone) {
			const dropzone = new Dropzone(dropzoneRef?.current as HTMLFormElement, {
				url: "/",
				method: "POST",
				uploadMultiple: false,
				// acceptedFiles: ".jpg, .jpeg, .png, .webp",
				acceptedFiles: "image/*",
				maxFiles: 1,
			})

			dropzone.on("sending", (file, _xhr, formData) => {
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
			})

			dropzone.on("error", (_file, response) => {
				console.log("ERROR", response)
				setImageStatus(ImageStatus.ERROR)
			})
		}
	}, [dropzoneRef, setImageStatus, setDetectionResult])
}
