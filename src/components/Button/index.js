import React from 'react';
import { Container, Text } from './styles';

export default function Button({ text, ...props }) {
  return <Container {...props}>{text && <Text>{text}</Text>}</Container>;
}
