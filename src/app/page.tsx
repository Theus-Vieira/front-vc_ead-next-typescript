"use client";

import * as B from "@/blocks";
import * as S from "./styles";

export default function Home() {
  return (
    <>
      <B.Header />
      <B.HomeMainBlock />
      <S.Footer>
        <h2>© 2024 Matheus Vieira</h2>
      </S.Footer>
    </>
  );
}
