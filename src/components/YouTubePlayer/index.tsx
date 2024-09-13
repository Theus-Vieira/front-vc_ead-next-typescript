import * as S from "./styles";
import * as T from "@/types";
import { useState } from "react";

interface IYouTubePlayerProps {
  video: T.IVideo;
  isViewed: boolean;
  callbackFinish: (() => void) | (() => Promise<void>);
}

export const YouTubePlayer = ({
  video,
  isViewed,
  callbackFinish,
}: IYouTubePlayerProps) => {
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
      callbackFinish();
    }
  };

  const opts = {
    playerVars: {
      autoplay: 0,
      controls: isViewed ? 1 : 0,
      modestbranding: 1,
      showinfo: 0,
      disablekb: 1,
      fs: 1,
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
    </S.Container>
  );
};
