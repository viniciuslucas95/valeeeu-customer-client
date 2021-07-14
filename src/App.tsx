import { registerRootComponent } from 'expo';
import React from 'react';

import { SearchPage } from './app/pages';

export default function App() {
  return <SearchPage />;
}

registerRootComponent(App);
