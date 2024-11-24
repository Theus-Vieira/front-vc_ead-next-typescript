"use client";

import {
  createContext,
  useState,
  useContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
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
  setUsersOnline: Dispatch<SetStateAction<IUser[]>>;
  socket: Socket | null;
}

const ChatContext = createContext<IChatContext>({} as IChatContext);

export const useChat = () => {
  const context = useContext(ChatContext);

  return context;
};

export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const { user } = useUser();

  const [messages, setMessages] = useState<IMessage[]>([]);
  const [usersOnline, setUsersOnline] = useState<IUser[]>([]);
  const [socket, setSocket] = useState<Socket | null>(null);

  const addMessage = (newMessage: IMessage) => {
    setMessages((prev) => {
      return [...prev, newMessage];
    });
  };

  const connectChat = () => {
    const newSocket = SOCKET(user);
    setSocket(newSocket);
  };

  const disconnectChat = () => {
    socket?.off("chat");
    socket?.off("users");

    socket?.disconnect();
    setSocket(null);
    clearMessages();
  };

  const sendMessage = (data: string[]) => {
    const newMessage: IMessage = {
      id: uuid(),
      content: data,
      info: getDateHour(),
      type: "text",
      user,
    };

    socket?.emit("chat", newMessage);
    addMessage(newMessage);
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
        socket,
        setUsersOnline,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
