import React, { createContext, useContext, useState } from 'react';
import type { Map } from 'leaflet';

interface ISharedMapContext {
  setMapInstance: (value: ((prevState: Map) => Map) | Map) => void;
  mapInstance: Map | null;
}

export const SharedMapContext = createContext<ISharedMapContext | null>(null);

interface ISharedMapProviderProps {
  children: React.ReactElement | React.ReactElement[];
}

export const SharedMapProvider = ({ children }: ISharedMapProviderProps) => {
  const [mapInstance, setMapInstance] = useState<Map | null>(null);

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
