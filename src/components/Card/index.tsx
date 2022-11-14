import { ReactNode } from "react";
import {
	Container,
	Title,
	Description,
	ArrowUp,
	StyledArrowLeft
} from "./styles";
import { Colors, Sizes } from "../../@types/componentTypes";
import { TouchableOpacityProps } from "react-native";

type CardRootProps = TouchableOpacityProps & {
	color?: Colors;
	size?: Sizes;
	children: ReactNode;
};

function CardRoot(props: CardRootProps) {
	const { color = "PRIMARY", size = "lg", children } = props;

	return (
		<Container activeOpacity={0.7} color={color} size={size}>
			{children}
		</Container>
	);
}

type CardTitleProps = {
	title: string;
	size?: Sizes;
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

type ArrowUpProps = {
	color?: Colors;
};

function ArrowUpIcon(props: ArrowUpProps) {
	const { color = "PRIMARY" } = props;
	return <ArrowUp color={color} />;
}

type ArrowLeftProps = {
	color?: Colors;
};

function ArrowLeftIcon(props: ArrowLeftProps) {
	const { color = "PRIMARY" } = props;
	return <StyledArrowLeft color={color} />;
}

export const Card = {
	Root: CardRoot,
	Title: CardTitle,
	Description: CardDescription,
	ArrowUpIcon: ArrowUpIcon,
	ArrowLeftIcon: ArrowLeftIcon
};
