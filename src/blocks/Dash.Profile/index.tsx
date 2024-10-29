import { useDarkMode, useUser } from "@/providers";
import * as S from "./styles";
import * as C from "@/components";
import { FaEdit } from "react-icons/fa";
import { useState } from "react";
import { EditProfileForm } from "../EditProfileForm ";

export const DashProfile = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const {
    user: { name, age, cell_phone, church, shirt_size },
  } = useUser();

  const { isDarkMode } = useDarkMode();

  const toggleIsOpen = () => setIsOpen(!isOpen);

  return (
    <>
      {isOpen && (
        <C.Modal onAction={toggleIsOpen}>
          <h2>Editar Perfil</h2>

          <EditProfileForm callBackEditFinish={toggleIsOpen} />
        </C.Modal>
      )}

      <S.Container>
        <h2>Perfil</h2>
        <FaEdit onClick={toggleIsOpen} />

        <S.List>
          <li>
            Nome: <span>{name}</span>
          </li>
          <li>
            Idade: <span>{age}</span>
          </li>
          <li>
            Contato: <span>{cell_phone}</span>
          </li>
          <li>
            Igreja: <span>{church}</span>
          </li>
          <li>
            Tamanho da Camisa: <span>{shirt_size}</span>
          </li>
        </S.List>

        {name === "N/A" && (
          <h4 style={{ color: isDarkMode ? "yellow" : "red" }}>
            * Seu perfil está incompleto!
          </h4>
        )}
      </S.Container>
    </>
  );
};
