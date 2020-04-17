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
  const count = useMemo(
    () => dragons.filter(dg => dg.visible && dg.selected).length,
    [dragons],
  );

  const handleDragonClick = useCallback(
    ({ index, selected, selectable }) => {
      if ((count === 3 && !selected) || selectable === false) {
        return;
      }

      setDragons([
        ...dragons.map(dragon => ({
          ...dragon,
          selected: dragon.index === index ? !dragon.selected : dragon.selected,
        })),
      ]);
    },
    [dragons],
  );

  const handleRemoveDragon = useCallback(() => {
    if (count === 0) {
      return;
    }

    setDragons([
      ...dragons.map(dragon => ({
        ...dragon,
        visible: dragon.visible ? !dragon.selected : false,
        selected: false,
      })),
    ]);
  }, [dragons]);

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
      selectable: false,
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
              visible={dragon.visible}
              onPress={() => handleDragonClick(dragon)}
            />
          ))}
        </DragonsList>

        <ButtonContainer>
          <Button
            disabled={count === 0}
            onPress={handleRemoveDragon}
            text={
              count === 0
                ? 'Selecione até 3 dragões'
                : `Remover ${count === 1 ? 'Dragão' : 'Dragões'}`
            }
          />
        </ButtonContainer>
      </DragonsContainer>
    </Container>
  );
}
