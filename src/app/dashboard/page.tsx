"use client";

import { useEffect, useState } from "react";
import { useUser } from "@/providers";
import { useRouter } from "next/navigation";
import * as S from "./styles";
import * as B from "@/blocks";
import * as C from "@/components";
import { FiMenu } from "react-icons/fi";

// const MENUS_PERMITIDOS = ["HOME", "MEETINGS", "PROCEDURES", "DOCS"] as const;

// type MENU = (typeof MENUS_PERMITIDOS)[number];

type MENU = "HOME" | "MANAGE" | "MEETINGS" | "PROCEDURES" | "DOCS";

export default function DashboardPage() {
  const [content, setContent] = useState<MENU>("HOME");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleIsOpen = () => setIsOpen(!isOpen);

  const router = useRouter();

  const { user, userLogout } = useUser();

  const changeContent = (value: MENU) => setContent(value);

  useEffect(() => {
    !user.objectId && router.push("/");
  }, []);

  return (
    <>
      {user.objectId && (
        <>
          {isOpen && (
            <C.Drawer
              toggleIsOpen={toggleIsOpen}
              buttonText="Logout"
              buttonRoute="/"
              buttonAction={async () => await userLogout()}
            >
              <B.DashMenu changeContent={changeContent} content={content} />
            </C.Drawer>
          )}
          <S.Container>
            <S.HeaderMobile>
              <FiMenu onClick={toggleIsOpen} />
            </S.HeaderMobile>

            <S.BoxMenu>
              <div className="box-dark-mode">
                <C.DarkModeButton />
              </div>

              <nav className="box-menu">
                <B.DashMenu changeContent={changeContent} content={content} />
              </nav>

              <div className="box-button">
                <C.Button width="70%" onClick={userLogout}>
                  Logout
                </C.Button>
              </div>
            </S.BoxMenu>

            <S.BoxContent>
              {content === "HOME" ? (
                <B.DashHome changeContent={changeContent} content={content} />
              ) : content === "MANAGE" ? (
                <B.DashManage changeContent={changeContent} content={content} />
              ) : content === "MEETINGS" ? (
                <B.DashMeetings
                  changeContent={changeContent}
                  content={content}
                />
              ) : content === "PROCEDURES" ? (
                <B.DashProcedures
                  changeContent={changeContent}
                  content={content}
                />
              ) : (
                <B.DashDocs changeContent={changeContent} content={content} />
              )}
            </S.BoxContent>
          </S.Container>
        </>
      )}
    </>
  );
}
