"use client";

import { ReactNode } from "react";
import { useDarkMode, DarkModeProvider } from "./DarkMode";

export { useDarkMode };

export const providers = ({ children }: { children: ReactNode }) => {
  return <DarkModeProvider>{children}</DarkModeProvider>;
};
