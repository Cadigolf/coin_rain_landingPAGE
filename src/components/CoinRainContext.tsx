import React, { createContext, useContext, useState } from 'react';

interface CoinRainContextType {
  isCoinRainActive: boolean;
  setCoinRainActive: (active: boolean) => void;
}

const CoinRainContext = createContext<CoinRainContextType | undefined>(undefined);

export const useCoinRain = () => {
  const context = useContext(CoinRainContext);
  if (context === undefined) {
    throw new Error('useCoinRain must be used within a CoinRainProvider');
  }
  return context;
};

interface CoinRainProviderProps {
  children: ReactNode;
}

export const CoinRainProvider: React.FC<CoinRainProviderProps> = ({ children }) => {
  const [isCoinRainActive, setCoinRainActive] = useState(false);

  return (
    <CoinRainContext.Provider value={{ isCoinRainActive, setCoinRainActive }}>
      {children}
    </CoinRainContext.Provider>
  );
}; 