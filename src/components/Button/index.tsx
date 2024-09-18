import { forwardRef, ReactNode } from "react";
import * as S from "./styles";

import { ButtonHTMLAttributes } from "react";
import { IconType } from "react-icons";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  primary?: boolean;
  icon?: IconType;
  iconPosition?: "before" | "after";
  iconSize?: string;
  iconColor?: string;

  width?: string;
  height?: string;
  fontSize?: string;
  radius?: string;

  color?: string;
  bgColor?: string;
}

export const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  (
    {
      children,
      primary = true,
      icon: Icon,
      iconPosition = "before",
      iconSize,
      iconColor,
      radius,
      fontSize,
      width,
      height,
      color,
      bgColor,
      ...rest
    },
    ref
  ) => {
    return (
      <S.SButton
        primary={primary}
        iconPosition={iconPosition}
        iconSize={iconSize}
        iconColor={iconColor}
        width={width}
        height={height}
        fontSize={fontSize}
        radius={radius}
        color={color}
        bgColor={bgColor}
        ref={ref}
        {...rest}
      >
        {Icon && <Icon />}
        {children}
      </S.SButton>
    );
  }
);

{
  /*
utilização do botão

<Button
  primary={false} // opcional
  icon={Fa42Group} // opcional
  iconPosition="after" // opcional
  iconSize="30px" // opcional
  radius = "0.5rem" // opcional
  fontSize = "12pt" // opcional
  width = "5rem" // opcional
  height = "2.5rem" // opcional
  color = "#ffffff" // opcional
  bgColor ="#313131" // opcional
>
  Text // obrigatório
</Button>
*/
}
