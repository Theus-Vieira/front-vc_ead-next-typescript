import { io } from "socket.io-client";
import { IUser } from "@/types";
import "dotenv/config";

const isDev = true;
const isWill = true;

export const socket = (user: IUser) =>
  io(
    isDev
      ? isWill
        ? "http://192.168.1.13:3001"
        : "http://localhost:3001"
      : "https://vc_ead.onrender.com",
    {
      query: user,
    }
  );
