import { registerRootComponent } from 'expo';
import React from 'react';

import Login from './app/pages/Login';

export default function App() {
  return <Login />;
}

registerRootComponent(App);
