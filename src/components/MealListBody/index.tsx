import {
	Container,
	List,
	SectionHeader,
	CardWrapper,
	CardTimeStamp,
	CardDivider,
	CardTitle,
	CardDot,
	EmptyListContainer,
	Message
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
		<Container>
			<List
				ListEmptyComponent={
					<EmptyListContainer>
						<Message>
							Adicione uma Nova Refeição para começar a registrar sua dieta.
						</Message>
					</EmptyListContainer>
				}
				sections={data}
				keyExtractor={(item: any, index) => item + index}
				renderItem={({ item }: any) => (
					<CardWrapper>
						<CardTimeStamp>{item.time}</CardTimeStamp>
						<CardDivider />
						<CardTitle>{item.title} </CardTitle>
						<CardDot isOnDiet={item.diet} />
					</CardWrapper>
				)}
				renderSectionHeader={({ section: { title } }: any) => (
					<SectionHeader>{title}</SectionHeader>
				)}
			/>
		</Container>
	);
}
