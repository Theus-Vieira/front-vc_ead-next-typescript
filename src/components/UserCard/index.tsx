import * as T from "@/types";
import * as S from "./styles";
import * as control from "@/controllers";

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
        <h3>{user.username}</h3>
      </div>

      <div className="box-level">
        <h3>{meetingLevelInfo}</h3>
      </div>

      <div className="box-level">
        <h3>{procedureLevelInfo}</h3>
      </div>

      <div className="box-action"></div>
    </S.Container>
  );
};
