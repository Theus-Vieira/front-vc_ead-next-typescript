"use client";

import * as S from "./styles";
import * as B from "@/blocks";
import * as C from "@/components";

export default function AboutUsPage() {
  const videoAboutUs = {
    id: 0,
    videoId: "HL7ET6lfq6I",
    videoName: "",
    videoLink: "https://www.youtube.com/watch?v=HL7ET6lfq6I",
    formLink: "",
  };

  return (
    <>
      <B.Header />
      <S.Container>
        <h2>Conheça a nossa história</h2>

        <p>
          Esta página está em construção e logo logo você poderá conhecer mais
          da história incrível que tem este ministério de acampamento que
          encanta a todos os que com ele se envolvem.
        </p>

        {/* <C.YouTubePlayer
          callbackFinish={() => {}}
          isViewed={false}
          video={videoAboutUs}
          classname="video-about-us"
        /> */}
      </S.Container>
      <S.Footer>
        <h2>© 2024 Matheus Vieira</h2>
      </S.Footer>
    </>
  );
}
