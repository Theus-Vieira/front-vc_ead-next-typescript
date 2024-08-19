"use client";
import { useState, useRef } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import * as S from "./styles";
import { useDarkMode } from "@/providers";

export const DarkModeButton = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [isActive, setIsActive] = useState<boolean>(isDarkMode);
  const sound = "/sounds/click.wav";

  const audioRef = useRef<HTMLAudioElement>(null);

  const playSound = async () => {
    if (audioRef.current) {
      await audioRef.current.play();
    }
  };

  return (
    <>
      <S.Button
        onClick={async () => {
          setIsActive(!isActive);
          toggleDarkMode();
          await playSound();
        }}
        isActive={isActive}
      >
        <div>
          {isActive ? (
            <FaMoon className="fadeindark" />
          ) : (
            <FaSun className="fadeinlight" />
          )}
        </div>
      </S.Button>
      <audio ref={audioRef}>
        <source src={sound} type="audio/wav" />
        seu navegador não suporta áudio
      </audio>
    </>
  );
};
