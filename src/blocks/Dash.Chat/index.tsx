import * as S from "./styles";
import * as C from "@/components";
import { useUser } from "@/providers";
import { useState } from "react";
import { IoSend } from "react-icons/io5";
import { toast } from "react-toastify";

export const DashChat = () => {
  const { updateUser, user } = useUser();

  const [message, setMessage] = useState<string>("");
  const [isOnline, setIsOnline] = useState<boolean>(user.is_chat_online);

  const toggleIsOnline = async (value: string) => {
    if (value === "ON") {
      !isOnline && setIsOnline(true);
      await updateUser({ is_chat_online: isOnline }, user.objectId, false);
      toast.success("Você foi conectado!");
    }

    if (value === "OFF") {
      isOnline && setIsOnline(false);
      await updateUser({ is_chat_online: isOnline }, user.objectId, false);
      toast.success("Você foi desconectado!");
    }
  };

  const sendMessage = () => {
    console.log(message);
    setMessage("");
  };

  return (
    <S.Container>
      <S.MessagesBox>
        {!isOnline && <h3>Para acessar a sala, fique online.</h3>}
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
