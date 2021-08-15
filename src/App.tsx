import 'react-native-gesture-handler';
import { registerRootComponent } from 'expo';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';

import { SplashPage } from './app/pages/SplashPage';
import { Navigator } from './app/pages/Navigator';
import { LoginProvider } from './app/contexts';

export default function App() {
  const [loaded] = useFonts({
    'FugazOne-Regular': require('./assets/fonts/FugazOne-Regular.ttf'),
    'Poppins-Light': require('./assets/fonts/Poppins-Light.ttf'),
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Italic': require('./assets/fonts/Poppins-Italic.ttf'),
    'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
    'Poppins-MediumItalic': require('./assets/fonts/Poppins-MediumItalic.ttf'),
    'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
  });

  if (!loaded) return <SplashPage />;

  return (
    <LoginProvider>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </LoginProvider>
  );
}

registerRootComponent(App);
