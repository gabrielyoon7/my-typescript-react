/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useState } from "react";

export interface GlobalState {
  value1: boolean;
  value2: string;
  setValue1: (value: boolean) => void;
  setValue2: (value: string) => void;
}

export const GlobalContext = React.createContext<GlobalState>({
  value1: false,
  value2: "",
  setValue1: () => { },
  setValue2: () => { },
});

interface GlobalProviderProps {
  children: React.ReactNode;
}

const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [value1, setValue1] = useState<boolean>(false);
  const [value2, setValue2] = useState<string>("하이");

  const state: GlobalState = {
    value1, setValue1,
    value2, setValue2,
  };

  return (
    <GlobalContext.Provider value={state}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
