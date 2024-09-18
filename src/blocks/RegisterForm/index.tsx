import { FiLock, FiUser } from "react-icons/fi";
import * as S from "./styles";
import * as C from "@/components";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createUserSchema } from "@/schemas/user";
import { useUser } from "@/providers";
import { ICreateUser } from "@/types";

interface ICreate {
  username: string;
  password: string;
}

interface IRegiterFormProps {
  callbackCreateFinish: () => void;
}

export const RegisterForm = ({ callbackCreateFinish }: IRegiterFormProps) => {
  const { createUser } = useUser();

  const {
    reset,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ICreate>({
    reValidateMode: "onSubmit",
    resolver: zodResolver(createUserSchema),
  });

  const handleRegister = async (data: ICreate) => {
    const createdUser: ICreateUser = {
      ...data,
      is_adm: false,
      meeting_level: 0,
      procedure_level: 0,
    };

    await createUser(createdUser);

    reset();
    callbackCreateFinish();
  };

  return (
    <S.Container onSubmit={handleSubmit(handleRegister)}>
      <C.Input
        label="Usuário"
        type="text"
        height="3.5rem"
        icon={FiUser}
        placeholder="Digite seu nome de usuário"
        {...register("username")}
        error={errors.username?.message}
      />
      <C.Input
        label="Senha"
        type="password"
        height="3.5rem"
        icon={FiLock}
        placeholder="Digite sua senha"
        {...register("password")}
        error={errors.password?.message}
      />

      <C.Button type="submit" radius=".8rem" height="3.5rem">
        Cadastrar
      </C.Button>
    </S.Container>
  );
};
