import * as S from "./styles";
import { useUser } from "@/providers";
import * as control from "@/controllers";
import * as T from "@/types";
import * as C from "@/components";
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

export const DashMeetings = () => {
  const [video, setVideo] = useState<T.IVideo | null>(null);
  const [isViewed, setIsViewed] = useState<boolean>(false);
  const { user, updateUser } = useUser();

  const callbackFinish = async () => {
    if (user.is_adm || user.meeting_level === control.meetings.length) {
      return;
    }

    await updateUser(
      { meeting_level: user.meeting_level + 1 },
      user.objectId,
      false
    );
  };

  useEffect(() => {
    if (!video) {
      setIsViewed(false);
    } else if (user.is_adm || user.meeting_level > video.id) {
      setIsViewed(true);
    }
  }, [video]);

  return (
    <>
      {video && (
        <C.Modal
          onAction={() => {
            setVideo(null);
          }}
        >
          <C.YouTubePlayer
            video={video}
            isViewed={isViewed}
            callbackFinish={callbackFinish}
          />
        </C.Modal>
      )}

      <S.Container>
        <div className="box-title">
          <h2>Reuniões</h2>
          <span>
            Aqui você assistirá os vídeos de resumo das reuniões e responderá os
            questionários referentes a cada vídeo
          </span>
        </div>

        <div className="box-video">
          {control.meetings.map((vd) => {
            if (user.meeting_level >= vd.id || user.is_adm) {
              return (
                <C.VideoCard
                  type="MEETING"
                  video={vd}
                  key={uuid()}
                  onActionPlay={() => setVideo(vd)}
                />
              );
            }
          })}
        </div>
      </S.Container>
    </>
  );
};
