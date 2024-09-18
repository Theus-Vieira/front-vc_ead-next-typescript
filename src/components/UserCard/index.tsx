import * as T from "@/types";
import * as S from "./styles";
import * as B from "@/blocks";
import * as control from "@/controllers";
import { FiEdit3 } from "react-icons/fi";
import { useDarkMode } from "@/providers";
import { useState } from "react";
import { Modal } from "../modal";

interface IUserCardProps {
  user: T.IUser;
}

export const UserCard = ({ user }: IUserCardProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleIsOpen = () => setIsOpen(!isOpen);

  const meetingLevelInfo = `${
    user.is_adm ? control.meetings.length : user.meeting_level
  }/${control.meetings.length}`;
  const procedureLevelInfo = `${
    user.is_adm ? control.procedures.length : user.procedure_level
  }/${control.procedures.length}`;

  const { isDarkMode } = useDarkMode();

  return (
    <>
      {isOpen && (
        <Modal onAction={toggleIsOpen}>
          <S.ContainerEdit>
            <h2>Editar Equipante</h2>
            <B.EditUserForm user={user} callBackEditFinish={toggleIsOpen} />
          </S.ContainerEdit>
        </Modal>
      )}
      <S.Container isAdm={user.is_adm}>
        <div className="box-username">
          <h3 title={user.username}>{user.username}</h3>
        </div>

        <div className="box-level">
          <h3 title={`Nível de Reuniões: ${meetingLevelInfo}`}>
            {meetingLevelInfo}
          </h3>
        </div>

        <div className="box-level">
          <h3 title={`Nível de Procedimentos: ${procedureLevelInfo}`}>
            {procedureLevelInfo}
          </h3>
        </div>

        <div className="box-action">
          <FiEdit3
            color={isDarkMode ? "#e1b12c" : "#d35400"}
            onClick={toggleIsOpen}
          />
        </div>
      </S.Container>
    </>
  );
};
