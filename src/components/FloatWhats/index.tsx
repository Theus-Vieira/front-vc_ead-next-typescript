import { FaWhatsapp } from "react-icons/fa";
import * as S from "./styles";

export const FloatWhats = () => {
  const openWhatsLinkDev = () => {
    const whatsLinkDev =
      "https://wa.me/5581996336588?text=Olá,%20vim%20da%20plataforma%20EAD%20do%20Acampamento%20VC.";

    window.open(whatsLinkDev, "blank");
  };

  return (
    <S.Container onClick={openWhatsLinkDev}>
      <S.StyledButton>
        <FaWhatsapp />
      </S.StyledButton>

      <S.Baloon>
        <p>Fale com o Dev!</p>
      </S.Baloon>
    </S.Container>
  );
};
