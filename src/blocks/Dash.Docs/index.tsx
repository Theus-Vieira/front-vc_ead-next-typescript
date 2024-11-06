import Link from "next/link";
import * as S from "./styles";
import { useDarkMode, useUser } from "@/providers";

export const DashDocs = () => {
  const { isDarkMode } = useDarkMode();
  const {
    user: {
      is_filled_form,
      parents_authorization,
      pastoral_letter,
      did_interview,
    },
  } = useUser();

  return (
    <S.Container>
      <h2>Documentos</h2>
      <p>
        Aqui você irá baixar os arquivos para imprimir os documentos necessários
        para a sua candidatura à equipe do Acampamento Voluntários de Cristo.
      </p>

      <div className="box-links">
        <Link
          href="https://forms.gle/iiag1nAofTb6shsAA"
          target="_blank"
          title={!is_filled_form ? "Não entregue" : ""}
          className={!is_filled_form ? "not-delivered" : ""}
        >
          Formulário de Inscrição
        </Link>

        <Link
          href="/docs/pastoral_recommendation.pdf"
          download="Recomendação Pastoral"
          target="_blank"
          title={!pastoral_letter ? "Não entregue" : ""}
          className={!pastoral_letter ? "not-delivered" : ""}
        >
          Carta de Recomendação Pastoral
        </Link>

        <Link
          href="/docs/parents_authorization.pdf"
          download="Autorização dos Pais"
          target="_blank"
          title={!parents_authorization ? "Não entregue" : ""}
          className={!parents_authorization ? "not-delivered" : ""}
        >
          Autorização dos Pais
        </Link>

        <Link
          href="https://calendly.com/willbarros13/60min"
          target="_blank"
          title={!did_interview ? "Faça a sua entrevista" : ""}
          className={!did_interview ? "not-delivered" : ""}
        >
          Agende a Sua Entrevista
        </Link>
      </div>

      <h4 style={{ color: isDarkMode ? "yellow" : "red" }}>
        * Há documentos pendentes!
      </h4>
    </S.Container>
  );
};
