import { useUser } from "@/providers";
import * as S from "./styles";
import { GrTask, GrWorkshop } from "react-icons/gr";
import { SlDocs } from "react-icons/sl";
import { FiUser } from "react-icons/fi";
import * as C from "@/components";

interface IDashHomeProps {
  changeContent: (
    value: "HOME" | "MANAGE" | "MEETINGS" | "PROCEDURES" | "DOCS" | "PROFILE"
  ) => void;
}

export const DashHome = ({ changeContent }: IDashHomeProps) => {
  const { user, info } = useUser();

  const videoWelcome = {
    id: 0,
    videoId: "HL7ET6lfq6I",
    videoName: "",
    videoLink: "https://www.youtube.com/watch?v=HL7ET6lfq6I",
    formLink: "",
  };

  const isProfileIncomplete = user.name === "N/A";

  const isDocsIncomplete =
    !user.is_adm &&
    (!user.is_filled_form ||
      !user.parents_authorization ||
      !user.pastoral_letter);

  return (
    <S.Container>
      <C.FloatWhats />

      <h2>Olá, {user.username}!</h2>
      <C.YouTubePlayer
        classname="welcome-video"
        video={videoWelcome}
        isViewed={true}
        callbackFinish={() => {}}
      />
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

        <S.Card
          onClick={() => changeContent("DOCS")}
          isIncomplete={isDocsIncomplete}
          title={isDocsIncomplete ? "Há documentos pendentes" : ""}
        >
          <SlDocs />
          <h3>Documentos</h3>
        </S.Card>

        <S.Card
          onClick={() => changeContent("PROFILE")}
          isIncomplete={isProfileIncomplete}
          title={isProfileIncomplete ? "Complete seu perfil" : ""}
        >
          <FiUser />
          <h3>Perfil</h3>
        </S.Card>
      </S.BoxCards>
    </S.Container>
  );
};
