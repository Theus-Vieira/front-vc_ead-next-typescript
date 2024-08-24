"use client";

import { useEffect, useState } from "react";
import { useUser } from "@/providers";
import { useRouter } from "next/navigation";
import * as S from "./styles";
import * as B from "@/blocks";
import * as C from "@/components";

// const MENUS_PERMITIDOS = ["HOME", "MEETINGS", "PROCEDURES", "DOCS"] as const;

// type MENU = (typeof MENUS_PERMITIDOS)[number];

type MENU = "HOME" | "MANAGE" | "MEETINGS" | "PROCEDURES" | "DOCS";

export default function DashboardPage() {
  const [content, setContent] = useState<MENU>("HOME");
  const router = useRouter();

  const { user, userLogout } = useUser();

  const changeContent = (value: MENU) => setContent(value);

  useEffect(() => {
    !user.objectId && router.push("/");
  }, []);

  return (
    <>
      {user.objectId && (
        <S.Container>
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
            <h1>dashboard</h1>
          </S.BoxContent>
        </S.Container>
      )}
    </>
  );
}
