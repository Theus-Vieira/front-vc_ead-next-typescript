import { useUser } from "@/providers";
import * as S from "./styles";
import { GrTask, GrWorkshop } from "react-icons/gr";
import { SlDocs } from "react-icons/sl";

interface IDashHomeProps {
  content: "HOME" | "MANAGE" | "MEETINGS" | "PROCEDURES" | "DOCS";
  changeContent: (
    value: "HOME" | "MANAGE" | "MEETINGS" | "PROCEDURES" | "DOCS"
  ) => void;
}

export const DashHome = ({ changeContent, content }: IDashHomeProps) => {
  const { user, info } = useUser();

  return (
    <S.Container>
      <h2>Olá, {user.username}!</h2>
      <p>
        Bem vindo(a)! Está é a área do equipante e é aqui onde você aprenderá ou
        revisará o seu aprendizado sobre o Acampamento Voluntários de Cristo.
      </p>
      <p>
        Primeiramente, certifique-se de que toda a sua documentação foi
        preenchida e entregue à liderança do acampamento, você poderá baixar os
        arquivos na aba de documentos pelo menu ao lado ou pelos botões abaixo.
        Isso é muito importante pois a sua candidatura à equipe só será levada
        em consideração se a documentação estiver correta.
      </p>
      <p>
        Depois, deverá assistir a todas as reuniões da equipe de forma
        presencial, que será divulgada pelo whatsapp no grupo da equipe.
      </p>
      <p>
        Em seguida, assistirá aqui nesta plataforma os vídeos de resumo da
        reunião e procedimentos do acampamento, respondendo aos questionários
        referentes a cada vídeo. Isso garantirá que você esteja preparado de
        forma teórica para executar todos os procedimentos dentro do acamp.
      </p>

      <S.BoxCards>
        <S.Card onClick={() => changeContent("MEETINGS")}>
          <GrWorkshop />
          <h3>Reuniões</h3>
          <strong>{info.meetingsInfo}</strong>
        </S.Card>

        <S.Card onClick={() => changeContent("PROCEDURES")}>
          <GrTask />
          <h3>Procedimentos</h3>
          <strong>{info.proceduresInfo}</strong>
        </S.Card>

        <S.Card onClick={() => changeContent("DOCS")}>
          <SlDocs />
          <h3>Documentos</h3>
        </S.Card>
      </S.BoxCards>
    </S.Container>
  );
};
