"use client";

import { useEffect, useState } from "react";
import { useChat, useUser } from "@/providers";
import { useRouter } from "next/navigation";
import * as S from "./styles";
import * as B from "@/blocks";
import * as C from "@/components";
import { FiMenu } from "react-icons/fi";

// const MENUS_PERMITIDOS = ["HOME", "MEETINGS", "PROCEDURES", "DOCS"] as const;

// type MENU = (typeof MENUS_PERMITIDOS)[number];

type MENU =
  | "HOME"
  | "MANAGE"
  | "MEETINGS"
  | "PROCEDURES"
  | "DOCS"
  | "PROFILE"
  | "LIBRARY"
  | "CHAT";

export default function DashboardPage() {
  const [content, setContent] = useState<MENU>("HOME");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleIsOpen = () => setIsOpen(!isOpen);

  const router = useRouter();

  const { user, userLogout, retrieveUser } = useUser();
  const { connectChat, disconnectChat, clearMessages, socket } = useChat();

  const changeContent = (value: MENU) => setContent(value);

  useEffect(() => {
    !user.objectId && router.push("/");

    if (user && !user.is_ban) {
      if (!user.is_ban) {
        connectChat();
      }

      window.addEventListener("beforeunload", () => {
        disconnectChat();
        clearMessages();
      });

      return () => {
        socket?.off("chat");
        socket?.off("users");
      };
    }
  }, []);

  return (
    <>
      {user.objectId && (
        <>
          {isOpen && (
            <>
              <C.Drawer
                toggleIsOpen={toggleIsOpen}
                buttonText="Logout"
                buttonRoute="/"
                buttonAction={async () => {
                  await userLogout();
                }}
              >
                <B.DashMenu
                  changeContent={changeContent}
                  content={content}
                  callback={toggleIsOpen}
                />

                <S.Footer
                  style={{
                    position: "fixed",
                    bottom: "1rem",
                  }}
                >
                  <h2
                    style={{
                      color: "#d35400",
                    }}
                  >
                    © 2024 Matheus Vieira
                  </h2>
                </S.Footer>
              </C.Drawer>
            </>
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

              <S.Footer>
                <h2>© 2024 Matheus Vieira</h2>
              </S.Footer>
            </S.BoxMenu>

            <S.BoxContent>
              {content === "HOME" ? (
                <B.DashHome changeContent={changeContent} />
              ) : content === "MANAGE" ? (
                <B.DashManage />
              ) : content === "MEETINGS" ? (
                <B.DashMeetings />
              ) : content === "PROCEDURES" ? (
                <B.DashProcedures />
              ) : content === "DOCS" ? (
                <B.DashDocs />
              ) : content === "LIBRARY" ? (
                <B.DashLibrary />
              ) : content === "CHAT" ? (
                <B.DashChat />
              ) : (
                <B.DashProfile />
              )}
            </S.BoxContent>
          </S.Container>
        </>
      )}
    </>
  );
}
