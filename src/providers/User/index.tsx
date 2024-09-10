import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useRouter } from "next/navigation";
import * as T from "@/types";
import { api } from "@/api";
import { toast } from "react-toastify";
import "dotenv/config";

interface IUserContext {
  user: T.IUser;
  users: T.IUser[];
  userLogin: (data: T.ILoginSession) => Promise<void>;
  userLogout: () => Promise<void>;
  updateUser: (
    updatedUser: T.IUpdateUser,
    objectId: string,
    isMaster: boolean
  ) => Promise<void>;
}

const UserContext = createContext<IUserContext>({} as IUserContext);

export const useUser = () => {
  const context = useContext(UserContext);

  return context;
};

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [users, setUsers] = useState<T.IUser[]>([]);
  const [user, setUser] = useState<T.IUser>({} as T.IUser);

  const router = useRouter();

  const createUser = async () => {};

  const updateUser = async (
    updatedUser: T.IUpdateUser,
    objectId: string,
    isMaster: boolean = false
  ) => {
    try {
      const headers: any = {
        "Content-Type": "application/json",
        "X-Parse-Application-Id": process.env.APP_ID,
        "X-Parse-REST-API-Key": process.env.API_KEY,
        "X-Parse-Session-Token": user.sessionToken,
      };

      isMaster && (headers["X-Parse-Master-Key"] = process.env.MASTER_KEY);

      await api.put(`/users/${objectId}`, updatedUser, {
        headers: headers,
      });

      // retrieveUser()
      // loadUsers()
      toast.success("Sucesso!");
    } catch (error) {
      toast.error("Erro ao atualizar usuário");
    }
  };

  const deleteUser = async () => {};

  const retrieveUser = async () => {};

  const loadUsers = async () => {};

  const userLogin = async (data: T.ILoginSession) => {
    try {
      const response: any = await api.post("/login", data);

      const {
        objectId,
        username,
        createdAt,
        is_adm,
        meeting_level,
        procedure_level,
        sessionToken,
        updatedAt,
      }: T.IUser = response.data;

      setUser({
        createdAt,
        is_adm,
        meeting_level,
        objectId,
        procedure_level,
        sessionToken,
        updatedAt,
        username,
      });

      // lógica para persistir o login no local storage, já que o token nunca expira.

      toast.success("Sucesso!");
    } catch (error) {
      toast.error("Erro ao fazer login");
    }
  };

  const userLogout = async () => {
    try {
      await api.post(
        "/logout",
        {},
        {
          headers: {
            "X-Parse-Session-Token": user.sessionToken,
          },
        }
      );

      setUser({} as T.IUser);
      setUsers([]);
      toast.success("Bye, bye!");
      router.push("/");
    } catch (error) {
      toast.error("Erro ao fazer logout");
    }
  };

  return (
    <UserContext.Provider
      value={{ userLogin, userLogout, user, users, updateUser }}
    >
      {children}
    </UserContext.Provider>
  );
};
