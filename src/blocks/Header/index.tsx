"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import * as S from "./styles";
import * as C from "@/components";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";

export const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigator = useRouter();

  const toggleIsOpen = () => setIsOpen(!isOpen);

  return (
    <>
      {isOpen && (
        <C.Drawer toggleIsOpen={toggleIsOpen}>
          <S.MobileNav>
            <Link href="https://forms.gle/iiag1nAofTb6shsAA" target="_blank">
              Inscrição
            </Link>

            <Link
              href="/docs/pastoral_recommendation.pdf"
              download="Recomendação Pastoral"
              target="_blank"
            >
              Carta de Recomendação Pastoral
            </Link>

            <Link
              href="/docs/parents_authorization.pdf"
              download="Autorização dos Pais"
              target="_blank"
            >
              Autorização dos Pais
            </Link>
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
          <Link href="https://forms.gle/iiag1nAofTb6shsAA" target="_blank">
            Inscrição
          </Link>

          <Link
            href="/docs/pastoral_recommendation.pdf"
            download="Recomendação Pastoral"
            target="_blank"
          >
            Carta de Recomendação Pastoral
          </Link>

          <Link
            href="/docs/parents_authorization.pdf"
            download="Autorização dos Pais"
            target="_blank"
          >
            Autorização dos Pais
          </Link>
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