"use client";
import React, { createContext, useState, useContext } from "react";
interface FetchedData {
  [key: string]: any;
}

interface GlobalContextType {
  fetched: FetchedData;
  setFetched: React.Dispatch<React.SetStateAction<FetchedData>>;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [fetched, setFetched] = useState<FetchedData>({});

  return (
    <GlobalContext.Provider value={{ fetched, setFetched }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }

  return context;
};
