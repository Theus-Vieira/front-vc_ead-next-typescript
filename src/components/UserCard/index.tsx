import * as T from "@/types";
import * as S from "./styles";
import * as control from "@/controllers";
import { FiEdit3 } from "react-icons/fi";
import { useDarkMode } from "@/providers";

interface IUserCardProps {
  user: T.IUser;
}

export const UserCard = ({ user }: IUserCardProps) => {
  const meetingLevelInfo = `${
    user.is_adm ? control.meetings.length : user.meeting_level
  }/${control.meetings.length}`;
  const procedureLevelInfo = `${
    user.is_adm ? control.procedures.length : user.procedure_level
  }/${control.procedures.length}`;

  const { isDarkMode } = useDarkMode();

  return (
    <S.Container>
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
        <FiEdit3 color={isDarkMode ? "#e1b12c" : "#d35400"} />
      </div>
    </S.Container>
  );
};
