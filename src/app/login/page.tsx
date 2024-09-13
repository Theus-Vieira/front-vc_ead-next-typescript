"use client";

import * as S from "./styles";
import * as B from "@/blocks";

export default function LoginPage() {
  return (
    <S.Container>
      <S.BoxLogin>
        <div className="box_title">
          <h1>Login</h1>
          <p>Entre com suas credenciais para continuar</p>
        </div>

        <B.LoginForm />
      </S.BoxLogin>
    </S.Container>
  );
}
