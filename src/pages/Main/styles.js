import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import background from '../../assets/images/background.png';
import dragons from '../../assets/images/dragons.png';

export const Container = styled.ImageBackground.attrs({
  source: background,
})`
  flex: 1;
  align-items: center;
`;

export const DragonImage = styled.Image.attrs({
  source: dragons,
})`
  height: 230px;
  width: 100%;
  margin-top: ${Platform.OS === 'ios' ? 66 : 40}px;
`;

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
