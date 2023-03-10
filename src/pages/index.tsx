import { memo } from "react"
import { MainLayout, ScanningLayout } from "@/components/layouts"
import { ScanningResult } from "@/components/scanningResult"
import { ScanningArea, ScanningLoading, UploadingLoading, TaggyError } from "@/components/setupScanning"

import { useTaggyStore } from "@/store/taggyStore"

import { ImageStatus } from "@/types.d"

function HomePage() {
	const imageStatus = useTaggyStore(state => state.imageStatus)

	const renderContent = () => {
		switch (imageStatus) {
			case ImageStatus.READY:
				return <ScanningArea />
			case ImageStatus.DONE:
				return <ScanningResult />
			case ImageStatus.UPLOADING:
				return <UploadingLoading />
			case ImageStatus.SCANNING:
				return <ScanningLoading />
			case ImageStatus.ERROR:
				return <TaggyError />
			default:
				return null
		}
	}

	return (
		<>
			{imageStatus === ImageStatus.READY || imageStatus === ImageStatus.DONE ? (
				<MainLayout
					title={"Taggy"}
					pageDescription={
						"Easily find the right words and relevant hashtags for your social media posts with Taggy and increase the visibility of your content."
					}
				>
					{renderContent()}
				</MainLayout>
			) : (
				<ScanningLayout
					title={"Taggy"}
					pageDescription={
						"Easily find the right words and relevant hashtags for your social media posts with Taggy and increase the visibility of your content."
					}
				>
					{renderContent()}
				</ScanningLayout>
			)}
		</>
	)
}

export default memo(HomePage)
