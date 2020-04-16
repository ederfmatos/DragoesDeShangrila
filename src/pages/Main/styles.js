import styled from 'styled-components/native';
import { Platform } from 'react-native';

import background from '../../assets/images/background.png';
import dragons from '../../assets/images/dragons.png';

export const Container = styled.ImageBackground.attrs({
  source: background,
})`
  flex: 1;
`;

export const DragonImage = styled.Image.attrs({
  source: dragons,
})`
  height: 230px;
  width: 100%;
  margin-top: ${Platform.OS === 'ios' ? 66 : 40}px;
`;
