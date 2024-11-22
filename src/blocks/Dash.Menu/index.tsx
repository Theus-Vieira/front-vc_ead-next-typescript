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
    | "LIBRARY"
    | "CHAT";
  changeContent: (
    value:
      | "HOME"
      | "MANAGE"
      | "MEETINGS"
      | "PROCEDURES"
      | "DOCS"
      | "PROFILE"
      | "LIBRARY"
      | "CHAT"
  ) => void;

  callback?: () => void;
}

export const DashMenu = ({
  changeContent,
  content,
  callback,
}: IDashMenuProps) => {
  const { user } = useUser();

  return (
    <S.Container>
      <li
        className={content === "HOME" ? "selected" : "deselected"}
        onClick={() => {
          content !== "HOME" && changeContent("HOME");
          callback && callback();
        }}
      >
        Home
      </li>

      <li
        className={content === "PROFILE" ? "selected" : "deselected"}
        onClick={() => {
          content !== "PROFILE" && changeContent("PROFILE");
          callback && callback();
        }}
      >
        Perfil
      </li>

      {user.is_adm && (
        <li
          className={content === "MANAGE" ? "selected" : "deselected"}
          onClick={() => {
            content !== "MANAGE" && changeContent("MANAGE");
            callback && callback();
          }}
        >
          Gerenciar
        </li>
      )}

      <li
        className={content === "MEETINGS" ? "selected" : "deselected"}
        onClick={() => {
          content !== "MEETINGS" && changeContent("MEETINGS");
          callback && callback();
        }}
      >
        Reuniões
      </li>

      <li
        className={content === "PROCEDURES" ? "selected" : "deselected"}
        onClick={() => {
          content !== "PROCEDURES" && changeContent("PROCEDURES");
          callback && callback();
        }}
      >
        Procedimentos
      </li>

      <li
        className={content === "LIBRARY" ? "selected" : "deselected"}
        onClick={() => {
          content !== "LIBRARY" && changeContent("LIBRARY");
          callback && callback();
        }}
      >
        Biblioteca
      </li>

      <li
        className={content === "CHAT" ? "selected" : "deselected"}
        onClick={() => {
          content !== "CHAT" && changeContent("CHAT");
          callback && callback();
        }}
      >
        Chat
      </li>

      <li
        className={content === "DOCS" ? "selected" : "deselected"}
        onClick={() => {
          content !== "DOCS" && changeContent("DOCS");
          callback && callback();
        }}
      >
        Documentos
      </li>
    </S.Container>
  );
};
