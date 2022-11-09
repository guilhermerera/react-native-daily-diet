import { Container, MainHeader, Logo, ProfilePic } from "./styles";
import LogoImg from "../../assets/images/Logo.png";

export default function Home() {
	return (
		<Container>
			<MainHeader>
				<Logo source={LogoImg} />
				<ProfilePic
					source={{ uri: "https://xsgames.co/randomusers/avatar.php?g=pixel" }}
				/>
			</MainHeader>
		</Container>
	);
}
