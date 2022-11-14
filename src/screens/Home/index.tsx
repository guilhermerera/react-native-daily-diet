import {
	Container,
	MainHeader,
	Logo,
	ProfilePic,
	BodyContent,
	MealListSection,
	MealListHeader,
	MealListHeaderTitle
} from "./styles";

import { Card } from "../../components/Card";
import { Button } from "../../components/Button";

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
				<Card.Root>
					<Card.Title title='90,86%' />
					<Card.Description description='das refeições dentro da dieta' />
					<Card.ArrowUpIcon />
				</Card.Root>
				<MealListSection>
					<MealListHeader>
						<MealListHeaderTitle>Refeições</MealListHeaderTitle>
						<Button.Root title='Nova refeição'>
							<Button.PlusIcon />
						</Button.Root>
					</MealListHeader>
				</MealListSection>
			</BodyContent>
		</Container>
	);
}
