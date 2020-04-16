import React from 'react';

import {
  Container,
  DragonImage,
  Button,
  ButtonText,
  ButtonContainer,
} from './styles';

export default function Main() {
  return (
    <Container>
      <DragonImage resizeMode="center" />

      <ButtonContainer>
        <Button>
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
