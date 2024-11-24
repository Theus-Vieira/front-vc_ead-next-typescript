"use client";

import { createContext, useState, useContext, ReactNode } from "react";
import { IMessage } from "@/types/message";
import { Socket } from "socket.io-client";
import { socket as SOCKET } from "@/socket";
import { useUser } from "../User";
import { IUser } from "@/types";
import { v4 as uuid } from "uuid";
import { getDateHour } from "@/utils/date";

interface IChatContext {
  messages: IMessage[];
  addMessage: (newMessage: IMessage) => void;
  connectChat: () => void;
  disconnectChat: () => void;
  sendMessage: (data: string[]) => void;
  clearMessages: () => void;
  usersOnline: IUser[];
}

const ChatContext = createContext<IChatContext>({} as IChatContext);

export const useChat = () => {
  const context = useContext(ChatContext);

  return context;
};

export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [usersOnline, setUsersOnline] = useState<IUser[]>([]);

  const [socket, setSocket] = useState<Socket | null>(null);

  const { user } = useUser();

  const addMessage = (newMessage: IMessage) => {
    setMessages([...messages, newMessage]);
  };

  const connectChat = () => {
    const newSocket = SOCKET(user);
    setSocket(newSocket);

    newSocket.on("chat", (msg: IMessage) => {
      addMessage(msg);
    });

    newSocket.on("users", (usrs: IUser[]) => {
      setUsersOnline(usrs);
    });
  };

  const disconnectChat = () => {
    socket?.offAny();

    socket?.disconnect();
    setSocket(null);
  };

  const sendMessage = (data: string[]) => {
    const newMessage: IMessage = {
      id: uuid(),
      content: data,
      info: getDateHour(),
      type: "text",
      user,
    };

    addMessage(newMessage);

    socket?.emit("chat", newMessage);
  };

  const clearMessages = () => setMessages([]);

  return (
    <ChatContext.Provider
      value={{
        messages,
        addMessage,
        clearMessages,
        connectChat,
        disconnectChat,
        sendMessage,
        usersOnline,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
