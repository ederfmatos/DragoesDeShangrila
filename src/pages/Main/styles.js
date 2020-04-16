import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Button = styled(RectButton)`
  background: #012559;
  padding: 15px 25px;
  border-radius: 6px;
  max-width: 150px;
`;

export const ButtonText = styled.Text`
  font-weight: bold;
  color: #f9f9f9;
`;

export const ButtonContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
`;
