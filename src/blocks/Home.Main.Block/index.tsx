import Link from "next/link";
import * as S from "./styles";

export const HomeMainBlock = () => {
  return (
    <S.Container>
      <S.BoxLeft>
        <div>
          <img src="https://i.ibb.co/6H0rVgL/biga.jpg" alt="Abiga's" />
        </div>
      </S.BoxLeft>

      <S.BoxRight>
        <h2>Olá, jovem candidato!</h2>

        <p>
          Neste portal você encontrará tudo o que é necessário para se tornar um
          equipante do Acampamento VC.
        </p>

        <p>
          Antes de tudo você deverá preencher o formulário de inscrição do
          equipante que está disponibilizado nesta página e comparecer às
          reuniões.
        </p>

        <p>
          Depois, deverá baixar e imprimir a Carta de Recomendação Pastoral e a
          Autorização dos Pais (se for menor de idade) para entregar devidamente
          preenchido na próxima reunião.
        </p>

        <p>
          Após preencher o formulário de inscrição, entraremos em contato com
          você para liberar o seu acesso (login e senha) à plataforma, onde
          contará com um pequeno curso com vídeos e questionários sobre as
          diversas funções do acampamento.
        </p>

        <p>
          Será liberado também um vídeo de resumo a cada reunião que o candidato
          deverá assistir para liberar um questionário com algumas perguntas
          sobre o que foi debatido na reunião. Todos os candidatos DEVEM
          assistir os vídeos e responder todos os questionários para que seu
          nome seja cogitado para a equipe do acampamento.
        </p>

        <p>Dito isto, bons estudos!</p>
      </S.BoxRight>
    </S.Container>
  );
};
