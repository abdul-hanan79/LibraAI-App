import React, { createContext, useState, useContext } from "react";

interface ColorSchemeContextType {
  isDarkMode: boolean;
  toggleColorScheme: () => void;
}

const ColorSchemeContext = createContext<ColorSchemeContextType | undefined>(
  undefined
);

export const ColorSchemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleColorScheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ColorSchemeContext.Provider value={{ isDarkMode, toggleColorScheme }}>
      {children}
    </ColorSchemeContext.Provider>
  );
};

export const useColorSchemeValue = (): ColorSchemeContextType => {
  const context = useContext(ColorSchemeContext);
  if (!context) {
    throw new Error(
      "useColorSchemeValue must be used within a ColorSchemeProvider"
    );
  }
  return context;
};
