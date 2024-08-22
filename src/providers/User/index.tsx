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
    } catch (error) {
      // lança um toast
    }
  };

  const userLogout = async () => {
    try {
    } catch (error) {
      //
    }
  };

  return (
    <UserContext.Provider value={{ userLogin, userLogout }}>
      {children}
    </UserContext.Provider>
  );
};
