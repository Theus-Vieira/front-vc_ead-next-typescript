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
            Nome:{" "}
            <span className={name === "N/A" ? "not-filled" : ""}>
              {name === "N/A" ? "NÃO PREENCHIDO" : name}
            </span>
          </li>
          <li>
            Idade:{" "}
            <span className={age === "N/A" ? "not-filled" : ""}>
              {age === "N/A" ? "NÃO PREENCHIDO" : age}
            </span>
          </li>
          <li>
            Contato:{" "}
            <span className={cell_phone === "N/A" ? "not-filled" : ""}>
              {cell_phone === "N/A" ? "NÃO PREENCHIDO" : cell_phone}
            </span>
          </li>
          <li>
            Igreja:{" "}
            <span className={church === "N/A" ? "not-filled" : ""}>
              {church === "N/A" ? "NÃO PREENCHIDO" : church}
            </span>
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
