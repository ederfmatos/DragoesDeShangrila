import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  background: #012559;
  padding: 15px 25px;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const Text = styled.Text`
  width: 100%;
  color: #fff;
  font-weight: bold;
`;
