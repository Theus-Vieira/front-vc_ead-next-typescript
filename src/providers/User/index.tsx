import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useRouter } from "next/navigation";
import * as T from "@/types";
import * as control from "@/controllers";
import { api } from "@/api";
import { toast } from "react-toastify";
import "dotenv/config";

interface IInfo {
  meetingsInfo: string;
  proceduresInfo: string;
}

interface IUserContext {
  user: T.IUser;
  users: T.IUser[];
  info: IInfo;
  userLogin: (data: T.ILoginSession) => Promise<void>;
  userLogout: () => Promise<void>;
  createUser: (createdUser: T.ICreateUser) => Promise<void>;
  updateUser: (
    updatedUser: T.IUpdateUser,
    objectId: string,
    isMaster: boolean
  ) => Promise<void>;
  retrieveUser: (token?: string) => Promise<void>;
  loadUsers: () => Promise<void>;
}

const UserContext = createContext<IUserContext>({} as IUserContext);

export const useUser = () => {
  const context = useContext(UserContext);

  return context;
};

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [users, setUsers] = useState<T.IUser[]>([]);
  const [user, setUser] = useState<T.IUser>({} as T.IUser);

  const [info, setInfo] = useState<IInfo>({
    meetingsInfo: `${user.meeting_level}/${control.meetings.length}`,
    proceduresInfo: `${user.procedure_level}/${control.procedures.length}`,
  });

  const router = useRouter();

  const createUser = async (createdUser: T.ICreateUser) => {
    try {
      const response: any = await api.post("/users", createdUser, {
        headers: { "Content-Type": "application/json" },
      });

      const createdToken = response.data.sessionToken;

      await api.post(
        "/logout",
        {},
        {
          headers: {
            "X-Parse-Session-Token": createdToken,
          },
        }
      );

      toast.success("usuário criado com sucesso!");

      await loadUsers();
    } catch (error) {
      toast.error(
        "Erro ao criar um usuário, verifique se o nome de usuário já existe."
      );
    }
  };

  const updateUser = async (
    updatedUser: T.IUpdateUser,
    objectId: string,
    isMaster: boolean = false
  ) => {
    try {
      const headers: any = {
        "Content-Type": "application/json",
        "X-Parse-Session-Token": user.sessionToken,
      };

      isMaster && (headers["X-Parse-Master-Key"] = process.env.MASTER_KEY);

      await api.put(`/users/${objectId}`, updatedUser, {
        headers: headers,
      });

      await retrieveUser();
      user.is_adm && (await loadUsers());
      toast.success("Sucesso!");
    } catch (error) {
      toast.error("Erro ao atualizar usuário");
    }
  };

  const deleteUser = async () => {};

  const retrieveUser = async (token?: string) => {
    const userToken = token || user.sessionToken;

    try {
      const response: any = await api.get("/users/me", {
        headers: { "X-Parse-Session-Token": userToken },
      });

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
    } catch (error) {
      toast.error("Erro ao buscar informação do usuário");
    }
  };

  const loadUsers = async () => {
    try {
      const response: any = await api.get("/users", {
        headers: { "X-Parse-Session-Token": user.sessionToken },
      });

      const usersList = response.data.results.map((usr: T.IUser) => {
        const {
          objectId,
          username,
          createdAt,
          is_adm,
          meeting_level,
          procedure_level,
          updatedAt,
        } = usr;

        return {
          objectId,
          username,
          createdAt,
          is_adm,
          meeting_level,
          procedure_level,
          updatedAt,
        };
      });

      setUsers(usersList);
    } catch (error) {
      toast.error("Erro ao buscar todos os usuários");
    }
  };

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

      localStorage.setItem("@VC-EAD-TOKEN", sessionToken!);

      is_adm && (await loadUsers());
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

      localStorage.removeItem("@VC-EAD-TOKEN");
      setUser({} as T.IUser);
      setUsers([]);
      toast.success("Bye, bye!");
      router.push("/");
    } catch (error) {
      toast.error("Erro ao fazer logout");
    }
  };

  useEffect(() => {
    if (user.is_adm) {
      setInfo({
        meetingsInfo: `${control.meetings.length}/${control.meetings.length}`,
        proceduresInfo: `${control.procedures.length}/${control.procedures.length}`,
      });

      return;
    }

    setInfo({
      meetingsInfo: `${user.meeting_level}/${control.meetings.length}`,
      proceduresInfo: `${user.procedure_level}/${control.procedures.length}`,
    });
  }, [user]);

  useEffect(() => {
    const token = localStorage.getItem("@VC-EAD-TOKEN");

    if (token) {
      try {
        retrieveUser(token).then((_) => router.push("/dashboard"));
      } catch (error) {
        toast.error("Erro ao fazer relogin");
      }
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        userLogin,
        userLogout,
        createUser,
        user,
        users,
        updateUser,
        loadUsers,
        retrieveUser,
        info,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
