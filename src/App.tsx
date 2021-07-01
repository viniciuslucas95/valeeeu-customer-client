import { registerRootComponent } from 'expo';
import React from 'react';

import { Map } from './app/pages';

export default function App() {
  return <Map />;
}

registerRootComponent(App);
