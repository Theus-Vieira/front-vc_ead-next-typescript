import * as S from "./styles";
import * as C from "@/components";
import { editProfileSchema } from "@/schemas/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useUser } from "@/providers";
import { FaPersonChalkboard, FaChurch, FaWhatsapp } from "react-icons/fa6";
import { GiAges } from "react-icons/gi";
import { useState } from "react";
import { toast } from "react-toastify";

interface IEdit {
  name: string;
  age: string;
  cell_phone: string;
  church: string;
  shirt_size?: string;
}

interface IEditProfileFormProps {
  callBackEditFinish: () => void;
}

export const EditProfileForm = ({
  callBackEditFinish,
}: IEditProfileFormProps) => {
  const {
    updateUser,
    user: { age, cell_phone, church, name, shirt_size, objectId },
  } = useUser();

  const [shirtOpt, setShirtOpt] = useState(shirt_size);

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IEdit>({
    reValidateMode: "onSubmit",
    resolver: zodResolver(editProfileSchema),
  });

  const handleEdit = async (data: IEdit) => {
    data.shirt_size = shirtOpt;

    if (
      data.age !== age ||
      data.cell_phone !== cell_phone ||
      data.church !== church ||
      data.name !== name ||
      data.shirt_size !== shirt_size
    ) {
      await updateUser(data, objectId, false);
      reset();
    } else {
      toast.warning("Nada para alterar");
    }

    callBackEditFinish();
  };

  return (
    <S.Container onSubmit={handleSubmit(handleEdit)}>
      <C.Input
        label="Nome"
        defaultValue={name !== "N/A" ? name : ""}
        type="text"
        height="3.5rem"
        icon={FaPersonChalkboard}
        placeholder="digite seu nome"
        {...register("name")}
        error={errors.name?.message}
      />

      <C.Input
        label="Idade"
        defaultValue={age !== "N/A" ? age : ""}
        type="number"
        height="3.5rem"
        icon={GiAges}
        placeholder="digite sua idade"
        {...register("age")}
        error={errors.age?.message}
      />

      <C.Input
        label="Contato (whatsapp)"
        defaultValue={cell_phone !== "N/A" ? cell_phone : ""}
        type="text"
        height="3.5rem"
        icon={FaWhatsapp}
        placeholder="digite número para contato"
        {...register("cell_phone")}
        mask="(99) 9 9999-9999"
        error={errors.cell_phone?.message}
      />

      <C.Input
        label="Igreja"
        defaultValue={church !== "N/A" ? church : ""}
        type="text"
        height="3.5rem"
        icon={FaChurch}
        placeholder="Ex: Igreja Presbiteriana Vida"
        {...register("church")}
        error={errors.church?.message}
      />

      <C.Select
        activeOption={shirtOpt}
        label="Tamanho da Camisa:"
        options={["PP", "P", "M", "G", "GG", "EG"]}
        setActiveOption={(value: string) => {
          setShirtOpt(value);
        }}
      />

      <C.Button type="submit" radius=".8rem" height="3.5rem">
        Editar
      </C.Button>
    </S.Container>
  );
};
