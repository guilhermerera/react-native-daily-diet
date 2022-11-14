import styled, { css } from "styled-components/native";
import { Text, TouchableOpacity } from "react-native";
import { ArrowUpRight, ArrowLeft } from "phosphor-react-native";
import { Colors, Sizes } from "../../@types/componentTypes";

type ContainerProps = {
	color: Colors;
	size: Sizes;
};

export const Container = styled(TouchableOpacity)<ContainerProps>`
	position: relative;
	width: 100%;
	border-radius: 8px;
	align-items: center;

	padding: ${({ size }) => (size === "lg" ? "20px 16px" : "16px")};

	background-color: ${({ theme, color }) =>
		color === "PRIMARY"
			? theme.COLORS.GREEN_300
			: color === "SECONDARY"
			? theme.COLORS.RED_300
			: theme.COLORS.GRAY_200};
`;

type TitleProps = {
	size: Sizes;
};

export const Title = styled(Text)<TitleProps>`
	${({ theme, size }) => css`
		font-family: ${theme.FONT_FAMILY.BOLD};
		font-size: ${size === "lg" ? theme.FONT_SIZE.XXXL : theme.FONT_SIZE.XL}px;
		line-height: ${size === "lg"
			? theme.FONT_SIZE.XXXL * 1.3
			: theme.FONT_SIZE.XL * 1.3}px;
		margin-bottom: ${size === "lg" ? "2px" : "8px"};
	`}
`;

export const Description = styled.Text`
	${({ theme }) => css`
		font-family: ${theme.FONT_FAMILY.REGULAR};
		font-size: ${theme.FONT_SIZE.SM}px;
		line-height: ${theme.FONT_SIZE.SM * 1.3}px;
	`}
`;

export const ArrowUp = styled(ArrowUpRight).attrs(({ theme, color }) => ({
	color:
		color === "PRIMARY"
			? theme.COLORS.GREEN_700
			: color === "SECONDARY"
			? theme.COLORS.RED_700
			: theme.COLORS.GRAY_700
}))`
	position: absolute;
	top: 8px;
	right: 8px;
`;

export const StyledArrowLeft = styled(ArrowLeft).attrs(({ theme, color }) => ({
	color:
		color === "PRIMARY"
			? theme.COLORS.GREEN_700
			: color === "SECONDARY"
			? theme.COLORS.RED_700
			: theme.COLORS.GRAY_700
}))`
	position: absolute;
	top: 4px;
	left: 4px;
`;
