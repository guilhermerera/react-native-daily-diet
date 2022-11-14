import { Container, Title, PlusIcon } from "./styles";

type ButtonRootProps = {
	title: string;
	children: React.ReactNode;
};

function ButtonRoot(props: ButtonRootProps) {
	const { title, children } = props;
	return (
		<Container activeOpacity={0.85}>
			{/* Icon Components if any */}
			{children}
			<Title>{title}</Title>
		</Container>
	);
}

// Icon Components:
function ButtonPlusIcon() {
	return <PlusIcon />;
}

export const Button = {
	Root: ButtonRoot,
	PlusIcon: ButtonPlusIcon
};
