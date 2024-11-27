import * as S from "./styles";
import * as C from "@/components";
import { useChat, useUser } from "@/providers";
import { IUser } from "@/types";
import { useEffect, useRef, useState } from "react";
import { FaUserSlash } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import { MdOnlinePrediction } from "react-icons/md";
import { v4 as uuid } from "uuid";

export const DashChat = () => {
  const [isUsersOnlineOpen, setIsUsersOnlineOpen] = useState<boolean>(false);

  const { user, updateUser } = useUser();
  const {
    usersOnline,
    sendMessage,
    messages,
    socket,
    addMessage,
    setUsersOnline,
  } = useChat();

  const toggleIsUsersOnlineOpen = () => {
    socket?.emit("getUsers");
    setIsUsersOnlineOpen(!isUsersOnlineOpen);
  };

  const sound = "/sounds/chat_notification.wav";

  const audioRef = useRef<HTMLAudioElement>(null);

  const playSound = async () => {
    if (audioRef.current) {
      await audioRef.current.play();
    }
  };

  const containerRef = useRef<HTMLDivElement>(null);

  const [message, setMessage] = useState<string>("");

  const handleSubmit = () => {
    if (message.trim() !== "") {
      sendMessage(message.split(/\r?\n/));
      setMessage("");
    }
  };

  const banUser = async (userToBan: IUser) => {
    socket?.emit("users", { user: userToBan, type: "ban" });

    await updateUser({ is_ban: true }, userToBan.objectId, true);
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight + 1000,
        behavior: "smooth",
      });
    }
  }, [messages]);

  useEffect(() => {
    socket?.on("chat", (msg) => {
      playSound();
      addMessage(msg);
    });

    socket?.on("users", (usrs) => {
      setUsersOnline(usrs);
    });

    return () => {
      socket?.off("chat");
      socket?.off("users");
    };
  }, [socket]);

  return (
    <>
      {isUsersOnlineOpen && (
        <C.Modal onAction={toggleIsUsersOnlineOpen}>
          <S.UsersOnlineBox>
            <h3>Usuários Online</h3>
            <ul>
              {usersOnline.map((usr) => (
                <li className={usr.is_adm ? "adm" : ""}>
                  <span>{usr.username}</span>
                  {user.is_adm && <FaUserSlash onClick={() => banUser(usr)} />}
                </li>
              ))}
            </ul>
          </S.UsersOnlineBox>
        </C.Modal>
      )}

      <S.Container>
        {user.is_ban ? (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "0.5rem",
              textAlign: "center",
            }}
          >
            <h3
              style={{
                fontSize: "25pt",
                marginBottom: "1rem",
              }}
            >
              Chat Desabilitado!
            </h3>
            <p
              style={{
                fontSize: "10pt",
              }}
            >
              Por alguma razão você foi banido do chat, seja por mal
              comportamento para com os irmãos ou outro motivo.
            </p>
            <p
              style={{
                fontSize: "10pt",
              }}
            >
              Caso você saiba o motivo, entre em contato o mais rápido com o
              líder da equipe e tome as medidas necessárias para esclarecer e
              finalizar esse impasse
            </p>
            <p
              style={{
                fontSize: "10pt",
              }}
            >
              Lembre-se: O respeito e amor ao próximo DEVEM servir de guia para
              todas as áreas da nossa vida
            </p>
          </div>
        ) : (
          <>
            <MdOnlinePrediction
              title="Usuários online"
              onClick={() => {
                socket?.emit("users", { user, type: "get" });
                toggleIsUsersOnlineOpen();
              }}
            />

            <S.MessagesBox ref={containerRef}>
              {messages.map((msg, i, arr) => {
                let isSameUser = false;

                if (i > 0 && arr[i - 1].user?.username === msg.user?.username) {
                  isSameUser = true;
                }

                return (
                  <C.SpetchBubble
                    isSameUser={isSameUser}
                    message={msg}
                    position={
                      msg.type === "system"
                        ? "center"
                        : msg.user?.username === user.username
                        ? "right"
                        : "left"
                    }
                    notch
                    key={uuid()}
                  />
                );
              })}
            </S.MessagesBox>

            <S.InputContainer>
              <div className="input-box">
                <C.TextArea
                  icon={IoSend}
                  IconAfter
                  placeholder="Mensagem..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  iconAction={handleSubmit}
                />
              </div>
            </S.InputContainer>
          </>
        )}
      </S.Container>

      <audio ref={audioRef}>
        <source src={sound} type="audio/wav" />
        seu navegador não suporta áudio
      </audio>
    </>
  );
};
