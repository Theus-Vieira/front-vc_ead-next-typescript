import { ReactNode } from "react";

import * as theme from "./GlobalTheme";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { useDarkMode } from "@/providers";

export const Styles = ({ children }: { children: ReactNode }) => {
  const { isDarkMode } = useDarkMode();

  return (
    <ThemeProvider theme={isDarkMode ? theme.dark : theme.light}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};
