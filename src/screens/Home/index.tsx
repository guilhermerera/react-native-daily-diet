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
import MealListBody, { MealListData } from "../../components/MealListBody";

export default function Home() {
	const dataObj: MealListData[] = [
		{
			title: "12.08.22",
			data: [
				{ title: "Pão de Queijo", time: "8:00", diet: false },
				{ title: "Salada", time: "13:00", diet: true },
				{ title: "Lanche", time: "17:30", diet: true }
			]
		}
	];

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
					<MealListBody data={dataObj} />
				</MealListSection>
			</BodyContent>
		</Container>
	);
}
