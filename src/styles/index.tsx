import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import * as theme from "./GlobalTheme";
import { GlobalStyle } from "./GlobalStyle";

export const Styles = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider theme={theme.light}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};
