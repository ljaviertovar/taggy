import { Center } from "@chakra-ui/react"
import IconTaggyLogo from "../../assets/taggyIcons/IconTaggyLogo"
import { IconTaggySlogan } from "@/assets/taggyIcons"
import { useTaggyStore } from "@/store/taggyStore"
import { ImageStatus } from "@/types.d"

export default function Header() {
	const imageStatus = useTaggyStore(state => state.imageStatus)
	const setInitialState = useTaggyStore(state => state.setInitialState)

	return (
		<Center as={"header"} mt={6} mb={8}>
			{imageStatus === ImageStatus.READY ? (
				<IconTaggySlogan width={"280px"} />
			) : (
				<IconTaggyLogo width={"180px"} cursor={"pointer"} onClick={() => setInitialState()} />
			)}
		</Center>
	)
}
