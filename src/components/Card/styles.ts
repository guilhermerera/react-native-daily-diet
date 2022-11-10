import styled, { css } from "styled-components/native";
import { View, Text } from "react-native";

export type ContainerColors = "PRIMARY" | "SECONDARY" | "GRAY";
export type ContainerSize = "lg" | "sm";

type ContainerProps = {
	color: ContainerColors;
	size: ContainerSize;
};

export const Container = styled(View)<ContainerProps>`
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
	size: ContainerSize;
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
