import { io } from "socket.io-client";
import { IUser } from "@/types";
import "dotenv/config";

const ip = "192.168.1.14";
const port = "3001";
const isDev = false;
const socketURL = "https://vceadchat.onrender.com";

export const socket = (user: IUser) =>
  io(isDev ? `${ip}:${port}` : socketURL, {
    query: user,
  });
