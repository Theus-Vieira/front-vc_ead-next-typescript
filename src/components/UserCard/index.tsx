import * as T from "@/types";
import * as S from "./styles";
import * as B from "@/blocks";
import * as control from "@/controllers";
import { FiEdit3, FiEye } from "react-icons/fi";
import { FaCheck, FaExclamationCircle } from "react-icons/fa";
import { useDarkMode } from "@/providers";
import { useState } from "react";
import { Modal } from "../modal";
import Link from "next/link";

interface IUserCardProps {
  user: T.IUser;
}

export const UserCard = ({ user }: IUserCardProps) => {
  const [isEditOpen, setIsEditOpen] = useState<boolean>(false);
  const [isViewOpen, setIsViewOpen] = useState<boolean>(false);

  const toggleIsEditOpen = () => setIsEditOpen(!isEditOpen);
  const toggleIsViewOpen = () => setIsViewOpen(!isViewOpen);

  const meetingLevelInfo = `${
    user.is_adm ? control.meetings.length : user.meeting_level
  }/${control.meetings.length}`;
  const procedureLevelInfo = `${
    user.is_adm ? control.procedures.length : user.procedure_level
  }/${control.procedures.length}`;

  const isDocsComplete =
    user.is_adm ||
    (user.is_filled_form && user.pastoral_letter && user.parents_authorization);

  const { isDarkMode } = useDarkMode();

  const userDDD = user.cell_phone.split(")")[0].replace("(", "");
  const userPhoneNumber =
    user.cell_phone !== "N/A"
      ? user.cell_phone.split(")")[1].replaceAll(" ", "").replace("-", "")
      : "";

  const whatsLink =
    user.cell_phone === "N/A"
      ? "Não Preenchido"
      : `https://wa.me/55${userDDD}${userPhoneNumber}`;

  return (
    <>
      {isEditOpen && (
        <Modal onAction={toggleIsEditOpen}>
          <S.ContainerEdit>
            <h2>Editar Equipante</h2>
            <B.EditUserForm user={user} callBackEditFinish={toggleIsEditOpen} />
          </S.ContainerEdit>
        </Modal>
      )}

      {isViewOpen && (
        <Modal onAction={toggleIsViewOpen}>
          <S.ContainerView>
            <h2>{user.username}</h2>

            <ul>
              <li>
                Nome:{" "}
                <span>
                  {user.name !== "N/A" ? user.name : "Não preenchido"}
                </span>
              </li>

              <li>
                Idade:{" "}
                <span>{user.age !== "N/A" ? user.age : "Não preenchido"}</span>
              </li>

              <li>
                Tamanho da Camisa:{" "}
                <span>
                  {user.shirt_size !== "N/A"
                    ? user.shirt_size
                    : "Não preenchido"}
                </span>
              </li>

              <li>
                Igreja:{" "}
                <span>
                  {user.church !== "N/A" ? user.church : "Não preenchido"}
                </span>
              </li>

              <li>
                Whatsapp:{" "}
                {user.cell_phone === "N/A" ? (
                  <span>{whatsLink}</span>
                ) : (
                  <Link href={whatsLink} className="whats" target="_blank">
                    {user.cell_phone}
                  </Link>
                )}
              </li>

              <li>
                Formulário: <span>{user.is_filled_form ? "Sim" : "Não"}</span>
              </li>

              <li>
                Carta Pastoral:{" "}
                <span>{user.pastoral_letter ? "Sim" : "Não"}</span>
              </li>

              <li>
                Fez Entrevista:{" "}
                <span>{user.did_interview ? "Sim" : "Não"}</span>
              </li>

              {user.age !== "N/A" && parseInt(user.age) < 18 && (
                <li>
                  Autorização dos Pais:{" "}
                  <span>
                    {user.is_adm || user.parents_authorization ? "Sim" : "Não"}
                  </span>
                </li>
              )}

              <li>
                Assistiu as Reuniões:{" "}
                <span>
                  {user.is_adm || user.meeting_level === control.meetings.length
                    ? "Sim"
                    : "Não"}
                </span>
              </li>

              {/* <li>
                Assistiu os Procedimentos:{" "}
                <span>
                  {user.is_adm || user.meeting_level === control.meetings.length
                    ? "Sim"
                    : "Não"}
                </span>
              </li> */}
            </ul>
          </S.ContainerView>
        </Modal>
      )}

      <S.Container isAdm={user.is_adm}>
        <div className="box-username" onClick={toggleIsViewOpen}>
          <h3 title={user.username}>{user.username}</h3>
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

        <div className="box-level">
          {isDocsComplete ? (
            <FaCheck color="green" title="Documentação Completa" />
          ) : (
            <FaExclamationCircle color="red" title="Documentação Incompleta" />
          )}
        </div>

        <div className="box-action" onClick={toggleIsEditOpen}>
          <FiEdit3 color={isDarkMode ? "#e1b12c" : "#d35400"} />
        </div>
      </S.Container>
    </>
  );
};
