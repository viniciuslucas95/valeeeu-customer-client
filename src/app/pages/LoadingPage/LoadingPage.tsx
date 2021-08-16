import React from 'react';
import { StyleSheet, View } from 'react-native';

import { theme } from '../../../configs/constants/theme';
import { Logo } from '../../../assets/svgs';
import { vh, vw } from '../../helpers/units';

export function LoadingPage() {
  return (
    <View style={styles.container}>
      <Logo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: vw(100),
    height: vh(100),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.primaryPurple,
  },
});
