import React from 'react';
import { Text } from 'react-native';

import { Container, DragonImage } from './styles';

export default function Main() {
  return (
    <Container>
      <DragonImage resizeMode="center" />
      <Text>Main</Text>
    </Container>
  );
}
