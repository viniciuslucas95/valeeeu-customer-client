import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

import {
  facebookId,
  googleAndroidId,
  googleExpoId,
  googleIosId,
  googleWebId,
} from '../../configs/constants/apiConfigs';
import {
  useGoogleLoginApi,
  useFacebookLoginApi,
} from '../shared/typescript-library/hooks/loginApis';

WebBrowser.maybeCompleteAuthSession();

export default function Login() {
  const {
    isBusy: isFacebookApiBusy,
    user: facebookUser,
    fetchDataAsync: facebookApiFetchDataAsync,
  } = useFacebookLoginApi({ clientId: facebookId });
  const {
    isBusy: isGoogleApiBusy,
    user: googleUser,
    fetchDataAsync: googleApiFetchDataAsync,
  } = useGoogleLoginApi({
    androidClientId: googleAndroidId,
    expoClientId: googleExpoId,
    webClientId: googleWebId,
    iosClientId: googleIosId,
  });

  return (
    <View style={styles.container}>
      <Button
        disabled={isGoogleApiBusy || isFacebookApiBusy}
        title='Log In With Google'
        onPress={() => googleApiFetchDataAsync()}
      />
      <Button
        disabled={isGoogleApiBusy || isFacebookApiBusy}
        title='Log In With Facebook'
        onPress={() => facebookApiFetchDataAsync()}
      />
      <Text>--- Google ---</Text>
      <Text>ID: {googleUser?.id}</Text>
      <Text>Nome: {googleUser?.firstName}</Text>
      <Text>Sobrenome: {googleUser?.lastName}</Text>
      <Text>Email: {googleUser?.email}</Text>
      <Text>--- Facebook ---</Text>
      <Text>ID: {facebookUser?.id}</Text>
      <Text>Nome: {facebookUser?.firstName}</Text>
      <Text>Sobrenome: {facebookUser?.lastName}</Text>
      <Text>Email: {facebookUser?.email}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
