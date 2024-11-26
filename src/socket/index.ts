import { io } from "socket.io-client";
import { IUser } from "@/types";
import "dotenv/config";

const isDev = false;
const isWill = false;

export const socket = (user: IUser) =>
  io(
    isDev
      ? isWill
        ? "http://192.168.1.13:3001"
        : "http://localhost:3001"
      : "https://vceadchat.onrender.com",
    {
      query: user,
    }
  );
