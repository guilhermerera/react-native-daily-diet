import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

import { Plus } from "phosphor-react-native";

export const Container = styled(TouchableOpacity)`
	width: 100%;
	padding: 16px 0px;
	border-radius: 6px;

	flex-direction: row;
	align-items: center;
	justify-content: center;

	background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const Title = styled.Text`
	${({ theme }) => css`
		color: ${theme.COLORS.GRAY_100};

		font-size: ${theme.FONT_SIZE.SM}px;
		font-family: ${theme.FONT_FAMILY.BOLD};
	`}
`;

export const PlusIcon = styled(Plus).attrs(({ theme }) => ({
	color: theme.COLORS.GRAY_100,
	size: 18
}))`
	margin-right: 12px;
`;
