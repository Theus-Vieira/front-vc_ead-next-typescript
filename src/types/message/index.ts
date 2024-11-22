import { IUser } from "../user";

interface IInfo {
  date: string;
  hour: string;
}

export interface IMessage {
  id: string;
  user?: IUser;
  type: "text" | "system";
  content: string[];
  info: IInfo;
}
