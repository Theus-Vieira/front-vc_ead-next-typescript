import { useUser } from "@/providers";
import * as S from "./styles";
import * as C from "@/components";
import * as B from "@/blocks";
import { FiPlus } from "react-icons/fi";
import { v4 as uuid } from "uuid";
import { useEffect, useState } from "react";

export const DashManage = () => {
  const { users, loadUsers } = useUser();
  const [isAddOpen, setIsAddOpen] = useState<boolean>(false);

  const toggleIsAddOpen = () => setIsAddOpen(!isAddOpen);

  useEffect(() => {
    users.length === 0 && loadUsers();
  }, []);

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

        <div className="box-add">
          <FiPlus onClick={toggleIsAddOpen} />
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

          <div className="box-action">
            <h3>Ações</h3>
          </div>
        </S.BoxHeader>

        <S.BoxCards>
          {users.map((usr) => (
            <C.UserCard key={uuid()} user={usr} />
          ))}
        </S.BoxCards>
      </S.Container>
    </>
  );
};
