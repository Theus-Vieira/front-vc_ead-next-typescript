"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import * as S from "./styles";
import * as C from "@/components";
import { EnrollmentForm } from "../EnrollmentForm";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";

export const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isEnrollmentOpen, setIsEnrollmentOpen] = useState<boolean>(false);

  const navigator = useRouter();

  const toggleIsOpen = () => setIsOpen(!isOpen);

  const toggleIsEnrollmentOpen = () => setIsEnrollmentOpen(!isEnrollmentOpen);

  return (
    <>
      {isEnrollmentOpen && (
        <C.Modal onAction={toggleIsEnrollmentOpen}>
          <EnrollmentForm callbackFinish={toggleIsEnrollmentOpen} />
        </C.Modal>
      )}

      {isOpen && (
        <C.Drawer
          toggleIsOpen={toggleIsOpen}
          buttonText="Acessar"
          buttonRoute="/login"
        >
          <S.MobileNav>
            <li onClick={() => navigator.push("/")}>Home</li>

            <li
              onClick={() => {
                toggleIsOpen();
                toggleIsEnrollmentOpen();
              }}
            >
              Inscrição
            </li>

            <Link
              href="https://drive.google.com/file/d/1Fkg3FcBMBkPxhctCp1lre1L7rplp_EQz/view?usp=sharing"
              target="_blank"
            >
              Leitura da Temporada
            </Link>

            <li onClick={() => navigator.push("/aboutus")}>Quem Somos</li>
          </S.MobileNav>
        </C.Drawer>
      )}

      <S.Container>
        <div className="container_image">
          <img
            src="https://i.ibb.co/X8qTjz7/logo-vc.png"
            alt="front_end_logo"
          />
        </div>

        <S.Nav>
          <li onClick={() => navigator.push("/")}>Home</li>

          <li onClick={toggleIsEnrollmentOpen}>Inscrição</li>

          <Link
            href="https://drive.google.com/file/d/1Fkg3FcBMBkPxhctCp1lre1L7rplp_EQz/view?usp=sharing"
            target="_blank"
          >
            Leitura da Temporada
          </Link>

          <li onClick={() => navigator.push("/aboutus")}>Quem Somos</li>
        </S.Nav>

        <div className="container-button">
          <C.Button
            primary={false}
            color="#4a2807"
            onClick={() => navigator.push("/login")}
          >
            Acessar
          </C.Button>
        </div>

        <C.DarkModeButton />

        <FiMenu onClick={toggleIsOpen} />
      </S.Container>
    </>
  );
};
