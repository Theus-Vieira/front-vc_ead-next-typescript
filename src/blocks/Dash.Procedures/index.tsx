import { useUser } from "@/providers";
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import * as control from "@/controllers";
import * as T from "@/types";
import * as C from "@/components";
import * as S from "./styles";

export const DashProcedures = () => {
  const [video, setVideo] = useState<T.IVideo | null>(null);
  const [isViewed, setIsViewed] = useState<boolean>(false);
  const { user, updateUser } = useUser();

  const callbackFinish = async () => {
    if (user.is_adm || user.procedure_level === control.procedures.length) {
      return;
    }

    await updateUser(
      { procedure_level: user.procedure_level + 1 },
      user.objectId,
      false
    );
  };

  useEffect(() => {
    if (!video) {
      setIsViewed(false);
    } else if (user.is_adm || user.procedure_level > video.id) {
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
          <h2>Procedimentos</h2>
          <span>
            Aqui você assistirá os vídeos de procedimentos e áreas do
            acampamento e responderá os questionários referentes a cada vídeo
          </span>
        </div>

        <div className="box-video">
          {control.procedures.map((vd) => {
            if (user.procedure_level >= vd.id || user.is_adm) {
              return (
                <C.VideoCard
                  type="PROCEDURE"
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
