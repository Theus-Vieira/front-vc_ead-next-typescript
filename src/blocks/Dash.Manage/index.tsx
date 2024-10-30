import { useUser } from "@/providers";
import * as S from "./styles";
import * as C from "@/components";
import * as B from "@/blocks";
import * as T from "@/types";
import { FiSearch } from "react-icons/fi";
import { FaDownload, FaPlus } from "react-icons/fa6";
import { v4 as uuid } from "uuid";
import { useEffect, useState } from "react";

export const DashManage = () => {
  const { users, loadUsers, downloadSheet } = useUser();

  const [usersToShow, setUsersToShow] = useState<T.IUser[]>([]);
  const [filter, setFilter] = useState<string>("");

  const [isAddOpen, setIsAddOpen] = useState<boolean>(false);

  const toggleIsAddOpen = () => setIsAddOpen(!isAddOpen);

  const filterUsers = (value: string) => {
    if (value === "") {
      setUsersToShow([]);
      return;
    }

    value = value.trim().toLowerCase();

    const newUsersToShow = users.filter(
      (usr) =>
        usr.username.toLowerCase().includes(value) ||
        usr.name.toLowerCase().includes(value)
    );

    setUsersToShow(newUsersToShow);
  };

  useEffect(() => {
    users.length === 0 && loadUsers();
  }, []);

  useEffect(() => {
    filterUsers(filter);
  }, [filter]);

  return (
    <>
      {isAddOpen && (
        <C.Modal onAction={toggleIsAddOpen}>
          <S.ContainerRegister>
            <h2>Cadastrar Equipante</h2>
            <B.RegisterForm callbackCreateFinish={toggleIsAddOpen} />
          </S.ContainerRegister>
        </C.Modal>
      )}

      <S.Container>
        <h2>Usuários</h2>

        <div className="container-actions">
          <C.Input
            placeholder="Pesquisar equipante"
            height="100%"
            icon={FiSearch}
            value={filter}
            onChange={(e) => {
              setFilter(e.target.value);
            }}
          />

          <FaPlus onClick={toggleIsAddOpen} title="Adicionar Equipante" />

          <FaDownload
            onClick={downloadSheet}
            title="Baixar Planilha de Equipantes"
          />
        </div>

        <S.BoxHeader>
          <div className="box-username">
            <h3>Usuário</h3>
          </div>

          <div className="box-level">
            <h3>Reuniões</h3>
          </div>

          <div className="box-level">
            <h3>Procedimentos</h3>
          </div>

          <div className="box-level">
            <h3>Documentação</h3>
          </div>

          <div className="box-action">
            <h3>Ações</h3>
          </div>
        </S.BoxHeader>

        <S.BoxCards>
          {filter === ""
            ? users.map((usr) => <C.UserCard key={uuid()} user={usr} />)
            : usersToShow.map((usr) => <C.UserCard key={uuid()} user={usr} />)}
        </S.BoxCards>
      </S.Container>
    </>
  );
};
