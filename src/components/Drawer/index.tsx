"use client";

import { ReactNode } from "react";
import { useRouter } from "next/navigation";

import * as S from "./styles";
import * as C from "@/components";

interface IDrawer {
  toggleIsOpen: () => void;
  children: ReactNode;
}

export const Drawer = ({ toggleIsOpen, children }: IDrawer) => {
  const navigator = useRouter();

  return (
    <>
      <S.DeadArea onClick={toggleIsOpen} />
      <S.Container
        transition={{ duration: 0.3, type: "spring", stiffness: 80 }}
        initial={{ opacity: 0, x: -300 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <div className="dark-mode-container">
          <C.DarkModeButton />
        </div>

        <div className="container-children">{children}</div>

        <div className="container-button">
          <C.Button onClick={() => navigator.push("/dashboard")}>
            Acessar
          </C.Button>
        </div>
      </S.Container>
    </>
  );
};
