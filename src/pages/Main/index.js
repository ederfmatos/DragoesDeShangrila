import React from 'react';

import Container from '../../components/Container';

import { Button, ButtonText, ButtonContainer } from './styles';

export default function Main({ navigation }) {
  return (
    <Container showDragonsImage={true}>
      <ButtonContainer>
        <Button
          onPress={() => {
            navigation.navigate('Game');
          }}
        >
          <ButtonText>Singleplayer</ButtonText>
        </Button>

        <Button>
          <ButtonText>Multiplayer</ButtonText>
        </Button>

        <Button>
          <ButtonText>Online</ButtonText>
        </Button>

        <Button>
          <ButtonText>Sobre</ButtonText>
        </Button>
      </ButtonContainer>
    </Container>
  );
}
