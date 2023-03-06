import { Center } from "@chakra-ui/react"
import { MainLayout, ScanningLayout } from "@/components/layouts"
import { ScanningResult } from "@/components/scanningResult"
import { ScanningArea, ScanningLoading, UploadingLoading } from "@/components/setupScanning"

import { useTaggyStore } from "../store/taggyStore"

import { ImageStatus } from "@/types.d"

export default function HomePage() {
	const imageStatus = useTaggyStore(state => state.imageStatus)

	return (
		<>
			{imageStatus === ImageStatus.READY || imageStatus === ImageStatus.DONE ? (
				<MainLayout title={"Taggy"} pageDescription={""}>
					<Center>
						{imageStatus === ImageStatus.READY && <ScanningArea />}
						{imageStatus === ImageStatus.DONE && <ScanningResult />}
					</Center>
				</MainLayout>
			) : (
				<ScanningLayout title={"Taggy"} pageDescription={""}>
					{imageStatus === ImageStatus.UPLOADING && <UploadingLoading />}
					{imageStatus === ImageStatus.SCANNING && <ScanningLoading />}
					{imageStatus === ImageStatus.ERROR && <span>Ups!</span>}
				</ScanningLayout>
			)}
		</>
	)
}
