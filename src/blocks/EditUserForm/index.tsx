import * as T from "@/types";
import * as S from "./styles";
import * as C from "@/components";
import { editUserSchema } from "@/schemas/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useUser } from "@/providers";
import { FiLock, FiTrash, FiTrash2, FiUser } from "react-icons/fi";
import { toast } from "react-toastify";
import { useState } from "react";

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
  const { updateUser, deleteUser } = useUser();

  const [fillForm, setFillForm] = useState<string>(
    user.is_filled_form ? "SIM" : "NÃO"
  );
  const [pastoralLetter, setPastoralLetter] = useState<string>(
    user.pastoral_letter ? "SIM" : "NÃO"
  );
  const [didInterview, setDidInterview] = useState<string>(
    user.did_interview ? "SIM" : "NÃO"
  );
  const [parentsAuthorization, setParentsAuthorization] = useState<string>(
    user.parents_authorization ? "SIM" : "NÃO"
  );
  const [isBan, setIsBan] = useState<string>(user.is_ban ? "SIM" : "NÃO");

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IEdit>({
    reValidateMode: "onSubmit",
    resolver: zodResolver(editUserSchema),
  });

  const handleEdit = async (data: IEdit) => {
    const is_filled_form = fillForm === "SIM";
    const pastoral_letter = pastoralLetter === "SIM";
    const did_interview = didInterview === "SIM";
    const parents_authorization = parentsAuthorization === "SIM";
    const is_ban = isBan === "SIM";

    if (data.username === user.username) {
      delete data.username;
    }

    if (!data.password) {
      delete data.password;
    }

    if (
      !data.username &&
      !data.password &&
      is_filled_form === user.is_filled_form &&
      pastoral_letter === user.pastoral_letter &&
      did_interview === user.did_interview &&
      parents_authorization === user.parents_authorization &&
      is_ban === user.is_ban
    ) {
      toast.error("Não é possível editar sem novos dados!");
      reset();
      callBackEditFinish();
      return;
    }

    const updatedUser = {
      ...data,
      is_filled_form,
      pastoral_letter,
      did_interview,
      parents_authorization,
      is_ban,
    };

    await updateUser(updatedUser, user.objectId, true);
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
    await deleteUser(user);

    reset();
    callBackEditFinish();
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

      <div className="selects">
        <C.Select
          label="Formulário:"
          activeOption={fillForm}
          options={["SIM", "NÃO"]}
          setActiveOption={(value: string) => setFillForm(value)}
        />

        <C.Select
          label="Carta Pastoral:"
          activeOption={pastoralLetter}
          options={["SIM", "NÃO"]}
          setActiveOption={(value: string) => setPastoralLetter(value)}
        />
      </div>

      <div className="selects">
        <C.Select
          label="Entrevista: "
          activeOption={didInterview}
          options={["SIM", "NÃO"]}
          setActiveOption={(value: string) => setDidInterview(value)}
        />

        {user.age !== "N/A" && parseInt(user.age) < 18 && (
          <C.Select
            label="Autorização dos Pais: "
            activeOption={parentsAuthorization}
            options={["SIM", "NÃO"]}
            setActiveOption={(value: string) => setParentsAuthorization(value)}
          />
        )}
      </div>

      <div className="selects">
        <C.Select
          label="Banido: "
          activeOption={isBan}
          options={["SIM", "NÃO"]}
          setActiveOption={(value: string) => setIsBan(value)}
        />
      </div>

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
          onClick={handleReset}
        >
          Resetar
        </C.Button>

        <C.Button
          type="button"
          radius=".8rem"
          height="3.5rem"
          width="30%"
          bgColor="#c0392b"
          onClick={handleDelete}
        >
          <FiTrash2 />
        </C.Button>
      </div>
    </S.Container>
  );
};
