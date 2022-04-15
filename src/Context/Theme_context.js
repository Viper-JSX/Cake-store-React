import { createContext, useContext } from "react";

export const ThemeContext = createContext({ themeName: "light" });
export const ThemeContextProvider = ThemeContext.Provider;
export const ThemeContextConsumer = ThemeContext.Consumer;