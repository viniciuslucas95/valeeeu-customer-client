import React from 'react';
import { StyleSheet, View } from 'react-native';

import { theme } from '../../../configs/constants/theme';
import { Logo } from '../../../assets/svgs';

export function SplashPage() {
  return (
    <View style={styles.container}>
      <Logo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.primaryPurple,
  },
});
