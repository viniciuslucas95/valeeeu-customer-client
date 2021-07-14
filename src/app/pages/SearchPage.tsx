import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { GoogleMaps } from '../shared/typescript-library/components';
import { googleApiKey } from '../../configs/constants/apiConfigs';

export function SearchPage() {
  const [destination, setDestination] = useState({
    latitude: -22.6088,
    longitude: -43.1723,
  });

  return (
    <View style={styles.container}>
      <GoogleMaps apiKey={googleApiKey} destination={destination} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
