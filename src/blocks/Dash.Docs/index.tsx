import Link from "next/link";
import * as S from "./styles";

export const DashDocs = () => {
  return (
    <S.Container>
      <h2>Documentos</h2>
      <p>
        Aqui você irá baixar os arquivos para imprimir os documentos necessários
        para a sua candidatura à equipe do Acampamento Voluntários de Cristo.
      </p>

      <div className="box-links">
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
      </div>
    </S.Container>
  );
};
