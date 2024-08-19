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
            <Link
              href="https://marivalcontas.wixsite.com/vccamping"
              target="_blank"
            >
              Acampamento VC
            </Link>

            <Link href="https://www.instagram.com/acampvc/" target="_blank">
              Insta
            </Link>
            <li>Menu 3</li>
            <li>Menu 4</li>
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
          <Link
            href="https://marivalcontas.wixsite.com/vccamping"
            target="_blank"
          >
            Acampamento VC
          </Link>

          <Link href="https://www.instagram.com/acampvc/" target="_blank">
            Insta
          </Link>

          <li>Menu 3</li>
          <li>Menu 4</li>
        </S.Nav>

        <div className="container-button">
          <C.Button
            primary={false}
            color="#4a2807"
            onClick={() => navigator.push("/dashboard")}
          >
            Curso
          </C.Button>
        </div>

        <C.DarkModeButton />

        <FiMenu onClick={toggleIsOpen} />
      </S.Container>
    </>
  );
};
