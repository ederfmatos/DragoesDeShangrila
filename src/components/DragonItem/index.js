import React from 'react';
import {} from 'react-native';

import { Container, Image } from './styles';

export default function DragonItem({ onPress, ...props }) {
  return (
    <Container underlayColor="#DDDDDD00" onPress={onPress}>
      <Image {...props} />
    </Container>
  );
}
