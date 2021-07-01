import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';

import {
  useLocation,
  useDirections,
} from '../shared/typescript-library/hooks/map';
import { googleApiKey } from '../../configs/constants/apiConfigs';
import { GoogleMaps } from '../shared/typescript-library/components';

export default function Map() {
  const [origin, setOrigin] = useState<string>();
  const [destination, setDestination] = useState<string>();
  const { location, isFetching: isLocationFetching } = useLocation();
  const { directions, isFetching: isDirectionFetching } = useDirections(
    googleApiKey,
    origin,
    destination
  );

  useEffect(() => {
    if (!location) return;

    setOrigin(locationToString(location));

    const targetLocationForTesting = {
      latitude: -22.6088,
      longitude: -43.1723,
    };

    setDestination(locationToString(targetLocationForTesting));
  }, [location]);

  function locationToString(cordinate: any) {
    return `${cordinate.latitude}, ${cordinate.longitude}`;
  }

  return (
    <View style={styles.container}>
      {isLocationFetching ? (
        <Text style={styles.text}>'Buscando localização...'</Text>
      ) : null}
      <GoogleMaps location={location} directions={directions} />
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
  text: {
    position: 'absolute',
    top: Dimensions.get('window').width / 2,
    zIndex: 10,
  },
});
