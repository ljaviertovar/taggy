import { MutableRefObject, useEffect } from "react"

import Dropzone from "dropzone"

import { useDropzoneStore } from "@/store/dropzoneStore"

import { ImageStatus, TaggyImages } from "@/types.d"

import "dropzone/dist/dropzone.css"
import { scanningAndCategorization } from "@/services/cloudinary"

export default function useDropzone(dropzoneRef: MutableRefObject<HTMLFormElement | null>) {
	const setImageStatus = useDropzoneStore(state => state.setImageStatus)
	const setImageSelected = useDropzoneStore(state => state.setImageSelected)
	const setDetectionResult = useDropzoneStore(state => state.setDetectionResult)

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
						console.log(resp)

						const images: TaggyImages = {
							original: response.secure_url,
							square: `${process.env.NEXT_PUBLIC_CLOUDINARY_IMAGE_RES_URL}/q_auto:best,f_auto,w_1080,h_1080,c_fill,ar_1:1/${response.public_id}`,
							squarePad: `${process.env.NEXT_PUBLIC_CLOUDINARY_IMAGE_RES_URL}/q_auto:best,f_auto,w_1080,h_1080,c_pad,b_auto:predominant,ar_1:1/${response.public_id}`,
							vertical: `${process.env.NEXT_PUBLIC_CLOUDINARY_IMAGE_RES_URL}/q_auto:best,f_auto,w_1080,h_1350,c_fill,ar_4:5/${response.public_id}`,
							verticalPad: `${process.env.NEXT_PUBLIC_CLOUDINARY_IMAGE_RES_URL}/q_auto:best,f_auto,w_1080,h_1350,c_pad,b_auto:predominant,ar_4:5/${response.public_id}`,
							horizontal: `${process.env.NEXT_PUBLIC_CLOUDINARY_IMAGE_RES_URL}/q_auto:best,f_auto,w_1200,h_628,c_fill,ar_1.91/${response.public_id}`,
							horizontalPad: `${process.env.NEXT_PUBLIC_CLOUDINARY_IMAGE_RES_URL}/q_auto:best,f_auto,w_1200,h_628,c_pad,b_auto:predominant,ar_1.91/${response.public_id}`,
						}

						setDetectionResult({ images, categoryTags: resp })
						setImageSelected(images.square)
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
