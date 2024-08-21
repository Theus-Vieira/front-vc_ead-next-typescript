export interface ICreateUser {
  username: string;
  meeting_level: number;
  procedure_level: number;
  is_adm: boolean;
  password: string;
}

export interface IUser {
  objectId: string;
  username: string;
  meeting_level: number;
  procedure_level: number;
  is_adm: boolean;
  createdAt: Date;
  updatedAt: Date;
  sessionToken: string;
}

export interface IUpdateUser {
  username?: string;
  meeting_level?: number;
  procedure_level?: number;
  password?: string;
}
