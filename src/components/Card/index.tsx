import { ReactNode } from "react";
import {
	Container,
	Title,
	Description,
	ContainerColors,
	ContainerSize
} from "./styles";

type CardRootProps = {
	color?: ContainerColors;
	size?: ContainerSize;
	children: ReactNode;
};

function CardRoot(props: CardRootProps) {
	const { color = "PRIMARY", size = "lg", children } = props;

	return (
		<Container color={color} size={size}>
			{children}
		</Container>
	);
}

type CardTitleProps = {
	title: string;
	size?: ContainerSize;
};

function CardTitle(props: CardTitleProps) {
	const { size = "lg", title } = props;
	return <Title size={size}>{title}</Title>;
}

type CardDescriptionProps = {
	description: string;
};

function CardDescription(props: CardDescriptionProps) {
	const { description } = props;
	return <Description>{description}</Description>;
}

export const Card = {
	Root: CardRoot,
	Title: CardTitle,
	Description: CardDescription
};
