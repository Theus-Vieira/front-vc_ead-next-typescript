import * as T from "@/types";
import * as S from "./styles";
import * as control from "@/controllers";
import { FiEdit3 } from "react-icons/fi";

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

  return (
    <S.Container>
      <div className="box-username">
        <h3 title={user.username}>
          {user.username} nome muito longo pra caber na parada ali
        </h3>
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
        <FiEdit3 color="#e1b12c" />
      </div>
    </S.Container>
  );
};
