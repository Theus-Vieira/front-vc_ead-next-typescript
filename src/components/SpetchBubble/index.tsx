import { IMessage } from "@/types/message";
import { useDarkMode, useUser } from "@/providers";
import * as S from "./styles";
import { v4 as uuid } from "uuid";

export interface ISpetchBubbleProps {
  message: IMessage;
  position: "left" | "center" | "right";
  notch?: boolean;
  isSameUser: boolean;
}

export const SpetchBubble = ({
  message,
  position,
  notch = true,
  isSameUser,
}: ISpetchBubbleProps) => {
  const { user } = useUser();
  const { isDarkMode } = useDarkMode();

  const isLoggedUser = message.user?.username === user.username;

  isSameUser && (notch = false);

  return (
    <S.Container position={position} notch={notch} isSameUser={isSameUser}>
      {message.type !== "system" ? (
        <S.Bubble notch={notch} position={position} className="bubble">
          <S.BoxTop isLoggedUser={isLoggedUser}>
            {notch && position === "left" && (
              <div className="box_avatar">
                {/* <img src={message.user?.image} alt={message.user?.name} /> */}
                <img
                  src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
                  alt={message.user?.username}
                />
              </div>
            )}

            <div className="box_content">
              {!isLoggedUser && !isSameUser && (
                <h4
                  style={{
                    color: isDarkMode ? "yellow" : "green",
                  }}
                >
                  {message.user?.username}
                </h4>
              )}
              {message.content.map((txt) => (
                <p key={uuid()}>{txt}</p>
              ))}
            </div>
          </S.BoxTop>
          <S.BoxBottom position={position}>
            <small>{message.info.hour}</small>
          </S.BoxBottom>
        </S.Bubble>
      ) : (
        <S.BoxSystem>
          {message.content.map((txt) => (
            <small key={uuid()}>{txt}</small>
          ))}
        </S.BoxSystem>
      )}
    </S.Container>
  );
};
