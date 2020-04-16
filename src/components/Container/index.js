import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

import background from '../../assets/images/background.png';
import DragonImage from '../DragonImage';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

export default function Container({ children, showDragonsImage }) {
  return (
    <ImageBackground source={background} style={styles.container}>
      {showDragonsImage && <DragonImage resizeMode="center" />}
      {children}
    </ImageBackground>
  );
}
