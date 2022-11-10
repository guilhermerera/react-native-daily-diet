import { Container, MainHeader, Logo, ProfilePic, BodyContent } from "./styles";

import Card from "../../components/Card";

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
			<BodyContent>
				<Card title='90,86%' description='das refeições dentro da dieta' />
			</BodyContent>
		</Container>
	);
}
