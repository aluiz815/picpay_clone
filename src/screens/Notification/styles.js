import styled from 'styled-components/native';

export const Wrapper = styled.ScrollView``;
export const Header = styled.View`
  background:#E0E0E0;
  justify-content:space-between;
  align-items:center;
  flex-direction:row;
  height:60px;
  padding:8px;
`;

export const HeaderText = styled.Text`
color:#000;
font-weight:bold;
font-size:18px;
`;

export const HeaderButton = styled.TouchableOpacity`
`;
export const ButtonLabel = styled.Text`
color:#4CAF50;
font-size:14px;
`;
export const NotificationContainer = styled.TouchableOpacity`
flex-direction:column;
justify-content:center;
padding:15px;
`;
export const NotificationLabel = styled.Text`
font-size:16px;
margin-bottom:10px;
font-weight:500;
`;
export const NotificationHour = styled.Text`
font-size:12px;
color:#666;
`;
export const NotificationLine = styled.View`
width:100%;
border:1px solid #E0E0E0;
margin-top:10px;
`
