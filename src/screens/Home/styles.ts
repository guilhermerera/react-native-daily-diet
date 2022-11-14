import styled, { css } from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
	flex: 1;
	justify-content: flex-start;
	align-items: center;

	padding: 16px 24px 8px;
	background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const MainHeader = styled.View`
	width: 100%;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

export const Logo = styled.Image``;

export const ProfilePic = styled.Image`
	width: 40px;
	height: 40px;
	border-radius: 9999px;
	border: 2px solid ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const BodyContent = styled.View`
	width: 100%;
	margin-top: 36px;
`;

export const MealListSection = styled.View`
	width: 100%;
	height: 100%;
	padding: 40px 0px 20px;
`;

export const MealListHeader = styled.View`
	margin-bottom: 32px;
`;

export const MealListHeaderTitle = styled.Text`
	${({ theme }) => css`
		color: ${theme.COLORS.GRAY_700};
		font-size: ${theme.FONT_SIZE.MD}px;
		line-height: ${theme.FONT_SIZE.MD * 1.3}px;
		font-family: ${theme.FONT_FAMILY.REGULAR};
		margin-bottom: 8px;
	`}
`;
