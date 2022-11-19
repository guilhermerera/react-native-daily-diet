import { Text } from "react-native";
import {
	Container,
	SectionHeader,
	CardWrapper,
	CardTimeStamp,
	CardTitle,
	CardDot
} from "./styles";

type MealListItemData = {
	title: string;
	time: string;
	diet: boolean;
};

export type MealListData = {
	title: string;
	data: MealListItemData[];
};

type MealListBodyProps = {
	data: MealListData[];
};

export default function MealListBody(props: MealListBodyProps) {
	const { data } = props;
	return (
		<Container
			sections={data}
			keyExtractor={(item: any, index) => item + index}
			renderItem={({ item }: any) => (
				<CardWrapper>
					<CardTimeStamp>{item.time}</CardTimeStamp>
					<CardTitle>{item.title} </CardTitle>
					<CardDot isOnDiet={item.diet} />
				</CardWrapper>
			)}
			renderSectionHeader={({ section: { title } }: any) => (
				<SectionHeader>{title}</SectionHeader>
			)}
		/>
	);
}
