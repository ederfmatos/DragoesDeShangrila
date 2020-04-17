import styled from 'styled-components/native';

export const Container = styled.TouchableHighlight`
  max-width: 20%;
  min-width: 20%;
  height: 100px;
  justify-content: center;
  align-items: center;
  opacity: ${props => (props.visible ? 1 : 0)};
`;

export const Image = styled.Image`
  height: 80px;
`;
