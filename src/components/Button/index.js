import React from 'react';
import { Container, Text } from './styles';

export default function Button({ text }) {
  return <Container>{text && <Text>{text}</Text>}</Container>;
}
