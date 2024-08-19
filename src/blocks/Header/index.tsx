"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import * as S from "./styles";
import * as C from "@/components";
import { FiMenu } from "react-icons/fi";

export const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigator = useRouter();

  const toggleIsOpen = () => setIsOpen(!isOpen);

  return (
    <>
      {isOpen && (
        <C.Drawer toggleIsOpen={toggleIsOpen}>
          <S.MobileNav>
            <li>Menu 1</li>
            <li>Menu 2</li>
            <li>Menu 3</li>
            <li>Menu 4</li>
          </S.MobileNav>
        </C.Drawer>
      )}

      <S.Container>
        <img
          src="https://i.ibb.co/8z3006c/front-end-logo-color.png"
          alt="front_end_logo"
        />

        <S.Nav>
          <li>Menu 1</li>
          <li>Menu 2</li>
          <li>Menu 3</li>
          <li>Menu 4</li>
        </S.Nav>

        <div className="container-button">
          <C.Button
            primary={false}
            color="${props => props.theme.txtPrimary}"
            onClick={() => navigator.push("/login")}
          >
            Login
          </C.Button>
        </div>

        <C.DarkModeButton />

        <FiMenu onClick={toggleIsOpen} />
      </S.Container>
    </>
  );
};
