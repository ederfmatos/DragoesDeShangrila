import styled from 'styled-components/native';
import { Platform } from 'react-native';

import dragons from '../../assets/images/dragons.png';

const DragonImage = styled.Image.attrs({
  source: dragons,
})`
  height: 230px;
  width: 100%;
  margin-top: ${Platform.OS === 'ios' ? 66 : 40}px;
`;

export default DragonImage;
