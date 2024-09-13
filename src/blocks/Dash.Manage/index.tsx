import { useUser } from "@/providers";
import * as S from "./styles";
import * as C from "@/components";
import { FiPlus } from "react-icons/fi";
import { v4 as uuid } from "uuid";

export const DashManage = () => {
  const { users } = useUser();

  return (
    <S.Container>
      <h2>Usuários</h2>

      <div className="box-add">
        <FiPlus />
      </div>

      <S.BoxCards>
        {users.map((usr) => (
          <C.UserCard key={uuid()} user={usr} />
        ))}
      </S.BoxCards>
    </S.Container>
  );
};
