import styled from "styled-components/native";

export const PageContainer = styled.View`
	display: flex;
	flex: 1;
	background-color: #f1f1f1;
	align-items: center;
	padding-top: 54px;
`;
export const Title = styled.Text`
	font-size: 32px;
	font-weight: bold;
`;
export const Form = styled.View`
	background-color: #fff;
	width: 95%;
	border-radius: 8px;
	padding: 16px;
	margin-top: 16px;
	margin-bottom: 8px;
`;

export const FormLabel = styled.Text`
	font-weight: bold;
	font-size: 18px;
	margin-bottom: 8px;
`;

export const SearchInput = styled.TextInput`
	border-width: 1px;
	border-radius: 4px;
	border-color: #94a3b8;
	padding: 8px;
	font-size: 16px;
	margin-bottom: 16px;
`;

export const StayingDays = styled.Text`
	background-color: #f1f1f1;
`;

export const SubmitButton = styled.TouchableOpacity`
	display: flex;
	width: 95%;
	padding: 14px;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

export const ButtonText = styled.Text`
	font-size: 18px;
	color: red;
	font-weight: bold;
`;
