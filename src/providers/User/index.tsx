import { createContext, ReactNode, useContext, useState } from "react";
import { useRouter } from "next/navigation";
import * as T from "@/types";

interface IUserContext {}

const UserContext = createContext<IUserContext>({} as IUserContext);

export const useUser = () => {
  const context = useContext(UserContext);

  return context;
};

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [users, setUsers] = useState<T.IUser[]>([]);
  const [user, setUser] = useState<T.IUser>({} as T.IUser);

  const router = useRouter();

  const createUser = async (data: T.ICreateUser) => {
    try {
    } catch (error) {
      // lançar um toast com o erro
    }
  };

  const updateUser = async (data: T.IUpdateUser) => {
    try {
    } catch (error) {
      // lança um toast
    }
  };

  const deleteUser = async () => {
    try {
    } catch (error) {
      // lança um toast
    }
  };

  const retrieveUser = async () => {
    try {
      // router.push("/dashboard")
    } catch (error) {
      // lança um toast
    }
  };

  const loadUsers = async () => {
    try {
    } catch (error) {
      // lança um toast
    }
  };

  const userLogin = async (data: T.ILoginSession) => {
    try {
    } catch (error) {
      // lança um toast
    }
  };

  return <UserContext.Provider value={{}}>{children}</UserContext.Provider>;
};
