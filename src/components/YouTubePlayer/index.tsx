import * as S from "./styles";
import * as T from "@/types";
import { useState } from "react";

interface IYouTubePlayerProps {
  video: T.IVideo;
  isViewed: boolean;
  callbackFinish: (() => void) | (() => Promise<void>);
  classname?: string;
}

export const YouTubePlayer = ({
  video,
  isViewed,
  callbackFinish,
  classname,
}: IYouTubePlayerProps) => {
  const [player, setPlayer] = useState<any>(null);

  const handleReady = (event: any) => {
    setPlayer(event.target);
  };

  const handleStateChange = (event: any) => {
    if (event.data === 0 && player) {
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
      <h2>{video.videoName}</h2>
      <S.SYouTube
        className={classname}
        videoId={video.videoId}
        opts={opts}
        onReady={handleReady}
        onStateChange={handleStateChange}
      />
    </S.Container>
  );
};
