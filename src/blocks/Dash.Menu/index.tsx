import { useUser } from "@/providers";
import * as S from "./styles";

interface IDashMenuProps {
  content:
    | "HOME"
    | "MANAGE"
    | "MEETINGS"
    | "PROCEDURES"
    | "DOCS"
    | "PROFILE"
    | "LIBRARY";
  changeContent: (
    value:
      | "HOME"
      | "MANAGE"
      | "MEETINGS"
      | "PROCEDURES"
      | "DOCS"
      | "PROFILE"
      | "LIBRARY"
  ) => void;
}

export const DashMenu = ({ changeContent, content }: IDashMenuProps) => {
  const { user } = useUser();

  return (
    <S.Container>
      <li
        className={content === "HOME" ? "selected" : "deselected"}
        onClick={() => {
          content !== "HOME" && changeContent("HOME");
        }}
      >
        Home
      </li>

      <li
        className={content === "PROFILE" ? "selected" : "deselected"}
        onClick={() => {
          content !== "PROFILE" && changeContent("PROFILE");
        }}
      >
        Perfil
      </li>

      {user.is_adm && (
        <li
          className={content === "MANAGE" ? "selected" : "deselected"}
          onClick={() => {
            content !== "MANAGE" && changeContent("MANAGE");
          }}
        >
          Gerenciar
        </li>
      )}

      <li
        className={content === "MEETINGS" ? "selected" : "deselected"}
        onClick={() => {
          content !== "MEETINGS" && changeContent("MEETINGS");
        }}
      >
        Reuniões
      </li>

      <li
        className={content === "PROCEDURES" ? "selected" : "deselected"}
        onClick={() => {
          content !== "PROCEDURES" && changeContent("PROCEDURES");
        }}
      >
        Procedimentos
      </li>

      <li
        className={content === "LIBRARY" ? "selected" : "deselected"}
        onClick={() => {
          content !== "LIBRARY" && changeContent("LIBRARY");
        }}
      >
        Biblioteca
      </li>

      <li
        className={content === "DOCS" ? "selected" : "deselected"}
        onClick={() => {
          content !== "DOCS" && changeContent("DOCS");
        }}
      >
        Documentos
      </li>
    </S.Container>
  );
};
