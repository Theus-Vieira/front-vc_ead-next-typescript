import * as S from "./styles";
import { useState } from "react";
import YouTube from "react-youtube";

interface IYouTubePlayerProps {
  videoId: string;
  formLink: string;
}

export const YouTubePlayer = ({ videoId, formLink }: IYouTubePlayerProps) => {
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
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 0,
      controls: 0,
      modestbranding: 1,
      showinfo: 0,
      disablekb: 1,
      fs: 0,
    },
  };

  return (
    <S.Container>
      <YouTube
        videoId={videoId}
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
          <a href={formLink} target="_blank" rel="noopener noreferrer">
            Acesse o questionário
          </a>
        </>
      )}
    </S.Container>
  );
};
