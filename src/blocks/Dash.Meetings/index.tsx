import * as S from "./styles";
import { YouTubePlayer } from "@/components";
import { useUser } from "@/providers";
import * as Control from "@/controllers";
import * as T from "@/types";
import { useState } from "react";

interface IDashMeetingsProps {
  content: "HOME" | "MANAGE" | "MEETINGS" | "PROCEDURES" | "DOCS";
  changeContent: (
    value: "HOME" | "MANAGE" | "MEETINGS" | "PROCEDURES" | "DOCS"
  ) => void;
}

export const DashMeetings = ({
  changeContent,
  content,
}: IDashMeetingsProps) => {
  const {
    user: { meeting_level },
  } = useUser();

  const [video, setVideo] = useState<T.IVideo>(Control.meetings[meeting_level]);

  return (
    <S.Container>
      <div className="box-title">
        <h2>Reuniões</h2>
        <span>
          Aqui você assistirá os vídeos de resumo das reuniões e responderá os
          questionários referentes a cada vídeo
        </span>
      </div>

      <div className="box-video">
        <YouTubePlayer videoId={video.videoId} formLink={video.formLink} />
      </div>
    </S.Container>
  );
};
