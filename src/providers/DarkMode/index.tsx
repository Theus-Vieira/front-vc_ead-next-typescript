"use client";

import { createContext, ReactNode, useContext, useState } from "react";

interface IDarkModeContext {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkModeContext = createContext<IDarkModeContext>({} as IDarkModeContext);

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);

  return context;
};

export const DarkModeProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
