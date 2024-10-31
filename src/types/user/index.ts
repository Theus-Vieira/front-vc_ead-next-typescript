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
  sessionToken?: string;
  is_filled_form: boolean;
  did_interview: boolean;
  pastoral_letter: boolean;
  parents_authorization: boolean;
  name: string;
  church: string;
  age: string;
  cell_phone: string;
  shirt_size: string;
}

export interface IUpdateUser {
  username?: string;
  meeting_level?: number;
  procedure_level?: number;
  password?: string;
  is_filled_form?: boolean;
  did_interview?: boolean;
  pastoral_letter?: boolean;
  parents_authorization?: boolean;
  name?: string;
  church?: string;
  age?: string;
  cell_phone?: string;
  shirt_size?: string;
}
