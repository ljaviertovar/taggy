import { Center } from "@chakra-ui/react"
import { MainLayout } from "@/components/layouts"
import { ScanningResult } from "@/components/scanningResult"
import { ScanningArea, ScanningLoading, UploadingLoading } from "@/components/setupScanning"

import { useDropzoneStore } from "../store/dropzoneStore"

import { ImageStatus } from "@/types.d"

export default function HomePage() {
	const imageStatus = useDropzoneStore(state => state.imageStatus)

	return (
		<>
			<MainLayout title={""} pageDescription={""}>
				<Center>
					{imageStatus === ImageStatus.READY && <ScanningArea />}
					{imageStatus === ImageStatus.UPLOADING && <UploadingLoading />}
					{imageStatus === ImageStatus.SCANNING && <ScanningLoading />}
					{imageStatus === ImageStatus.DONE && <ScanningResult />}
					{imageStatus === ImageStatus.ERROR && <span>Ups!</span>}
				</Center>
			</MainLayout>
		</>
	)
}
