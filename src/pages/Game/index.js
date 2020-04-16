import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { Container, Button, DragonItem } from '../../components';

import {
  ImageGreenDragon,
  ImageRedDragon,
  ImageGreenDragonSelected,
} from '../../constants';

import { DragonsContainer, DragonsList, ButtonContainer } from './styles';

export default function Game() {
  const [dragons, setDragons] = useState([]);
  const [count, setCount] = useState(0);

  const handleDragonClick = useCallback(
    ({ index, selected }) => {
      if (count === 3 && !selected) {
        return;
      }

      setDragons([
        ...dragons.map(dragon => ({
          ...dragon,
          selected: dragon.index === index ? !dragon.selected : dragon.selected,
        })),
      ]);

      setCount(selected ? count - 1 : count + 1);
    },
    [dragons],
  );

  useEffect(() => {
    const dragonsList = [];

    for (let index = 0; index < 14; index += 1) {
      dragonsList.push({
        index,
        image: ImageGreenDragon,
        imageSelected: ImageGreenDragonSelected,
        selected: false,
        visible: true,
      });
    }

    dragonsList.push({
      image: ImageRedDragon,
      selected: false,
      visible: true,
      index: 14,
    });

    setDragons(dragonsList);
  }, []);

  return (
    <Container showDragonsImage>
      <DragonsContainer>
        <DragonsList>
          {dragons.map(dragon => (
            <DragonItem
              key={`dragon-item-${dragon.index}`}
              source={dragon.selected ? dragon.imageSelected : dragon.image}
              resizeMode="center"
              onPress={() => handleDragonClick(dragon)}
            />
          ))}
        </DragonsList>

        <ButtonContainer>
          <Button text="Remover dragão" />
        </ButtonContainer>
      </DragonsContainer>
    </Container>
  );
}
