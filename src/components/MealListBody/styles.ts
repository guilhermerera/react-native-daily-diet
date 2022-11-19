import styled from "styled-components/native";
import { ViewProps } from "react-native";

export const Container = styled.SectionList``;

export const SectionHeader = styled.Text``;

export const CardWrapper = styled.View`
	flex-direction: row;
	align-items: center;
	padding: 14px 16px 14px 12px;
	border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
	border-radius: 6px;
	margin-bottom: 8px;
`;

export const CardTimeStamp = styled.Text``;

export const CardTitle = styled.Text``;

type CardDotProps = ViewProps & {
	isOnDiet: boolean;
};
export const CardDot = styled.View<CardDotProps>``;
