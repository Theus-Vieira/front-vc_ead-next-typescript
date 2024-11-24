import { io } from "socket.io-client";
import { IUser } from "@/types";
import "dotenv/config";

const isDev = true;

export const socket = (user: IUser) =>
  io(isDev ? "http://localhost:3001" : "https://vc_ead.onrender.com", {
    query: user,
  });
