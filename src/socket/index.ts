import { io } from "socket.io-client";
import { IUser } from "@/types";
import "dotenv/config";

const ip = process.env.IP;
const port = process.env.PORT;
const isDev = process.env.IS_DEV === "true";
const socketURL = process.env.SOCKET_UR;

export const socket = (user: IUser) =>
  io(isDev ? `${ip}:${port}` : socketURL, {
    query: user,
  });
