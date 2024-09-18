import * as T from "@/types";
import * as S from "./styles";
import * as C from "@/components";
import { editUserSchema } from "@/schemas/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useUser } from "@/providers";
import { FiLock, FiTrash, FiTrash2, FiUser } from "react-icons/fi";

interface IEdit {
  username?: string;
  password?: string;
}

interface IEditUserFormProps {
  user: T.IUser;
  callBackEditFinish: () => void;
}

export const EditUserForm = ({
  user,
  callBackEditFinish,
}: IEditUserFormProps) => {
  const { updateUser } = useUser();

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IEdit>({
    reValidateMode: "onSubmit",
    resolver: zodResolver(editUserSchema),
  });

  const handleEdit = (data: IEdit) => {
    console.log(data);

    reset();
    callBackEditFinish();
  };

  const handleReset = async () => {
    await updateUser(
      { meeting_level: 0, procedure_level: 0 },
      user.objectId,
      true
    );

    reset();
    callBackEditFinish();
  };

  const handleDelete = async () => {
    // deletar usuário
  };

  return (
    <S.Container onSubmit={handleSubmit(handleEdit)}>
      <C.Input
        label="Usuário"
        defaultValue={user.username}
        type="text"
        height="3.5rem"
        icon={FiUser}
        placeholder="digite um nome para usuário"
        {...register("username")}
        error={errors.username?.message}
      />

      <C.Input
        label="Senha"
        type="password"
        height="3.5rem"
        icon={FiLock}
        placeholder="digite uma nova senha para o usuário"
        {...register("password")}
        error={errors.password?.message}
      />

      <C.Button type="submit" radius=".8rem" height="3.5rem">
        Editar
      </C.Button>

      <div className="box-actions">
        <C.Button
          type="button"
          radius=".8rem"
          height="3.5rem"
          width="70%"
          bgColor="#e1b12c"
          color="#2f3640"
        >
          Resetar
        </C.Button>

        <C.Button
          type="button"
          radius=".8rem"
          height="3.5rem"
          width="30%"
          bgColor="#c0392b"
        >
          <FiTrash2 />
        </C.Button>
      </div>
    </S.Container>
  );
};
