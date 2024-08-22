import { createContext, ReactNode, useContext, useState } from "react";
import { useRouter } from "next/navigation";
import * as T from "@/types";
import { api } from "@/api";
import { toast } from "react-toastify";
import "dotenv/config";

interface IUserContext {
  userLogin: (data: T.ILoginSession) => void;
  userLogout: () => void;
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

  const updateUser = async () => {};

  const deleteUser = async () => {};

  const retrieveUser = async () => {};

  const loadUsers = async () => {};

  const userLogin = async (data: T.ILoginSession) => {
    try {
      const response: any = await api
        .post("/login", data)
        .then((res) => res.data);

      const {
        objectId,
        username,
        createdAt,
        is_adm,
        meeting_level,
        procedure_level,
        sessionToken,
        updatedAt,
      }: T.IUser = response;

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

      toast.success("Sucesso!");

      router.push("/dashboard");
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
    <UserContext.Provider value={{ userLogin, userLogout }}>
      {children}
    </UserContext.Provider>
  );
};
