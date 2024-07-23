import React, { createContext, useContext, useState } from 'react';
import type { Map } from 'leaflet';

interface ISharedMapContext {
  setMapInstance: (value: ((prevState: Map) => Map) | Map) => void;
  mapInstance: Map;
}

// @ts-ignore
export const SharedMapContext = createContext<ISharedMapContext>({});

interface ISharedMapProviderProps {
  children: React.ReactElement | React.ReactElement[];
}

export const SharedMapProvider = ({ children }: ISharedMapProviderProps) => {
  // @ts-ignore
  const [mapInstance, setMapInstance] = useState<Map>({});

  return (
    <SharedMapContext.Provider
      value={{
        setMapInstance,
        mapInstance,
      }}
    >
      {children}
    </SharedMapContext.Provider>
  );
};

export const useSharedMap = () => {
  const context = useContext(SharedMapContext);

  if (!context) {
    throw Error('No provider!');
  }

  return context;
};
