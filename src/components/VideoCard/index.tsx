import * as T from "@/types";
import * as S from "./styles";
import { useUser } from "@/providers";
import { useEffect, useState } from "react";
import { FiFileText, FiPlay } from "react-icons/fi";
import Link from "next/link";

interface IVideoCardProps {
  video: T.IVideo;
  type: "MEETING" | "PROCEDURE";
  onActionPlay: () => void;
}

export const VideoCard = ({ type, video, onActionPlay }: IVideoCardProps) => {
  const [isComplete, setIsComplete] = useState<boolean>(false);

  const { user } = useUser();

  useEffect(() => {
    if (type === "MEETING") {
      if (user.meeting_level > video.id || user.is_adm) {
        setIsComplete(true);
      }
    }

    if (type === "PROCEDURE") {
      if (user.procedure_level > video.id || user.is_adm) {
        setIsComplete(true);
      }
    }
  }, [user]);

  return (
    <S.Container>
      <div className="title">
        <h3 title={video.videoName}>{video.videoName}</h3>
      </div>
      <div className="form">
        <Link
          href={video.formLink}
          target="_blank"
          className={isComplete ? "" : "disabled"}
          title="Acessar questionário"
        >
          <FiFileText />
        </Link>
      </div>
      <div className="play">
        <FiPlay onClick={() => onActionPlay()} title="Assistir vídeo" />
      </div>
    </S.Container>
  );
};
