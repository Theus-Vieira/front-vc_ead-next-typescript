import * as S from "./styles";
import * as C from "@/components";
import * as T from "@/types";
import { FiLock, FiUser } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/schemas/session";
import { useUser } from "@/providers";
import { useRouter } from "next/navigation";

export const LoginForm = () => {
  const router = useRouter();

  const { userLogin } = useUser();

  const {
    reset,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<T.ILoginSession>({
    reValidateMode: "onSubmit",
    resolver: zodResolver(loginSchema),
  });

  const handleLogin = async (data: T.ILoginSession) => {
    try {
      await userLogin(data);

      reset();

      setTimeout(() => {
        router.push("/dashboard");
      }, 3000);
    } catch (error) {}
  };

  return (
    <S.Container onSubmit={handleSubmit(handleLogin)}>
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
        error={errors.username?.message}
      />

      <C.Button radius=".8rem" height="3.5rem">
        Entrar
      </C.Button>

      <span>
        Não tem login? Entre em contato com a liderança do acampamento.
      </span>
    </S.Container>
  );
};
