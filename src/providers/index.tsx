"use client";

import { ReactNode } from "react";
import { useDarkMode, DarkModeProvider } from "./DarkMode";
import { useUser, UserProvider } from "./User";
import { useChat, ChatProvider } from "./Chat";

export { useDarkMode, useUser, useChat };

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <DarkModeProvider>
      <UserProvider>
        <ChatProvider>{children}</ChatProvider>
      </UserProvider>
    </DarkModeProvider>
  );
};
