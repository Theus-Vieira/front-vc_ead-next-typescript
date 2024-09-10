import { ReactNode } from "react";
import * as S from "./styles";

interface IModal {
  children: ReactNode;
  onAction: () => void;
}

export const Modal = ({ children, onAction }: IModal) => {
  return (
    <S.Container>
      <S.DeadBox onClick={() => onAction()} />
      <S.BoxModal>{children}</S.BoxModal>
    </S.Container>
  );
};
