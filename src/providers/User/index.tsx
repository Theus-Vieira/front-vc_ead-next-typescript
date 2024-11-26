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

import ExcelJS from "exceljs";
import { saveAs } from "file-saver";

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
  deleteUser: (usr: T.IUser) => Promise<void>;
  retrieveUser: (token?: string) => Promise<void>;
  loadUsers: () => Promise<void>;
  downloadSheet: () => Promise<void>;
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

  const deleteUser = async (usr: T.IUser) => {
    if (usr.is_adm) {
      toast.error(
        "Operação cancelada pois você tentou deletar um ADM. Se você deseja realmente deletar um administrador, entre em contato com o desenvolvedor"
      );
      return;
    }

    try {
      await api.delete(`/users/${usr.objectId}`, {
        headers: {
          "Content-Type": "application/json",
          "X-Parse-Session-Token": user.sessionToken,
          "X-Parse-Master-Key": process.env.MASTER_KEY,
        },
      });

      user.is_adm && (await loadUsers());
      toast.success("Sucesso!");
    } catch (error) {
      toast.error("Erro ao deletar usuário");
    }
  };

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
        name,
        age,
        church,
        cell_phone,
        shirt_size,
        did_interview,
        is_filled_form,
        pastoral_letter,
        parents_authorization,
        is_ban,
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
        name,
        age,
        church,
        cell_phone,
        shirt_size,
        did_interview,
        is_filled_form,
        pastoral_letter,
        parents_authorization,
        is_ban,
      });
    } catch (error) {
      toast.error("Erro ao buscar informação do usuário");

      localStorage.removeItem("@VC-EAD-TOKEN");
      setUser({} as T.IUser);
      setUsers([]);
      router.push("/");
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
          age,
          cell_phone,
          church,
          did_interview,
          is_filled_form,
          name,
          pastoral_letter,
          shirt_size,
          parents_authorization,
          is_ban,
        } = usr;

        return {
          objectId,
          username,
          createdAt,
          is_adm,
          meeting_level,
          procedure_level,
          updatedAt,
          age,
          cell_phone,
          church,
          did_interview,
          is_filled_form,
          name,
          pastoral_letter,
          shirt_size,
          parents_authorization,
          is_ban,
        };
      });

      setUsers(usersList);
    } catch (error) {
      toast.error(
        "Erro ao buscar todos os usuários. Será necessário fazer o login novamente"
      );
      await userLogout();
      localStorage.removeItem("@VC-EAD-TOKEN");
      router.push("/");
      setUser({} as T.IUser);
      setUsers([]);
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
        name,
        age,
        church,
        cell_phone,
        shirt_size,
        did_interview,
        is_filled_form,
        pastoral_letter,
        parents_authorization,
        is_ban,
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
        name,
        age,
        church,
        cell_phone,
        shirt_size,
        did_interview,
        is_filled_form,
        pastoral_letter,
        parents_authorization,
        is_ban,
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

  const downloadSheet = async () => {
    const fileName = "Relação de Equipantes";

    const data = users.map((usr, i) => {
      const sheetObject: T.ISheetObject = {
        id: i + 1,
        Nome: usr.name !== "N/A" ? usr.name : usr.username,
        Idade: usr.age !== "N/A" ? parseInt(usr.age) : 0,
        Igreja: usr.church !== "N/A" ? usr.church : "NÃO INFORMADO",
        Contato: usr.cell_phone !== "N/A" ? usr.cell_phone : "NÃO INFORMADO",
        Link_Contato:
          usr.cell_phone === "N/A"
            ? "NÃO INFORMADO"
            : `https://wa.me/5581${usr.cell_phone
                .split(")")[1]
                .replaceAll(" ", "")
                .replace("-", "")}`,
        Tamanho_Camisa:
          usr.shirt_size !== "N/A" ? usr.shirt_size : "NÃO INFORMADO",
        Formulário: usr.is_filled_form ? "SIM" : "NÃO",
        Carta_Pastoral: usr.pastoral_letter ? "SIM" : "NÃO",
        Autorização_dos_Pais: usr.parents_authorization ? "SIM" : "NÃO",
        Entrevista: usr.did_interview ? "SIM" : "NÃO",
      };

      return sheetObject;
    });

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Equipantes");

    const headerRow = worksheet.addRow(Object.keys(data[0]));
    headerRow.eachCell((cell) => {
      cell.font = { bold: true };
      cell.alignment = { vertical: "middle", horizontal: "center" };
      cell.fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "FFDDDDDD" },
      };
      cell.border = {
        top: { style: "thin" },
        left: { style: "thin" },
        bottom: { style: "thin" },
        right: { style: "thin" },
      };
    });

    data.forEach((user) => {
      const row = worksheet.addRow(Object.values(user));
      row.eachCell((cell) => {
        cell.alignment = { vertical: "middle", horizontal: "center" };
        cell.border = {
          top: { style: "thin" },
          left: { style: "thin" },
          bottom: { style: "thin" },
          right: { style: "thin" },
        };
      });
    });

    worksheet.columns.forEach((column) => {
      let maxLength = 0;
      column.eachCell!({ includeEmpty: true }, (cell) => {
        const cellLength = cell.value ? cell.value.toString().length : 10;
        if (cellLength > maxLength) {
          maxLength = cellLength;
        }
      });
      column.width = maxLength + 2;
    });

    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    saveAs(blob, `${fileName}.xlsx`);
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
        deleteUser,
        loadUsers,
        retrieveUser,
        info,
        downloadSheet,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
