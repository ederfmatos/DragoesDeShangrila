import React from 'react';
import {} from 'react-native';

import { Container, Image } from './styles';

export default function DragonItem({ onPress, visible, ...props }) {
  return (
    <Container underlayColor="#DDDDDD00" onPress={onPress} visible={visible}>
      <Image resizeMode="center" {...props} />
    </Container>
  );
}
