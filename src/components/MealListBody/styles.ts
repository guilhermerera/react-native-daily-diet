import styled, { css } from "styled-components/native";
import { ViewProps } from "react-native";

export const Container = styled.View`
	height: 100%;
`;

export const List = styled.SectionList``;

export const SectionHeader = styled.Text`
	${({ theme }) => css`
		color: ${theme.COLORS.GRAY_700};
		font-size: ${theme.FONT_SIZE.LG}px;
		font-family: ${theme.FONT_FAMILY.BOLD};
		margin-top: 12px;
		margin-bottom: 8px;
	`}
`;

export const CardWrapper = styled.TouchableOpacity.attrs(() => ({
	activeOpacity: 0.7
}))`
	flex-direction: row;
	align-items: center;
	padding: 14px 16px 14px 12px;
	border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
	border-radius: 6px;

	margin-bottom: 8px;
`;

export const CardTimeStamp = styled.Text`
	${({ theme }) => css`
		color: ${theme.COLORS.GRAY_700};
		font-size: ${theme.FONT_SIZE.XS}px;
		font-family: ${theme.FONT_FAMILY.BOLD};
	`}
`;

export const CardDivider = styled.View`
	width: 0px;
	height: 80%;
	background-color: transparent;
	border: 1px solid ${({ theme }) => theme.COLORS.GRAY_400};
	margin: 0px 20px;
`;

export const CardTitle = styled.Text`
	flex: 1;
`;

type CardDotProps = ViewProps & {
	isOnDiet: boolean;
};
export const CardDot = styled.View<CardDotProps>`
	${({ theme, isOnDiet }) => css`
		width: 14px;
		height: 14px;
		border-radius: 999px;
		background-color: ${isOnDiet
			? theme.COLORS.GREEN_500
			: theme.COLORS.RED_500};
	`}
`;

export const EmptyListContainer = styled.View`
	justify-content: center;
	align-items: center;
	padding: 16px;
`;

export const Message = styled.Text`
	${({ theme }) => css`
		color: ${theme.COLORS.GRAY_600};
		font-family: ${theme.FONT_FAMILY.REGULAR};
		font-size: ${theme.FONT_SIZE.SM}px;
		text-align: center;
	`}
`;
