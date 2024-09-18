"use client";

import * as S from "./styles";
import { forwardRef, useState, useEffect } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import InputMask from "react-input-mask";
import { InputHTMLAttributes } from "react";
import { IconType } from "react-icons";
import { Modal } from "../modal";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  type?: string;
  mask?: string;

  icon?: IconType;
  iconSize?: string;
  iconAction?: () => void;
  iconPosition?: "before" | "after";

  width?: string;
  height?: string;

  radius?: string;
  borderColor?: string;
  color?: string;
}

export const Input = forwardRef<HTMLInputElement, IInputProps>(
  (
    {
      label,
      error,
      type,
      mask,
      icon: Icon,
      iconSize,
      iconAction,
      iconPosition = "before",
      width,
      height,
      radius,
      borderColor,
      color,
      ...rest
    },
    ref
  ) => {
    const [isPassword, setIsPassword] = useState<boolean>(true);
    const [isMessageOpen, setIsMessageOpen] = useState<boolean>(false);

    useEffect(() => {
      type === "password" ? setIsPassword(true) : setIsPassword(false);
    }, [type]);

    return (
      <>
        {isMessageOpen && (
          <Modal onAction={() => setIsMessageOpen(false)}>{error}</Modal>
        )}
        <S.Container width={width} height={height} color={color}>
          <div>
            {label}{" "}
            {!!error && (
              <span
                title={error}
                onClick={() => {
                  setIsMessageOpen(true);
                }}
              >
                {" "}
                - {error}
              </span>
            )}
          </div>
          <S.InputContainer
            isErrored={!!error}
            borderColor={borderColor}
            radius={radius}
            color={color}
            iconSize={iconSize}
            iconAction={iconAction}
          >
            {Icon && iconPosition === "before" && <Icon onClick={iconAction} />}
            {mask ? (
              <InputMask type={type} mask={mask} {...rest} inputRef={ref} />
            ) : type === "password" ? (
              <>
                <input
                  type={isPassword ? "password" : "text"}
                  {...rest}
                  ref={ref}
                />
                {isPassword && (
                  <FiEye
                    onClick={(_) => setIsPassword(!isPassword)}
                    className="password_eye"
                  />
                )}
                {!isPassword && (
                  <FiEyeOff
                    onClick={(_) => setIsPassword(!isPassword)}
                    className="password_eye"
                  />
                )}
              </>
            ) : (
              <input type={type} {...rest} ref={ref} />
            )}
            {Icon && iconPosition === "after" && <Icon onClick={iconAction} />}
          </S.InputContainer>
        </S.Container>
      </>
    );
  }
);

/*
utilização do input

<C.Input
  label="teste" // opcional
  error="teste" // opcional
  type="text" // opcional
  mask="999.999.999-99" // opcional
  icon={FaAmbulance} // opcional
  iconSize="12pt" // opcional
  iconAction={() => {}} // opcional
  iconPosition="before" // opcional
  width="10rem" // opcional
  height="2.5rem" // opcional
  radius="0.5rem" // opcional
  borderColor="#000000" // opcional
  color="grey" // opcional
/>
*/
