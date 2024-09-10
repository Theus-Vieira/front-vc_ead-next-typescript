import * as S from "./styles";
import * as T from "@/types";
import { useState } from "react";

interface IYouTubePlayerProps {
  video: T.IVideo;
  isViewed: boolean;
  callbackFinish: () => void;
}

export const YouTubePlayer = ({ video, isViewed }: IYouTubePlayerProps) => {
  const [player, setPlayer] = useState<any>(null);
  const [completed, setCompleted] = useState<boolean>(false);
  const [questionnaireLinkVisible, setQuestionnaireLinkVisible] =
    useState<boolean>(false);

  const handleReady = (event: any) => {
    setPlayer(event.target);
  };

  const handleStateChange = (event: any) => {
    if (event.data === 0 && player) {
      setCompleted(true);
      setQuestionnaireLinkVisible(true);
    }
  };

  const opts = {
    playerVars: {
      autoplay: 0,
      controls: isViewed ? 1 : 0,
      modestbranding: 1,
      showinfo: 0,
      disablekb: 1,
      fs: 0,
    },
  };

  return (
    <S.Container>
      <S.SYouTube
        videoId={video.videoId}
        opts={opts}
        onReady={handleReady}
        onStateChange={handleStateChange}
      />

      {!completed && (
        <p>Assista ao vídeo completamente para acessar o questionário.</p>
      )}

      {questionnaireLinkVisible && (
        <>
          <h2>Parabéns! Você assistiu ao vídeo completamente.</h2>
          <a href={video.formLink} target="_blank" rel="noopener noreferrer">
            Acesse o questionário
          </a>
        </>
      )}
    </S.Container>
  );
};
