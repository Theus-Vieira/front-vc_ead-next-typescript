"use client";

import { ReactNode } from "react";
import { useDarkMode, DarkModeProvider } from "./DarkMode";
import { useUser, UserProvider } from "./User";

export { useDarkMode, useUser };

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <DarkModeProvider>
      <UserProvider>{children}</UserProvider>
    </DarkModeProvider>
  );
};
