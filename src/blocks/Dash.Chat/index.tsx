import * as S from "./styles";
import * as C from "@/components";
import { useUser } from "@/providers";
import { useEffect, useRef, useState } from "react";
import { IoSend } from "react-icons/io5";
import { toast } from "react-toastify";
import { v4 as uuid } from "uuid";
import { IMessage } from "@/types/message";
import { getDateHour } from "@/utils/date";

export const DashChat = () => {
  const { updateUser, user } = useUser();

  const containerRef = useRef<HTMLDivElement>(null);

  const [message, setMessage] = useState<string>("");
  const [isOnline, setIsOnline] = useState<boolean>(user.is_chat_online);
  const [messages, setMessages] = useState<IMessage[]>([
    {
      id: "12345",
      content: [
        "Atenção,",
        "Esta é ainda outra mensagem de teste!",
        "de sistema",
      ],
      type: "system",
      info: getDateHour(),
    },
    {
      id: "123",
      content: ["Atenção,", "Esta é uma mensagem de teste!", "Usuário logado"],
      type: "text",
      info: getDateHour(),
      user: user,
    },
    {
      id: "123.5",
      content: ["Atenção,", "Esta é uma mensagem de teste!", "Usuário logado"],
      type: "text",
      info: getDateHour(),
      user: user,
    },
    {
      id: "1234",
      content: ["Atenção,", "Esta é outra mensagem de teste!", "Outro usuário"],
      type: "text",
      info: getDateHour(),
      user: { ...user, username: "Outro.usuário" },
    },
    {
      id: "123.5",
      content: ["Atenção,", "Esta é uma mensagem de teste!", "Usuário logado"],
      type: "text",
      info: getDateHour(),
      user: user,
    },
    {
      id: "1234",
      content: ["Atenção,", "Esta é outra mensagem de teste!", "Outro usuário"],
      type: "text",
      info: getDateHour(),
      user: { ...user, username: "Outro.usuário" },
    },
    {
      id: "123.5",
      content: ["Atenção,", "Esta é uma mensagem de teste!", "Usuário logado"],
      type: "text",
      info: getDateHour(),
      user: user,
    },
    {
      id: "1234",
      content: ["Atenção,", "Esta é outra mensagem de teste!", "Outro usuário"],
      type: "text",
      info: getDateHour(),
      user: { ...user, username: "Outro.usuário" },
    },
    {
      id: "123.5",
      content: ["Atenção,", "Esta é uma mensagem de teste!", "Usuário logado"],
      type: "text",
      info: getDateHour(),
      user: user,
    },
    {
      id: "1234",
      content: ["Atenção,", "Esta é outra mensagem de teste!", "Outro usuário"],
      type: "text",
      info: getDateHour(),
      user: { ...user, username: "Outro.usuário" },
    },
    {
      id: "123.5",
      content: ["Atenção,", "Esta é uma mensagem de teste!", "Usuário logado"],
      type: "text",
      info: getDateHour(),
      user: user,
    },
    {
      id: "1234",
      content: ["Atenção,", "Esta é outra mensagem de teste!", "Outro usuário"],
      type: "text",
      info: getDateHour(),
      user: { ...user, username: "Outro.usuário" },
    },
    {
      id: "123.5",
      content: ["Atenção,", "Esta é uma mensagem de teste!", "Usuário logado"],
      type: "text",
      info: getDateHour(),
      user: user,
    },
  ]);

  const toggleIsOnline = async (value: string) => {
    if (value === "ON") {
      !isOnline && setIsOnline(true);
      await updateUser({ is_chat_online: true }, user.objectId, false);
      toast.success("Você foi conectado!");
    }

    if (value === "OFF") {
      isOnline && setIsOnline(false);
      await updateUser({ is_chat_online: false }, user.objectId, false);
      toast.success("Você foi desconectado!");
    }
  };

  const sendMessage = () => {
    const newMessage: IMessage = {
      id: uuid(),
      content: message.split(/\r?\n/),
      info: getDateHour(),
      type: "text",
      user: user,
    };

    setMessages([...messages, newMessage]);

    setMessage("");
  };

  useEffect(() => {
    if (containerRef.current && isOnline) {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight + 1000,
        behavior: "smooth",
      });
    }
  }, [messages, isOnline]);

  return (
    <S.Container>
      <S.MessagesBox ref={containerRef}>
        {!isOnline ? (
          <h3>Para acessar a sala, fique online.</h3>
        ) : (
          messages.map((msg, i, arr) => {
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
          })
        )}
      </S.MessagesBox>

      <S.InputContainer>
        <div className="action-box">
          <C.Select
            label=""
            activeOption={isOnline ? "ON" : "OFF"}
            options={["ON", "OFF"]}
            setActiveOption={toggleIsOnline}
          />
        </div>

        <div className="input-box">
          <C.TextArea
            icon={IoSend}
            IconAfter
            placeholder="Mensagem..."
            value={message}
            onChange={(e) => isOnline && setMessage(e.target.value)}
            iconAction={sendMessage}
          />
        </div>
      </S.InputContainer>
    </S.Container>
  );
};
