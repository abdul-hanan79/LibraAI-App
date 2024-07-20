// ColorSchemeContext.js
import React, { createContext, useState, useContext } from "react";

//@ts-ignore
const ColorSchemeContext = createContext();

export const ColorSchemeProvider = ({ children }: any) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleColorScheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ColorSchemeContext.Provider value={{ isDarkMode, toggleColorScheme }}>
      {children}
    </ColorSchemeContext.Provider>
  );
};

export const useColorSchemeValue = () => useContext(ColorSchemeContext);
