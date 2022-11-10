import {
	Container,
	Title,
	Description,
	ContainerColors,
	ContainerSize
} from "./styles";

type CardProps = {
	title: string;
	description: string;
	color?: ContainerColors;
	size?: ContainerSize;
};

export default function Card(props: CardProps) {
	const { title, description, color = "PRIMARY", size = "lg" } = props;

	return (
		<Container color={color} size={size}>
			<Title size={size}>{title}</Title>
			<Description>{description}</Description>
		</Container>
	);
}
