import React, { useState, createContext, PropsWithChildren } from 'react';

export const MapContext = createContext<any>({});

export function MapProvider({ children }: PropsWithChildren<any>) {
  // FOR TESTING
  const [destination, setDestination] = useState({
    latitude: -22.6088,
    longitude: -43.1723,
  });

  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <MapContext.Provider value={{ isLoaded, setIsLoaded }}>
      {children}
    </MapContext.Provider>
  );
}
